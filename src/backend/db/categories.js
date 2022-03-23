import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Comedy",
    img: "./assets/comedy.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Action",
    img: "./assets/action.webp",
  },
  {
    _id: uuid(),
    categoryName: "Horror",
    img: "./assets/horror.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Thriller",
    img: "./assets/thriller.jpg",
  },
];
