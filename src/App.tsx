import Ballon from '@components/Ballon';
import Credits from '@components/Credits';
import OptionBar from '@components/OptionBar';
import SubSelect from '@components/Select/subjectSelect';
import CreditInputPage from '@pages/CreditInputPage';
import FirstPage from '@pages/FirstPage';
import MainPage from '@pages/FirstPage';
import SubjectPage from '@pages/SubjectPage';
import styled from 'styled-components';

const App = () => {
  return (
    <Wrapper>
      {/* <FirstPage></FirstPage>
<CreditInputPage></CreditInputPage> */}
      {/* <SubjectPage></SubjectPage> */}
      <SubSelect></SubSelect>
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
