import CvPage from '../CvPage';
import { getDictionary, locales, type Locale } from '../getDictionary';

export const dynamicParams = false;

export function generateStaticParams(): Array<{ locale: Locale }> {
  return locales.map((locale) => ({ locale }));
}

export default async function LocalePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const dictionary = getDictionary(locale);
  return <CvPage locale={locale} dictionary={dictionary} />;
}
