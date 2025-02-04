import React from "react";
import * as S from './SignIn.style.ts';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { userNameAtom, userBirthAtom, userGenderAtom } from '../../recoil/SignInAtoms'; // Recoil atom import

function SignIn2() {

  const navigate = useNavigate();
  // Recoil 상태 사용
  const [userName, setUserName] = useRecoilState(userNameAtom);
  const [userBirth, setUserBirth] = useRecoilState(userBirthAtom);

  // 이름 변경 처리
  function handleUserNameChange(event) {
    setUserName(event.target.value);
  }

  // 생년월일 변경 처리
  function handleUserBirthChange(event) {
    setUserBirth(event.target.value); // Date 객체를 Recoil 상태에 저장
  }

  // 다음 버튼 클릭 시
  function onClickNextBtn(){
    navigate('/signin-3');
  }

  // 활성화된 버튼 상태 관리 (남자: "male", 여자: "female")
  const [activeGender, setActiveGender] = useRecoilState(userGenderAtom);

  const toggleGender = (gender) => {
    setActiveGender((prevGender) => (prevGender === gender ? "" : gender));
  };

  return (
    <S.Component>
        <S.SignInTitle>본인의 정보를 입력해 주세요.</S.SignInTitle>
        <S.SignInInput placeholder="이름" value={userName} onChange={handleUserNameChange}></S.SignInInput>
        <S.SignInInput placeholder="생년월일 (2000-00-00)" value={userBirth} onChange={handleUserBirthChange}></S.SignInInput>
        <S.GenderBtnBox>
          <S.GenderBtn1
            isActive={activeGender === "M"}
            onClick={() => toggleGender("M")}
          >
            남자
          </S.GenderBtn1>
          <S.GenderBtn2
            isActive={activeGender === "F"}
            onClick={() => toggleGender("F")}
          >
            여자
          </S.GenderBtn2>
        </S.GenderBtnBox>
        <S.NextBtn onClick={onClickNextBtn}>다음</S.NextBtn>
    </S.Component>
  )
}

export default SignIn2