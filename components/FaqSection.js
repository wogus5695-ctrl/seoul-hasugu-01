// components/FaqSection.js
'use client';
import { useState } from 'react';
import styles from './FaqSection.module.css';

// 한글 조사(은/는) 결합 규칙 자동 판별기 (받침 유무 체크)
function getJosa(word) {
  if (!word) return '은';
  const lastChar = word.charAt(word.length - 1);
  const code = lastChar.charCodeAt(0);
  if (code < 44032 || code > 55203) {
    return '은'; // 한글이 아닐 경우 기본값
  }
  const batchim = (code - 44032) % 28;
  return batchim === 0 ? '는' : '은';
}

export default function FaqSection({ keyword, hasKeyword }) {
  const josa = getJosa(keyword);
  const firstQuestion = hasKeyword 
    ? `${keyword}${josa} 어떤 증상일 때 문의해야 하나요?` 
    : '막힘 현상은 어떤 증상일 때 문의해야 하나요?';

  const faqs = [
    {
      q: firstQuestion,
      a: '물이 천천히 빠지거나 배수구 주변에 물이 고이고, 악취가 올라온다면 막힘이 진행 중일 수 있습니다. 같은 위치가 반복해서 막힌다면 배관 안쪽 확인이 필요합니다.'
    },
    {
      q: '싱크대막힘은 왜 반복되나요?',
      a: '주방 배수 라인에는 기름때, 음식물 찌꺼기, 세제 찌꺼기 등이 쌓일 수 있습니다. 같은 증상이 반복된다면 단순 이물질보다 배수 라인 상태 확인이 필요합니다.'
    },
    {
      q: '변기막힘이 생기면 계속 물을 내려도 되나요?',
      a: '물이 차오르는 상태에서 반복해서 물을 내리면 넘칠 수 있습니다. 물이 내려가지 않는다면 사용을 멈추고 막힘 상태를 확인하는 것이 좋습니다.'
    },
    {
      q: '배수구막힘과 하수구막힘은 다른 문제인가요?',
      a: '배수구는 물이 빠지는 입구에 가까운 문제이고, 하수구막힘은 배관 안쪽 흐름 문제까지 포함할 수 있습니다. 현장에서는 증상과 위치를 함께 확인해야 합니다.'
    },
    {
      q: '오수관역류는 왜 빠른 확인이 필요한가요?',
      a: '오수관역류는 단순 배수 지연보다 위생 문제와 오염 가능성이 큽니다. 역류가 보이면 사용을 줄이고 빠르게 상태를 확인하는 것이 좋습니다.'
    },
    {
      q: '작업 전에 전화로 어떤 내용을 말하면 좋나요?',
      a: '막힌 위치, 물이 빠지는 속도, 역류 여부, 악취 여부, 최근 이물질 유입 가능성, 건물 유형을 알려주면 현장 판단에 도움이 됩니다.'
    }
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className={`${styles.section} section`}>
      <div className="container">
        <h2 className="section-title">자주 묻는 질문</h2>
        <p className="section-desc">
          방문자분들이 가장 많이 궁금해하시는 시공 및 조치 관련 문의사항을 정직하게 알려드립니다.
        </p>

        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`${styles.faqItem} ${openIndex === index ? styles.open : ''}`}
            >
              <button 
                className={styles.questionBtn} 
                onClick={() => toggleFaq(index)}
                aria-expanded={openIndex === index}
              >
                <span className={styles.qText}>{faq.q}</span>
                <span className={styles.iconWrapper}>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.chevronSvg}>
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>
              <div className={styles.answerBox}>
                <p className={styles.aText}>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

