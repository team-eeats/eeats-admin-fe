import { Font } from '../../Styles/Font';
import * as S from './style'
import CheckCancelButton from '../CheckCancelButton';

const DeleteModal = ({id, close}: {id: string, close: () => void}) => {
  return (
    <S.Container>
      <S.Content>
        <S.TextWrap>
          <Font kind="Heading3" text="정말 삭제하시겠습니까?" />
          <Font kind="Body2" text="확인 시 해당 건의는 사라집니다." color="gray600" />
        </S.TextWrap>
        <CheckCancelButton id={id} close={close}/>
      </S.Content>
    </S.Container>
  )
}

export default DeleteModal;