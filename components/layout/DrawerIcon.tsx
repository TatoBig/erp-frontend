import { Icon, Tooltip } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

type Props = {
  icon: IconType;
  option: () => void;
  label: string;
};

const DrawerIcon = ({ icon, option, label = 'tooltip' }: Props) => {
  return (
    <div className="group">
      <Tooltip label={label} placement="auto" className="p-2 rounded-lg">
      <button
        type="button"
        onClick={() => option()}
        className="group-hover:bg-gray-300 flex p-2 justify-center items-center mb-2 rounded-xl smooth"
      >
        <Icon as={icon} className="w-8 h-8 group-hover:text-blue-600 smooth" />
      </button>
    </Tooltip>
    </div>
  );
};

export default DrawerIcon;
