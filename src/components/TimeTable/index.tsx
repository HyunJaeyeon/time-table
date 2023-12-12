import styled from 'styled-components';

import TimeColumn from './TimeColumn';

const CheckerTable = styled.table`
  display: flex;
  border: 2px solid #333333;
  height: 500px;
  flex-shrink: 0px;
  flex-grow: 1;
  flex-basis: auto;
`;

const Days = styled.div`
  display: flex;
  /* width: 322px; */
  height: 18px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  flex-grow: 1;
  background: #291c15;
`;

const Text = styled.p`
  color: #d9d9d9;
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  flex-grow: 1;
`;

const Times = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  height: 500px;
  width: 20px;
  justify-content: flex-end;
  align-items: center;
  padding-top: 18px;
  background: #291c15;
`;

const Box = styled.div`
  display: flex;
  flex-shrink: 0;
  flex-basis: auto;
  width: 375px;
`;

const TableBox = styled(Box)`
  flex-direction: column;
`;

function TimeTable() {
  const dayLists = ['월', '화', '수', '목', '금'];
  const timeLists = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <Box>
      <Times>
        {timeLists.map((time) => (
          <Text key={time}>{time + 8}</Text>
        ))}
      </Times>
      <TableBox>
        <Days>
          {dayLists.map((day) => (
            <Text key={day}>{day}</Text>
          ))}
        </Days>
        <CheckerTable>
          {dayLists.map((day) => (
            <TimeColumn key={day} day={day} />
          ))}
        </CheckerTable>
      </TableBox>
    </Box>
  );
}

export default TimeTable;
