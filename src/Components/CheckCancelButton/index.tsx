import * as S from './style'
import { Font } from '../../Styles/Font'
import { DeleteNotice } from '../../Apis/notices'

interface ButtonProps {
  id: string
  close: () => void;
}

const CheckCancelButton = ({ id, close }: ButtonProps) => {

  const handleDelete = async () => {
    try {
      await DeleteNotice(id);
      console.log("삭제가 완료되었습니다");
      close();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <S.ButtonWrap>
      <S.CancelButton onClick={close}>
        <Font text="취소" kind="Button2" color="white" />
      </S.CancelButton>
      <S.CheckButton onClick={handleDelete}>
        <Font text="확인" kind="Button2" color="white" />
      </S.CheckButton>
    </S.ButtonWrap>
  );
};

export default CheckCancelButton;
