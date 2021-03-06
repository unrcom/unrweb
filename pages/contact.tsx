import { NextPage } from 'next';
import { Layout } from '../components/Layout';
import Image from 'next/image';

const Contact: NextPage = () => {
  return (
    <Layout title="Contact">
      <div className="w-80 rounded bg-white p-8 text-center shadow-xl">
        <div className="mt-4">
          <p className="text-xs">メールでのお問い合わせ</p>
          <p className="mt-2  text-gray-600">info@unremoted.com</p>
          <p className="mt-5 text-xs">Facebook メッセンジャー</p>
          <p className="mt-2  text-gray-600">https://m.me/unremoted</p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
