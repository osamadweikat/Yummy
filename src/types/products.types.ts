export enum ProductTag {
  Vegetarian = "vegetarian",
  Vegan = "vegan",
  Spicy = "spicy",
}

export enum ProdutCategory {
  Home = "home",
  House = "house",
  Soups = "soups",
  Pizzas = "pizzas",
  Pastas = "pastas",
  Salads = "salads",
  Dessert = "dessert",
  Drinks = "drinks",
}

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  tags: ProductTag[];
  category: ProdutCategory[];
}

export const Products: Product[] = [
  {
    id: 1,
    name: "gorgonzola pizza",
    price: 250,
    description:
      "gorgonzola cheese, basil pesto, mozzarella, roasted garlic, cherry tomatoes, olive oil, oregano",
    image:
      "https://cdn.prod.website-files.com/5d6a433a85adc9596a08ab18/5d80927be4875a16be09c783_pizza2.jpg",
    tags: [ProductTag.Vegan, ProductTag.Spicy],
    category: [
      ProdutCategory.Home,
      ProdutCategory.House,
      ProdutCategory.Pizzas,
    ],
  },
  {
    id: 2,
    name: "pineapple pizza",
    price: 250,
    description:
      "pineapple chunks, mozzarella, creamy cheese blend, sweet corn, tomato sauce, herbs mix, olives",
    image:
      "https://cdn.prod.website-files.com/5d6a433a85adc9596a08ab18/5d80928a10123f5624b53030_pizza3.jpg",
    tags: [ProductTag.Vegetarian, ProductTag.Vegan, ProductTag.Spicy],
    category: [
      ProdutCategory.Home,
      ProdutCategory.House,
      ProdutCategory.Pizzas,
    ],
  },
  {
    id: 3,
    name: "jimmy's mexican pizza",
    price: 250,
    description:
      "spicy beans, jalapeños, cheddar blend, grilled peppers, tomatoes, fresh cilantro, mexican seasoning",
    image:
      "https://cdn.prod.website-files.com/5d6a433a85adc9596a08ab18/5d80926dddf528d718ceb2f6_pizza1.jpg",
    tags: [ProductTag.Vegetarian, ProductTag.Vegan],
    category: [
      ProdutCategory.Home,
      ProdutCategory.House,
      ProdutCategory.Pizzas,
    ],
  },
  {
    id: 4,
    name: "chocolate eclair dessert",
    price: 250,
    description:
      "flaky choux pastry filled with vanilla cream and topped with dark chocolate glaze",
    image:
      "https://cdn.prod.website-files.com/5d6a433a85adc9596a08ab18/5d809cd74f6ce521b3dd091c_dessert1.jpg",
    tags: [],
    category: [
      ProdutCategory.Home,
      ProdutCategory.House,
      ProdutCategory.Dessert,
    ],
  },
  {
    id: 5,
    name: "zesty quinoa salad",
    price: 250,
    description:
      "fresh quinoa mixed with cherry tomatoes, cucumbers, lime dressing, parsley and chili flakes",
    image:
      "https://cdn.prod.website-files.com/5d6a433a85adc9596a08ab18/5d809f322580d26675068eda_salad3.jpg",
    tags: [ProductTag.Spicy],
    category: [
      ProdutCategory.Home,
      ProdutCategory.House,
      ProdutCategory.Salads,
    ],
  },
  {
    id: 6,
    name: "chicken tortilla soup",
    price: 250,
    description:
      "hearty chicken soup with tortilla strips, sweet corn, tomatoes, beans and mild spices",
    image:
      "https://cdn.prod.website-files.com/5d6a433a85adc9596a08ab18/5d809b1db8b5ead4e88dc73d_soup1.jpg",
    tags: [ProductTag.Vegan],
    category: [ProdutCategory.Home, ProdutCategory.House, ProdutCategory.Soups],
  },
  {
    id: 7,
    name: "fresh broccoli salad",
    price: 250,
    description: "crisp broccoli with light dressing and fresh toppings",
    image:
      "https://cdn.prod.website-files.com/5d6a433a85adc9596a08ab18/5d809f26ddf5286a3ecf06e5_salad2.jpg",
    tags: [ProductTag.Vegan],
    category: [ProdutCategory.House, ProdutCategory.Salads],
  },
  {
    id: 8,
    name: "pesto chiken florentine",
    price: 250,
    description: "grilled chicken pasta with creamy pesto sauce and spinach",
    image:
      "https://cdn.prod.website-files.com/5d6a433a85adc9596a08ab18/5d809491ddf5289d23cebc53_pasta2.jpg",
    tags: [ProductTag.Vegetarian],
    category: [ProdutCategory.House, ProdutCategory.Pastas],
  },
  {
    id: 9,
    name: "rigatoni alla genovese",
    price: 250,
    description: "rigatoni pasta with rich pesto and herb sauce",
    image:
      "https://cdn.prod.website-files.com/5d6a433a85adc9596a08ab18/5d8094154f6ce566fbdc9e33_pasta1.jpg",
    tags: [ProductTag.Vegan],
    category: [ProdutCategory.House, ProdutCategory.Pastas],
  },
  {
    id: 10,
    name: "split pea soup",
    price: 250,
    description: "classic split pea soup with herbs and spices",
    image:
      "https://cdn.prod.website-files.com/5d6a433a85adc9596a08ab18/5d809b29b8b5ea13848dc74a_soup2.jpg",
    tags: [ProductTag.Vegan, ProductTag.Spicy],
    category: [ProdutCategory.Soups],
  },
  {
    id: 12,
    name: "baked potato soup",
    price: 250,
    description: "creamy potato soup with cheddar cheese and chives",
    image:
      "https://cdn.prod.website-files.com/5d6a433a85adc9596a08ab18/5d809b39b8b5ea6e518dc75f_soup3.jpg",
    tags: [ProductTag.Vegetarian, ProductTag.Spicy],
    category: [ProdutCategory.Soups],
  },
  {
    id: 13,
    name: "spaghetti cacio e pepe",
    price: 250,
    description: "spaghetti with pecorino cheese, black pepper and olive oil",
    image:
      "https://cdn.prod.website-files.com/5d6a433a85adc9596a08ab18/5d80947c2580d2798a0639c7_pasta3.jpg",
    tags: [ProductTag.Vegan, ProductTag.Spicy],
    category: [ProdutCategory.Pastas],
  },
  {
    id: 14,
    name: "roquefort pear salad",
    price: 250,
    description: "salad with roquefort cheese, fresh pears and mixed greens",
    image:
      "https://cdn.prod.website-files.com/5d6a433a85adc9596a08ab18/5d809f1310123f352bb5985f_salad1.jpg",
    tags: [ProductTag.Vegetarian, ProductTag.Spicy],
    category: [ProdutCategory.Salads],
  },
  {
    id: 15,
    name: "tiramisu toffee dessert",
    price: 250,
    description: "classic tiramisu dessert topped with toffee pieces",
    image:
      "https://cdn.prod.website-files.com/5d6a433a85adc9596a08ab18/5d809ce310123f4988b58875_dessert2.jpg",
    tags: [],
    category: [ProdutCategory.Dessert],
  },
  {
    id: 16,
    name: "cream puff dessert",
    price: 250,
    description: "fluffy cream puffs with sweet vanilla filling",
    image:
      "https://cdn.prod.website-files.com/5d6a433a85adc9596a08ab18/5d809cf0e4875a651c0a357a_dessert3.jpg",
    tags: [ProductTag.Spicy],
    category: [ProdutCategory.Dessert],
  },
  {
    id: 17,
    name: "cosmopolitan cocktail",
    price: 250,
    description: "classic cosmopolitan cocktail with cranberry juice and vodka",
    image:
      "https://cdn.prod.website-files.com/5d6a433a85adc9596a08ab18/5d80a42dddf52813d0cf2308_drinks1.jpg",
    tags: [ProductTag.Vegetarian],
    category: [ProdutCategory.Drinks],
  },
  {
    id: 18,
    name: "manhattan cocktail",
    price: 250,
    description: "traditional manhattan cocktail with whiskey and vermouth",
    image:
      "https://cdn.prod.website-files.com/5d6a433a85adc9596a08ab18/5d80a38ce4875a03a70a5387_drinks2.jpg",
    tags: [],
    category: [ProdutCategory.Drinks],
  },
  {
    id: 19,
    name: "marshmallow cocktail",
    price: 250,
    description:
      "sweet cocktail topped with marshmallows and a hint of vanilla",
    image:
      "https://cdn.prod.website-files.com/5d6a433a85adc9596a08ab18/5d80a4d210123f5341b5bdf8_drinks3.jpg",
    tags: [ProductTag.Vegetarian, ProductTag.Vegan, ProductTag.Spicy],
    category: [ProdutCategory.Drinks],
  },
];
