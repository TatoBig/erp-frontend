import { AiOutlineDashboard } from "react-icons/ai";
import { AnimatePresence, stagger } from "framer-motion";
import { PiPackage } from "react-icons/pi";
import { useState } from "react";
import Disappear from "../animation/Disappear";
import DrawerButton from "./DrawerButton";
import DrawerIcon from "./DrawerIcon";
import MenuOptions from "@/types/MenuOptions";

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

function LayoutDrawer() {
  const [currentOption, setCurrentOption] = useState("dashboard");

  const menuOptions: MenuOptions = {
    dashboard: {
      title: "Dashboard",
      description:
        "Ofrece una vista visual de datos empresariales clave para decisiones informadas.",
      options: [
        {
          title: "Visualización general",
          url: "/dashboard/overview",
        },
      ],
      icon: AiOutlineDashboard,
    },
    manufacture: {
      title: "Manufactura",
      description:
        "Optimiza procesos de producción y control de inventario para mejorar la eficiencia y calidad.",
      options: [
        {
          title: "Muestras de lote",
          url: "/manufacture/batch-samples",
        },
        {
          title: "Órdenes de compra",
          url: "/manufacture/purchase-orders",
        },
        {
          title: "Inventario",
          url: "/manufacture/inventory",
        },
      ],
      icon: PiPackage,
    },
  };

  return (
    <>
      <div className="bg-gray-200 w-96 h-screen p-4 ">
        <div className="p-4 flex justify-between bg-yellow-200 mb-6">
          <div className="flex">
            <div>icon</div>
            <div>name</div>
          </div>
          <div>close</div>
        </div>
        <div className="flex ">
          <div className="p-2 w-20 ">
            {Object.keys(menuOptions).map((option) => (
              <DrawerIcon
                label={menuOptions[option].title}
                option={() => setCurrentOption(option)}
                icon={menuOptions[option].icon}
                key={option}
              />
            ))}
          </div>
          <AnimatePresence mode="wait">
            {Object.keys(menuOptions).map(
              (option) =>
                currentOption === option && (
                  <Disappear
                    key={option}
                    currentOption={currentOption}
                    className="w-full"
                  >
                    <div className="text-xl font-bold"></div>
                    {menuOptions[option].title}
                    <div className="text-xs mt-2">
                      {menuOptions[option].description}
                    </div>
                    <div className="flex w-full">
                      <div className="w-0.5 rounded-full mt-4 bg-gray-300" />
                      <div className="mt-4 mr-4 w-full">
                        {menuOptions[option].options.map((option) => (
                          <DrawerButton key={option.title} url={option.url}>
                            {option.title}
                          </DrawerButton>
                        ))}
                      </div>
                    </div>
                  </Disappear>
                )
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}

export default LayoutDrawer;
