import factIcon1 from "../images/facts-image1.png";
import factIcon2 from "../images/facts-image2.png";
import factIcon3 from "../images/facts-image3.png";
import factIcon4 from "../images/facts-image4.png";

export interface Fact {
  id: number;
  backgroundImage: string;
  icon: string;
  title: string;
  number: number;
}

export const factsData: Fact[] = [
  {
    id: 1,
    backgroundImage:
      "https://cdn.prod.website-files.com/5d5ffc98b6d68de20504403c/5d833f54060d00012adf7254_pizza-texture.jpg",
    icon: factIcon1,
    title: "pizzas",
    number: 738,
  },
  {
    id: 2,
    backgroundImage:
      "https://cdn.prod.website-files.com/5d5ffc98b6d68de20504403c/5d833f1ccf90c9df6d4a3f34_dessert-texture.jpg",
    icon: factIcon2,
    title: "deserts",
    number: 393,
  },
  {
    id: 3,
    backgroundImage:
      "https://cdn.prod.website-files.com/5d5ffc98b6d68de20504403c/5d833f28e8178de5eb634482_salad-texture.jpg",
    icon: factIcon3,
    title: "salads",
    number: 958,
  },
  {
    id: 4,
    backgroundImage:
      "https://cdn.prod.website-files.com/5d5ffc98b6d68de20504403c/5d833f3acf90c95e604a3f54_pasta-texture.jpg",
    icon: factIcon4,
    title: "pastas",
    number: 505,
  },
];
