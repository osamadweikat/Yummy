import ProductImage1 from "../images/product-image1.jpeg";
import ProductImage2 from "../images/product-image2.jpeg";
import ProductImage3 from "../images/product-image3.jpeg";
import ProductImage4 from "../images/product-image4.jpeg";
import ProductImage5 from "../images/product-image5.jpeg";
import ProductImage6 from "../images/product-image6.jpeg";

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
    image: ProductImage1,
    tags: [ProductTag.Vegan, ProductTag.Spicy],
  },
  {
    id: 2,
    name: "pineapple pizza",
    price: 250,
    description:
      "pineapple chunks, mozzarella, creamy cheese blend, sweet corn, tomato sauce, herbs mix, olives",
    image: ProductImage2,
    tags: [ProductTag.Vegetarian, ProductTag.Vegan, ProductTag.Spicy],
  },
  {
    id: 3,
    name: "jimmy's mexican pizza",
    price: 250,
    description:
      "spicy beans, jalapeños, cheddar blend, grilled peppers, tomatoes, fresh cilantro, mexican seasoning",
    image: ProductImage3,
    tags: [ProductTag.Vegetarian, ProductTag.Vegan],
  },
  {
    id: 4,
    name: "chocolate eclair dessert",
    price: 250,
    description:
      "choux pastry, vanilla cream, dark chocolate glaze, butter, sugar, cocoa drizzle, sweet topping",
    image: ProductImage4,
    tags: [],
  },
  {
    id: 5,
    name: "zesty quinoa salad",
    price: 250,
    description:
      "quinoa mix, cherry tomatoes, cucumbers, lime dressing, parsley, chili flakes, olive oil, salt",
    image: ProductImage5,
    tags: [ProductTag.Spicy],
  },
  {
    id: 6,
    name: "chicken tortilla soup",
    price: 250,
    description:
      "shredded chicken, tortilla strips, sweet corn, tomatoes, beans, mild spices, fresh cilantro",
    image: ProductImage6,
    tags: [ProductTag.Vegan],
  },
];
