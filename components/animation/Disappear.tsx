import { ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
  className: string;
  children: ReactNode;
  currentOption: string;
};

const Disappear = ({ currentOption, className, children }: Props) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Disappear;
