export default function HomePage() {
  return (
    <div className="page new-skin">
      <div className="container opened" data-animation-in="fadeInLeft" data-animation-out="fadeOutLeft">
        <header className="header">
          <div className="top-menu">
            <ul>
              <li className="active">
                <a href="#about-card">
                  <i className="material-icons">person_pin</i>
                  <span className="link">について</span>
                </a>
              </li>
              <li>
                <a href="#resume-card">
                  <i className="material-icons">assessment</i>
                  <span className="link">履歴書</span>
                </a>
              </li>
              <li>
                <a href="#works-card">
                  <i className="material-icons">work</i>
                  <span className="link">作業</span>
                </a>
              </li>
              <li>
                <a href="#blog-card">
                  <i className="material-icons">book</i>
                  <span className="link">ブログ</span>
                </a>
              </li>
              <li>
                <a href="#contacts-card">
                  <i className="material-icons">alternate_email</i>
                  <span className="link">お問い合わせ</span>
                </a>
              </li>
            </ul>
          </div>
        </header>

        <div className="card-started" id="home-card">
          <div className="profile">
            <div className="slide" style={{ backgroundImage: 'url(/assets/images/bg.jpg)' }} />
            <div className="image">
              <img src="/assets/images/profile.jpeg" alt="" />
            </div>
            <div className="title">カオ・タン・トゥアン</div>
            <div className="subtitle">ウェブ開発者</div>
            <div className="social">
              <a href="#">
                <span className="fab fa-facebook" />
              </a>
              <a href="#">
                <span className="fab fa-github" />
              </a>
              <a href="#">
                <span className="fab fa-linkedin" />
              </a>
            </div>
          </div>
        </div>

        <div className="card-inner animated active" id="about-card">
          <div className="card-wrap">
            <div className="content about">
              <div className="title">私について</div>
              <div className="row">
                <div className="col col-lg-6 col-md-6 col-12 border-line-v">
                  <div className="text-box">
                    <p>
                      私は、ベトナムのハノイのWeb開発者であるCao Thanh Tuanです。 私はWeb開発、構築、カスタマイズの豊富な経験を持っています。
                      私たちのユニークさについてあなたと話すのが大好きです。
                    </p>
                  </div>
                </div>
                <div className="col col-lg-6 col-md-6 col-12 border-line-v">
                  <div className="info-list">
                    <ul>
                      <li>
                        <strong>生年月日 </strong> 1993/07/20
                      </li>
                      <li>
                        <strong>レジデンス </strong> ハノイ
                        <br />
                        ベトナム
                      </li>
                      <li>
                        <strong>Eメール </strong> tuanct.207@gmail.com
                      </li>
                      <li>
                        <strong>携帯電話 </strong> +84 966.753.789
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="clear" />
              </div>
            </div>
          </div>
        </div>

        <div className="card-inner" id="resume-card">
          <div className="card-wrap">
            <div className="content resume">
              <div className="title">履歴書</div>
              <div className="row">
                <div className="col col-lg-6 col-md-6 col-12 border-line-v">
                  <div className="resume-title border-line-h">
                    <div className="icon">
                      <i className="material-icons" style={{ fontSize: 40 }}>
                        work_outline
                      </i>
                    </div>
                    <div className="name">経験</div>
                  </div>
                  <div className="resume-items">
                    <div className="resume-item border-line-h active">
                      <div className="date">2017 - 現在</div>
                      <div className="name">開発者</div>
                      <div className="company">RELIPA株式会社</div>
                    </div>
                    <div className="resume-item border-line-h">
                      <div className="date">2016 - 2017</div>
                      <div className="name">開発者</div>
                      <div className="company">2NF株式会社　</div>
                    </div>
                    <div className="resume-item">
                      <div className="date">2015 - 2016</div>
                      <div className="name">インターン開発者</div>
                      <div className="company">V-NEXT株式会社</div>
                    </div>
                  </div>
                </div>

                <div className="col col-lg-6 col-md-6 col-12 border-line-v">
                  <div className="resume-title border-line-h">
                    <div className="icon">
                      <i className="material-icons" style={{ fontSize: 40 }}>
                        school
                      </i>
                    </div>
                    <div className="name">教育</div>
                  </div>
                  <div className="resume-items">
                    <div className="resume-item border-line-h">
                      <div className="date">2011-2016</div>
                      <div className="name">郵便･遠隔通信技術学院</div>
                      <div className="company">ハノイ</div>
                      <p>情報技術エンジニアの学位</p>
                    </div>
                  </div>
                </div>

                <div className="clear" />
              </div>
            </div>

            <div className="content skills">
              <div className="title">私のスキル</div>
              <div className="row">
                <div className="col col-lg-6 col-md-6 col-12 border-line-v">
                  <div className="skills-list dotted">
                    <div className="skill-title border-line-h">
                      <div className="icon">
                        <i className="material-icons" style={{ fontSize: 40 }}>
                          code
                        </i>
                      </div>
                      <div className="name">コーディング</div>
                    </div>
                    <ul>
                      <li className="border-line-h">
                        <div className="name">PHP(Laravel)</div>
                        <div className="progress">
                          <div className="percentage" style={{ width: '90%' }} />
                        </div>
                      </li>
                      <li className="border-line-h">
                        <div className="name">MySQL</div>
                        <div className="progress">
                          <div className="percentage" style={{ width: '90%' }} />
                        </div>
                      </li>
                      <li>
                        <div className="name">Javasctipt(Jquery, Angular)</div>
                        <div className="progress ">
                          <div className="percentage" style={{ width: '80%' }} />
                        </div>
                      </li>
                      <li>
                        <div className="name">HTML/CSS</div>
                        <div className="progress ">
                          <div className="percentage" style={{ width: '70%' }} />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col col-lg-6 col-md-6 col-12 border-line-v">
                  <div className="skills-list dotted">
                    <div className="skill-title border-line-h">
                      <div className="icon">
                        <i className="material-icons" style={{ fontSize: 40 }}>
                          language
                        </i>
                      </div>
                      <div className="name">言語</div>
                    </div>
                    <ul>
                      <li className="border-line-h">
                        <div className="name">英語英語</div>
                        <div className="progress">
                          <div className="percentage" style={{ width: '50%' }} />
                        </div>
                      </li>
                      <li>
                        <div className="name">日本語</div>
                        <div className="progress ">
                          <div className="percentage" style={{ width: '20%' }} />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col col-lg-6 col-md-6 col-12 border-line-v">
                  <div className="skills-list list">
                    <div className="skill-title border-line-h">
                      <div className="icon">
                        <i className="material-icons" style={{ fontSize: 40 }}>
                          view_list
                        </i>
                      </div>
                      <div className="name">知識</div>
                    </div>
                    <ul>
                      <li>
                        <div className="name">サーバ</div>
                      </li>
                      <li>
                        <div className="name">Linux</div>
                      </li>
                      <li>
                        <div className="name">Docker</div>
                      </li>
                      <li>
                        <div className="name">チームワーク</div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="clear" />
              </div>
            </div>
          </div>
        </div>

        <div className="card-inner" id="works-card">
          <div className="card-wrap">
            <div className="content works">
              <div className="title">最近の作品</div>
              <div className="row grid-items border-line-v">
                <div className="col col-lg-6 col-md-6 col-12 border-line-v">
                  <div className="resume-items">
                    <div className="resume-item border-line-h active">
                      <div className="date">2020/1-現在</div>
                      <div className="name">不動産市場調査サービス</div>
                      <p>
                        ■ 駅の近くにある学校、スーパー、コンビニ、病院にて市場調査で取得した情報を提供するサイトです。
                        <br />
                        ■ スキル: Angular
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col col-lg-6 col-md-6 col-12 border-line-v">
                  <div className="resume-items">
                    <div className="resume-item border-line-h">
                      <div className="date">2019/10-2019/11</div>
                      <div className="name">バーの紹介ウェブサイト</div>
                      <p>
                        ■ 多数のバー（酒場）を紹介するシステムの機能を開発し維持するプロジェクトである。
                        <br />
                        ■ スキル: PHP, Laravel
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col col-lg-6 col-md-6 col-12 border-line-v">
                  <div className="resume-items">
                    <div className="resume-item border-line-h">
                      <div className="date">2019/7-2019/9</div>
                      <div className="name">チケット予約ウェブサイト</div>
                      <p>
                        ■ チケットを事前予約するシステムの機能を開発して維持する。
                        <br />
                        ■ スキル: PHP, EC-Cube
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col col-lg-6 col-md-6 col-12 border-line-v">
                  <div className="resume-items">
                    <div className="resume-item border-line-h">
                      <div className="date">2019/4-2019/6</div>
                      <div className="name">日本の旅行企画を立てるサービスシステム</div>
                      <p>
                        ■ 日本の旅行企画を立てるサービスシステムの機能を追加開発・保守する
                        <br />
                        ■ スキル: Angular
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col col-lg-6 col-md-6 col-12 border-line-v">
                  <div className="resume-items">
                    <div className="resume-item border-line-h">
                      <div className="date">2017/6-2019/4</div>
                      <div className="name">顧客管理システム開発</div>
                      <p>
                        ■ 総合顧客管理システム
                        <br />
                        ・オフィシャルホームページ（CMS）
                        <br />
                        ・キャスト管理（プロフィール、マイページ、受付、給与）
                        <br />
                        ・顧客管理、受付・決済管理
                        <br />
                        ・マスター管理（コース管理、給与設定）
                        <br />
                        ■ スキル: PHP, Laravel
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col col-lg-6 col-md-6 col-12 border-line-v">
                  <div className="resume-items">
                    <div className="resume-item border-line-h">
                      <div className="date">2016/12-2017/5</div>
                      <div className="name">複数フラットフォームのモバイルゲーム</div>
                      <p>
                        ■ 複数フラットフォームのモバイルゲーム
                        <br />
                        ■ スキル: PHP、Yii、 Smarty
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col col-lg-6 col-md-6 col-12 border-line-v">
                  <div className="resume-items">
                    <div className="resume-item border-line-h">
                      <div className="date">2016/9-2016/12</div>
                      <div className="name">ECサイト</div>
                      <p>
                        ■ ECサイト
                        <br />
                        ■ スキル: PHP、CakePHP、Jquery、Paypal
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col col-lg-6 col-md-6 col-12 border-line-v">
                  <div className="resume-items">
                    <div className="resume-item border-line-h">
                      <div className="date">2016/3-2016/8</div>
                      <div className="name">各観光地での障害者向けて、利用経験が共有できるサイト</div>
                      <p>
                        ■ 通知機能とエベント一覧管理とスレッド管理を開発する
                        <br />
                        ■ スキル: PHP、CakePHP、Jquery
                      </p>
                    </div>
                  </div>
                </div>

                <div className="clear" />
              </div>
            </div>
          </div>
        </div>

        <div className="card-inner blog" id="blog-card">
          <div className="card-wrap">
            <div className="content blog">
              <div className="title">私のブログ</div>
              <div className="row border-line-v">
                <div className="col col-lg-12 col-md-12 col-12 border-line-h">
                  <h3 style={{ textAlign: 'center' }}>近日公開</h3>
                </div>
                <div className="clear" />
              </div>
            </div>
          </div>
        </div>

        <div className="card-inner contacts" id="contacts-card">
          <div className="card-wrap">
            <div className="content contacts">
              <div className="title">お問い合わせ</div>
              <div className="row">
                <div className="col col-lg-12 col-md-12 col-12 border-line-v">
                  <div className="info-list">
                    <ul>
                      <li>
                        <strong>住所: </strong> ハノイ、ベトナム
                      </li>
                      <li>
                        <strong>メール: </strong> tuanct.207@gmail.com
                      </li>
                      <li>
                        <strong>携帯電話: </strong> +84 966.753.789
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="clear" />
              </div>
            </div>

            <div className="content contacts">
              <div className="title">お問い合わせフォーム</div>
              <div className="row">
                <div className="col col-lg-12 col-md-12 col-12 border-line-v">
                  <div className="contact_form">
                    <form id="cform" method="post">
                      <div className="row">
                        <div className="col col-lg-6 col-md-6 col-12">
                          <div className="group-val">
                            <input type="text" name="name" placeholder="氏名" />
                          </div>
                        </div>
                        <div className="col col-lg-6 col-md-6 col-12">
                          <div className="group-val">
                            <input type="text" name="email" placeholder="メールアドレス" />
                          </div>
                        </div>
                        <div className="col col-lg-12 col-md-12 col-12">
                          <div className="group-val">
                            <textarea name="message" placeholder="内容" rows={3} />
                          </div>
                        </div>
                      </div>
                      <div className="align-left">
                        <a href="#" className="button">
                          <span>送る</span>
                        </a>
                      </div>
                    </form>
                    <div className="alert-success">
                      <p>Thanks, your message is sent successfully.</p>
                    </div>
                  </div>
                </div>
                <div className="clear" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

