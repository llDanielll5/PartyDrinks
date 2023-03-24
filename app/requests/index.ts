import axios from "axios";
import { cocktailDBUrl } from "../globals/constants/variables";

export const getCategoriesOfDrinks = async () => {
  try {
    const result = await axios.get(
      `${cocktailDBUrl}/api/json/v1/1/list.php?c=list`
    );
    return result.data.drinks;
  } catch (error: any) {
    if (error.response) {
      console.log("responseError: ", error.response.data);
    } else if (error.request) {
      console.log("requestError: ", error.request);
    } else {
      console.log("messageError: ", error.message);
    }
  }
};

export const getAlcoholOfDrinks = async () => {
  try {
    const result = await axios.get(
      `${cocktailDBUrl}/api/json/v1/1/list.php?a=list`
    );
    return result.data.drinks;
  } catch (error: any) {
    if (error.response) {
      console.log("responseError: ", error.response.data);
    } else if (error.request) {
      console.log("requestError: ", error.request);
    } else {
      console.log("messageError: ", error.message);
    }
  }
};

export const getRandomDrink = async () => {
  try {
    const result = await axios.get(`${cocktailDBUrl}/api/json/v1/1/random.php`);
    return result.data.drinks;
  } catch (error: any) {
    if (error.response) {
      console.log("responseError: ", error.response.data);
    } else if (error.request) {
      console.log("requestError: ", error.request);
    } else {
      console.log("messageError: ", error.message);
    }
  }
};

export const getDrinkByID = async (id: string) => {
  try {
    const result = await axios.get(
      `${cocktailDBUrl}/api/json/v1/1/lookup.php?i=${id}`
    );
    return result.data.drinks[0];
  } catch (error: any) {
    if (error.response) {
      console.log("responseError: ", error.response.data);
    } else if (error.request) {
      console.log("requestError: ", error.request);
    } else {
      console.log("messageError: ", error.message);
    }
  }
};

export const getDrinkByCategory = async (category: string) => {
  try {
    const result = await axios.get(
      `${cocktailDBUrl}/api/json/v1/1/filter.php?c=${category}`
    );
    return result.data.drinks;
  } catch (error: any) {
    if (error.response) {
      console.log("responseError: ", error.response.data);
    } else if (error.request) {
      console.log("requestError: ", error.request);
    } else {
      console.log("messageError: ", error.message);
    }
  }
};

export const getDrinksFilterByName = async (value: string) => {
  try {
    const result = await axios.get(
      `${cocktailDBUrl}/api/json/v1/1/search.php?s=${value}`
    );
    return result.data.drinks;
  } catch (error: any) {
    if (error.response) {
      console.log("responseError: ", error.response.data);
    } else if (error.request) {
      console.log("requestError: ", error.request);
    } else {
      console.log("messageError: ", error.message);
    }
  }
};

export const getDrinkByAlcohol = async (value: string) => {
  try {
    const result = await axios.get(
      `${cocktailDBUrl}/api/json/v1/1/filter.php?a=${value}`
    );
    return result.data.drinks;
  } catch (error: any) {
    if (error.response) {
      console.log("responseError: ", error.response.data);
    } else if (error.request) {
      console.log("requestError: ", error.request);
    } else {
      console.log("messageError: ", error.message);
    }
  }
};
