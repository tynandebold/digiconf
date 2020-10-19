import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './Breadcrumb.module.css';

type Props = {
  path: string;
  title: string;
};

export default function Breadcrumb({ path, title }: Props) {
  const router = useRouter();
  const [location, setLocation] = useState('');

  useEffect(() => {
    if (path === '/') {
      setLocation('Expo Atrium');
    } else {
      const str = path.substring(1);

      if (str.includes('-')) {
        const split = str.split('-');
        setLocation(`${split[0]} ${split[1]}`);
      } else {
        setLocation(str);
      }
    }
  }, [path]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.links}>
        <Link href="/">
          <a className={styles.link}>H</a>
        </Link>
        <Link href="/">
          <span
            className={styles.link}
            onClick={() => (router.pathname === '/' ? null : router.back())}
          >{`<-`}</span>
        </Link>
      </div>
      <div className={styles.text}>
        <div className={styles.title}>{title}</div>
        <div className={styles.location}>{location}</div>
      </div>
    </div>
  );
}
