import Head from 'next/head';
import { NextPage } from 'next';

import Anchor from '../components/Anchor';
import Breadcrumb from '../components/Breadcrumb';
import styles from '../styles/Home.module.css';

type Props = {
  path: string;
};

const Home: NextPage<Props> = ({ path }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>DigiConf Prototype</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <div className={styles.content}>
        <video
          autoPlay
          className={styles.video}
          loop
          muted
          playsInline
          poster="/lobby-poster.jpg"
          preload="auto"
        >
          <source src="/lobby.mp4" type="video/mp4"></source>
        </video>
        <Anchor
          destination="Main Stage"
          href="/main-stage"
          position={[66, 25]}
        />
        <Anchor
          destination="Breakout Lobby"
          href="/breakout-lobby"
          position={[32, 40]}
        />
        <Anchor
          destination="Information"
          href="/information"
          position={[83, 71]}
        />
        <Breadcrumb path={path} title="V-EXPO 04.09.2020" />
      </div>
    </div>
  );
};

Home.getInitialProps = async (ctx) => {
  return { path: ctx.pathname };
};

export default Home;
