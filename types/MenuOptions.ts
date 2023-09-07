import { IconType } from "react-icons";

type Option = {
  title: string;
  url: string;
};

type MenuOptions = {
  [key: string]: {
    title: string;
    icon: IconType;
    description: string;
    options: Option[];
  };
};

export default MenuOptions;
