import Link from 'next/link';
import type { Dictionary, Locale } from './getDictionary';

export default function CvPage({ locale, dictionary }: { locale: Locale; dictionary: Dictionary }) {
  const strings = dictionary;

  return (
    <div className="page new-skin">
      <div className="container opened" data-animation-in="fadeInLeft" data-animation-out="fadeOutLeft">
        <header className="header">
          <div>
            <Link href="/ja" aria-current={locale === 'ja' ? 'page' : undefined}>
              JA
            </Link>{' '}
            |{' '}
            <Link href="/en" aria-current={locale === 'en' ? 'page' : undefined}>
              EN
            </Link>{' '}
            |{' '}
            <Link href="/vi" aria-current={locale === 'vi' ? 'page' : undefined}>
              VI
            </Link>
          </div>
          <div className="top-menu">
            <ul>
              <li className="active">
                <a href="#about-card">
                  <i className="material-icons">person_pin</i>
                  <span className="link">{strings.navAbout}</span>
                </a>
              </li>
              <li>
                <a href="#resume-card">
                  <i className="material-icons">assessment</i>
                  <span className="link">{strings.navResume}</span>
                </a>
              </li>
              <li>
                <a href="#works-card">
                  <i className="material-icons">work</i>
                  <span className="link">{strings.navWorks}</span>
                </a>
              </li>
              <li>
                <a href="#blog-card">
                  <i className="material-icons">book</i>
                  <span className="link">{strings.navBlog}</span>
                </a>
              </li>
              <li>
                <a href="#contacts-card">
                  <i className="material-icons">alternate_email</i>
                  <span className="link">{strings.navContacts}</span>
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
            <div className="title">{strings.profileName}</div>
            <div className="subtitle">{strings.profileSubtitle}</div>
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
              <div className="title">{strings.aboutTitle}</div>
              <div className="row">
                <div className="col col-lg-6 col-md-6 col-12 border-line-v">
                  <div className="text-box">
                    <p>{strings.aboutParagraph}</p>
                  </div>
                </div>
                <div className="col col-lg-6 col-md-6 col-12 border-line-v">
                  <div className="info-list">
                    <ul>
                      <li>
                        <strong>{strings.infoBirthday} </strong> 1993/07/20
                      </li>
                      <li>
                        <strong>{strings.infoResidence} </strong> ハノイ
                        <br />
                        ベトナム
                      </li>
                      <li>
                        <strong>{strings.infoEmail} </strong> tuanct.207@gmail.com
                      </li>
                      <li>
                        <strong>{strings.infoPhone} </strong> +84 966.753.789
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
              <div className="title">{strings.resumeTitle}</div>
              <div className="row">
                <div className="col col-lg-6 col-md-6 col-12 border-line-v">
                  <div className="resume-title border-line-h">
                    <div className="icon">
                      <i className="material-icons" style={{ fontSize: 40 }}>
                        work_outline
                      </i>
                    </div>
                    <div className="name">{strings.experienceTitle}</div>
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
                    <div className="name">{strings.educationTitle}</div>
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
              <div className="title">{strings.skillsTitle}</div>
              <div className="row">
                <div className="col col-lg-6 col-md-6 col-12 border-line-v">
                  <div className="skills-list dotted">
                    <div className="skill-title border-line-h">
                      <div className="icon">
                        <i className="material-icons" style={{ fontSize: 40 }}>
                          code
                        </i>
                      </div>
                      <div className="name">{strings.codingTitle}</div>
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
                      <div className="name">{strings.languagesTitle}</div>
                    </div>
                    <ul>
                      <li className="border-line-h">
                        <div className="name">英語</div>
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
                      <div className="name">{strings.knowledgeTitle}</div>
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
              <div className="title">{strings.worksTitle}</div>
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
              <div className="title">{strings.blogTitle}</div>
              <div className="row border-line-v">
                <div className="col col-lg-12 col-md-12 col-12 border-line-h">
                  <h3 style={{ textAlign: 'center' }}>{strings.blogComingSoon}</h3>
                </div>
                <div className="clear" />
              </div>
            </div>
          </div>
        </div>

        <div className="card-inner contacts" id="contacts-card">
          <div className="card-wrap">
            <div className="content contacts">
              <div className="title">{strings.contactsTitle}</div>
              <div className="row">
                <div className="col col-lg-12 col-md-12 col-12 border-line-v">
                  <div className="info-list">
                    <ul>
                      <li>
                        <strong>{strings.addressLabel}: </strong> ハノイ、ベトナム
                      </li>
                      <li>
                        <strong>{strings.mailLabel}: </strong> tuanct.207@gmail.com
                      </li>
                      <li>
                        <strong>{strings.phoneLabel}: </strong> +84 966.753.789
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="clear" />
              </div>
            </div>

            <div className="content contacts">
              <div className="title">{strings.contactFormTitle}</div>
              <div className="row">
                <div className="col col-lg-12 col-md-12 col-12 border-line-v">
                  <div className="contact_form">
                    <form id="cform" method="post">
                      <div className="row">
                        <div className="col col-lg-6 col-md-6 col-12">
                          <div className="group-val">
                            <input type="text" name="name" placeholder={strings.formNamePlaceholder} />
                          </div>
                        </div>
                        <div className="col col-lg-6 col-md-6 col-12">
                          <div className="group-val">
                            <input type="text" name="email" placeholder={strings.formEmailPlaceholder} />
                          </div>
                        </div>
                        <div className="col col-lg-12 col-md-12 col-12">
                          <div className="group-val">
                            <textarea name="message" placeholder={strings.formMessagePlaceholder} rows={3} />
                          </div>
                        </div>
                      </div>
                      <div className="align-left">
                        <a href="#" className="button">
                          <span>{strings.formSend}</span>
                        </a>
                      </div>
                    </form>
                    <div className="alert-success">
                      <p>{strings.formSuccess}</p>
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
