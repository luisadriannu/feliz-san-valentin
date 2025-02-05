import { useNavigate } from "react-router-dom";
import tulipanes from "../assets/img/tulipanes2.jpg";
import { motion } from "framer-motion";

export const TeAmoAbigail = () => {
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

      <div className="absolute top-0 left-0 w-full h-full bg-black/15"></div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative flex flex-col items-center justify-center h-full text-white text-center font-bold text-shadow"
      >
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-16 text-red-700"
          >
            <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
          </svg>
        </motion.span>

        <motion.span
          className="text-5xl absolute top-5 left-5 -rotate-12"
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-16 text-red-700"
          >
            <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
          </svg>
        </motion.span>

        <p className="font-bold text-lg pt-4">
          Me concederias el honor de ser mi <br />
          <span className="text-pink-400 text-4xl">¿San Valentín?</span>
        </p>
        <p className="pt-6 mx-auto w-80">
          No vas a ser espectadora, cada día a tu lado es un regalo y este San
          Valentín quiero que sea aún más especial...
        </p>
        <p className="pt-2">Me encantaría compartirlo contigo.</p>
        <motion.button
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
          onClick={() => navigate("/tuEresMiSanValentin")}
          className="shadow mt-4 cursor-pointer bg-[#cf94af] text-white p-4 rounded-lg w-50 translate-y-2"
        >
          Por supuesto😻
        </motion.button>
      </motion.div>
    </motion.article>
  );
};
