import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useParams,
} from 'react-router-dom';

import { HomeScreen } from '@features/home';

import type { Language } from '../providers/i18n';
import { detectLanguage, isValidLanguage } from '../providers/i18n';
import { useAppStore } from '../store';

// 언어 경로 래퍼 컴포넌트
function LanguageWrapper() {
  const { lang } = useParams<{ lang: string }>();
  const { i18n } = useTranslation();
  const { language: storeLanguage, setLanguage } = useAppStore();

  useEffect(() => {
    if (lang && isValidLanguage(lang)) {
      // i18n 언어 변경
      if (i18n.language !== lang) {
        i18n.changeLanguage(lang);
      }
      // store 언어 변경
      if (storeLanguage !== lang) {
        setLanguage(lang as Language);
      }
    }
  }, [lang, i18n, storeLanguage, setLanguage]);

  // 유효하지 않은 언어 경로면 기본 언어로 리다이렉트
  if (!lang || !isValidLanguage(lang)) {
    const defaultLang = detectLanguage();
    return <Navigate to={`/${defaultLang}`} replace />;
  }

  return <HomeScreen />;
}

export function Router() {
  const defaultLanguage = detectLanguage();

  return (
    <BrowserRouter>
      <Routes>
        {/* 루트 경로 - 감지된 언어로 리다이렉트 */}
        <Route
          path="/"
          element={<Navigate to={`/${defaultLanguage}`} replace />}
        />

        {/* 언어별 경로 */}
        <Route path="/:lang" element={<LanguageWrapper />} />

        {/* 알 수 없는 경로 - 기본 언어로 리다이렉트 */}
        <Route
          path="*"
          element={<Navigate to={`/${defaultLanguage}`} replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}
