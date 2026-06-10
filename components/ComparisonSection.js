// components/ComparisonSection.js
import styles from './ComparisonSection.module.css';

export default function ComparisonSection() {
  return (
    <section id="comparison" className={`${styles.section} section`}>
      <div className="container">
        <h2 className="section-title">비교하면 확실해집니다</h2>
        <p className="section-desc">
          보이지 않는 배관 속 문제를 정밀 진단하는 전문가와 임시방편 단순 해결 방식의 극명한 차이를 확인하세요.
        </p>

        <div className={styles.grid}>
          {/* 일반 비전문 업체 카드 */}
          <div className={styles.cardBad}>
            <div className={styles.header}>
              <span className={styles.badgeWarning}>일반 비전문 업체</span>
              <h3 className={styles.cardTitle}>눈대중 및 구형 스프링 관통</h3>
            </div>
            
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <span className={styles.xIcon}>✕</span>
                <p className={styles.itemText}>배관 카메라 없이 추측성 배관 뚫기 시도</p>
              </li>
              <li className={styles.listItem}>
                <span className={styles.xIcon}>✕</span>
                <p className={styles.itemText}>단단히 굳은 기름 찌꺼기와 석회를 부수지 못함</p>
              </li>
              <li className={styles.listItem}>
                <span className={styles.xIcon}>✕</span>
                <p className={styles.itemText}>구멍만 살짝 내어 물만 내리므로 며칠 내 재막힘 발생</p>
              </li>
              <li className={styles.listItem}>
                <span className={styles.xIcon}>✕</span>
                <p className={styles.itemText}>재발 시 과도한 추가 수리비 요구나 연락 두절</p>
              </li>
            </ul>
          </div>

          {/* 하수구해결사 카드 */}
          <div className={styles.cardGood}>
            <div className={styles.header}>
              <span className={styles.badgeOk}>하수구해결사</span>
              <h3 className={styles.cardTitle}>내시경 탐지 & 정밀 스케일링</h3>
            </div>
            
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <span className={styles.oIcon}>✓</span>
                <p className={styles.itemText}>작업 전후 배관 내시경 화면을 고객에게 직접 모니터 공개</p>
              </li>
              <li className={styles.listItem}>
                <span className={styles.oIcon}>✓</span>
                <p className={styles.itemText}>수입산 샤프트 장비로 배관 원형 손상 없이 기름 슬러지 파쇄</p>
              </li>
              <li className={styles.listItem}>
                <span className={styles.oIcon}>✓</span>
                <p className={styles.itemText}>막힘 유발 요소를 완전히 스케일링 제거하여 새 배관처럼 원복</p>
              </li>
              <li className={styles.listItem}>
                <span className={styles.oIcon}>✓</span>
                <p className={styles.itemText}>시공 후 약정한 보증 기간 내 재막힘 시 철저한 A/S 지원</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
