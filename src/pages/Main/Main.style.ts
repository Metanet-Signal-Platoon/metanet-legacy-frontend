import styled from 'styled-components';

// 헤더
export const Header = styled.div`
    background-color: white;
    padding: 20px 15px;
`;

// 서브 헤더
export const SubHeader = styled.div`
    margin-top: 40px;
    padding: 0px 30px;
    color: #161616;
`;

// 안녕하세요, 사용자님
export const HeaderText1 = styled.div`
    font-size: 20px;
`;

// 원하시는 서비스를 선택해 주세요
export const HeaderText2 = styled.div`
    font-size: 35px;
    margin-top: 10px;
    line-height: 1.3;
    font-weight: 600;
`;

export const MainContainer = styled.div`
    padding: 20px;
`;

// 맞춤형 운동추천
export const Service1 = styled.div`
    background-color: white;
    padding: 20px 20px 20px 15px;
    border-radius: 25px;
    margin-bottom: 20px;
    cursor: pointer;
    box-shadow: 0 0 10px 7px rgba(80, 97, 255, 0.05); /* 블러 효과 */
`;


// 운동 프로그램 위치
export const Service2 = styled.div`
    background-color: white;
    padding: 20px 20px 20px 15px;
    border-radius: 25px;
    margin-bottom: 20px;
    cursor: pointer;
    box-shadow: 0 0 10px 7px rgba(80, 97, 255, 0.05); /* 블러 효과 */
`;

// 운동 동호회
export const Service3 = styled.div`
    background-color: white;
    padding: 20px 20px 20px 15px;
    border-radius: 25px;
    cursor: pointer;
    box-shadow: 0 0 10px 7px rgba(80, 97, 255, 0.05); /* 블러 효과 */
`;

// 서비스명
export const ServiceTitle = styled.div`
    font-size: 25px;
    font-weight: 600;
    padding: 10px 10px 0px 10px;
`;

// 서비스 설명
export const ServiceText = styled.div`
    font-size: 17px;
    font-weight: 300;
    padding: 10px 0px 0px 10px;
    line-height: 1.3;
`;

export const ServiceIcon = styled.div`
    background-color: #F7F8FF;
    border-radius: 30px;
    width: 53px;
    height: 53px;
    margin: -25px 0px 0px auto;
    padding: 10px 12px;
`;