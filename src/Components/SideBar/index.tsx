import { useState } from "react";
import * as S from "./style";
import { Font } from "../../Styles/Font"
import Logo from "../../Assets/img/SVG/Logo.svg";
import { Alert, Page, Vote, Logout, WhiteAlert, WhitePage, WhiteVote } from "../../Assets/img/SVG/index";

const listMap = [
  { icon: Vote, selectIcon: WhiteVote, text: "투표" },
  { icon: Page, selectIcon: WhitePage, text: "건의" },
  { icon: Alert, selectIcon: WhiteAlert, text: "공지사항" }
];

const SideBar = () => {
  const [selected, setSelected] = useState<number>(0);

  return (
    <S.Container>
      <S.Content>
        <S.LogoAndNameWrap>
          <img src={Logo} alt="로고" />
          <Font text="강해민선생님" kind="Heading1" />
        </S.LogoAndNameWrap>

        <S.ListWrap>
          {listMap.map((value, index) => (
            <S.List
              key={index}
              onClick={() => setSelected(index)}
              selected={selected === index}
            >
              <img src={selected === index ? value.selectIcon : value.icon} alt={value.text} />
              <Font text={value.text} kind="Heading3" color={selected === index ? "white" : "gray600"} />
            </S.List>
          ))}
        </S.ListWrap>
      </S.Content>
      <S.LogoutWrap>
        <img src={Logout} alt="로그아웃" />
        <Font text="로그아웃" kind="Heading3" color="gray600" />
      </S.LogoutWrap>
    </S.Container>
  );
};

export default SideBar;
