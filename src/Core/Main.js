import React, { useState, useEffect } from "react";
import CollapsibleCard from "../Components/Cards/CollapsibleCard/CollapsibleCard";
import Footer from "../Components/Footer/Footer";
import Headers from "../Components/Header/Header";
import SearchBar from "../Components/SearchBar/SearchBar";
import Slider from "../Components/Sllider/Slider";
import FoodCategoryList from "./Helper/FoodCategory";
import currentDay from "./Helper/GetDate";

export default function Main() {
  const [FoodList, setFoodList] = useState(FoodCategoryList);
  const [searchVal, setSearchVal] = useState(false);
  const [sliderChecked, setSliderChecked] = useState(0);
  const [catChecked, setCatChecked] = useState(false);

  console.log(currentDay.currentDay);

  // if (currentDay.currentDay < 6 || currentDay.currentDay > 0) {
  //   setFoodList(FoodList.splice(0, 5));
  // }

  useEffect(() => {
    if (sliderChecked === 2) {
      window.location.reload();
    }
  }, [sliderChecked]);

  const onSliderCheck = (categoryName, isChecked) => {
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
  };

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
      setFoodList(searchArray);
      setSearchVal(true);
    }
  }

  return (
    <div className="menu-page">
      <Headers></Headers>
      <div className="br"></div>
      <div className="search-bar">
        <Slider sliderChecked={onSliderCheck} foodCategory="Veg"></Slider>
        <Slider sliderChecked={onSliderCheck} foodCategory="Non Veg"></Slider>
        {/* <SearchBar
          placeholder="search..."
          searchValue={HandleSearch}
        ></SearchBar> */}
      </div>
      {FoodList.map((foodItem, index) => {
        return foodCat(foodItem.name, foodItem.options, index);
      })}
      <Footer></Footer>
    </div>
  );
}
