import React, { useEffect } from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "../pages/index.module.css";
import HomepageFeatures from "./HomepageFeatures";
import { useSpring, animated } from "react-spring";
import { Tag } from "antd";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const [headStyle, setHeadStyle] = useSpring(() => ({
    opacity: 0,
  }));
  const [title, setTitle] = useSpring(() => ({
    opacity: 0,
    transform: "translateY(3em)",
  }));
  useEffect(() => {
    setHeadStyle({
      opacity: 1,
      config: { duration: 1000 },
    });
    setTitle({
      opacity: 1,
      transform: "translateY(0)",
      config: {
        mass: 3,
        friction: 45,
        tension: 460,
        // duration: 300,
      },
    });
  });
  return (
    <div style={{ height: "98vh" }}>
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <animated.div style={headStyle}>
            <animated.div style={title}>
              <div
                style={{
                  fontSize: "2.8em",
                  color: "black",
                  fontWeight: "bold",
                  textShadow: '3px 3px 3px white'
                }}
              >
                Hello,我是
              </div>
              <h1
                className="hero__title"
                style={{
                  color: "whitesmoke",
                  textShadow: "0.1em 0.1em 0.1em black",
                }}
              >
                Tohsaka888
              </h1>
            </animated.div>
            {/* <p className="hero__subtitle">{siteConfig.tagline}</p> */}
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="/docs/JavaScript/JavaScript"
                style={{ background: "whitesmoke", boxShadow: "0 0 2px 2px gray" }}
              >
                read doc
              </Link>
            </div>
          </animated.div>
        </div>
      </header>
    </div>
  );
}

export default function Mobile() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
