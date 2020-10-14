import Head from 'next/head';
import { NextPage } from 'next';

import Breadcrumb from '../components/Breadcrumb';

import styles from '../styles/Home.module.css';

type Props = {
  path: string;
};

const Information: NextPage<Props> = ({ path }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>DigiConf Prototype</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <video
        autoPlay
        className={styles.video}
        loop
        muted
        playsInline
        poster="information-poster.png"
        preload="auto"
      >
        <source src="/information-desk.mp4" type="video/mp4"></source>
      </video>
      <Breadcrumb path={path} title="V-EXPO 04.09.2020" />
    </div>
  );
};

Information.getInitialProps = async (ctx) => {
  return { path: ctx.pathname };
};

export default Information;
