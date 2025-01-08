import React, { useState } from "react";
import "./ConstructionExample.css";

export default function ConstructionExample() {

  const [selectedIndex, setSelectedIndex] = useState(0);

  // 이미지 정보
  const imageData = [
    {
      before: "./img/construction-before00.jpg",
      after: "./img/construction-after00.jpg",
    },
    {
      before: "./img/construction-before01.jpg",
      after: "./img/construction-after01.jpg",
    },
    {
      before: "./img/construction-before02.jpg",
      after: "./img/construction-after02.jpg",
    },
    {
      before: "./img/construction-before03.jpg",
      after: "./img/construction-after03.jpg",
    },
  ];

  // 리스트 정보
  const listData = [
    {
      title: "필로티층의 매력을 살린 ALL 리모델링",
      cost: "시공비용 7,360만원   시공기간 4주",
      location: "경기도 하남시 덕풍동 하남자이아파트 32평",
    },
    {
      title: "알뜰살뜰 공간효율과 아늑함을 모두 챙긴 우리집",
      cost: "시공비용 2,740만원 시공기간 4주",
      location: "서울 강남구 신성아파트 23평",
    },
    {
      title: "친환경 마루와 벽지로 채워진 건강한 우리집",
      cost: "시공비용 10,060만원 시공기간 5주",
      location: "경기도 용인시 신촌마을포스홈타운 49평",
    },
    {
      title: "더 넓고 깔끔하게 변신한 40평대 신혼집",
      cost: "시공비용 6,840만원 시공기간 4주",
      location: "서울 마포구 대흥태영아파트 43평",
    },
  ];

  return (
    <div>
      <div className="construction_wrapper">
        <h3>시공사례</h3>
        <div className="construction_content">
          
          <div className="construction_img">
            <h5>Before</h5>
            <img src={imageData[selectedIndex].before} alt="Before" />
            <h5>After</h5>
            <img src={imageData[selectedIndex].after} alt="After" />
          </div>

    
          <ul className="construction_select">
            {listData.map((item, index) => (
              <li
                key={index}
                onClick={() => setSelectedIndex(index)} 
                style={{
                  backgroundColor: selectedIndex === index ? "#f0f0f0" : "transparent", 
                  cursor: "pointer",
                }}
              >
                <h4>{item.title}</h4>
                <p>{item.cost}</p>
                <p>{item.location}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
