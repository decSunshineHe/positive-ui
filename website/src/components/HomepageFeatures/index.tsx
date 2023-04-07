import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'React 18',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: <>用于构建用户界面的 JavaScript 库。</>,
  },
  {
    title: 'Ant Design 5',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: <>助力设计开发者「更灵活」地搭建出「更美」的产品，让用户「快乐工作」～</>,
  },
  {
    title: 'Docusaurus 2',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: <>快速构建高效的网站，专注处理内容。</>,
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
