import { PHONE_NUMBER } from '@/constants/phone';
import styles from './FloatingCTA.module.css';

export default function FloatingCTA() {
  return (
    <div className={styles.wrapper}>
      <a href={`tel:${PHONE_NUMBER}`} className={styles.button} aria-label="전화하기">
        <span className={styles.icon}>📞</span>
        <span className={styles.text}>전화하기</span>
      </a>
    </div>
  );
}
