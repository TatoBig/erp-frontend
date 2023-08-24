"use client";
import LayoutDrawer from "@/components/layout/Drawer";
import React from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex">
        <LayoutDrawer />
        <div className="p-4">{children}</div>
      </div>
    </>
  );
}
