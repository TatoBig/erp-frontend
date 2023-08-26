import React from "react";

type Props = {
  children: string;
};

const DrawerButton = ({ children }: Props) => {
  return <div className="ml-4 border-b-2 border-gray-300 hover:bg-gray-300 smooth p-2 text-sm">{children}</div>;
};

export default DrawerButton;
