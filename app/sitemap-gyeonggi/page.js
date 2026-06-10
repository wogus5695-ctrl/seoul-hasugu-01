// app/sitemap-gyeonggi/page.js
import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: '하수구해결사 키워드 안내',
  description: '하수구해결사의 지역별 배관 막힘 작업 키워드 안내 페이지입니다. 각 키워드를 클릭하면 해당 작업명에 맞는 안내 페이지로 이동합니다.',
};

export default function SitemapGyeonggiPage() {
  const keywords = [
    { name: '일산 하수구막힘', param: '일산-하수구막힘' },
    { name: '일산 싱크대막힘', param: '일산-싱크대막힘' },
    { name: '일산 변기막힘', param: '일산-변기막힘' },
    { name: '일산 배수구막힘', param: '일산-배수구막힘' },
    { name: '일산 오수관역류', param: '일산-오수관역류' },
    { name: '일산 오수관막힘', param: '일산-오수관막힘' }
  ];

  return (
    <div className={styles.sitemapPage}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>하수구해결사 키워드 안내</h1>
          <p className={styles.description}>
            하수구해결사의 지역별 배관 막힘 작업 키워드 안내 페이지입니다.<br />
            각 키워드를 클릭하면 해당 작업명에 맞는 안내 페이지로 이동합니다.
          </p>
        </div>
      </section>

      <section className={styles.bodySection}>
        <div className={styles.container}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.marker}>📍</span>
              <h2 className={styles.cardTitle}>일산 지역 키워드</h2>
            </div>
            
            <div className={styles.linkGrid}>
              {keywords.map((item) => (
                <Link 
                  key={item.param} 
                  href={`/?k=${encodeURIComponent(item.param)}`}
                  className={styles.keywordLink}
                >
                  <span className={styles.linkText}>{item.name}</span>
                  <span className={styles.arrow}>→</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

