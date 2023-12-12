import styled from 'styled-components';

import formatMyClass from '../../utils/format-class';

interface TimeColumnProps {
  day: string;
}
const Cell = styled.td`
  background-color: #ffffff;
  border: 0.7px solid #b5b5b5;
  flex-shrink: 0px;
  flex-grow: 1;
  cursor: pointer;
`;

const Column = styled.tr`
  display: flex;
  flex-direction: column;
  flex-basis: auto;
  flex-shrink: 0px;
  flex-grow: 1;
`;

const classTime = '수/7-8,금/5-6';
// const subject = '논리gdsafs';
// const classRoom = 'A13-324';

function TimeColumn({ day }: TimeColumnProps) {
  const timeLists = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const myClass = formatMyClass(classTime);
  let isChecked = false;

  const checkClass = (time: number) => {
    const index = myClass.days.indexOf(day);
    isChecked = index !== -1 && myClass.times[index].includes(time);
    return isChecked;
  };

  return (
    <Column>
      {timeLists.map((time) => (
        <Cell
          key={time}
          style={
            checkClass(time)
              ? { backgroundColor: '#FB0' }
              : { backgroundColor: 'white' }
          }
        >
          {' '}
        </Cell>
      ))}
    </Column>
  );
}

export default TimeColumn;
