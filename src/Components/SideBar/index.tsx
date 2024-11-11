import { useState } from "react";
import * as S from "./style";
import { Font } from "../../Styles/Font"
import Logo from "../../Assets/img/SVG/Logo.svg";
import { Alert, Page, Vote, Logout, WhiteAlert, WhitePage, WhiteVote } from "../../Assets/img/SVG/index";
import { useNavigate } from "react-router-dom";

const listMap = [
  { icon: Vote, selectIcon: WhiteVote, text: "투표", path: "/vote" },
  { icon: Page, selectIcon: WhitePage, text: "건의", path: "/suggest" },
  { icon: Alert, selectIcon: WhiteAlert, text: "공지사항", path: "/notice" }
];

const SideBar = () => {
  const navigate = useNavigate()
  const [selected, setSelected] = useState<number>(0);

  const handelClick = (index: number, path: string) => {
    setSelected(index)
    navigate(path)
  }

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
              selected={selected === index}
              onClick={() => handelClick(index, value.path)}
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
