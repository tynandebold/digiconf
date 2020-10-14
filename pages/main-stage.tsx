import Head from 'next/head';
import { NextPage } from 'next';

import Breadcrumb from '../components/Breadcrumb';
import styles from '../styles/Home.module.css';

type Props = {
  path: string;
};

const MainStage: NextPage<Props> = ({ path }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>DigiConf Prototype</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <img src="/main-stage.jpg" alt="Main Stage" className={styles.image} />
      <Breadcrumb path={path} title="V-EXPO 04.09.2020" />
    </div>
  );
};

MainStage.getInitialProps = async (ctx) => {
  return { path: ctx.pathname };
};

export default MainStage;
