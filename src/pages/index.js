import React, { useCallback, useEffect, useRef, useState } from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageFeatures from "../components/HomepageFeatures";
import { animated, config, to, useSpring } from "react-spring";
import BlogCard from "../components/BlogCard";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const featureRef = useRef(null);
  const [bgImg, setBgImg] = useState("../../static/img/bg.png");
  const [bgImgStyle, setBgImgStyle] = useSpring(() => ({
    width: "100vw",
    height: "100vh",
    position: "fixed",
    zIndex: -1,
    opacity: 1,
  }));
  const [titleStyle, setTitleStyle] = useSpring(() => ({
    fontSize: "0em",
    textAlign: "center",
    opacity: 0,
    fontWeight: "normal",
    marginTop: "0vh",
  }));
  const [name, setName] = useSpring(() => ({
    fontSize: "0em",
    textAlign: "center",
    opacity: 0,
    color: "white",
    fontWeight: "normal",
    textShadow: "5px 5px 5px gray",
  }));
  const [introduce, setIntroduce] = useSpring(() => ({
    fontSize: "1.5em",
    width: "50vw",
    marginLeft: "25vw",
    fontWeight: "bold",
    opacity: 0,
    marginTop: "0vh",
  }));
  const changeBackgroundImageStyle = (toTop) => {
    if (toTop > 0 && toTop < window.innerHeight) {
      setBgImgStyle.start({
        opacity: 0.5,
        delay: 300,
        config: { duration: 500 },
      });
      setIntroduce({
        fontSize: "1.5em",
        width: "50vw",
        marginLeft: "25vw",
        fontWeight: "bold",
        opacity: 0,
        marginTop: "0vh",
      });
      setTitleStyle({
        fontSize: "0em",
        textAlign: "center",
        opacity: 0,
        fontWeight: "normal",
        marginTop: "0vh",
      });
      setName({
        fontSize: "0em",
        textAlign: "center",
        opacity: 0,
        color: "white",
        fontWeight: "normal",
        textShadow: "5px 5px 5px gray",
      });
    } else if (toTop > window.innerHeight) {
      setBgImgStyle.start({ opacity: 1, config: { duration: 500 } });
      setIntroduce({
        opacity: 1,
        marginTop: "1vh",
        delay: 1000,
      });
      setTitleStyle({
        opacity: 1,
        fontSize: "3.5em",
        textAlign: "center",
        fontWeight: "bold",
        delay: 500,
        config: { duration: 300 },
      });
      setName({
        opacity: 1,
        color: "#006DFE",
        fontSize: "3.5em",
        textAlign: "center",
        fontWeight: "bold",
        delay: 500,
        config: { duration: 500 },
      });
    }
  };
  useEffect(() => {
    setTitleStyle({
      opacity: 1,
      fontSize: "3.5em",
      textAlign: "center",
      fontWeight: "bold",
      config: { duration: 300 },
    });
    setName({
      opacity: 1,
      color: "#006DFE",
      fontSize: "3.5em",
      textAlign: "center",
      fontWeight: "bold",
      delay: 500,
      config: { duration: 500 },
    });
    setIntroduce({
      opacity: 1,
      delay: 1000,
      marginTop: "1vh",
      config: { duration: 500 },
    });
    window.addEventListener("scroll", () => {
      if (featureRef.current) {
        // console.log(featureRef.current.getBoundingClientRect().top);
        changeBackgroundImageStyle(
          featureRef.current.getBoundingClientRect().top,
        );
      }
    });
    return () =>
      window.removeEventListener("scroll", () => {
        if (featureRef.current) {
          // console.log(featureRef.current.getBoundingClientRect().top);
          changeBackgroundImageStyle(
            featureRef.current.getBoundingClientRect().top,
          );
        }
      });
  }, []);
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <div
          style={{
            height: "100vh",
            width: "100vw",
            overflow: "hidden",
          }}
        >
          <animated.img src={bgImg} style={bgImgStyle} alt={"none"} />
          <div
            style={{
              width: "75vw",
              paddingTop: "20vh",
              marginLeft: "25vw",
            }}
          >
            <animated.span style={titleStyle}>Hello,我是</animated.span>
            <animated.span style={name}>Tohsaka888</animated.span>
          </div>
          <animated.div style={introduce}>
            欢迎来到我的博客。前端小白，主要使用React框架，当然React Native也比不可少。开发过<strong
              style={{ color: "blueviolet" }}
            >
              常工云音乐Web端和App
            </strong>
            。如果你也在学习前端，欢迎和我一起讨论。博客中我会记录学习过程中遇到的问题(JavaScript,TypeScript,Linux,React,React
            Native,Deno,Node,Css,Styled-components,React-spring,Java等等)。争取每日更新！
          </animated.div>
        </div>
        <div ref={featureRef} style={{ height: "100vh" }}>
          <HomepageFeatures />
        </div>
      </main>
      <div style={{ height: "100vh" }}>
        <BlogCard setBgImg={setBgImg} setBgimgStyle={setBgImgStyle} />
      </div>
    </Layout>
  );
}
