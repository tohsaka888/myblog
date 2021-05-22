import React, { useEffect, useRef, useState } from "react";
import { animated, SpringValue, useSpring, useTransition } from "react-spring";
import { Tag, Button } from "antd";
import { Link } from "react-router-dom";
import { DoubleLeftOutlined, DoubleRightOutlined } from "@ant-design/icons";

type BlogCardInfo = {
  title?: string;
  tag?: string[];
  briefInfo?: string;
  setBgImg?: any;
  setBgimgStyle?: any;
};

const arr = [1, 2, 3];

const tempBlogInfo = [
  {
    title: "JavaScrpt",
    tag: "js",
    intro:
      "JavaScript（通常缩写为JS）是一种高级的、解释型的编程语言[8]。JavaScript是一门基于原型、头等函数的语言[9]，是一门多范式的语言，它支持面向对象程序设计，命令式编程，以及函数式编程。它提供语法来操控文本、数组、日期以及正则表达式等，不支持I/O，比如网络、存储和图形等，但这些都可以由它的宿主环境提供支持。它已经由ECMA（欧洲电脑制造商协会）通过ECMAScript实现语言的标准化[8]。它被世界上的绝大多数网站所使用，也被世界主流浏览器（Chrome、IE、Firefox、Safari、Opera）支持。",
  },
  {
    title: "TypeScript",
    tag: "ts",
    intro:
      "TypeScript是为开发大型应用而设计的，并且TypeScript可转译成JavaScript。由于TypeScript是JavaScript的严格超集，任何现有的JavaScript程序都是合法的TypeScript程序。TypeScript编译器本身也是用TypeScript编写，并被转译为JavaScript",
  },
  {
    title: "React",
    tag: "react",
    intro:
      "React 使创建交互式 UI 变得轻而易举。为你应用的每一个状态设计简洁的视图，当数据改变时 React 能有效地更新并正确地渲染组件。创建拥有各自状态的组件，再由这些组件构成更加复杂的 UI。无论你现在正在使用什么技术栈，你都可以随时引入 React 来开发新特性，而不需要重写现有代码。",
  },
];

