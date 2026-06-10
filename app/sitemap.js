// app/sitemap.js
export default async function sitemap() {
  const baseUrl = 'https://www.allhasugu.co.kr';

  // 기본 홈 경로
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
  ];

  // 53개 세부 지역 목록
  const regions = [
    // 일산 지역
    '일산', '일산시', '일산동구', '일산서구',
    '식사동', '중산동', '정발산동', '풍산동', '백석동', '마두동', '장항동', '고봉동',
    '일산동', '탄현동', '주엽동', '대화동', '송포동', '덕이동', '가좌동',
    // 파주 지역
    '파주', '파주시',
    '문산읍', '조리읍', '법원읍', '파주읍',
    '광탄면', '탄현면', '월롱면', '적성면', '파평면', '군내면', '장단면', '진동면', '진서면',
    '교하동', '운정동', '금촌동',
    // 김포 지역
    '김포', '김포시',
    '통진읍', '고촌읍', '양촌읍',
    '대곶면', '월곶면', '하성면',
    '김포본동', '장기본동', '사우동', '풍무동', '장기동', '구래동', '마산동', '운양동'
  ];

  // 6대 작업명 목록
  const jobs = [
    '하수구막힘',
    '싱크대막힘',
    '변기막힘',
    '배수구막힘',
    '오수관역류',
    '오수관막힘'
  ];

  // 지역명 + 작업명 318개 동적 키워드 경로 생성
  const keywordEntries = regions.flatMap((region) =>
    jobs.map((job) => ({
      url: `${baseUrl}/?k=${encodeURIComponent(`${region}-${job}`)}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    }))
  );

  return [...routes, ...keywordEntries];
}
