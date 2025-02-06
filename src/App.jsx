import tulipanes from "./assets/img/tulipanes.jpg";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { motion } from "framer-motion";
import { TeAmoAbigail } from "./pages/TeAmoAbigail";
import { TuEresMiSanValentin } from "./pages/TuEresMiSanValentin";
import batman from "./assets/img/quieres-ser-mi-sanvalentin.jpg";
import { useState } from "react";

function Home() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

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
        <div className="absolute top-0 left-0 w-full h-full bg-black/15"></div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex flex-col items-center justify-center h-full text-white text-center font-bold text-shadow"
        >
          <h1 className="text-4xl md:text-8xl">
            Buen día <br /> preciosa flor🌷
          </h1>
          <p className="text-lg md:text-4xl w-80 md:w-full mt-4">
            <span className="text-purple-300">Abi</span>, desde el fondo de mí
            corazón y en este día tan especial que hoy cumplimos 1 año y 1
            mesesito tengo que decirte algo... ¿Quieres saber lo que es?👉👈
          </p>

          {show ? null : (
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
              onClick={() => {
                setShow(true);
              }}
              className="mt-6 md:text-lg cursor-pointer bg-purple-500 text-white p-4 rounded-lg w-50 translate-y-2 hover:bg-purple-400 transition"
            >
              ¡Siii me encantaría!🍓
            </motion.button>
          )}
        </motion.div>
      </motion.div>

      {show ? (
        <>
          <div className="w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <motion.img
              className="w-full h-full"
              initial={{ scale: 0.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
              src={batman}
              alt="Quieres ser mi san valentin"
            ></motion.img>

            <motion.button
              initial={{ scale: 0.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.8, ease: "easeOut" }}
              onClick={() => {
                navigate("/teAmoAbigail");
              }}
              className="absolute top-2 left-1/2 -translate-x-1/2 cursor-pointer bg-black text-white p-4 rounded-lg w-50 translate-y-2 hover:bg-gray-800transition font-bold"
            >
              Acepto💞
            </motion.button>
          </div>
        </>
      ) : null}
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teAmoAbigail" element={<TeAmoAbigail />} />
        <Route path="/tuEresMiSanValentin" element={<TuEresMiSanValentin />} />
      </Routes>
    </Router>
  );
}

export default App;
