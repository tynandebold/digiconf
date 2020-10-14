import Link from 'next/link';
import styles from './Anchor.module.css';

type Props = {
  destination: string;
  href: string;
  position: number[];
};

export default function Anchor({ destination, href, position }: Props) {
  return (
    <div
      className={styles.wrapper}
      style={{ left: `${position[0]}%`, top: `${position[1]}%` }}
    >
      <Link href={href}>
        <a className={styles.icon}>+</a>
      </Link>
      <Link href={href}>
        <a className={styles.anchor}>{destination}</a>
      </Link>
    </div>
  );
}
