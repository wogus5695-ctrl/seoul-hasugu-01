// components/RegionSection.js
import { PHONE_NUMBER } from '@/constants/phone';
import styles from './RegionSection.module.css';

export default function RegionSection({ keyword, hasKeyword }) {
  // 키워드 기반으로 현재 지역명 추출 (기본값: '일산')
  const currentRegion = hasKeyword && keyword ? keyword.split(' ')[0] : '일산';

  return (
    <section className={`${styles.section} section`}>
      <div className="container">
        <div className={styles.layout}>
          {/* 좌측: 콘텐츠 영역 */}
          <div className={styles.contentArea}>
            <h2 className={styles.title}>
              일산을 시작으로<br />
              서울·경기·인천 지역 안내
            </h2>
            
            <div className={styles.descBlock}>
              <p className={styles.descText}>
                하수구해결사는 <strong>일산 지역 키워드를 우선으로 운영</strong>하며, 
                현장 위치와 일정에 따라 서울·경기·인천권 배관 막힘 작업 가능 여부를 안내합니다.
              </p>
              <p className={styles.descText}>
                하수구막힘, 싱크대막힘, 변기막힘, 배수구막힘, 오수관역류, 오수관막힘 등 
                막힘 증상이 있다면 전화로 현재 위치와 증상을 먼저 알려주세요.
              </p>
            </div>

            {/* 지역 카드/태그 그룹 */}
            <div className={styles.tagsGroup}>
              <div className={`${styles.tag} ${styles.primaryTag}`}>
                <span className={styles.tagStar}>★</span> 우선 지역: 일산
              </div>
              <div className={styles.tag}>서울 전역</div>
              <div className={styles.tag}>경기 주요 권역</div>
              <div className={styles.tag}>인천 전역</div>
            </div>

            {/* CTA 버튼 */}
            <div className={styles.ctaWrapper}>
              <a href={`tel:${PHONE_NUMBER}`} className="btn btn-primary">
                📞 방문 가능 지역 전화 문의
              </a>
            </div>
          </div>

          {/* 우측: 수도권 지도 그래픽 영역 */}
          <div className={styles.mapArea}>
            <div className={styles.mapCard}>
              <svg viewBox="0 0 400 350" className={styles.mapSvg} xmlns="http://www.w3.org/2000/svg">
                {/* 경기도 외곽 라인 */}
                <path d="M120 40 C 220 20, 340 50, 360 180 C 380 260, 280 320, 160 330 C 80 340, 40 250, 50 160 C 60 90, 80 50, 120 40 Z" fill="rgba(11, 31, 51, 0.02)" stroke="var(--primary-deep)" strokeWidth="1.5" strokeDasharray="4 4" />
                
                {/* 인천 영역 */}
                <path d="M70 150 C 100 130, 130 150, 120 190 C 110 220, 80 220, 70 200 C 60 180, 60 160, 70 150 Z" fill="rgba(0, 174, 239, 0.05)" stroke="var(--primary-ocean)" strokeWidth="1.5" />
                
                {/* 서울 영역 */}
                <path d="M160 140 C 200 120, 230 150, 220 190 C 210 220, 170 230, 150 200 C 140 180, 140 160, 160 140 Z" fill="rgba(11, 31, 51, 0.04)" stroke="var(--primary-deep)" strokeWidth="1.5" />
                
                {/* 텍스트 라벨 */}
                <text x="188" y="175" fill="var(--primary-deep)" fontFamily="Outfit, sans-serif" fontSize="15" fontWeight="900" textAnchor="middle">서울</text>
                <text x="95" y="188" fill="var(--primary-ocean)" fontFamily="Outfit, sans-serif" fontSize="15" fontWeight="900" textAnchor="middle">인천</text>
                <text x="275" y="225" fill="var(--neutral-muted)" fontFamily="Outfit, sans-serif" fontSize="15" fontWeight="900" textAnchor="middle">경기</text>
                
                {/* 일산 위치 마커 & 맥박(Pulsing) 효과 */}
                <circle cx="140" cy="100" r="14" fill="var(--accent-gold)" opacity="0.35" className={styles.pulse} />
                <circle cx="140" cy="100" r="6" fill="var(--accent-gold)" />
                
                {/* 일산 툴팁 */}
                <rect x="75" y="48" width="130" height="28" rx="6" fill="var(--primary-deep)" />
                <text x="140" y="66" fill="var(--accent-gold)" fontFamily="Outfit, sans-serif" fontSize="11" fontWeight="900" textAnchor="middle">★ 우선 지역: {currentRegion}</text>
                <path d="M 140 76 L 136 82 L 144 82 Z" fill="var(--primary-deep)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
