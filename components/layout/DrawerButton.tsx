import Link from "next/link";
import React from "react";

type Props = {
  url: string;
  children: string;
};

const DrawerButton = ({ url, children }: Props) => {
  return (
    <Link href={url}>
      <div className="w-full text-start ml-4 border-b-2 border-gray-300 hover:bg-gray-300 smooth p-2 text-sm">
        {children}
      </div>
    </Link>
  );
};

export default DrawerButton;
