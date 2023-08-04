import React from "react";
const Footer = () => {
  return (
    <footer>
      <div className="inner_footer">
        <div className="service_footer">
          <div className="wrap_service">
            <strong className="service_title">소개</strong>
            <ul className="footer_list">
              <li className="footer_listItem">카카오 문화</li>
              <li className="footer_listItem">공동체</li>
              <li className="footer_listItem">연혁</li>
            </ul>
          </div>
          <div className="wrap_service">
            <strong className="service_title">이야기</strong>
            <ul className="footer_list">
              <li className="footer_listItem">콘텐츠 저장소</li>
              <li className="footer_listItem">뚝딱뚝딱 성장기</li>
              <li className="footer_listItem">숫자로 보는 카카오</li>
            </ul>
          </div>
          <div className="wrap_service">
            <strong className="service_title">뉴스</strong>
          </div>
          <div className="wrap_service">
            <strong className="service_title">기술과 서비스</strong>
            <ul className="footer_list">
              <li className="footer_listItem">기술</li>
              <li className="footer_listItem">서비스</li>
            </ul>
          </div>
          <div className="wrap_service">
            <strong className="service_title">약속과 책임</strong>
            <ul className="footer_list">
              <li className="footer_listItem">카카오의 다짐</li>
              <li className="footer_listItem">ESG</li>
              <li className="footer_listItem">액티브그린</li>
              <li className="footer_listItem">디지털 권리</li>
              <li className="footer_listItem">AI 윤리</li>
            </ul>
          </div>
          <div className="wrap_service">
            <strong className="service_title">투자정보</strong>
            <ul className="footer_list">
              <li className="footer_listItem">기업지배구조</li>
              <li className="footer_listItem">주가정보</li>
              <li className="footer_listItem">재무정보</li>
              <li className="footer_listItem">IR행사</li>
              <li className="footer_listItem">공시정보</li>
              <li className="footer_listItem">공고</li>
            </ul>
          </div>
          <div className="group_wrap">
            <div className="wrap_service">
              <strong className="service_title">고객센터</strong>
              <ul className="footer_list">
                <li className="footer_listItem">카카오 고객센터 ↗</li>
                <li className="footer_listItem">Daum 고객센터 ↗</li>
              </ul>
            </div>
            <strong className="service_title">인재영입 ↗</strong>
            <strong className="service_title">카카오계정 ↗</strong>
          </div>
        </div>
        <div className="relation_footer">
          <div className="footer_info">
            <span>이용약관</span>
            <span>위치정보 이용약관</span>
            <span>개인정보처리방침</span>
            <span>운영정책</span>
            <span>청소년보호정책</span>
            <span>브랜드보호정책</span>
            <span>권리침해신고안내</span>
            <span>공지사항</span>
            <span>사이버윤리실</span>
            <span>contact Us</span>
          </div>
          <div className="relation_site">관련 사이트</div>
          <div className="txt_copyright">
            © Kakao Corp. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
