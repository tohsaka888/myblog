import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";
import { QqOutlined, GithubOutlined, WechatOutlined } from "@ant-design/icons";
import { animated, useSpring } from "react-spring";
import { useRef } from "react";
import { useEffect } from "react";

const FeatureList = [
  {
    title: "QQ",
    Svg: require("../../static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <span style={{ fontSize: "1.3em" }}>
        <QqOutlined style={{ fontSize: "1.3em", marginRight: "10px" }} />
        2099527121
      </span>
    ),
  },
  {
    title: "Github",
    Svg: require("../../static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <span style={{ fontSize: "1.3em" }}>
        <GithubOutlined style={{ fontSize: "1.3em", marginRight: "10px" }} />
        https://github.com/tohsaka888
      </span>
    ),
  },
  {
    title: "WeChat",
    Svg: require("../../static/img/undraw_docusaurus_react.svg").default,
    description: (
      <span style={{ fontSize: "1.3em" }}>
        <WechatOutlined style={{ fontSize: "1.3em", marginRight: "10px" }} />
        qaz156132264
      </span>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  const [features, setFeatures] = useSpring(() => ({
    transform: "scale(0.1,0.1)",
    opacity: 0,
  }));
  const scrollFunc = () => {
    if (featuresRef.current) {
      if (
        featuresRef.current.getBoundingClientRect().top > -window.innerHeight * 0.5 &&
        featuresRef.current.getBoundingClientRect().top < window.innerHeight
      ) {
        setFeatures({
          transform: "scale(1,1)",
          opacity: 1,
          config: { duration: 800 },
        });
      } else {
        setFeatures({ transform: "scale(0.1,0.1)", opacity: 0 });
      }
    }
  };
  const featuresRef = useRef(null);
  useEffect(() => {
    window.addEventListener("scroll", scrollFunc);
    return () => window.removeEventListener("scroll", scrollFunc);
  }, []);
  return (
    <animated.div style={features} ref={featuresRef}>
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </animated.div>
  );
}
