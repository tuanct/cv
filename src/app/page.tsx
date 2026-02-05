'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { locales, type Locale } from './getDictionary';

function detectLocale(): Locale {
  const language = (navigator.language || '').toLowerCase();
  if (language.startsWith('vi')) return 'vi';
  if (language.startsWith('ja')) return 'ja';
  return 'en';
}

export default function HomePage() {
  useEffect(() => {
    const locale = detectLocale();
    window.location.replace(`/${locale}`);
  }, []);

  return (
    <div style={{ padding: 24 }}>
      <div style={{ marginBottom: 8 }}>Select language:</div>
      <div>
        {locales.map((locale, index) => (
          <span key={locale}>
            {index > 0 ? ' | ' : null}
            <Link href={`/${locale}`}>{locale.toUpperCase()}</Link>
          </span>
        ))}
      </div>
    </div>
  );
}

