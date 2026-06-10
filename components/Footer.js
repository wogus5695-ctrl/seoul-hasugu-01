// components/Footer.js
import Link from 'next/link';
import { PHONE_NUMBER, DISPLAY_PHONE_NUMBER } from '@/constants/phone';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <span className={styles.logo}>하수구<span>해결사</span></span>
            <p className={styles.brandDesc}>
              막힌 하수구, 싱크대, 변기, 배수구, 오수관 전문 해결 서비스.<br />
              정직한 진단과 책임 있는 시공으로 신뢰를 약속드립니다.
            </p>
          </div>

          <div className={styles.infoCol}>
            <h4 className={styles.title}>서비스 지역 안내</h4>
            <p className={styles.text}>
              서울/경기/인천 전지역
            </p>
          </div>

          <div className={styles.contactCol}>
            <h4 className={styles.title}>신속 상담 안내</h4>
            <p className={styles.phoneNum}>{DISPLAY_PHONE_NUMBER}</p>
            <p className={styles.text}>
              배관 내시경 정밀 검사 지원<br />
              상담 후 현장 위치와 일정에 따라 방문 가능 여부 안내
            </p>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.metaInfo}>
            <span>상호명: 하수구해결사</span>
            <span>대표자: 김재현</span>
            <span>사업자등록번호: 405-15-02677</span>
          </div>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} 하수구해결사. All rights reserved.
          </p>
          
          {/* 검색 엔진 크롤러 전용 숨김 링크 (SEO 점수 및 색인 확보 목적) */}
          <div style={{ display: 'none' }}>
            <Link href="/sitemap-gyeonggi">지역별 키워드</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
