// components/SymptomSection.js
import Image from 'next/image';
import styles from './SymptomSection.module.css';

export default function SymptomSection({ keyword, hasKeyword }) {
  const titleLarge = hasKeyword 
    ? `${keyword} 현상이 반복된다면` 
    : '막힘 증상이 반복된다면';
    
  const titleSmall = '막힘 구간 확인이 필요합니다';

  return (
    <section className={styles.symptomSection}>
      {/* 배경 이미지 */}
      <Image 
        src="/images/symptom_bg.png" 
        alt="배수구 내시경 작업자 뒷모습 배경" 
        fill
        priority
        className={styles.bgImage}
      />
      {/* 어두운 딥네이비 오버레이 (70% 농도) */}
      <div className={styles.overlay}></div>

      <div className={styles.container}>
        <h2 className={styles.title}>
          <span className={styles.titleLarge}>{titleLarge}</span>
          <span className={styles.titleSmall}>{titleSmall}</span>
        </h2>
        
        <p className={styles.content}>
          물이 천천히 빠지거나, 배수구 냄새가 올라오거나,<br />
          같은 위치가 반복해서 막힌다면<br />
          겉으로 보이는 위치와 실제 막힌 구간이 다를 수 있습니다.
        </p>
        
        <p className={styles.subContent}>
          현재 증상과 사용 공간을 알려주시면<br />
          확인이 필요한 부분을 안내드립니다.
        </p>
      </div>
    </section>
  );
}
