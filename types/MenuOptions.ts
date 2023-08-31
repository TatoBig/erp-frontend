import { IconType } from "react-icons";

type MenuOptions = {
  [key: string]: {
    title: string;
    icon: IconType;
    description: string;
    options: string[];
  };
};

export default MenuOptions;
