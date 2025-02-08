import styled from "styled-components";

export const CalendarContainer = styled.div`
  width: 100%;
  flex: 1;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

export const WeekContainer = styled.div`
  display: flex;
  justify-content: right;
  padding: 0 1.2em;
  height: 20px;
  margin-bottom: 2em;
`;

export const DateContainer = styled.div<{
  $sameMonth?: boolean;
  $sameDay: boolean;
  $afterToday?: boolean;
  $clickDay?: boolean;
}>`
  cursor: ${({ $sameMonth, $afterToday }) =>
    $sameMonth && $afterToday ? "pointer" : ""};

  p {
    ${({ $sameDay }) =>
      $sameDay &&
      ` padding: 0.3em;
          color: white;
          background-color: red;
          border-radius: 100%;
          width: 1.3em;
          height: 1.3em;
        `}

    ${({ $clickDay }) =>
      $clickDay &&
      ` background-color: #3378fc;
          color: white;
          border-radius: 100%;
          padding: 0.3em;
          width: 1.3em;
        `}
  }
`;
