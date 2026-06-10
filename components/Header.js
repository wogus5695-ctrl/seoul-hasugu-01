// components/Header.js
'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { PHONE_NUMBER } from '@/constants/phone';
import styles from './Header.module.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoText}>하수구<span>해결사</span></span>
        </Link>
        
        <nav className={`${styles.nav} ${isMenuOpen ? styles.menuOpen : ''}`}>
          <ul className={styles.menu}>
            <li><a href="#services" onClick={() => setIsMenuOpen(false)}>서비스 안내</a></li>
            <li><a href="#process" onClick={() => setIsMenuOpen(false)}>해결 절차</a></li>
            <li><a href="#comparison" onClick={() => setIsMenuOpen(false)}>왜 해결사인가</a></li>
            <li><a href="#faq" onClick={() => setIsMenuOpen(false)}>자주 묻는 질문</a></li>
            <li><Link href="/sitemap-gyeonggi" onClick={() => setIsMenuOpen(false)}>지역별 키워드</Link></li>
          </ul>
        </nav>

        <div className={styles.actions}>
          <a href={`tel:${PHONE_NUMBER}`} className={styles.phoneBtn}>
            <span className={styles.phoneIcon}>📞</span>
            <span className={styles.phoneText}>신속 전화 상담</span>
          </a>
          <button 
            className={styles.menuToggle} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="메뉴 열기"
          >
            <span className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}></span>
          </button>
        </div>
      </div>
    </header>
  );
}
