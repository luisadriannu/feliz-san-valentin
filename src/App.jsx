import tulipanes from "./assets/img/tulipanes.jpg";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { motion } from "framer-motion";
import { Pregunta } from "./pages/Pregunta";
import { Gracias } from "./pages/Gracias";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
        className="relative h-screen w-screen overflow-hidden"
      >
        <img
          className=" absolute top-0 left-0 w-full h-full object-cover"
          src={tulipanes}
          loading="lazy"
          alt="Tulipanes"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative flex flex-col items-center justify-center h-full text-white text-center font-bold text-shadow"
        >
          <h1 className="text-4xl">
            Buen día <br /> preciosa flor🌷❤
          </h1>
          <p className="text-lg w-80 mt-4">
            <span className="text-purple-300">Abi</span>, desde el fondo de mi
            corazón tengo que decirte algo... ¿Quieres saber lo que es?
          </p>

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
            onClick={() => navigate("/pregunta")}
            href="/pregunta"
            className="mt-6 cursor-pointer bg-purple-500 text-white p-4 rounded-lg w-50 translate-y-2 hover:bg-purple-400 transition"
          >
            ¡Siii me encantaría!🍓
          </motion.button>
        </motion.div>
      </motion.div>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pregunta" element={<Pregunta />} />
        <Route path="/gracias" element={<Gracias />} />
      </Routes>
    </Router>
  );
}

export default App;
