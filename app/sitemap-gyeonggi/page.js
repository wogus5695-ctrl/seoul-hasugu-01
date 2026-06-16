// app/sitemap-gyeonggi/page.js
import Link from 'next/link';
import Footer from '@/components/Footer';
import styles from './page.module.css';

export const metadata = {
  title: '하수구해결사 키워드 안내',
  description: '하수구해결사의 지역별 배관 막힘 작업 키워드 안내 페이지입니다. 각 키워드를 클릭하면 해당 작업명에 맞는 안내 페이지로 이동합니다.',
  robots: {
    index: false,
    follow: true,
  },
};

const SECTIONS = [
  {
    title: '일산 지역 키워드',
    groups: [
      { subtitle: '일산 - 시 단위 키워드', regions: ['일산', '일산시'] },
      { subtitle: '일산 - 구 단위 키워드', regions: ['일산동구', '일산서구'] },
      { subtitle: '일산동구 - 동 단위 키워드', regions: ['식사동', '중산동', '정발산동', '풍산동', '백석동', '마두동', '장항동', '고봉동'] },
      { subtitle: '일산서구 - 동 단위 키워드', regions: ['일산동', '탄현동', '주엽동', '대화동', '송포동', '덕이동', '가좌동'] },
    ],
  },
  {
    title: '파주 지역 키워드',
    groups: [
      { subtitle: '파주 - 시 단위 키워드', regions: ['파주', '파주시'] },
      { subtitle: '파주 - 읍 단위 키워드', regions: ['문산읍', '조리읍', '법원읍', '파주읍'] },
      { subtitle: '파주 - 면 단위 키워드', regions: ['광탄면', '탄현면', '월롱면', '적성면', '파평면', '군내면', '장단면', '진동면', '진서면'] },
      { subtitle: '파주 - 동 단위 키워드', regions: ['교하동', '운정동', '금촌동'] },
    ],
  },
  {
    title: '김포 지역 키워드',
    groups: [
      { subtitle: '김포 - 시 단위 키워드', regions: ['김포', '김포시'] },
      { subtitle: '김포 - 읍 단위 키워드', regions: ['통진읍', '고촌읍', '양촌읍'] },
      { subtitle: '김포 - 면 단위 키워드', regions: ['대곶면', '월곶면', '하성면'] },
      { subtitle: '김포 - 동 단위 키워드', regions: ['김포본동', '장기본동', '사우동', '풍무동', '장기동', '구래동', '마산동', '운양동'] },
    ],
  },
];

const JOBS = [
  '하수구막힘',
  '싱크대막힘',
  '변기막힘',
  '배수구막힘',
  '오수관역류',
  '오수관막힘'
];

export default function SitemapGyeonggiPage() {
  return (
    <div className={styles.sitemapPage}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>하수구해결사 키워드 안내</h1>
          <p className={styles.description}>
            서울·경기·인천권 배관 막힘 작업 키워드 안내 페이지입니다.<br />
            각 키워드를 클릭하면 해당 지역과 작업명에 맞는 안내 페이지로 이동합니다.
          </p>
        </div>
      </section>

      <div className={styles.bodySection}>
        <div className={styles.container}>
          {SECTIONS.map((section, sIndex) => (
            <div key={sIndex} className={styles.sectionCard}>
              <h2 className={styles.sectionTitle}>
                <span className={styles.marker}>📍</span> {section.title}
              </h2>
              
              {section.groups.map((group, gIndex) => (
                <div key={gIndex} className={styles.groupBlock}>
                  <h3 className={styles.groupSubtitle}>{group.subtitle}</h3>
                  <div className={styles.linkGrid}>
                    {group.regions.flatMap((region) =>
                      JOBS.map((job) => {
                        const keywordName = `${region} ${job}`;
                        const param = `${region}-${job}`;
                        return (
                          <Link
                            key={param}
                            href={`/?k=${encodeURIComponent(param)}`}
                            className={styles.keywordLink}
                          >
                            <span className={styles.linkText}>{keywordName}</span>
                            <span className={styles.arrow}>→</span>
                          </Link>
                        );
                      })
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
