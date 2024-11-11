import { useState, useRef, useEffect } from "react";
import * as S from "./style";
import { Font } from "../../Styles/Font";
import { ArrowRight } from "../../assets/img/SVG/ArrowRight";
import { ArrowLeft } from "../../assets/img/SVG/ArrowLeft";
import { useDateStore } from "../../store/calendar";

const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];

const AdminCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const { startDate, endDate, setStartDate, setEndDate } = useDateStore();
  const inputRef = useRef<HTMLDivElement | null>(null);
  const calendarRef = useRef<HTMLDivElement | null>(null);  

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const getStartAndEndDays = () => {
    const firstDayOfMonth = new Date(year, month, 1);
    const startDay = new Date(firstDayOfMonth);
    startDay.setDate(1 - firstDayOfMonth.getDay());
    const endDay = new Date(year, month + 1, 0);
    return { startDay, endDay };
  };

  const groupDatesByWeek = (startDay: Date, endDay: Date) => {
    const weeks = [];
    let currentWeek = [];
    const currentDate = new Date(startDay);

    while (currentDate <= endDay) {
      currentWeek.push(new Date(currentDate));
      if (currentWeek.length === 7 || currentDate.getDay() === 6) {
        weeks.push(currentWeek);
        currentWeek = [];
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }

    if (currentWeek.length > 0) {
      weeks.push(currentWeek);
    }

    return weeks;
  };

  const handleMonthChange = (direction: "prev" | "next") => {
    setCurrentDate(
      (prevDate) =>
        new Date(
          prevDate.getFullYear(),
          prevDate.getMonth() + (direction === "prev" ? -1 : 1),
          1
        )
    );
  };

  const isToday = (date: Date) =>
    new Date().toDateString() === date.toDateString();
  const isPastDate = (date: Date) => date < new Date();
  const isCurrentMonth = (date: Date) =>
    date.getMonth() === currentDate.getMonth();
  const isSelectedDate = (date: Date) =>
    startDate?.toDateString() === date.toDateString() ||
    endDate?.toDateString() === date.toDateString();

  const handleDateClick = (date: Date) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(date);
      setEndDate(null);
    } else {
      setEndDate(date);
    }
    setIsCalendarOpen(false);
  };

  const handleInputClick = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsCalendarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const { startDay, endDay } = getStartAndEndDays();
  const weeks = groupDatesByWeek(startDay, endDay);

  const formatDate = (date: Date | null) =>
    date ? `${date.getMonth() + 1}월 ${date.getDate()}일` : "";

  return (
    <S.Container>
      <S.InputWrapper ref={inputRef}>
        <input
          type="text"
          value={`${formatDate(startDate)}`}
          onClick={handleInputClick}
          readOnly
          placeholder="투표 시작 기간을 설정해주세요"
        />
        <input
          type="text"
          value={`${formatDate(endDate)}`}
          onClick={handleInputClick}
          readOnly
          placeholder="투표 마감 기간을 설정해주세요"
        />
      </S.InputWrapper>

      {isCalendarOpen && (
        <S.CalendarWrap ref={calendarRef}>
          <S.CalendarShiftWrap>
            <div onClick={() => handleMonthChange("prev")}>
              <ArrowLeft />
            </div>
            <Font kind="Heading3" text={`${year}년 ${month + 1}월`} />
            <div onClick={() => handleMonthChange("next")}>
              <ArrowRight />
            </div>
          </S.CalendarShiftWrap>

          <S.DayWrap>
            {daysOfWeek.map((day, index) => (
              <S.Day key={index}>
                <Font kind="Heading4" text={day} />
              </S.Day>
            ))}
          </S.DayWrap>

          <S.Month>
            {weeks.map((week, weekIndex) => (
              <S.Week key={weekIndex}>
                {week.map((date, dateIndex) => (
                  <S.Date
                    key={dateIndex}
                    onClick={() => handleDateClick(date)}
                    isToday={isToday(date)}
                    isPast={isPastDate(date)}
                    isCurrentMonth={isCurrentMonth(date)}
                    isSelected={isSelectedDate(date)}
                  >
                    {date.getDate().toString()}
                  </S.Date>
                ))}
              </S.Week>
            ))}
          </S.Month>
        </S.CalendarWrap>
      )}
    </S.Container>
  );
};

export default AdminCalendar;
