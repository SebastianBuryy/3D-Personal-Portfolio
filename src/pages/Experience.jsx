import React, { Suspense, useMemo, useState, useEffect, useRef } from "react";
import { workExperiences } from "../constants";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import MyModel from "../components/MyModel";
import CanvasLoader from "../components/CanvasLoader";
import { useMediaQuery } from "react-responsive";

const Experience = () => {
  const [animationName, setAnimationName] = useState("idle");
  const isDesktop = useMediaQuery({ query: "(min-width: 640px)" });

  const canvasRef = useRef();
  const [render, setRender] = React.useState(true);

  useEffect(() => {
    // Create an Intersection Observer to detect when the canvas is in view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log("Canvas is visible, resuming rendering.");
          setRender(true); // Resume rendering when visible
        } else {
          console.log("Canvas is not visible, pausing rendering.");
          setRender(false); // Pause rendering when not visible
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the canvas is visible
      }
    );

    if (canvasRef.current) {
      observer.observe(canvasRef.current); // Start observing the canvas container
    }

    return () => {
      if (canvasRef.current) {
        observer.unobserve(canvasRef.current); // Clean up the observer on component unmount
      }
    };
  }, []);

  return (
    <section id="work" className="c-space my-20 mb-[-60px] sm:mb-0">
      <div className="w-full text-white-600">
        <h3 className="head-text">Experience</h3>

        <div className="work-container">
          {isDesktop && (
            <div ref={canvasRef} className="work-canvas">
              {render && (
                <Canvas>
                  <ambientLight intensity={7} />
                  <spotLight
                    position={[10, 10, 10]}
                    angle={0.15}
                    penumbra={1}
                  />
                  <directionalLight position={[10, 10, 10]} intensity={1} />
                  <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                  />
                  <Suspense fallback={<CanvasLoader />}>
                    <MyModel
                      position-y={-1.5}
                      scale={2}
                      animationName={animationName}
                    />
                  </Suspense>
                </Canvas>
              )}
            </div>
          )}

          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {workExperiences.map(
                (
                  { id, name, pos, duration, title, icon, animation },
                  index
                ) => (
                  <div
                    key={id}
                    className="work-content_container group"
                    onClick={() => setAnimationName(animation.toLowerCase())}
                    onPointerOver={() =>
                      setAnimationName(animation.toLowerCase())
                    }
                    onPointerOut={() => setAnimationName("idle")}
                  >
                    <div className="flex flex-col h-full justify-start items-center py-2">
                      <div className="work-content_logo">
                        <img src={icon} alt="logo" className="w-full h-full" />
                      </div>
                      <div className="work-content_bar" />
                    </div>
                    <div className="sm:p-5 px-2.5 py-5">
                      <p className="font-bold text-white-800">{name}</p>
                      <div className="flex justify-between">
                        <p className="text-md mb-5">{pos}</p>
                        <p className="text-sm mb-5">{duration}</p>
                      </div>
                      <ul>
                        {title.map((item, index) => (
                          <li
                            key={index}
                            className="mb-5 group-hover:text-white transition ease-in-out duration-500"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
