import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Comedy",
    img: "https://ik.imagekit.io/yol3sixl2xj/comedy_sr2att5DV.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1648375299834",
  },
  {
    _id: uuid(),
    categoryName: "Action",
    img: "https://ik.imagekit.io/yol3sixl2xj/action_YbynO1Qph.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1648375297974",
  },
  {
    _id: uuid(),
    categoryName: "Horror",
    img: "https://ik.imagekit.io/yol3sixl2xj/horror_5rYiv67ic.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1648375302197",
  },
  {
    _id: uuid(),
    categoryName: "Thriller",
    img: "https://ik.imagekit.io/yol3sixl2xj/thriller_usIPmhluJ.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1648375304175",
  },
];
