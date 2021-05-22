import React, { useCallback, useEffect, useRef, useState } from "react";
import Pc from '../components/Pc'
import Mobile from '../components/Mobile'
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

export default function Home() {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleResize() {
    let width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    setWidth(width);
  }

  return <>{width > 768 ? <Pc /> : <Mobile />}</>;
}
