import styled from "styled-components";
import { Color } from "../../Styles/Color";

export const Container = styled.div`
  width: 384px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const InputWrapper = styled.div`
  width: 100%;
  max-width: 340px;

  input {
    font-family: "Pretendard";

    width: 100%;
    height: 59px;
    padding-left: 24px;
    font-size: 16px;
    border: none;
    background-color: ${Color.gray0};
    border-radius: 12px;
    cursor: pointer;
  }
`;

export const CalendarWrap = styled.div`
  position: absolute;
  top: 10%;
  left: 29%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 340px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  z-index: 10;
`;

export const CalendarShiftWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const DayWrap = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
`;

export const Day = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
`;

export const Date = styled.div<{
  isToday: boolean;
  isPast: boolean;
  isCurrentMonth: boolean;
  isSelected: boolean;
}>`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) =>
    props.isSelected
      ? "#000000"
      : props.isToday
      ? "#000000"
      : !props.isCurrentMonth
      ? "#B4B4B4"
      : "#000000"};
  border-radius: 12px;
  cursor: pointer;
  font-family: "Pretendard-Semibold", sans-serif;
  font-size: 20px;
`;

export const Month = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Week = styled.div`
  display: flex;
  gap: 12px;
`;
