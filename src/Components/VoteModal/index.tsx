import { Font } from "../../Styles/Font";
import Input from "../Input/Input";
import * as S from "./style";
import imgFileImg from "../../assets/img/SVG/imgfile.svg";

const VoteModal = () => {
  return (
    <S.Container>
      <S.InputBox>
        <S.TextBox>
          <span>*</span>
          <Font text="투표설명" kind="label1" color="black" />
        </S.TextBox>
        <Input
          id="modal"
          type="text"
          placeholder="투표에 대한 설명을 입력해주세요."
        />
      </S.InputBox>
      <S.InputBox>
        <Font
          text="투표항목에 맞는 사진을 첨부해 주세요."
          kind="label2"
          color="black"
        />
        <S.VoteImgInput htmlFor="fileUpload">
          <input
            type="file"
            id="fileUpload"
            style={{ display: "none" }}
            accept="image/*"
          />
          <img src={imgFileImg} alt="" />
          <Font text="사진을 첨부해주세요." kind="caption2" color="gray400" />
        </S.VoteImgInput>
      </S.InputBox>
    </S.Container>
  );
};

export default VoteModal;
