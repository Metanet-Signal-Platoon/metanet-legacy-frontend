import React from "react";
import * as S from "./SignIn.style.ts";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from 'recoil';
import { userDisabilityAtom, userDisabilityRankAtom, userDisabilityDetailAtom } from '../../recoil/SignInAtoms'; // Recoil atom import

function SignIn3() {
  const navigate = useNavigate();

  // 다음 버튼 클릭 시
  function onClickNextBtn() {
    navigate("/signin-4");
  }

  // 장애 유형 options
  const options1 = [
    { value: "", label: "장애 유형을 선택하세요" },
    { value: "시각", label: "시각" },
    { value: "청각", label: "청각" },
    { value: "척수", label: "척수" },
    { value: "지적", label: "지적" },
  ];

  // 장애 등급 options
  const options2 = [
    { value: "", label: "장애 등급을 선택하세요" },
    { value: "1등급", label: "1등급" },
    { value: "2등급", label: "2등급" },
    { value: "3등급", label: "3등급" },
    { value: "4등급", label: "4등급" },
    { value: "5등급", label: "5등급" },
    { value: "6등급", label: "6등급" },
  ];

  // 척수 장애 등급 options
  const options3 = [
    { value: "", label: "장애 등급을 선택하세요" },
    { value: "불완전 마비", label: "불완전 마비" },
    { value: "완전 마비", label: "완전 마비" },
  ];

  // 척수 장애 상세 options
  const options4 = [
    { value: "", label: "장애 상세를 선택하세요" },
    { value: "T6 미만", label: "T6 미만" },
    { value: "T6 이상", label: "T6 이상" },
    { value: "사지마비", label: "사지마비" },
  ];

  // State to manage selected values
  const [selectedOption1, setSelectedOption1] = useRecoilState(userDisabilityAtom);
  const [selectedOption2, setSelectedOption2] = useRecoilState(userDisabilityRankAtom);
  const [selectedOption3, setSelectedOption3] = useRecoilState(userDisabilityRankAtom);
  const [selectedOption4, setSelectedOption4] = useRecoilState(userDisabilityDetailAtom);

  // 장애 유형 변경
  const handleChange1 = (event) => {
    setSelectedOption1(event.target.value); // Update selected value
  };

  // 장애 등급 변경
  const handleChange2 = (event) => {
    setSelectedOption2(event.target.value); // Update selected value
  };

  // 척수 장애 등급 변경
  const handleChange3 = (event) => {
    setSelectedOption3(event.target.value); // Update selected value
  };

  // 척수 장애 상세 변경
  const handleChange4 = (event) => {
    setSelectedOption4(event.target.value); // Update selected value
  };

  return (
    <S.Component>
      <S.SignInTitle>
        본인의
        <br />
        장애 정보를 입력해 주세요.
      </S.SignInTitle>

      {/* 장애 유형 선택 */}
      <S.ObstacleType>
        <S.Select value={selectedOption1} onChange={handleChange1}>
          {options1.map((option1) => (
            <option key={option1.value} value={option1.value}>
              {option1.label}
            </option>
          ))}
        </S.Select>
      </S.ObstacleType>

      {/* 척수 외 장애 등급 */}
      {selectedOption1 !== "척수" && selectedOption1 && (
        <S.ObstacleType>
          <S.Select value={selectedOption2} onChange={handleChange2}>
            {options2.map((option2) => (
              <option key={option2.value} value={option2.value}>
                {option2.label}
              </option>
            ))}
          </S.Select>
        </S.ObstacleType>
      )}

      {/* 척수 장애 등급 */}
      {selectedOption1 === "척수" && (
        <S.ObstacleType>
          <S.Select value={selectedOption3} onChange={handleChange3}>
            {options3.map((option3) => (
              <option key={option3.value} value={option3.value}>
                {option3.label}
              </option>
            ))}
          </S.Select>
        </S.ObstacleType>
      )}

      {/* 척수 장애 상세 */}
      {selectedOption1 === "척수" && (
        <S.ObstacleType>
          <S.Select value={selectedOption4} onChange={handleChange4}>
            {options4.map((option4) => (
              <option key={option4.value} value={option4.value}>
                {option4.label}
              </option>
            ))}
          </S.Select>
        </S.ObstacleType>
      )}

      <S.NextBtn onClick={onClickNextBtn}>다음</S.NextBtn>
    </S.Component>
  );
}

export default SignIn3;
