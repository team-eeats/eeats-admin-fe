import * as S from "./style";
import logoImg from "../../../assets/img/SVG/Logo.svg";
import { Font } from "../../../Styles/Font";
import VoteNavimg from "../../../assets/img/SVG/NavImg1.svg";
import SugNavimg from "../../../assets/img/SVG/NavImg2.svg";
import AnnoNavimg from "../../../assets/img/SVG/NavImg3.svg";
import LogoutImg from "../../../assets/img/SVG/Logout.svg";

interface navArrayPropType {
  img: string;
  text: string;
  path: string;
}

const Sidebar = () => {
  const NAME = "강해민";
  const navArray: navArrayPropType[] = [
    {
      img: VoteNavimg,
      text: "투표",
      path: "/vote",
    },
    {
      img: SugNavimg,
      text: "건의",
      path: "/suggest",
    },
    {
      img: AnnoNavimg,
      text: "공지사항",
      path: "/announcement",
    },
  ];

  const logoutClick = () => {};

  return (
      <S.SidebarContainer>
        <S.Heading>
          <img src={logoImg} style={{ width: "100%" }} />
          <p
            style={{
              fontFamily: "Pretendard-Semibold",
              fontSize: "clamp(24px, 110%, 42px)",
              fontWeight: "600",
            }}
          >
            {NAME}선생님
          </p>
        </S.Heading>
        <S.NavContainer>
          {navArray.map(({ img, text, path }, index) => (
            <S.NavElement key={index} to={path}>
              <img src={img} alt="" style={{ width: "28px", height: "28px" }} />
              <Font text={text} kind="Heading3" color="gray600" />
            </S.NavElement>
          ))}
        </S.NavContainer>
        <S.Logout onClick={logoutClick}>
          <img
            src={LogoutImg}
            alt=""
            style={{
              width: "24px",
              height: "24px",
              transform: "translateY(-3px)",
            }}
          />
          <Font text="로그아웃" kind="Heading3" color="gray600" />
        </S.Logout>
      </S.SidebarContainer>
  );
};

export default Sidebar;
