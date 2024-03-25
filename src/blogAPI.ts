import { Article } from './types';

export const getAllArticles = async (): Promise<Article[]> => {
  // SSG, SSR, ISRはfetchの第二引数で使い分ける
  // { cache: no-store}       => SSR
  // { cache: force-cache}    => SSG
  // {next: {revalidate: 10}} => ISR
  const res = await fetch('http://localhost:3001/posts', { cache: 'no-store' });

  const articles = await res.json(); // シリアライズ化（軽量化）

  return articles;
};
