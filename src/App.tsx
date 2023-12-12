import Ballon from '@components/Ballon';
import Credits from '@components/Credits';
import OptionBar from '@components/OptionBar';
import SubSelect from '@components/Select/subjectSelect';
import FirstPage from '@pages/FirstPage';
import FourthPage from '@pages/FourthPage';
import CreditInputPage from '@pages/SecondPage';
import SubjectPage from '@pages/ThirdPage';
import styled from 'styled-components';

const App = () => {
  return (
    <Wrapper>
      {/* <FirstPage></FirstPage>
      <CreditInputPage></CreditInputPage>
      <SubjectPage></SubjectPage> */}
      <FourthPage></FourthPage>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  font-family: Galmuri11;
  background-color: #c1ebf9;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default App;
