export enum ProductTag {
  Vegetarian = "vegetarian",
  Vegan = "vegan",
  Spicy = "spicy",
}

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  tags: ProductTag[];
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
  },
  {
    id: 4,
    name: "chocolate eclair dessert",
    price: 250,
    description:
      "choux pastry, vanilla cream, dark chocolate glaze, butter, sugar, cocoa drizzle, sweet topping",
    image:
      "https://cdn.prod.website-files.com/5d6a433a85adc9596a08ab18/5d809cd74f6ce521b3dd091c_dessert1.jpg",
    tags: [],
  },
  {
    id: 5,
    name: "zesty quinoa salad",
    price: 250,
    description:
      "quinoa mix, cherry tomatoes, cucumbers, lime dressing, parsley, chili flakes, olive oil, salt",
    image:
      "https://cdn.prod.website-files.com/5d6a433a85adc9596a08ab18/5d809f322580d26675068eda_salad3.jpg",
    tags: [ProductTag.Spicy],
  },
  {
    id: 6,
    name: "chicken tortilla soup",
    price: 250,
    description:
      "shredded chicken, tortilla strips, sweet corn, tomatoes, beans, mild spices, fresh cilantro",
    image:
      "https://cdn.prod.website-files.com/5d6a433a85adc9596a08ab18/5d809b1db8b5ead4e88dc73d_soup1.jpg",
    tags: [ProductTag.Vegan],
  },
];
