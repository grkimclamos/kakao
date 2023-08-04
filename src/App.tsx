import React, { useEffect, useState } from "react";
import Header from "./layouts/Header";
import Icon from "./assets/icons/Icon";
import Card from "@src/components/Card";
import { wrap1Arr, wrap2Arr } from "C:/Users/grkim/Desktop/kakao/src/data/data";
import Footer from "@src/layouts/Footer";
import $ from "jquery";
import Maps from "@src/components/Maps";

const App = () => {
  const [position, setPosition] = useState(0);
  function onScroll() {
    setPosition(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const formattedDate = `${
    new Date().getMonth() + 1
  }월 ${new Date().getDate()}일`;

  return (
    <>
      <Header position={position} />
      <div className="appWrap" id="appWrap">
        <section
          className="content_feature"
          style={{
            top: position > 300 ? "-1px" : "72px",
            display: position > 300 ? "" : "none",
          }}
        >
          <div className="section_inner">
            <Icon.calander size="40" />
            <strong>카카오 소식</strong>
          </div>
        </section>
        <div className="main_contents">
          <article className="content_article">
            <h3>
              <Icon.calander size="80" />
              <span>
                {formattedDate}에 전하는 <br /> 카카오 소식 입니다
              </span>
              <div className="rolling_wrap">
                <div className="rolling">
                  <span></span>
                </div>
              </div>
            </h3>
            <div className="content_home">
              <div className="card_wrap">
                <div className="card_item">
                  <Card
                    height={579}
                    fontSize={1.8}
                    title={"보도 자료"}
                    date={"2023.07.26"}
                    contents={
                      "카카오임팩트, 소풍벤처스-탄녹위와 함께 '탄소 직접 포집(DAC)'기술 세미나 개최"
                    }
                    tag={[
                      "카카오임팩트",
                      "임팩트클라이밋네트워크",
                      "기술세미나",
                      "탄소중립",
                    ]}
                    img={
                      "https://images.unsplash.com/photo-1674574124345-02c525664b65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80"
                    }
                    sticky={true}
                  />
                </div>
                <div className="card_item">
                  {wrap1Arr.map((el: any, index: any) => {
                    return (
                      <Card
                        height={el.height}
                        width={el.width}
                        fontSize={el.fontSize}
                        title={el.title}
                        contents={el.contents}
                        tag={el.tag}
                        date={el?.date}
                        img={el?.img}
                        fade={el?.fade}
                      />
                    );
                  })}
                </div>
              </div>
              <div className="culture_wrap">
                <strong>기술과 사람을 더 나은 세상을 만듭니다.</strong>
                <a href="">
                  <span>카카오 문화 바로가기 →</span>
                </a>
                <img
                  src="https://www.kakaocorp.com/page/bg_home_culture_210325.png"
                  alt=""
                />
              </div>
              <div className="sns_wrap">
                <strong>카카오의 다양한 소식을 구독해보세요.</strong>
                <ul>
                  <li>
                    <a href=""></a>
                  </li>
                  <li>
                    <a href=""></a>
                  </li>
                  <li>
                    <a href=""></a>
                  </li>
                  <li>
                    <a href=""></a>
                  </li>
                  <li>
                    <a href=""></a>
                  </li>
                </ul>
              </div>
              <div className="card_wrap card_wrap2">
                <div className="card_item card_item2">
                  {wrap2Arr.map((el: any, index: number) => {
                    return (
                      <Card
                        height={el.height}
                        width={el.width}
                        fontSize={el.fontSize}
                        title={el.title}
                        contents={el.contents}
                        tag={el.tag}
                        date={el?.date}
                        img={el?.img}
                      />
                    );
                  })}
                </div>
                <div className="card_item">
                  <Maps />
                </div>
              </div>
              <div className="etc_wrap">
                <div className="etc_item">
                  <a href="">
                    <strong>사람과 기술로 일상을 돕는 카카오 서비스</strong>
                    <div className="button">
                      <span>서비스 바로가기 →</span>
                    </div>
                  </a>
                </div>
                <div className="etc_item">
                  <a href="">
                    <strong>
                      세상만사에 관심이 많다면, 당신은 이미 카카오 크루
                    </strong>
                    <div className="button">
                      <span>인재영입 바로가기 →</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default App;
