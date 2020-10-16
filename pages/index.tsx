import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Anchor from '../components/Anchor';
import Breadcrumb from '../components/Breadcrumb';
import SidePanel from '../components/SidePanel';
import VenueIcon from '../components/VenueIcon';
import styles from '../styles/Home.module.css';

export default function Home() {
  const router = useRouter();
  const [hideSidePanel, setHideSidePanel] = useState(true);

  const handleSidePanelExpand = () => {
    setHideSidePanel(!hideSidePanel);
  };

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
        <div
          className={styles.sidePanelBtn}
          onClick={handleSidePanelExpand}
          style={{ zIndex: 1 }}
        >
          ☰
        </div>
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
        <Breadcrumb path={router.pathname} title="V-EXPO 04.09.2020" />
        <SidePanel hidden={hideSidePanel} />
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
