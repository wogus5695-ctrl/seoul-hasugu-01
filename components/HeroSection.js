// components/HeroSection.js
import Image from 'next/image';
import { PHONE_NUMBER } from '@/constants/phone';
import styles from './HeroSection.module.css';

export default function HeroSection({ keyword, hasKeyword }) {
  // 기본 키워드는 '하수구막힘'
  const displayKeyword = hasKeyword ? keyword : '하수구막힘';

  // 한글 조사(은/는) 자동 선택 헬퍼 함수
  const getEunNeun = (word) => {
    if (!word) return '은';
    const lastChar = word.charAt(word.length - 1);
    const code = lastChar.charCodeAt(0);
    if (code >= 0xAC00 && code <= 0xD7A3) {
      return (code - 0xAC00) % 28 === 0 ? '는' : '은';
    }
    return '은';
  };

  const eunNeun = getEunNeun(displayKeyword);

  return (
    <section className={styles.hero}>
      {/* 배경 이미지 */}
      <Image 
        src="/images/hero_bg.png" 
        alt="하수구 내부 배관 내시경 화면 배경" 
        fill
        priority
        className={styles.bgImage}
      />
      {/* 반투명 오버레이 필터 */}
      <div className={styles.overlay}></div>

      <div className={styles.container}>
        <div className={styles.contentCol}>
          <span className={styles.badge}>배관 정밀 해결 전문</span>
          
          <h1 className={styles.title}>
            <span className={styles.titleLarge}>
              <span className={styles.highlight}>{displayKeyword}</span>,<br />
              <span className={styles.brandBadge}>전부 뚫어</span> 드립니다.
            </span>
            <span className={styles.titleSmall}>
              서울/경기/인천 바로 출동!
            </span>
          </h1>
          
          <p className={styles.description}>
            {displayKeyword}{eunNeun} 겉으로 예상되는 위치와<br />
            실제 막힌 구간이 다를 수 있습니다.
            <span className={styles.descSpacer}></span>
            하수구·싱크대·변기·배수구·오수관 상태를 확인한 뒤<br />
            현장에 맞는 방식으로 조치합니다
          </p>

          <div className={styles.ctaArea}>
            <a href={`tel:${PHONE_NUMBER}`} className="btn btn-primary">
              📞 해결사 바로 문의!
            </a>
          </div>

          {/* 신뢰 요소 배지 그리드 */}
          <div className={styles.badgeGrid}>
            <div className={styles.badgeItem}>
              <span className={styles.badgeIcon}>✅</span>
              <span>서울·경기·인천 방문 가능</span>
            </div>
            <div className={styles.badgeItem}>
              <span className={styles.badgeIcon}>✅</span>
              <span>하수구·싱크대·변기·배수구 막힘 해결</span>
            </div>
            <div className={styles.badgeItem}>
              <span className={styles.badgeIcon}>✅</span>
              <span>현장 상태 확인 후 작업</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
