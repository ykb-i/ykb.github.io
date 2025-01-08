import React from "react";
import "./InteriorTrend.css";

export default function InteriorTrend(){
  return(
    <div>
      <ul className="trend_info">
        <div className="trend_title">
          <h2>인테리어 트렌드</h2>
          <p>최신 인테리어 트렌드를 확인해보세요</p>
        </div>
        <li>
          <div className="info_box">
            <a href="/trend_white">
             <h3>트렌디 화이트</h3>
             <p>
              기본에 충실한 깨끗함과 
              <br></br>
              도시적인 모던함을 
              <br></br>
              추구하는 스타일
            </p>
            </a>
          </div>
          <ul className="img_box">
            <li>
              <a href="/trend_white">
                <img src="./img/White-img00.jpg"/>
              </a>
            </li>
            <li>
              <a href="/trend_white">
                <img src="./img/White-img01.jpg"/>
              </a>
            </li>
            <li>
              <a href="/trend_white">
                <img src="./img/White-img02.jpg"/>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <div className="info_box">
            <a href="/trend_natural">
             <h3>트렌디 내추럴</h3>
             <p>
              밝고 따뜻한 자연의 감성을
              <br></br>
              담은 심플한 스타일
            </p>
            </a>
          </div>
          <ul className="img_box">
            <li>
              <a href="/trend_plus">
                <img src="./img/Plus-img00.jpg"/>
              </a>
            </li>
            <li>
              <a href="/trend_white">
                <img src="./img/Plus-img01.jpg"/>
              </a>
            </li>
            <li>
              <a href="/trend_white">
                <img src="./img/Plus-img02.jpg"/>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <div className="info_box">
            <a href="/trend_plus">
             <h3>트렌디 플러스</h3>
             <p>
              웅장하면서 고급스러운
              <br></br>
              분위기를 연출한 스타일
            </p>
            </a>
          </div>
          <ul className="img_box">
            <li>
              <a href="/trend_plus">
                <img src="./img/Plus-img00.jpg"/>
              </a>
            </li>
            <li>
              <a href="/trend_white">
                <img src="./img/Plus-img01.jpg"/>
              </a>
            </li>
            <li>
              <a href="/trend_white">
                <img src="./img/Plus-img02.jpg"/>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
}
