import { Font } from "../../Styles/Font";
import Input from "../Input/Input";
import * as S from "./style";
import imgFileImg from "../../assets/img/SVG/imgfile.svg";
import xImg from "../../assets/img/SVG/Ximg.svg";
import { useRef, useState } from "react";

const VoteModal = () => {
  const [imgFile, setImgFile] = useState<string>("");
  const imgRef = useRef<HTMLInputElement>(null);

  const saveImgFile = () => {
    const file = imgRef.current?.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImgFile(reader.result as string);
      };
    }
  };

  return (
    <S.Container>
      <S.XImg src={xImg} alt="" onClick={() => {}} />
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
        {!imgFile ? (
          <form>
            <input
              type="file"
              id="fileUpload"
              style={{ display: "none" }}
              accept="image/*"
              ref={imgRef}
              onChange={saveImgFile}
            />
            <S.VoteImgInput htmlFor="fileUpload">
              <img src={imgFileImg} alt="" />
              <Font
                text="사진을 첨부해주세요."
                kind="caption2"
                color="gray400"
              />
            </S.VoteImgInput>
          </form>
        ) : (
          <img
            src={imgFile ? imgFile : `/images/icon/user.png`}
            alt="프로필 이미지"
            style={{
              width: "100px",
              height: "100px",
              border: "none",
              borderRadius: "12px",
            }}
          />
        )}
      </S.InputBox>
    </S.Container>
  );
};

export default VoteModal;
