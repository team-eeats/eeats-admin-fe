import styled from "styled-components";

export const Container = styled.div`
  width: 384px;
  display: flex;
  flex-direction: column;
  gap: 24px;
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
