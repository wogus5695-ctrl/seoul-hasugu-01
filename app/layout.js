// app/layout.js
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';

export const metadata = {
  title: '하수구해결사 | 서울·경기·인천 하수구·싱크대·변기막힘 신속 해결',
  description: '막힌 하수구, 싱크대, 변기, 배수구, 오수관 문제를 정밀 내시경 카메라 진단과 첨단 장비로 확실하게 해결하는 배관 전문 하수구해결사입니다.',
  keywords: '하수구막힘, 싱크대막힘, 변기막힘, 배수구막힘, 오수관역류, 오수관막힘, 하수구뚫는업체, 일산하수구막힘',
  alternates: {
    canonical: 'https://www.sugusolver.co.kr', // 가상의 운영 주소 설정
  },
  openGraph: {
    title: '하수구해결사 | 막힘 해결 서비스',
    description: '서울·경기·인천 지역 막힌 하수구, 싱크대, 변기, 오수관 역류 정밀 진단 및 책임 시공.',
    url: 'https://www.sugusolver.co.kr',
    siteName: '하수구해결사',
    locale: 'ko_KR',
    type: 'website',
    images: [
      {
        url: 'https://www.sugusolver.co.kr/images/og_image.png',
        width: 1200,
        height: 630,
        alt: '하수구해결사 배수구 내시경 정밀 검사 현장'
      }
    ],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  // 구조화된 데이터 (JSON-LD) 스키마 설정
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    'name': '하수구해결사',
    'description': '막힌 하수구, 싱크대, 변기, 배수구, 오수관 문제를 해결하는 배관 정밀케어 전문 서비스',
    'telephone': '010-4667-5568', // 임시 또는 제공 예정 번호 (예시)
    'areaServed': [
      { '@type': 'City', 'name': 'Ilsan' },
      { '@type': 'State', 'name': 'Seoul' },
      { '@type': 'State', 'name': 'Gyeonggi-do' },
      { '@type': 'State', 'name': 'Incheon' }
    ],
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Ilsan',
      'addressRegion': 'Gyeonggi-do',
      'addressCountry': 'KR'
    }
  };

  return (
    <html lang="ko">
      <head>
        {/* 구글 폰트 로드 */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;900&family=Outfit:wght@400;600;800;900&display=swap" rel="stylesheet" />
        
        {/* JSON-LD 스키마 주입 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
