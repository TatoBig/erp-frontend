import React from "react";

type Props = {
  children: string;
};

const DrawerButton = ({ children }: Props) => {
  return <div className="bg-orange-200 ml-4 border-b-2 border-black p-2">{children}</div>;
};

export default DrawerButton;
