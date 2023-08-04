import React, { useState } from "react";
import Icon from "../assets/icons/Icon";
const Header = (props: { position: number }) => {
  const [Menu, setMenu] = useState(0);
  const handleMenu = (e: any) => {
    if (Menu == 0 || Menu !== e.currentTarget.dataset.id) {
      setMenu(e.currentTarget.dataset.id);
    } else {
      setMenu(0);
    }
  };
  return (
    <div
      className={props.position > 300 ? "headerWrap hide_header" : "headerWrap"}
    >
      <div className="headerContents">
        <h2>kakao</h2>
        <ul className="menuUl">
          <li className="menuLi">
            <span onClick={handleMenu} data-id={1}>
              소개
            </span>
            <ul className="subUl" style={{ display: Menu == 1 ? "" : "none" }}>
              <li className="subLi">
                <a href="">카카오 문화</a>
              </li>
              <li className="subLi">
                <a href="">공동체</a>
              </li>
              <li className="subLi">
                <a href="">연혁</a>
              </li>
            </ul>
          </li>
          <li className="menuLi">
            <span onClick={handleMenu} data-id={2}>
              이야기
            </span>
            <ul className="subUl" style={{ display: Menu == 2 ? "" : "none" }}>
              <li className="subLi">
                <a href="">콘텐츠 저장소</a>
              </li>
              <li className="subLi">
                <a href="">뚝딱뚝딱 성장기</a>
              </li>
              <li className="subLi">
                <a href="">숫자로 보는 카카오</a>
              </li>
            </ul>
          </li>
          <li className="menuLi">
            <a href="">뉴스</a>
          </li>
          <li className="menuLi">
            <span onClick={handleMenu} data-id={3}>
              기술과 서비스
            </span>
            <ul className="subUl" style={{ display: Menu == 3 ? "" : "none" }}>
              <li className="subLi">
                <a href="">기술</a>
              </li>
              <li className="subLi">
                <a href="">서비스</a>
              </li>
            </ul>
          </li>
          <li className="menuLi">
            <span onClick={handleMenu} data-id={4}>
              약속과 책임
            </span>
            <ul className="subUl" style={{ display: Menu == 4 ? "" : "none" }}>
              <li className="subLi">
                <a href="">카카오의 다짐</a>
              </li>
              <li className="subLi">
                <a href="">ESG</a>
              </li>
              <li className="subLi">
                <a href="">액티브그린</a>
              </li>
              <li className="subLi">
                <a href="">디지털 권리</a>
              </li>
              <li className="subLi">
                <a href="">AI윤리</a>
              </li>
            </ul>
          </li>
        </ul>
        <div className="HeaderUtil">
          <div className="icon">
            <Icon.glasses />
          </div>
          <div className="icon">
            <Icon.earth />
          </div>
          <div className="icon">
            <Icon.moon />
          </div>
        </div>
        <div className="mobileBtn">
          <div className="icon">
            <Icon.glasses />
          </div>
          <div className="icon">
            <Icon.menu />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
