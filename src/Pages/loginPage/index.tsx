import * as S from "./style";
import { Font } from "../../Styles/Font";
import Input from "../../Components/Input/Input";
import Button from "../../Components/Button";
import { useEffect, useState } from "react";
import useInputStore from "../../store/useInputStore";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [buttonActive, setButtonActive] = useState<boolean>(false);
  const { inputs } = useInputStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (inputs["loginText"] && inputs["loginPassword"]) setButtonActive(true);
    else setButtonActive(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputs["loginText"], inputs["loginPassword"]]);

  const clickHandle = () => {
    navigate("/main");
  };

  return (
    <S.LoginPageContainer>
      <div style={{ gap: "20px" }}>
        <Font text="eeats! 로그인 하기" kind="Heading1" color="black" />
        <Font text="어드민 계정입니다" kind="label2" color="gray500" />
      </div>
      <div style={{ gap: "52px" }}>
        <Input id="loginText" type="text" placeholder="아이디 입력" />
        <Input id="loginPassword" type="password" placeholder="비밀번호 입력" />
      </div>
      <Button text="로그인" activate={buttonActive} onClick={clickHandle} />
    </S.LoginPageContainer>
  );
};

export default LoginPage;
