import { motion } from "framer-motion";

const AnimatedText = ({ children, color, fontSize, customStyles }: any) => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }} // Start with opacity 0 and a y offset
      animate={{ opacity: 1, y: 0 }} // Animate to full opacity and original position
      transition={{ duration: 0.6, ease: "easeOut" }} // Customize the duration and easing
      style={{
        ...customStyles,
        fontSize: fontSize ? fontSize : "2rem",
        color: color ? color : "#333",
        margin: 0,
        fontWeight: 500,
      }}
    >
      {children}
      
    </motion.h1>
  );
};

export default AnimatedText;
