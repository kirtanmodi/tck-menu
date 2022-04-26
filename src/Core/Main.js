import React, { useState, useEffect } from "react";
import CollapsibleCard from "../Components/Cards/CollapsibleCard/CollapsibleCard";
import Footer from "../Components/Footer/Footer";
import Headers from "../Components/Header/Header";
import SearchBar from "../Components/SearchBar/SearchBar";
import Slider from "../Components/Sllider/Slider";
import FoodCategoryList from "./Helper/FoodCategory";
import FloatingButton from "../Components/FloatingButton/FloatingButton";

export default function Main() {
  // main food list from helper
  const [FoodList, setFoodList] = useState(FoodCategoryList);
  // search array filtered as per search value
  const [searchArray, setSearchArray] = useState([]);

  // if something is being searched by the user - state
  const [searchVal, setSearchVal] = useState(false);

  // for the use-effect function
  const [sliderChecked, setSliderChecked] = useState(0);

  // if any category is checked - state
  const [catChecked, setCatChecked] = useState(false);

  // when both filters are checked together at the same time
  useEffect(() => {
    if (sliderChecked === 2) {
      window.location.reload();
    }
  }, [sliderChecked]);

  // control the veg - non veg sliders
  function onSliderCheck(categoryName, isChecked) {
    if (isChecked === false) {
      window.location.reload();
      setCatChecked(false);
    }

    if (isChecked && categoryName === "Non Veg") {
      setSliderChecked(sliderChecked + 1);
      setCatChecked(true);
      const nonVegList = FoodList.map((item) => ({
        ...item,
        options: item.options
          .map((child) => ({
            ...child,
            category: child.category.filter(
              (i) => i !== "T" && i !== "V" && i !== "CC" && i !== "Drink"
            ),
            price: Object.entries(child.price).filter(
              (i) =>
                i[0] !== "T" &&
                i[0] !== "V" &&
                i[0] !== "CC" &&
                i[0] !== "Drink"
            ),
          }))
          .filter((child) => child.category.length > 0),
      }));

      setFoodList(nonVegList);
    } else if (isChecked && categoryName === "Veg") {
      setSliderChecked(sliderChecked + 1);
      setCatChecked(true);
      const vegList = FoodList.map((item) => ({
        ...item,
        options: item.options
          .map((child) => ({
            ...child,
            category: child.category.filter(
              (i) =>
                i !== "C" &&
                i !== "F" &&
                i !== "P" &&
                i !== "E" &&
                i !== "M" &&
                i !== "B" &&
                i !== "Drink"
            ),
            price: Object.entries(child.price).filter(
              (i) =>
                i[0] !== "C" &&
                i[0] !== "F" &&
                i[0] !== "P" &&
                i[0] !== "E" &&
                i[0] !== "M" &&
                i[0] !== "B" &&
                i[0] !== "Drink"
            ),
          }))
          .filter((child) => child.category.length > 0),
      }));

      setFoodList(vegList);
    }
  }

  // function to display the food category on homepage
  function foodCat(name, details, index) {
    return (
      <CollapsibleCard
        key={index}
        foodGenre={name}
        foodDetails={details}
        isSearchOn={searchVal}
        catChecked={catChecked}
      ></CollapsibleCard>
    );
  }

  // to handle search terms by the user
  function HandleSearch(searchValue) {
    const searchArray = FoodList.map((child) => ({
      ...child,
      options: child.options.filter(
        (i) =>
          i.item.toLowerCase().includes(searchValue.toLowerCase()) ||
          i.description.toLowerCase().includes(searchValue.toLowerCase())
      ),
    })).filter((n) => n.options.length);

    if (searchValue === "") {
      window.location.reload();
    } else if (searchValue.length > 0) {
      setSearchArray(searchArray);
      setSearchVal(true);
    }
  }

  return (
    <div className="menu-page">
      <Headers></Headers>
      <div className="br"></div>
      <div className="search-bar">
        <Slider
          searchVal={searchVal}
          sliderChecked={onSliderCheck}
          foodCategory="Veg"
        ></Slider>
        <Slider
          searchVal={searchVal}
          sliderChecked={onSliderCheck}
          foodCategory="Non Veg"
        ></Slider>
        <SearchBar
          placeholder="search..."
          searchValue={HandleSearch}
        ></SearchBar>
      </div>
      {searchVal
        ? searchArray.map((foodItem, index) => {
            return foodCat(foodItem.name, foodItem.options, index);
          })
        : FoodList.map((foodItem, index) => {
            return foodCat(foodItem.name, foodItem.options, index);
          })}
      <FloatingButton allFoodList={FoodList}></FloatingButton>
      <Footer></Footer>
    </div>
  );
}
