import React, { FC, ReactNode } from 'react';
import Head from 'next/head';
import Link from 'next/link';

type Title = {
  title: string;
  children: ReactNode;
};

export const Layout: FC<Title> = ({ children, title = 'unremoted.com' }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center font-mono text-gray-800">
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <nav className="w-screen bg-gray-800">
          <div className="flex h-14 items-center pl-8">
            <div className="flex space-x-4">
              <Link href="/">
                <a className="rounded px-3 py-2 text-gray-300 hover:bg-gray-700">
                  Home
                </a>
              </Link>
              <Link href="/mission">
                <a className="rounded px-3 py-2 text-gray-300 hover:bg-gray-700">
                  ミッション
                </a>
              </Link>
              <Link href="/prof">
                <a className="rounded px-3 py-2 text-gray-300 hover:bg-gray-700">
                  会社概要
                </a>
              </Link>
              <Link href="/contact">
                <a className="rounded px-3 py-2 text-gray-300 hover:bg-gray-700">
                  お問い合わせ
                </a>
              </Link>
              <Link href="/style">
                <a className="rounded px-3 py-2 text-gray-300 hover:bg-gray-700">
                  開発スタイル
                </a>
              </Link>
              <Link href="/times">
                <a className="rounded px-3 py-2 text-gray-300 hover:bg-gray-700">
                  時系列
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main className="flex w-screen flex-1 flex-col items-center justify-center">
        {children}
      </main>
      <footer className="flex h-12 w-full items-center justify-center border-t">
        <a
          className="flex items-center"
          href="https://unremoted.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          We are unremoted.com
        </a>
      </footer>
    </div>
  );
};
