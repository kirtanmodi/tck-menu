import React, { useEffect, useImperativeHandle, useState } from "react";
import CollapsibleCard from "../Components/Cards/CollapsibleCard/CollapsibleCard";
import Footer from "../Components/Footer/Footer";
import Headers from "../Components/Header/Header";
import SearchBar from "../Components/SearchBar/SearchBar";
import Slider from "../Components/Sllider/Slider";
// import FoodCategoryList from "./Helper/FoodCategory";

export default function Main() {
  const FoodList = [
    {
      name: "Salads",
      options: [
        {
          item: "Fattoush Salad",
          description: "",
          category: ["V"],
          price: "299",
        },
        {
          item: "Chickpea Salad",
          description: "",
          category: ["V"],
          price: "299",
        },
        {
          item: "Caesar Salad",
          description: "",
          category: ["V", "F", "C"],
          price: "299",
        },
        {
          item: "Greek Salad",
          description: "",
          category: ["V", "C"],
          price: "299",
        },
        {
          item: "Soba Noodles Salad",
          description: "",
          category: ["T", "P"],
          price: "299",
        },
      ],
    },
    {
      name: "Sandwhiches",
      options: [
        {
          item: "Grilled Mushroom & Mozzarella",
          description: "",
          category: ["V"],
          price: "299",
        },
        {
          item: "Grilled Pepper Pesto",
          description: "",
          category: ["V"],
          price: "299",
        },
        {
          item: "Roasted Chicken Pesto",
          description: "",
          category: ["C"],
          price: "299",
        },
        {
          item: "Grilled Cheddar Chicken",
          description: "",
          category: ["C"],
          price: "299",
        },
      ],
    },
    {
      name: "Pides",
      options: [
        {
          item: "Pesto & Mushroom",
          description: "",
          category: ["V"],
          price: "299",
        },
        {
          item: "Spinach & Cream Cheese",
          description: "",
          category: ["V"],
          price: "299",
        },
        {
          item: "Classic",
          description: "",
          category: ["V", "C"],
          price: "299",
        },
        {
          item: "Pepperoni & Mozzarella Cheese",
          description: "",
          category: ["C"],
          price: "299",
        },
      ],
    },
    {
      name: "Burgers",
      options: [
        {
          item: "HASH BROWN",
          description:
            "Crispy Seasoned Hash Brown Tomatoes, Cheddar Cheese Pickled Gherkins, Onions, House made Burger Sauce",
          category: ["V"],
          price: "299",
        },
        {
          item: "THE OTTOMAN",
          description:
            "Chickpea Patty, Roasted Pepper Mayo, Feta Cheese, Pickled Red Cabbage, Beetroot, Tomatoes, Fried Onions Balsamic Glazed Roasted Bell Peppers",
          category: ["V"],
          price: "299",
        },
        {
          item: "THE COLOSSAL",
          description:
            "Roasted Shiitake & Button Mushrooms Patty, Yogurt Slaw, Onion Relish, BBO Sauce & Cheddar Cheese",
          category: ["V"],
          price: "299",
        },
        {
          item: "EL CHAPO",
          description:
            "Black Beans Patty, House Salsa, Cheddar Cheese, Olives, Jalapenos, Sour Cream, Nachos",
          category: ["V"],
          price: "299",
        },
        {
          item: "INDIAN SUMMER",
          description:
            "Panko Fried Cottage Cheese, Pickled Cucumbers, Onions, Tomatoes, Seasoned Mayo & Cheddar",
          category: ["V"],
          price: "299",
        },
        {
          item: "ASIAN TOFU BURGER",
          description:
            "Fried Seasoned Tofu, Black Bean Sauce, Peppers in Bean Sauce, Tomatoes, Bean Sprouts, Pickled Cabbage Slaw, Cheddar Cheese.",
          category: ["T"],
          price: "299",
        },
        {
          item: "EGG LORD",
          description:
            "Stuffed Omelette, Omelette, Sauteed Bell Peppers, Tomatoes, Lettuce, House made Burger Mayo ",
          category: ["E"],
          price: "299",
        },
        {
          item: "HOT CHICK",
          description:
            "Fried Chicken drenched in Hot Sauce, Pickled Onions,Sriracha Hot Sauce & Cheddar Cheese Yogurt Slaw",
          category: ["C"],
          price: "399",
        },
        {
          item: "CLASSIC CHICK",
          description:
            "Grilled Chicken Patty. Charred Onions, Tomatoes, Lettuce, House Burger Mayo, American Cheddar",
          category: ["C"],
          price: "399",
        },
        {
          item: "B.C BURGER",
          description: "Tzatziki, Old Fashioned Butter Chicken, Lettuce",
          category: ["C"],
          price: "399",
        },
        {
          item: "SMOKE CHICK",
          description:
            "Smoked Chicken basted with Secret Sauce, Tomatoes Cheddar Cheese, Pickled Onions",
          category: ["C"],
          price: "399",
        },
        {
          item: "HEY PESTO!",
          description:
            "Grilled Chicken Patty, Charred Mushroom, House made Basil Pesto, Cherry Tomatoes, Lettuce",
          category: ["C"],
          price: "399",
        },
        {
          item: "FISH FILLET",
          description:
            "Seasoned Fish Fillet, Garlic Aioli Sauce, Cheddar Cheese",
          category: ["F"],
          price: "499",
        },
        {
          item: "BENJAMIN MUTTON",
          description:
            "Grilled Mutton Patty, Smoked BBO Sauce. Classic Slaw & Caramelized Onion Relish",
          category: ["M"],
          price: "499",
        },
      ],
    },
  ];
  const [FoodCategoryList, setFoodCategoryList] = useState(FoodList);

  function onSliderCheck(editCate, checked) {
    // let meat = "";
    // if (editCate === "Veg") {
    //   meat = "V";
    // } else {
    //   meat = "C";
    // }
  }

  function foodCat(name, details, index) {
    return (
      <CollapsibleCard
        key={index}
        foodGenre={name}
        foodDetails={details}
      ></CollapsibleCard>
    );
  }

  return (
    <div className="menu-page">
      <Headers></Headers>
      <div className="br"></div>
      <div className="search-bar">
        <Slider sliderChecked={onSliderCheck} foodCategory="Veg"></Slider>
        <Slider sliderChecked={onSliderCheck} foodCategory="Non Veg"></Slider>
        <SearchBar placeholder="search..."></SearchBar>
      </div>
      {FoodCategoryList.map((foodItem, index) => {
        return foodCat(foodItem.name, foodItem.options, index);
      })}
      <Footer></Footer>
    </div>
  );
}
