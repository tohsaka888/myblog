import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import React, { useEffect, useRef } from "react";

export default function ParalaxIndex() {
  const parallaxRef = useRef();
    useEffect(() => {
        console.log(parallaxRef.current)
        return () => {
            cleanup
        }
    }, [])

  return (
    <Parallax pages={4} ref={parallaxRef}>
      <ParallaxLayer offset={0} speed={2} style={{ background: "red" }} />
    </Parallax>
  );
}
