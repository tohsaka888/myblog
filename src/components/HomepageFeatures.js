import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import {QqOutlined} from '@ant-design/icons'

const FeatureList = [
  {
    title: 'QQ',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        <QqOutlined style={{fontSize: "1.3em"}}/><span style={{fontSize: "1.3em"}}>2099527121</span>
      </>
    ),
  },
  {
    title: 'Github',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        https://github.com/tohsaka888
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
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
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
