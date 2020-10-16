import styles from './SidePanel.module.css';

export default function SidePanel({ hidden = true }) {
  return (
    <div
      className={styles.panel}
      style={{
        transform: hidden ? 'translateX(-101%)' : 'translateX(0%)',
      }}
    >
      <img src="/side-panel.png" alt="Side panel" />
    </div>
  );
}
