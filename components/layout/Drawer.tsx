import { AiOutlineDashboard } from "react-icons/ai";
import { AnimatePresence, stagger } from "framer-motion";
import { PiPackage, PiToolbox } from "react-icons/pi";
import { useState } from "react";
import Disappear from "../animation/Disappear";
import DrawerButton from "./DrawerButton";
import DrawerIcon from "./DrawerIcon";
import MenuOptions from "@/types/MenuOptions";
import LogoIcon from "../icons/LogoIcon";
import ErpInc from "../icons/ErpInc";

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
        {
          title: "Proveedores",
          url: "/manufacture/providers",
        },
      ],
      icon: PiPackage,
    },
    tools: {
      title: "Herramientas",
      description: "Herramientas para personalizar el proceso de producción.",
      options: [
        {
          title: "Etapas de producción",
          url: "/tools/stages",
        },
        {
          title: "Estados de producción",
          url: "/tools/status",
        },
        {
          title: "Ubicaciones",
          url: "/tools/locations",
        },
      ],
      icon: PiToolbox,
    },
  };

  return (
    <>
      <div className="bg-gray-200 w-96 h-full min-h-screen p-4 ">
        <div className="p-4 flex justify-between mb-6">
          <div className="flex items-center justify-center">
            <div className="w-24 h-24 -mt-6 -mb-10 ">
              <LogoIcon />
            </div>
            <div className="font-semibold text-3xl font-mono mt-4">ERP INC</div>
          </div>
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
