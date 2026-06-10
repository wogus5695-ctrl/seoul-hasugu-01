import { PHONE_NUMBER } from '@/constants/phone';
import styles from './CallToAction.module.css';

export default function CallToAction() {
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <div className={styles.box}>
          <h2 className={styles.title}>
            <span className={styles.highlightBg}>물이 안 빠지거나 역류</span>한다면<br />
            전화로 증상부터 알려주세요
          </h2>
          <p className={styles.descText}>
            막힌 위치, 물 빠짐 속도, 역류 여부를 알려주시면<br />
            현장 확인이 필요한 부분을 안내드립니다.
          </p>
          
          <div className={styles.actionBtn}>
            <a href={`tel:${PHONE_NUMBER}`} className="btn btn-primary">
              📞 전화로 문의하기
            </a>
          </div>
          
          <p className={styles.caution}>※ 통화 후 현장 위치와 일정에 맞춰 방문 가능 여부를 안내드립니다.</p>
        </div>
      </div>
    </section>
  );
}
