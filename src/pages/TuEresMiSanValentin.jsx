import { motion } from "framer-motion";
import Confetti from "react-confetti";
import gatitos from "../assets/img/gatitos.jpg";

export const TuEresMiSanValentin = () => {
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
      <motion.span
        className="text-5xl absolute top-5 right-5 -rotate-12"
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
        className="text-5xl absolute top-3 left-5 rotate-5"
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
        className="text-5xl absolute top-3 left-28 -rotate-2"
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
        className="text-5xl absolute top-3 right-26 -rotate-2"
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
      <div className="absolute top-0 left-0 w-full h-full bg-black/15"></div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative flex flex-col items-center justify-center h-full text-white text-center font-bold text-shadow"
      >
        <h2 className="text-4xl font-bold">Gracias mi niña hermosa💘</h2>

        <p className="text-lg pt-6 w-80">
          No sabes lo feliz que me hace saber que compartiremos ese día tan
          especial <span className="text-amber-300 text-xl">uwu</span>
        </p>

        <motion.a
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
          className="shadow mt-4 cursor-pointer bg-yellow-500 text-white p-4 rounded-lg w-50 translate-y-2 flex justify-center gap-1"
          href="https://wa.me/7298936043?text=Teamo❤"
          target="_blank"
          rel="noreferer"
        >
          Te amo💗
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
            />
          </svg>
        </motion.a>
      </motion.div>
    </motion.article>
  );
};
