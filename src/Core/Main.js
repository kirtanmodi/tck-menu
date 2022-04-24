import React, { useState, useEffect } from "react";
import CollapsibleCard from "../Components/Cards/CollapsibleCard/CollapsibleCard";
import Footer from "../Components/Footer/Footer";
import Headers from "../Components/Header/Header";
import SearchBar from "../Components/SearchBar/SearchBar";
import Slider from "../Components/Sllider/Slider";
import FoodCategoryList from "./Helper/FoodCategory";

export default function Main() {
  const [FoodList, setFoodList] = useState(FoodCategoryList);
  const [searchVal, setSearchVal] = useState(false);
  const [sliderChecked, SliderChecked] = useState(0);

  useEffect(() => {
    if (sliderChecked == 2) {
      window.location.reload();
    }
  }, [sliderChecked]);

  const onSliderCheck = (categoryName, isChecked) => {
    SliderChecked((prevValue) => (prevValue += 1));
    if (!isChecked) {
      window.location.reload();
    }

    if (isChecked && categoryName === "Non Veg") {
      const nonVegList = FoodList.map((item) => ({
        ...item,
        options: item.options
          .map((child) => ({
            ...child,
            category: child.category.filter((i) => i !== "T" && i !== "V"),
          }))
          .filter((child) => child.category.length > 0),
      }));

      setFoodList(nonVegList);
    } else if (isChecked && categoryName === "Veg") {
      const vegList = FoodList.map((item) => ({
        ...item,
        options: item.options
          .map((child) => ({
            ...child,
            category: child.category.filter(
              (i) =>
                i !== "C" && i !== "F" && (i !== "P") & (i !== "E") && i !== "M"
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
