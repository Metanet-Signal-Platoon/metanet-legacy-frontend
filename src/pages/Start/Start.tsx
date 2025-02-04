import React from 'react'
import * as S from './Start.style';
import { ReactComponent as BFIcon } from '../../assets/BFIcon.svg';
import iPhone15 from '../../assets/iPhone15.png';
import { useNavigate } from 'react-router-dom';

function Start() {

    const navigate = useNavigate();

    // 로그인 버튼 클릭 시
    function onClickLoginBtn(){
      navigate('/login');
    }

    // 회원가입 버튼 클릭 시
    function onClickSigninBtn(){
      navigate('/signin-1');
    }

  return (
    <div>
      <S.ServiceText>장애 유형별 운동을 도와주는<br/>나만의 운동 친구</S.ServiceText>
      <S.ImageBox><BFIcon/></S.ImageBox>
      <S.ImageBox><img src={iPhone15} alt="iPhone15" /></S.ImageBox>
      <S.LoginBtn onClick={onClickLoginBtn}>로그인</S.LoginBtn>
      <S.SigninBtn onClick={onClickSigninBtn}>회원가입</S.SigninBtn>
    </div>
  )
}

export default Start