import Head from 'next/head';
import { useRouter } from 'next/router';

import Breadcrumb from '../components/Breadcrumb';
import VenueIcon from '../components/VenueIcon';
import styles from '../styles/Home.module.css';

export default function MainStage() {
  const router = useRouter();

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
        <img src="/main-stage.jpg" alt="Main Stage" className={styles.image} />
        <video
          autoPlay
          className={styles.stageVideo}
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="/main-stage.mp4" type="video/mp4"></source>
        </video>
        <Breadcrumb path={router.pathname} title="V-EXPO 04.09.2020" />
        <VenueIcon
          altText="Venue icon"
          path="/venue.png"
          position={[92, 3]}
          width="85"
        />
      </div>
    </div>
  );
}
