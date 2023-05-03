import { ReactComponent as Home } from "@/assets/svg/Home.svg";
import { ReactComponent as Comment } from "@/assets/svg/Comment.svg";
import { ReactComponent as Compass } from "@/assets/svg/compass.svg";
import { ReactComponent as Favorite } from "@/assets/svg/favorite.svg";
import { ReactComponent as Add } from "@/assets/svg/add.svg";

export const IconType = {
  home: "Home",
  comment: "Comment",
  compass: "Compass",
  favorite: "Favorite",
  add: "Add",
};

export const IconTypes = new Map([
  ["Home", <Home />],
  ["Comment", <Comment />],
  ["Compass", <Compass />],
  ["Favorite", <Favorite />],
  ["Add", <Add />],
]);
