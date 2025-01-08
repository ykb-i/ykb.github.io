import React from "react";
import { Link } from "react-router-dom";
import './Navigation.css';

function Navigation(){
  return(
    <div>
      <div className="navbar">
        <Link className="Logo" to={'/'}><img src="./img/mainLogo.png"/></Link>
        <Link className="navbarMenu" to={'/interiorTrend'}>인테리어 트렌드</Link>
        <Link className="navbarMenu" to={'/constructionExample'}>시공사례</Link>
        <Link className="navbarMenu" to={'/onlineConsultation'}>온라인 상담신청</Link>
        <Link className="navbarMenu myPage" to={'/myPage'}>마이 페이지</Link>
      </div>
    </div>
  )
}

export default Navigation;