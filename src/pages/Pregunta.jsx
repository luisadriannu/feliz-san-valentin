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
      <div className="relative flex flex-col items-center justify-center h-full text-white text-center font-bold">
        <h2 className="text-white">¿</h2>
        <p className="font-bold">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
          molestias corrupti vitae officiis doloremque amet commodi eaque
          nesciunt assumenda fugit, earum inventore officia, soluta nobis!
          Accusamus cupiditate optio minus modi.
        </p>

        <button
          onClick={() => navigate("/gracias")}
          href="/pregunta"
          className="mt-6 cursor-pointer bg-purple-500 text-white p-4 rounded-lg w-50 translate-y-2"
        >
          Me encantas
        </button>
      </div>
    </motion.article>
  );
};
