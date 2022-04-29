import { NextPage } from 'next';
import { Layout } from '../components/Layout';

const Mission: NextPage = () => {
  return (
    <Layout title="TimeLine">
      <div className="m-12">
        <div>2022年 4月</div>
        <div className="m-4">
          自社プロジェクト sirokuro の検討を開始して全経営資源を投入する
        </div>
        <div>2022年 3月</div>
        <div className="m-4">
          自社プロジェクト emsa (emergency messaging service anonymous)
          の検討を開始
        </div>
        <div>2021年12月</div>
        <div className="m-4">
          シングルページアプリケーション (SPA) を体験できるサイト{' '}
          <a
            href="https://demoru.net/"
            rel="noreferrer"
            target="_blank"
            className="underline"
          >
            demoru.net
          </a>{' '}
          をオープンしました。
        </div>
        <div>2021年 5月 〜 </div>
        <div className="m-4">
          React を用いたシングルページWebアプリケーション (SPA)
          の開発について、方式検討を開始する
        </div>
        <div>2021年 4月 〜 12月</div>
        <div className="m-4">
          プログラミング学習を希望される新中学生のお子様とのプログラミング教室を実施しました。
          <ul className="m-4">
            <li>- Scratch によるプログラミング体験</li>
            <li>- Python によるオブジェクト指向プログラミング体験</li>
            <li>- React による Webプログラミング体験</li>
          </ul>
        </div>
        <div>2021年 4月</div>
        <div className="m-4">
          4月13日に弊社 (アンリモート合同会社) を設立し、WordPress
          を用いた当社のウェブページをスタートしました。(aws Lightsail + Route53
          による)
        </div>
      </div>
    </Layout>
  );
};

export default Mission;
