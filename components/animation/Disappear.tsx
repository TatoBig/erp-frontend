import { ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
  className: string;
  key: string;
  children: ReactNode;
  currentOption: string;
};

const Disappear = ({ currentOption, className, key, children }: Props) => {
  return (
    <motion.div
      key={key}
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
