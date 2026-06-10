// components/ServiceSection.js
import Image from 'next/image';
import { PHONE_NUMBER } from '@/constants/phone';
import styles from './ServiceSection.module.css';

export default function ServiceSection({ keyword, hasKeyword }) {
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

  const eunNeun = getEunNeun(keyword);

  const subTitle = hasKeyword ? (
    <>
      {keyword}{eunNeun} 배수 흐름과 막힘 위치를 확인한 뒤<br className={styles.onlyPc} />
      현장 상태에 맞는 작업 방식으로 조치합니다.
    </>
  ) : (
    <>
      배수 흐름과 막힘 위치를 확인한 뒤<br className={styles.onlyPc} />
      현장 상태에 맞는 작업 방식을 적용합니다.
    </>
  );

  const services = [
    {
      title: '하수구막힘',
      desc: '물이 고이거나 배수가 느려질 때\n막힌 구간을 확인하고 흐름을 조치합니다.',
      symptom: '물 고임 / 배수 지연',
      image: '/images/service_sewer.png'
    },
    {
      title: '싱크대막힘',
      desc: '주방 배수 라인에 쌓인 이물질로\n물 빠짐 지연과 역류가 생길 수 있습니다.',
      symptom: '주방 배수 지연 / 역류',
      image: '/images/service_sink.png'
    },
    {
      title: '변기막힘',
      desc: '물이 차오르거나 내려가지 않는 경우\n무리한 반복 물내림은 피해야 합니다.',
      symptom: '물 차오름 / 변기 역류',
      image: '/images/service_toilet.png'
    },
    {
      title: '배관 고압 세척',
      desc: '고압 수압을 이용해 배관 내부에 쌓인\n기름때와 이물질을 세척합니다.',
      symptom: '기름때 누적 / 반복 막힘',
      image: '/images/service_high_pressure.png'
    }
  ];

  return (
    <section id="services" className="section">
      <div className="container">
        <h2 className="section-title">
          막힌 위치에 따라<br className={styles.onlyPc} />
          <span className={styles.highlight}>작업 방식이 달라집니다</span>
        </h2>
        <p className="section-desc">{subTitle}</p>
        
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardImageWrapper}>
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDesc}>{service.desc}</p>
                
                <div className={styles.symptomsBox}>
                  <span className={styles.symptomLabel}>대표 증상</span>
                  <span className={styles.symptomValue}>{service.symptom}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.footerArea}>
          <div className={styles.ctaBox}>
            <a href={`tel:${PHONE_NUMBER}`} className="btn btn-primary">
              📞 막힌 위치 전화로 문의하기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
