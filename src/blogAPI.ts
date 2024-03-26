import { notFound } from 'next/navigation';
import { Article } from './types';

export const getAllArticles = async (): Promise<Article[]> => {
  // SSG, SSR, ISRはfetchの第二引数で使い分ける
  // { cache: no-store}       => SSR
  // { cache: force-cache}    => SSG
  // {next: {revalidate: 10}} => ISR
  const res = await fetch('http://localhost:3001/posts', { cache: 'no-store' });

  if (!res.ok) {
    throw new Error('エラーが発生しました。');
  }

  await new Promise((resolve) => setTimeout(resolve, 1500));
  const articles = await res.json(); // シリアライズ化（軽量化）

  return articles;
};

export const getDetailArticle = async (id: string): Promise<Article> => {
  const res = await fetch(`http://localhost:3001/posts/${id}`, {
    next: { revalidate: 60 },
  }); // ISR

  if (res.status === 404) {
    notFound();
  }

  if (!res.ok) {
    throw new Error('エラーが発生しました。');
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));
  const article = await res.json(); // シリアライズ化（軽量化）

  return article;
};

export const createArticle = async (
  id: string,
  title: string,
  content: string
): Promise<Article> => {
  // 現在日時の取得
  const currentDateTime = new Date().toISOString();

  const res = await fetch(`http://localhost:3001/posts`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ id, title, content, createdAt: currentDateTime }),
  }); // ISR

  if (!res.ok) {
    throw new Error('エラーが発生しました。');
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));
  const newArticle = await res.json(); // シリアライズ化（軽量化）

  return newArticle;
};

export const deleteArticle = async (id: string): Promise<Article> => {
  const res = await fetch(`http://localhost:3001/posts/${id}`, {
    method: 'DELETE',
  });

  if (!res.ok) {
    throw new Error('エラーが発生しました。');
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));
  const deleteArticle = await res.json(); // シリアライズ化（軽量化）

  return deleteArticle;
};
