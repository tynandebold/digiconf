import Head from 'next/head';
import { useRouter } from 'next/router';

import Anchor from '../components/Anchor';
import Breadcrumb from '../components/Breadcrumb';
import VenueIcon from '../components/VenueIcon';
import styles from '../styles/Home.module.css';

export default function BreakoutLobby() {
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
        <img
          src="/breakout-lobby.jpg"
          alt="Breakout Lobby"
          className={styles.image}
        />
        <Anchor
          destination="Breakout Room 1"
          href="/breakout-room-1"
          position={[44.25, 51]}
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
