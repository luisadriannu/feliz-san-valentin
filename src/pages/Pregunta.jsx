import { useNavigate } from "react-router-dom";
import tulipanes from "../assets/img/tulipanes2.jpg";
import { motion } from "framer-motion";

export const Pregunta = () => {
  const navigate = useNavigate();

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      className="relative h-screen w-screen overflow-hidden"
    >
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={tulipanes}
        loading="lazy"
        alt="Tulipanes"
      />
      <div className="relative flex flex-col items-center justify-center h-full text-white text-center font-bold text-shadow">
        <h2 className="text-red-200 text-4xl pb-6">Abigail💖</h2>
        <motion.span
          className="text-5xl absolute bottom-7 right-5 rotate-12"
          initial={{ scale: 1 }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          ❤
        </motion.span>

        <p className="font-bold text-lg pt-4">
          Me concederias el honor de ser mi <br />
          <span className="text-red-500 text-4xl">¿San Valentín?</span>
        </p>
        <p className="pt-6">
          No vas a ser espectadora, cada día a tu lado es un regalo y este San
          Valentín quiero que sea aun más especial... Me encantaría compartirlo
          contigo.
        </p>
        <button
          onClick={() => navigate("/gracias")}
          href="/gracias"
          className="shadow mt-4 cursor-pointer bg-[#cf94af] text-white p-4 rounded-lg w-50 translate-y-2"
        >
          Por supuesto😻
        </button>
      </div>
    </motion.article>
  );
};
