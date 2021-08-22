import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '技术栈',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        不同的时间/地点 -> 不同想法
      </>
    ),
  },
  {
    title: '思考/眼界/生活',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        阿巴阿巴阿巴
      </>
    ),
  },
  {
    title: 'Maybe More',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        不仅仅作为一个 Blog 
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
