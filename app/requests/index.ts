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
