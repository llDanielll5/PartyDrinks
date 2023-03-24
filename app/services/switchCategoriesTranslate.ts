import { I18n } from "i18n-js";
import { translates } from "../hooks/translations/translates";

export const switchCategoriesTranslate = (text: string) => {
  const translate = new I18n(translates);
  translate.locale = "pt-BR";
  switch (text) {
    case "Ordinary Drink":
      return translate?.t("categories.ordinaryDrink");
    case "Cocktail":
      return translate?.t("categories.cocktail");
    case "Shake":
      return translate?.t("categories.shake");
    case "Other / Unknown":
      return translate?.t("categories.other");
    case "Cocoa":
      return translate?.t("categories.cocoa");
    case "Shot":
      return translate?.t("categories.shot");
    case "Coffee / Tea":
      return translate?.t("categories.coffe");
    case "Homemade Liqueur":
      return translate?.t("categories.homemadeLiqueur");
    case "Punch / Party Drink":
      return translate?.t("categories.party");
    case "Beer":
      return translate?.t("categories.beer");
    case "Soft Drink":
      return translate?.t("categories.softDrink");
  }
};

export const switchAlcoholTranslate = (text: string) => {
  const translate = new I18n(translates);
  translate.locale = "pt-BR";
  switch (text) {
    case "Alcoholic":
      return translate?.t("alcoholics.alcohol");
    case "Non alcoholic":
      return translate?.t("alcoholics.nonAlcohol");
    case "Optional alcoholic":
      return translate?.t("alcoholics.optional");
  }
};