export default function BlogCard({
  title = "BlogTitle",
  tag = ["web"],
  briefInfo = "简介",
  setBgImg,
  setBgimgStyle,
}: BlogCardInfo) {
  const [index, setIndex] = useState(0);
  const [preIndex, setPreIndex] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const [transition, setTransition] = useSpring(() => ({
    transform: "translate3d(120%,0,0)",
    opacity: 0,
    display: "none",
  }));
  const [titleStyle, setTitleStyle] = useSpring(() => ({
    fontSize: "3em",
    fontWeight: "bold",
    paddingTop: "0px",
    color: "black",
    boxShadow: "0px 0px 0px black",
    opacity: 0,
    textShadow: "3px 3px 3px gray",
  }));
  const [textStyle, setTextStyle] = useSpring(() => ({
    fontSize: "1.3em",
    fontWeight: "bold",
    marginTop: "0px",
    color: "black",
    boxShadow: "0px 0px 0px black",
    opacity: 0,
  }));
  const [tagStyle, setTagStyle] = useSpring(() => ({
    opacity: 0,
    marginTop: "0px",
  }));
  const transitions = useTransition(index, {
    keys: null,
    from: {
      opacity: 0,
      transform:
        index >= preIndex ? "translate3d(100%,0,0)" : "translate3d(-100%,0,0)",
      display: "none",
    },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)", display: "block" },
    leave: {
      opacity: 0,
      transform:
        index >= preIndex ? "translate3d(-50%,0,0)" : "translate3d(50%,0,0)",
      display: "none",
    },
  });
  const scollFunc = () => {
    if (cardRef.current) {
      if (
        cardRef.current.getBoundingClientRect().top > 0 &&
        cardRef.current.getBoundingClientRect().top < window.innerHeight
      ) {
        setBgImg("https://w.wallhaven.cc/full/lm/wallhaven-lmm2p2.png");
        setBgimgStyle({ opacity: 1, config: { duration: 1500 } });
        setTransition({
          transform: "translate3d(0,0,0)",
          // delay: 500,
          config: { duration: 800 },
          opacity: 1,
          display: "block",
        });
        setTitleStyle({
          paddingTop: "10px",
          delay: 1000,
          color: "white",
          opacity: 1,
        });
        setTextStyle({
          marginTop: "20px",
          delay: 1000,
          color: "white",
          opacity: 1,
        });
        setTagStyle({ opacity: 1, delay: 1000, marginTop: "10px" });
      } else {
        setBgImg("https://w.wallhaven.cc/full/pk/wallhaven-pk8pzj.png");
        setBgimgStyle({ opacity: 0.5, config: { duration: 2000 } });
        setTransition({
          transform: "translate3d(120%,0,0)",
          config: { duration: 800 },
          opacity: 0,
          display: "none",
        });
        setTitleStyle({
          fontSize: "3em",
          fontWeight: "bold",
          paddingTop: "0px",
          color: "black",
          boxShadow: "0px 0px 0px black",
          opacity: 0,
        });
        setTextStyle({
          fontSize: "1.3em",
          fontWeight: "bold",
          marginTop: "0px",
          color: "black",
          boxShadow: "0px 0px 0px black",
          opacity: 0,
        });
        setTagStyle({
          opacity: 0,
          marginTop: "0px",
        });
      }
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scollFunc);
    return () => window.removeEventListener("scroll", scollFunc);
  }, []);
  return (
    <animated.div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "100vh",
      }}
    >
      <div>
        <DoubleLeftOutlined
          style={{ fontSize: "5em", marginLeft: "5vw", color: "white" }}
          onClick={() => {
            setTitleStyle({
              fontSize: "3em",
              fontWeight: "bold",
              paddingTop: "0px",
              color: "black",
              boxShadow: "0px 0px 0px black",
              opacity: 0,
            });
            setTextStyle({
              fontSize: "1.3em",
              fontWeight: "bold",
              marginTop: "0px",
              color: "black",
              boxShadow: "0px 0px 0px black",
              opacity: 0,
            });
            setTagStyle({
              opacity: 0,
              marginTop: "0px",
            });
            setPreIndex(index);
            if (index - 1 >= 0) {
              setIndex(index - 1);
            } else {
              alert("前面没有了...");
            }
            setTitleStyle({
              paddingTop: "10px",
              delay: 500,
              color: "white",
              opacity: 1,
            });
            setTextStyle({
              marginTop: "20px",
              delay: 500,
              color: "white",
              opacity: 1,
            });
            setTagStyle({ opacity: 1, delay: 500, marginTop: "10px" });
          }}
        />
      </div>
      <div ref={cardRef}>
        <animated.div style={transition}>
          {transitions((style, i) => {
            return (
              <animated.div style={style}>
                <div
                  style={{
                    boxShadow: "0px 0px 5px 5px #f1efef",
                    width: "70vw",
                    height: "50vh",
                    borderRadius: "20px",
                    paddingLeft: "2vw",
                  }}
                >
                  <animated.div style={titleStyle}>
                    {tempBlogInfo[i].title}
                  </animated.div>
                  <animated.div style={tagStyle}>
                    <Tag color={"#108ee9"}>{tempBlogInfo[i].tag}</Tag>
                  </animated.div>
                  <animated.div style={textStyle}>
                    {tempBlogInfo[i].intro}
                  </animated.div>
                  <animated.div style={tagStyle}>
                    <Link to={"/docs/JavaScript"}>
                      <Button
                        type={"primary"}
                        style={{
                          position: "absolute",
                          top: "42vh",
                          left: "62vw",
                        }}
                      >
                        查看详情
                      </Button>
                    </Link>
                  </animated.div>
                </div>
              </animated.div>
            );
          })}
        </animated.div>
      </div>
      <div>
        <DoubleRightOutlined
          style={{ fontSize: "5em", marginRight: "5vw", color: "white" }}
          onClick={() => {
            setTitleStyle({
              fontSize: "3em",
              fontWeight: "bold",
              paddingTop: "0px",
              color: "black",
              boxShadow: "0px 0px 0px black",
              opacity: 0,
            });
            setTextStyle({
              fontSize: "1.3em",
              fontWeight: "bold",
              marginTop: "0px",
              color: "black",
              boxShadow: "0px 0px 0px black",
              opacity: 0,
            });
            setTagStyle({
              opacity: 0,
              marginTop: "0px",
            });
            setPreIndex(index);
            setIndex((index + 1) % tempBlogInfo.length);
            setTitleStyle({
              paddingTop: "10px",
              delay: 500,
              color: "white",
              opacity: 1,
            });
            setTextStyle({
              marginTop: "20px",
              delay: 500,
              color: "white",
              opacity: 1,
            });
            setTagStyle({ opacity: 1, delay: 500, marginTop: "10px" });
          }}
        />
      </div>
    </animated.div>
  );
}
