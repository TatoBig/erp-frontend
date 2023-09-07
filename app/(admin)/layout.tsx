"use client";
import LayoutDrawer from "@/components/layout/Drawer";
import { AnimatePresence } from "framer-motion";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <LayoutDrawer />
      <div className="p-4 shadow-xl w-full">
        <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
          {children}
        </AnimatePresence>
      </div>
    </div>
  );
}
