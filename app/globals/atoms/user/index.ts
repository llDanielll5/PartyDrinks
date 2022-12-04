import { atom } from "recoil";

interface User {
  name: string;
  email: string;
  userImage: string;
  isPremium: boolean;
  favorites: FavoritesDrinks[];
}
interface FavoritesDrinks {
  drinkID: string;
}

const UserData = atom<User>({
  key: "UserData",
  default: {
    name: "",
    email: "",
    userImage: "",
    isPremium: false,
    favorites: [],
  },
});

export default UserData;
