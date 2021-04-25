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
        setBgImg("../../static/img/1.png");
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
        setBgImg("../../static/img/bg.png");
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
            setIndex(index - 1);
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
                    {title + index}
                  </animated.div>
                  <animated.div style={tagStyle}>
                    <Tag color={"#108ee9"}>{tag}</Tag>
                  </animated.div>
                  <animated.div style={textStyle}>{briefInfo}</animated.div>
                  <animated.div style={tagStyle}>
                    <Link to={"/docs/JavaScript"}>
                      <Button
                        type={"primary"}
                        style={{
                          position: "relative",
                          top: "20vh",
                          left: "60vw",
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
            setIndex(index + 1);
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
