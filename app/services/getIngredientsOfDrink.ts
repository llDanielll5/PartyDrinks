import { DrinkDetail } from "../../types";

export const getIngredientsOfDrink = (drink: DrinkDetail) => {
  if (drink?.strIngredient1 === null) {
    return [];
  } else if (drink?.strIngredient2 === null) {
    return [drink?.strIngredient1];
  } else if (drink?.strIngredient3 === null) {
    return [drink?.strIngredient1, drink?.strIngredient2];
  } else if (drink?.strIngredient4 === null) {
    return [
      drink?.strIngredient1,
      drink?.strIngredient2,
      drink?.strIngredient3,
    ];
  } else if (drink?.strIngredient5 === null) {
    return [
      drink?.strIngredient1,
      drink?.strIngredient2,
      drink?.strIngredient3,
      drink?.strIngredient4,
    ];
  } else if (drink?.strIngredient6 === null) {
    return [
      drink?.strIngredient1,
      drink?.strIngredient2,
      drink?.strIngredient3,
      drink?.strIngredient4,
      drink?.strIngredient5,
    ];
  } else if (drink?.strIngredient7 === null) {
    return [
      drink?.strIngredient1,
      drink?.strIngredient2,
      drink?.strIngredient3,
      drink?.strIngredient4,
      drink?.strIngredient5,
      drink?.strIngredient6,
    ];
  } else if (drink?.strIngredient8 === null) {
    return [
      drink?.strIngredient1,
      drink?.strIngredient2,
      drink?.strIngredient3,
      drink?.strIngredient4,
      drink?.strIngredient5,
      drink?.strIngredient6,
      drink?.strIngredient7,
    ];
  } else if (drink?.strIngredient9 === null) {
    return [
      drink?.strIngredient1,
      drink?.strIngredient2,
      drink?.strIngredient3,
      drink?.strIngredient4,
      drink?.strIngredient5,
      drink?.strIngredient6,
      drink?.strIngredient7,
      drink?.strIngredient8,
    ];
  } else if (drink?.strIngredient10 === null) {
    return [
      drink?.strIngredient1,
      drink?.strIngredient2,
      drink?.strIngredient3,
      drink?.strIngredient4,
      drink?.strIngredient5,
      drink?.strIngredient6,
      drink?.strIngredient7,
      drink?.strIngredient8,
      drink?.strIngredient9,
    ];
  } else if (drink?.strIngredient11 === null) {
    return [
      drink?.strIngredient1,
      drink?.strIngredient2,
      drink?.strIngredient3,
      drink?.strIngredient4,
      drink?.strIngredient5,
      drink?.strIngredient6,
      drink?.strIngredient7,
      drink?.strIngredient8,
      drink?.strIngredient9,
      drink?.strIngredient10,
    ];
  } else if (drink?.strIngredient12 === null) {
    return [
      drink?.strIngredient1,
      drink?.strIngredient2,
      drink?.strIngredient3,
      drink?.strIngredient4,
      drink?.strIngredient5,
      drink?.strIngredient6,
      drink?.strIngredient7,
      drink?.strIngredient8,
      drink?.strIngredient9,
      drink?.strIngredient10,
      drink?.strIngredient11,
    ];
  } else if (drink?.strIngredient13 === null) {
    return [
      drink?.strIngredient1,
      drink?.strIngredient2,
      drink?.strIngredient3,
      drink?.strIngredient4,
      drink?.strIngredient5,
      drink?.strIngredient6,
      drink?.strIngredient7,
      drink?.strIngredient8,
      drink?.strIngredient9,
      drink?.strIngredient10,
      drink?.strIngredient11,
      drink?.strIngredient12,
    ];
  } else if (drink?.strIngredient14 === null) {
    return [
      drink?.strIngredient1,
      drink?.strIngredient2,
      drink?.strIngredient3,
      drink?.strIngredient4,
      drink?.strIngredient5,
      drink?.strIngredient6,
      drink?.strIngredient7,
      drink?.strIngredient8,
      drink?.strIngredient9,
      drink?.strIngredient10,
      drink?.strIngredient11,
      drink?.strIngredient12,
      drink?.strIngredient13,
    ];
  } else if (drink?.strIngredient15 === null) {
    return [
      drink?.strIngredient1,
      drink?.strIngredient2,
      drink?.strIngredient3,
      drink?.strIngredient4,
      drink?.strIngredient5,
      drink?.strIngredient6,
      drink?.strIngredient7,
      drink?.strIngredient8,
      drink?.strIngredient9,
      drink?.strIngredient10,
      drink?.strIngredient11,
      drink?.strIngredient12,
      drink?.strIngredient13,
      drink?.strIngredient14,
    ];
  } else if (drink?.strIngredient15 !== null) {
    return [
      drink?.strIngredient1,
      drink?.strIngredient2,
      drink?.strIngredient3,
      drink?.strIngredient4,
      drink?.strIngredient5,
      drink?.strIngredient6,
      drink?.strIngredient7,
      drink?.strIngredient8,
      drink?.strIngredient9,
      drink?.strIngredient10,
      drink?.strIngredient11,
      drink?.strIngredient12,
      drink?.strIngredient13,
      drink?.strIngredient14,
      drink?.strIngredient15,
    ];
  }
};
