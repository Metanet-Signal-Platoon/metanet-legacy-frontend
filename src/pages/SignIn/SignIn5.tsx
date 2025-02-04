import React from 'react'
import * as S from "./SignIn.style.ts";
import { useNavigate } from "react-router-dom";
import iPhone15 from '../../assets/iPhone15.png';

function SignIn5() {

    const navigate = useNavigate();

    // 다음 버튼 클릭 시
    function onClickNextBtn() {
        navigate("/login");
    }

  return (
    <S.Component>
      <S.ServiceText>베프와 함께<br/>자신에게 꼭 맞는 운동을<br/>시작해보세요!</S.ServiceText>
      <S.ImageBox><img src={iPhone15} alt="iPhone15" /></S.ImageBox>
      <S.NextBtn onClick={onClickNextBtn}>시작하기</S.NextBtn>
    </S.Component>
  )
}

export default SignIn5