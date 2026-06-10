// components/ProcessSection.js
import { PHONE_NUMBER } from '@/constants/phone';
import styles from './ProcessSection.module.css';

export default function ProcessSection() {
  const steps = [
    {
      num: '01',
      title: '증상 확인',
      desc: '물이 안 빠지는 위치, 역류 여부, 악취 발생 여부를 확인합니다.'
    },
    {
      num: '02',
      title: '막힘 구간 추정',
      desc: '겉으로 보이는 위치와 실제 막힌 구간이 다를 수 있어 배수 흐름을 함께 확인합니다.'
    },
    {
      num: '03',
      title: '현장 상태에 맞는 작업',
      desc: '하수구, 싱크대, 변기, 배수구, 오수관 상태에 따라 필요한 방식으로 조치합니다.'
    },
    {
      num: '04',
      title: '배수 흐름 확인',
      desc: '작업 후 물이 정상적으로 빠지는지 확인합니다.'
    },
    {
      num: '05',
      title: '재발 가능성 안내',
      desc: '반복 막힘이 우려되는 경우 사용 습관과 관리 포인트를 안내합니다.'
    }
  ];

  return (
    <section id="process" className={`${styles.section} section`}>
      <div className="container">
        <h2 className="section-title">
          막힌 곳만 보는 것이 아니라<br className={styles.onlyPc} />
          <span className={styles.highlight}>막힌 원인을 해결</span>해야합니다.
        </h2>
        
        <div className={styles.timelineWrapper}>
          {/* 연결선 (PC용) */}
          <div className={styles.line}></div>
          
          <div className={styles.grid}>
            {steps.map((step, index) => (
              <div key={index} className={styles.stepCard}>
                <div className={styles.badgeWrapper}>
                  <span className={styles.number}>{step.num}</span>
                </div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 하단 CTA */}
        <div className={styles.footerArea}>
          <div className={styles.ctaBox}>
            <a href={`tel:${PHONE_NUMBER}`} className="btn btn-primary">
              📞 작업 가능 여부 전화 문의
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

