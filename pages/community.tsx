import Head from 'next/head';
import { useRouter } from 'next/router';

import Anchor from '../components/Anchor';
import Breadcrumb from '../components/Breadcrumb';
import VenueIcon from '../components/VenueIcon';

import styles from '../styles/Home.module.css';

export default function Community() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
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
          preload="auto"
        >
          <source src="/community.mp4" type="video/mp4"></source>
        </video>
        <Anchor
          destination="Breakout Lobby"
          href="/breakout-lobby"
          position={[36, 29]}
        />
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
