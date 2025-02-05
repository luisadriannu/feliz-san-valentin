import { motion } from "framer-motion";
import Confetti from "react-confetti";
import gatitos from "../assets/img/gatitos.jpg";

export const Gracias = () => {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      className="relative h-screen w-screen overflow-hidden"
    >
      <Confetti />
      <img
        className="absolute top-0 left-0 w-full h-full object-cover "
        src={gatitos}
        loading="lazy"
        alt="Gatitos"
      />
      <div className="relative flex flex-col items-center justify-center h-full text-white text-center font-bold text-shadow">
        <h2 className="text-4xl font-bold">Gracias mi niña hermosa</h2>

        <p className="text-lg pt-6">
          No sabes lo felíz que me hace saber que compartiremos ese día tan
          especial❤
        </p>

        <a
          className="shadow mt-4 cursor-pointer bg-[#cf94af] text-white p-4 rounded-lg w-50 translate-y-2"
          href="https://wa.me/7298936043?text=Teamo❤"
          target="_blank"
          rel="noreferer"
        >
          Te amo❤
        </a>
      </div>
    </motion.article>
  );
};
