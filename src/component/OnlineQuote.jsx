import React from "react";
import "./OnlineQuote.css";

export default function OnlineQuote(){
  return(
    <>
      <div className="online_wrapper">
        <div className="online_info">
          <h3>온라인 간편 견적보기</h3>
          <p>어떤 인테리어가 나에게 맞을지 고민중 이신가요? 맞춤 인테리어 상담 도와드립니다!</p>
        </div>
        <div className="online_form">
          <ul>
            <li>
              <p>선호스타일 선택</p>
              <select>
                <option value="트렌디 화이트">트렌디 화이트</option>
                <option value="트렌드 내추럴">트렌디 내추럴</option>
                <option value="트렌드 플러스">트렌디 플러스</option>
              </select>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
