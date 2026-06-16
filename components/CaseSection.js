// components/CaseSection.js
'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './CaseSection.module.css';

export default function CaseSection({ keyword, hasKeyword }) {
  // 키워드 기반으로 동적 지역 추출 (예: '일산 하수구막힘' -> '일산')
  const region = hasKeyword && keyword ? keyword.split(' ')[0] : '일산';

  const cases = [
    {
      hashtag: `#${region}하수구막힘`,
      body: '처음엔 물이 조금 늦게 빠지는 정도라 괜찮겠지 했는데, 시간이 지나니까 아예 고이더라고요. 전화로 증상 설명드리니 어떤 부분을 확인해야 하는지 바로 안내해주셔서 많이 안심됐습니다.',
      name: '김*훈님'
    },
    {
      hashtag: `#${region}싱크대막힘`,
      body: '싱크대 물이 잘 안 내려가고 냄새까지 올라와서 너무 불편했어요. 기름때나 음식물 찌꺼기가 쌓이면 그럴 수 있다고 설명해주셔서 상황을 이해하기 쉬웠습니다.',
      name: '박*수님'
    },
    {
      hashtag: `#${region}변기막힘`,
      body: '변기 물이 갑자기 차올라서 많이 놀랐는데, 계속 물 내리면 넘칠 수 있다고 하셔서 바로 멈췄어요. 먼저 어떻게 해야 하는지 알려주셔서 정말 다행이었습니다!',
      name: '이*정님'
    },
    {
      hashtag: `#${region}배수구막힘`,
      body: '욕실 바닥에 물이 계속 고여서 청소 문제인 줄 알았어요. 그런데 배수구 쪽만 문제가 아닐 수도 있다고 하셔서, 막힌 구간 확인이 필요하다는 걸 알게 됐습니다.',
      name: '최*민님'
    },
    {
      hashtag: `#${region}오수관역류`,
      body: '바닥 배수구 쪽에서 물이 올라오는 것 같아서 바로 문의했어요. 그냥 넘길 문제가 아니라 위생 문제로도 이어질 수 있다고 해서 빠르게 확인하길 잘했다 싶었습니다.',
      name: '정*호님'
    },
    {
      hashtag: `#${region}오수관막힘`,
      body: '건물에서 같은 위치가 자꾸 막혀서 원인이 뭔지 답답했어요. 단순히 뚫는 것보다 오수관 흐름을 봐야 할 수 있다고 설명해주셔서 이해가 됐습니다.',
      name: '윤*석님'
    },
    {
      hashtag: `#식당배수구막힘`,
      body: '주방 바닥 배수구가 느리게 빠지니까 영업 중에 정말 신경 쓰이더라고요. 기름때가 쌓이면 반복될 수 있다고 해서, 그냥 기다릴 일이 아니란 걸 알았습니다!',
      name: '홍*진님'
    },
    {
      hashtag: `#상가하수구막힘`,
      body: '상가 화장실에서 냄새가 계속 올라와서 손님들 신경이 많이 쓰였어요. 배관 안쪽 상태를 확인해야 할 수도 있다고 안내받고 바로 문의하길 잘했다고 생각했습니다.',
      name: '문*희님'
    },
    {
      hashtag: `#빌라하수구역류`,
      body: '아래층에서 물이 역류한다고 연락이 와서 정말 당황했어요. 여러 세대 배관이 연결돼 있을 수 있다고 설명해주셔서, 괜히 혼자 판단하면 안 되겠더라고요.',
      name: '강*우님'
    },
    {
      hashtag: `#반복막힘`,
      body: '얼마 전에 한 번 뚫었는데 또 막혀서 이상하다 싶었어요. 반복되는 경우에는 막힌 위치를 제대로 확인해야 할 수 있다고 해서 원인부터 보는 게 중요하다는 걸 알았습니다!',
      name: '서*영님'
    }
  ];

  const isSewer = keyword.includes('하수구막힘');
  const isSink = keyword.includes('싱크대막힘');
  const isToilet = keyword.includes('변기막힘');

  // 작업명에 따라 관련 카드가 먼저 보이게 정렬
  let sortedCases = [...cases];
  if (isSewer) {
    const sewerCase = cases[0];
    const storeCase = cases[7];
    const villaCase = cases[8];
    const repeatedCase = cases[9];
    const remaining = cases.filter((_, idx) => idx !== 0 && idx !== 7 && idx !== 8 && idx !== 9);
    sortedCases = [sewerCase, storeCase, villaCase, repeatedCase, ...remaining];
  } else if (isSink) {
    const sinkCase = cases[1];
    const restaurantCase = cases[6];
    const sewerCase = cases[3];
    const repeatedCase = cases[9];
    const remaining = cases.filter((_, idx) => idx !== 1 && idx !== 6 && idx !== 3 && idx !== 9);
    sortedCases = [sinkCase, restaurantCase, sewerCase, repeatedCase, ...remaining];
  } else if (isToilet) {
    const toiletCase = cases[2];
    const villaCase = cases[8];
    const repeatedCase = cases[9];
    const remaining = cases.filter((_, idx) => idx !== 2 && idx !== 8 && idx !== 9);
    sortedCases = [toiletCase, villaCase, repeatedCase, ...remaining];
  }

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayRef = useRef();

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sortedCases.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + sortedCases.length) % sortedCases.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (isPaused) return;
    autoPlayRef.current = setInterval(nextSlide, 4800); // 4.8초 슬라이드 간격
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isPaused]);

  // Touch Swipe 핸들러
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsPaused(true);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <section className={`${styles.section} section`}>
      <div className="container">
        <h2 className="section-title">
          비슷한 증상으로 문의하는<br className={styles.onlyPc} />
          대표적인 막힘 사례
        </h2>
        <p className="section-desc">
          하수구·싱크대·변기·배수구·오수관 막힘은<br className={styles.onlyPc} />
          증상과 현장 상태에 따라 확인해야 할 부분이 달라집니다.
        </p>

        <div 
          className={styles.sliderContainer}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className={styles.sliderTrack}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {sortedCases.map((item, index) => (
              <div key={index} className={styles.slide}>
                <div className={styles.card}>
                  <div className={styles.cardHeader}>
                    <span className={styles.hashtag}>{item.hashtag}</span>
                    <span className={styles.rating}>★★★★★</span>
                  </div>
                  <p className={styles.cardBody}>{item.body}</p>
                  <div className={styles.cardFooter}>
                    <span className={styles.name}>{item.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 점 indicator */}
        <div className={styles.indicators}>
          {sortedCases.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicatorDot} ${index === currentIndex ? styles.activeDot : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
