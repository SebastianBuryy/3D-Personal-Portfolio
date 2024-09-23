import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Programmer from "../components/Programmer";
import CanvasLoader from "../components/CanvasLoader";
import {
  EffectComposer,
  Bloom,
  ChromaticAberration,
  Vignette,
} from "@react-three/postprocessing";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import Button from "../components/Button";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 640 });

  return (
    <section id="home" className="w-full flex flex-col relative min-h-screen">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-28 c-space gap-3">
        <p className="sm:text-4xl text-xl font-medium text-white text-center font-generalsans">
          Hi, I'm Sebastian <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          I like to build cool things!
        </p>
      </div>

      <div className="w-full h-full inset-0 absolute">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 15]} />
            <Programmer
              scale={isMobile ? 3.5 : 5}
              position={[0, 0, 0]}
              rotation={[0, -Math.PI / 2, 0]}
            />
            <OrbitControls
              autoRotate
              enablePan={false}
              enableZoom={false}
              autoRotateSpeed={1}
            />
            <ambientLight intensity={1} />
            <directionalLight
              castShadow
              position={[5, 5, 5]}
              intensity={50}
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
            />
            <pointLight position={[-5, 5, -5]} intensity={20} />
            <spotLight
              position={[10, 10, 10]}
              angle={0.3}
              intensity={25.0}
              castShadow
            />

            <EffectComposer>
              <Bloom
                intensity={0.3}
                luminanceThreshold={0.9}
                luminanceSmoothing={0.025}
              />
              <ChromaticAberration offset={[0.0008, 0.0008]} />
              <Vignette darkness={1.5} offset={0.1} />
            </EffectComposer>
          </Suspense>
        </Canvas>
      </div>

      <div className="w-full flex absolute justify-center items-center bottom-10 xs:bottom-[5px] left-0 right-0 mx-auto">
        <a href="#about">
          <div
            className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary
          flex items-start justify-center p-2 hover:shadow-glow"
          >
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full mb-1 bg-white hover:shadow-glow"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
