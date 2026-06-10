// components/WarningSection.js
import Image from 'next/image';
import styles from './WarningSection.module.css';

export default function WarningSection() {
  const sites = [
    {
      title: '가정집',
      desc: '욕실, 세탁실, 싱크대, 변기 등\n생활 공간에서 발생하는 배수 문제를 확인합니다.',
      image: '/images/site_home.png'
    },
    {
      title: '식당',
      desc: '기름때와 음식물 찌꺼기가 쌓이기 쉬운\n주방 배수 라인과 바닥 배수구를 확인합니다.',
      image: '/images/site_restaurant.png'
    },
    {
      title: '상가',
      desc: '화장실, 탕비실, 공용 배수구 등\n영업 공간에서 발생하는 막힘 증상을 확인합니다.',
      image: '/images/site_store.png'
    },
    {
      title: '건물·기타',
      desc: '반복 막힘, 오수관역류, 외부 배관 문제처럼\n건물 배관 흐름 확인이 필요한 현장을 안내합니다.',
      image: '/images/site_building.png'
    }
  ];

  return (
    <section id="sites" className="section">
      <div className="container">
        <h2 className="section-title">
          <span className={styles.highlight}>가정부터 상가까지</span><br className={styles.onlyPc} />
          막힘 현장을 확인합니다
        </h2>
        <p className="section-desc">
          하수구·싱크대·변기·배수구·오수관 막힘은<br className={styles.onlyPc} />
          사용 공간과 배관 구조에 따라 확인해야 할 부분이 달라집니다.
        </p>

        <div className={styles.grid}>
          {sites.map((site, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardImageWrapper}>
                <Image 
                  src={site.image} 
                  alt={`${site.title} 막힘 해결 현장`} 
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={styles.cardImage}
                />
                {/* 텍스트 가독성을 확보하기 위한 반투명 딥네이비 오버레이 */}
                <div className={styles.imageOverlay}></div>
                <h3 className={styles.cardTitle}>{site.title}</h3>
              </div>
              <div className={styles.cardContent}>
                <p className={styles.cardDesc}>{site.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
