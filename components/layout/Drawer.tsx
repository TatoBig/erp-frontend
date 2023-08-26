import { AiOutlineDashboard } from "react-icons/ai";
import { PiPackage } from "react-icons/pi";
import DrawerButton from "./DrawerButton";
import DrawerIcon from "./DrawerIcon";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function LayoutDrawer() {
  const [module, setModule] = useState("dashboard");
  const [isVisible, setIsVisible] = useState(false);
  const [option, setOption] = useState("dashboard");

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
        <div className="flex">
          <div className="p-2 w-20">
            <DrawerIcon
              label="Dashboard"
              option={() => setOption("dashboard")}
              icon={AiOutlineDashboard}
            />
            <DrawerIcon
              label="Manufactura"
              option={() => setOption("manufacture")}
              icon={PiPackage}
            />
          </div>
          <div className="w-full">
            <div className="text-xl font-bold">Dashboard</div>
            <div className="text-xs mt-2">
              Choose between layouts to experience different look and feel for
              your projects.
            </div>
            <div className="flex w-full">
              <div className="w-0.5 rounded-full mt-4 bg-gray-300" />
              <AnimatePresence>
                {option === 'dashboard' && (
                  <motion.div
                    className="mt-4 w-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 0.5 } }}
                    exit={{ opacity: 0 }}
                  >
                    <DrawerButton>Web Analytics</DrawerButton>
                    <DrawerButton>Sales Monitoring</DrawerButton>
                    <DrawerButton>Ad Campaign</DrawerButton>
                  </motion.div>
                )}
              </AnimatePresence>
              <AnimatePresence>
                {option === 'manufacture' && (
                  <motion.div
                    className="mt-4 w-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 0.5 } }}
                    exit={{ opacity: 0 }}
                  >
                    <DrawerButton>Web S</DrawerButton>
                    <DrawerButton>Sales S</DrawerButton>
                    <DrawerButton>Ad S</DrawerButton>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LayoutDrawer;
