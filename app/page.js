// app/page.js
import HeroSection from '@/components/HeroSection';
import ServiceSection from '@/components/ServiceSection';
import SymptomSection from '@/components/SymptomSection';
import WarningSection from '@/components/WarningSection';
import ProcessSection from '@/components/ProcessSection';
import CaseSection from '@/components/CaseSection';
import FaqSection from '@/components/FaqSection';
import CallToAction from '@/components/CallToAction';

// 동적 메타데이터 생성 함수 (쿼리 파라미터 k 기반)
export async function generateMetadata({ searchParams }) {
  const k = searchParams?.k || '';
  const decodedKeyword = k ? decodeURIComponent(k).replace(/-/g, ' ') : '하수구막힘';
  
  const titleStr = `${decodedKeyword} | 하수구해결사`;
  
  let descStr = `${decodedKeyword}, 하수구·싱크대·변기·배수구·오수관 막힘 증상을 현장 상태에 맞게 확인하고 조치합니다. 일산을 중심으로 서울·경기·인천권 문의를 안내합니다.`;
  
  if (decodedKeyword.includes('하수구막힘')) {
    descStr = `${decodedKeyword}, 배수 지연·악취·반복 막힘 증상을 현장 상태에 맞게 확인하고 안내합니다. 일산·파주·김포를 중심으로 서울·경기·인천권 문의를 안내합니다.`;
  } else if (decodedKeyword.includes('싱크대막힘')) {
    descStr = `${decodedKeyword}, 주방 배수 라인 막힘·기름때·음식물 찌꺼기 누적 증상을 현장 상태에 맞게 확인하고 안내합니다. 일산·파주·김포를 중심으로 서울·경기·인천권 문의를 안내합니다.`;
  } else if (decodedKeyword.includes('변기막힘')) {
    descStr = `${decodedKeyword}, 변기 물 차오름·배수 불량·역류 증상을 현장 상태에 맞게 확인하고 안내합니다. 일산·파주·김포를 중심으로 서울·경기·인천권 문의를 안내합니다.`;
  }

  const canonicalUrl = k 
    ? `https://www.allhasugu.co.kr/?k=${encodeURIComponent(k)}`
    : 'https://www.allhasugu.co.kr';

  return {
    title: titleStr,
    description: descStr,
    keywords: `${decodedKeyword}, 하수구해결사, 하수구막힘, 싱크대막힘, 변기막힘, 배수구막힘, 오수관역류, 오수관막힘`,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: titleStr,
      description: descStr,
      url: canonicalUrl,
      type: 'website',
      images: [
        {
          url: 'https://www.allhasugu.co.kr/images/og_image_v2.png',
          width: 1200,
          height: 630,
          alt: '하수구해결사 막힘 당일 해결 서비스 안내 썸네일'
        }
      ],
      siteName: '하수구해결사',
      locale: 'ko_KR',
    },
  };
}

export default function Home({ searchParams }) {
  const k = searchParams?.k || '';
  
  // 파라미터가 명시적으로 들어왔는지 여부 판별
  const hasKeyword = !!k;
  
  // 1. k 파라미터가 있으면 하이픈(-)을 공백( )으로 바꾸어 화면에 반영
  // 2. 파라미터가 없으면 기본 키워드인 "하수구막힘" 할당
  const decodedKeyword = k ? decodeURIComponent(k).replace(/-/g, ' ') : '하수구막힘';

  return (
    <>
      <HeroSection keyword={decodedKeyword} hasKeyword={hasKeyword} />
      <ServiceSection keyword={decodedKeyword} hasKeyword={hasKeyword} />
      <SymptomSection keyword={decodedKeyword} hasKeyword={hasKeyword} />
      <WarningSection />
      <ProcessSection />
      <CaseSection keyword={decodedKeyword} hasKeyword={hasKeyword} />
      <FaqSection keyword={decodedKeyword} hasKeyword={hasKeyword} />
      <CallToAction />
    </>
  );
}
