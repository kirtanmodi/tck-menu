import currentDay from "../Helper/GetDate";

const FoodCategoryList = [
  // Eggs & Toast
  {
    name: "Eggs & Toast",
    options: [
      {
        item: "Sunny Side Up",
        description: "",
        category: ["E"],
        price: { E: 130 },
      },
      {
        item: "Scrambled",
        description: "",
        category: ["E"],
        price: { E: 210 },
      },
      {
        item: "Omelette",
        description: "",
        category: ["E"],
        price: { E: 190 },
      },
    ],
  },
  // Croissant Sandwhiches
  {
    name: "Croissant Sandwiches",
    options: [
      {
        item: "Classic",
        description: "",
        category: ["V"],
        price: { V: 220 },
      },
      {
        item: "Chimichuri",
        description: "",
        category: ["V"],
        price: { V: 250 },
      },
      {
        item: "Scrambled Egg",
        description: "",
        category: ["E"],
        price: { E: 250 },
      },
      {
        item: "Simply Veggie",
        description: "",
        category: ["V"],
        price: { V: 300 },
      },
      {
        item: "Four Cheese",
        description: "",
        category: ["V"],
        price: { V: 320 },
      },
      {
        item: "Bacon",
        description: "",
        category: ["B"],
        price: { B: 380 },
      },
    ],
  },
  // Skillets
  {
    name: "Skillets",
    options: [
      {
        item: "Potato Egg Skillet",
        description: "",
        category: ["E"],
        price: { E: 280 },
      },
      {
        item: "Egg Shakshouka",
        description: "",
        category: ["E"],
        price: { E: 300 },
      },
    ],
  },
  // Breakfast Special
  {
    name: "Breakfast Specials",
    options: [
      {
        item: "French Toast",
        description: "",
        category: ["E"],
        price: { E: 260 },
      },
      {
        item: "Veggie Sandwich",
        description: "",
        category: ["V"],
        price: { V: 290 },
      },
      {
        item: "Smoothie Bowl",
        description: "",
        category: ["V"],
        price: { V: 360 },
      },
      {
        item: "Pancakes classic/ chocolate",
        description: "",
        category: ["V"],
        price: { V: 360 },
      },
      {
        item: "Eggs Benedict With Hollandaise",
        description: "",
        category: ["E"],
        price: { E: 380 },
      },
      {
        item: "Taco Pancakes",
        description: "",
        category: ["V"],
        price: { V: 400 },
      },
      {
        item: "Guac On Toast",
        description: "",
        category: ["V"],
        price: { V: 470 },
      },
      {
        item: "Juice Of The Day",
        description: "",
        category: ["Drink"],
        price: { Drink: 190 },
      },
    ],
  },
  //Breakfast Add ons
  {
    name: "Breakfast Add ons",
    options: [
      {
        item: "Roasted Tomaloes",
        description: "",
        category: ["V"],
        price: { V: 55 },
      },
      {
        item: "Sauteed Mushroom",
        description: "",
        category: ["V"],
        price: { V: 85 },
      },
      {
        item: "Hash Browns",
        description: "",
        category: ["V"],
        price: { V: 65 },
      },
      {
        item: "Bacon",
        description: "",
        category: ["B"],
        price: { B: 210 },
      },
      {
        item: "Sausages",
        description: "",
        category: ["C"],
        price: { C: 210 },
      },
    ],
  },
  // Salads
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
  // Pide
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
  // Sandwiches
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
  // Burgers
  {
    name: "Burgers",
    options: [
      {
        item: "HASH BROWN",
        description:
          "Crispy Seasoned Hash Brown, Tomatoes, Cheddar Cheese, Pickled Gherkins, Onions, House made Burger Sauce",
        category: ["V"],
        price: { V: 350 },
      },
      {
        item: "THE OTTOMAN",
        description:
          "Chickpea Patty, Roasted Pepper Mayo, Feta Cheese, Pickled Red Cabbage, Beetroot, Tomatoes, Fried Onions, Balsamic Glazed Roasted Bell Peppers",
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
          "Grilled Chicken Patty Charred Onions, Tomatoes, Lettuce, House Burger Mayo, American Cheddar",
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
          "Grilled Mutton Patty, Smoked BBQ Sauce, Classic Slaw & Caramelized Onion Relish",
        category: ["M"],
        price: { M: 490 },
      },
    ],
  },
  // Cuisine From Around The World
  {
    name: "Cuisine From Around The World",
    options: [
      {
        item: "EGYPTIAN KOSHRAY",
        description:
          "Rice, Chickpeas, Macaroni & Seasoned Red Lentils topped with Spiced Tomato Sauce and Fried Onions.",
        category: ["V"],
        price: { V: 380 },
      },
      {
        item: "VERDURE BOLOGNESE",
        description:
          "Chunky veggie and Tomato Sauce tossed with Tagliatelle Pasta served with Parmesan Crisp",
        category: ["V"],
        price: { V: 380 },
      },
      {
        item: "VINDALOO CHICKEN",
        description:
          "Chicken & Potato infused with Goan Spices in Chilly Gravy, served with Traditional Goan Poi Bread",
        category: ["C"],
        price: { C: 400 },
      },
      {
        item: "CHICKEN PARMIGIANA",
        description:
          "Parmesan Cheese & Crumbs coated Chicken topped with Tomato & Mozzarella served on Fettuccine Arrabbiata",
        category: ["C"],
        price: { C: 450 },
      },
      {
        item: "AL A MUHAMMARA",
        description:
          "Middle Eastern Bell Pepper - Walnut Puree served with Parsley Seasoned Couscous, Basil lavored Cottage Cheese & Curried Chickpeas",
        category: ["V"],
        price: { V: 450 },
      },
      {
        item: "CHICKEN SUPREME",
        description:
          "Pomodoro Sauce & Bocconcini Stuffed Chicken, seared in a skillet, topped with Creamy Mushroom Ragu.",
        category: ["C"],
        price: { C: 450 },
      },
      {
        item: "PRAWN AL' ORANGE",
        description:
          "Prawns and Pasta tossed in Orange Butter Garlic Sauce with a Hint of Chilli",
        category: ["P"],
        price: { P: 480 },
      },
    ],
  },
  // Sides
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
        item: "Sweet Potato Wedges",
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
        item: "Korean BBQ Wings",
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
  // Add ons
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
  // Beverages
  {
    name: "Beverages",
    options: [
      {
        item: "Regular Purified Water",
        description: "",
        category: ["Drink"],
        price: { Drink: "On The House" },
      },
      {
        item: "Coke/Sprite/Tonic/Ginger Ale",
        description: "",
        category: ["Drink"],
        price: { Drink: 60 },
      },
      {
        item: "Packaged Drinking Waler*",
        description: "",
        category: ["Drink"],
        price: { Drink: 65 },
      },
      {
        item: "Green Tea/ Infusions",
        description: "",
        category: ["Drink"],
        price: { Drink: 160 },
      },
      {
        item: "Caramelized Fresh Orange Spritzer",
        description: "",
        category: ["Drink"],
        price: { Drink: 180 },
      },
      {
        item: "Americano (Hot/Iced)",
        description: "",
        category: ["Drink"],
        price: { Drink: 180 },
      },
      {
        item: "Pour Over (Hot/Iced)",
        description: "",
        category: ["Drink"],
        price: { Drink: 180 },
      },
      {
        item: "Cappucino/Latte",
        description: "",
        category: ["Drink"],
        price: { Drink: 180 },
      },
      {
        item: "Hibiscus Iced Tea",
        description: "",
        category: ["Drink"],
        price: { Drink: 200 },
      },
      {
        item: "Cold Caramel Latte",
        description: "",
        category: ["Drink"],
        price: { Drink: 220 },
      },
      {
        item: "Berry Spritzer",
        description: "",
        category: ["Drink"],
        price: { Drink: 220 },
      },
      {
        item: "Poparazzi",
        description: "",
        category: ["Drink"],
        price: { Drink: 220 },
      },
      {
        item: "Cold Coffee (Hazelnut)",
        description: "",
        category: ["Drink"],
        price: { Drink: 240 },
      },
      {
        item: "Caramelized Orange Espresso Tonic",
        description: "",
        category: ["Drink"],
        price: { Drink: 250 },
      },
      {
        item: "Chocolate Coffee Oats Smoothie",
        description: "",
        category: ["Drink"],
        price: { Drink: 250 },
      },
      {
        item: "Mix Berries & Yogurt Smoothie",
        description: "",
        category: ["Drink"],
        price: { Drink: 280 },
      },
      {
        item: "Peanut Butter Almond Smoothie",
        description: "",
        category: ["Drink"],
        price: { Drink: 280 },
      },
    ],
  },
];

if (currentDay.currentDay > 0 && currentDay.currentDay < 6) {
  FoodCategoryList.splice(0, 5);
}

export default FoodCategoryList;
