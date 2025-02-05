import { motion } from "framer-motion";
import Confetti from "react-confetti";

export const Gracias = () => {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <Confetti />
      <div>
        <h2>Gracias</h2>
      </div>
    </motion.article>
  );
};
