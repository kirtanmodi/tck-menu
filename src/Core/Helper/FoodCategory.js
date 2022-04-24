const FoodCategoryList = [
  {
    name: "Salads",
    options: [
      {
        item: "Fattoush Salad",
        description: "",
        category: ["V"],
        price: { V: 280 },
      },
      {
        item: "Chickpea Salad",
        description: "",
        category: ["V"],
        price: { V: 280 },
      },
      {
        item: "Caesar Salad",
        description: "",
        category: ["V", "E", "C"],
        price: { V: 280, E: 300, C: 320 },
      },
      {
        item: "Greek Salad",
        description: "",
        category: ["V", "C"],
        price: { V: 280, C: 320 },
      },
      {
        item: "Soba Noodles Salad",
        description: "",
        category: ["T", "P"],
        price: { T: 350, P: 450 },
      },
    ],
  },
  {
    name: "Pide",
    options: [
      {
        item: "Pesto & Mushroom",
        description: "",
        category: ["V"],
        price: { V: 320 },
      },
      {
        item: "Spinach & Cream Cheese",
        description: "",
        category: ["V"],
        price: { V: 320 },
      },
      {
        item: "Classic Veg / Chicken",
        description: "",
        category: ["V", "C"],
        price: { V: 320, C: 400 },
      },
      {
        item: "Pepperoni & Mozzarella Cheese",
        description: "",
        category: ["C"],
        price: { C: 400 },
      },
    ],
  },
  {
    name: "Sandwiches",
    options: [
      {
        item: "Grilled Mushroom & Mozzarella",
        description: "",
        category: ["V"],
        price: { V: 320 },
      },
      {
        item: "Grilled Pepper Pesto",
        description: "",
        category: ["V"],
        price: { V: 320 },
      },
      {
        item: "Roasted Chicken Pesto",
        description: "",
        category: ["C"],
        price: { C: 350 },
      },
      {
        item: "Grilled Cheddar Chicken",
        description: "",
        category: ["C"],
        price: { C: 350 },
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
        price: { V: 350 },
      },
      {
        item: "THE OTTOMAN",
        description:
          "Chickpea Patty, Roasted Pepper Mayo, Feta Cheese, Pickled Red Cabbage, Beetroot, Tomatoes, Fried Onions Balsamic Glazed Roasted Bell Peppers",
        category: ["V"],
        price: { V: 370 },
      },
      {
        item: "THE COLOSSAL",
        description:
          "Roasted Shiitake & Button Mushrooms Patty, Yogurt Slaw, Onion Relish, BBO Sauce & Cheddar Cheese",
        category: ["V"],
        price: { V: 380 },
      },
      {
        item: "EL CHAPO",
        description:
          "Black Beans Patty, House Salsa, Cheddar Cheese, Olives, Jalapenos, Sour Cream, Nachos",
        category: ["V"],
        price: { V: 390 },
      },
      {
        item: "INDIAN SUMMER",
        description:
          "Panko Fried Cottage Cheese, Pickled Cucumbers, Onions, Tomatoes, Seasoned Mayo & Cheddar",
        category: ["V"],
        price: { V: 390 },
      },
      {
        item: "ASIAN TOFU BURGER",
        description:
          "Fried Seasoned Tofu, Black Bean Sauce, Peppers in Bean Sauce, Tomatoes, Bean Sprouts, Pickled Cabbage Slaw, Cheddar Cheese.",
        category: ["T"],
        price: { V: 390 },
      },
      {
        item: "EGG LORD",
        description:
          "Stuffed Omelette, Sauteed Bell Peppers, Tomatoes, Lettuce, House made Burger Mayo",
        category: ["E"],
        price: { E: 360 },
      },
      {
        item: "HOT CHICK",
        description:
          "Fried Chicken drenched in Hot Sauce, Pickled Onions, Sriracha Hot Sauce & Cheddar Cheese Yogurt Slaw",
        category: ["C"],
        price: { C: 410 },
      },
      {
        item: "CLASSIC CHICK",
        description:
          "Grilled Chicken Patty. Charred Onions, Tomatoes, Lettuce, House Burger Mayo, American Cheddar",
        category: ["C"],
        price: { C: 420 },
      },
      {
        item: "B.C BURGER",
        description: "Tzatziki, Old Fashioned Butter Chicken, Lettuce",
        category: ["C"],
        price: { C: 440 },
      },
      {
        item: "SMOKE CHICK",
        description:
          "Smoked Chicken basted with Secret Sauce, Tomatoes Cheddar Cheese, Pickled Onions",
        category: ["C"],
        price: { C: 440 },
      },
      {
        item: "HEY PESTO!",
        description:
          "Grilled Chicken Patty, Charred Mushroom, House made Basil Pesto, Cherry Tomatoes, Lettuce",
        category: ["C"],
        price: { C: 470 },
      },
      {
        item: "FISH FILLET",
        description: "Seasoned Fish Fillet, Garlic Aioli Sauce, Cheddar Cheese",
        category: ["F"],
        price: { F: 470 },
      },
      {
        item: "BENJAMIN MUTTON",
        description:
          "Grilled Mutton Patty, Smoked BBO Sauce. Classic Slaw & Caramelized Onion Relish",
        category: ["M"],
        price: { M: 490 },
      },
    ],
  },
  {
    name: "Sides",
    options: [
      {
        item: "Onion Rings",
        description: "",
        category: ["V"],
        price: { V: 180 },
      },
      {
        item: "Suppt Potato Wedgps",
        description: "",
        category: ["V"],
        price: { V: 240 },
      },
      {
        item: "Potato Wedges",
        description: "",
        category: ["CC", "V", "C"],
        price: { CC: 180, V: 280, C: 340 },
      },
      {
        item: "French Fries",
        description: "",
        category: ["CC", "V", "C"],
        price: { CC: 180, V: 280, C: 340 },
      },
      {
        item: "Buffalo Chicken Wings",
        description: "",
        category: ["C"],
        price: { C: 340 },
      },
      {
        item: "Korean BBO Wings",
        description: "",
        category: ["C"],
        price: { C: 340 },
      },
      {
        item: "Loaded Nachos",
        description: "",
        category: ["V", "C"],
        price: { V: 340, C: 380 },
      },
      {
        item: "Fish & Home-made Chips",
        description: "",
        category: ["F"],
        price: { F: 380 },
      },
      {
        item: "Loaded Hummus With Goan Poi Bread",
        description: "",
        category: ["V", "C"],
        price: { V: 350, C: 390 },
      },
    ],
  },
  {
    name: "Add ons",
    options: [
      {
        item: "Cheddar/ Mozzarella",
        description: "",
        category: ["V"],
        price: { V: 30 },
      },
      {
        item: "Balsamic Onions/ Onion Rings",
        description: "",
        category: ["V"],
        price: { V: 30 },
      },
      {
        item: "Pickled Jalapeno/ Pickled Cucumber",
        description: "",
        category: ["V"],
        price: { V: 30 },
      },
      {
        item: "Buffalo/ BBQ Sauce",
        description: "",
        category: ["V"],
        price: { V: 30 },
      },
      {
        item: "Fried Egg",
        description: "",
        category: ["E"],
        price: { E: 40 },
      },
      {
        item: "Pulled Chicken",
        description: "",
        category: ["C"],
        price: { C: 80 },
      },
      {
        item: "Pepper Maple Glazed Bacon/ Pepperoni",
        description: "",
        category: ["C"],
        price: { C: 120 },
      },
    ],
  },
];

export default FoodCategoryList;
