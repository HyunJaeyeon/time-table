import Option from '@components/Option';
import styled from 'styled-components';

const OptionBar = () => {
  const onclickOption = () => {
    //옵션 클릭 시 컴포넌트 렌더링
  };
  return (
    <OptionBarContainer>
      <OptionBarContent>
        <Option option={'전공'} detail={14} onClick={onclickOption}></Option>
        <Option option={'교양'} detail={2} onClick={onclickOption}></Option>
        <Option option={'전선'} detail={2} onClick={onclickOption}></Option>
        <Option
          option={'듣고싶은 과목'}
          detail={4}
          onClick={onclickOption}
        ></Option>
        <Option
          option={'안되는 시간'}
          detail={'있음'}
          onClick={onclickOption}
        ></Option>
      </OptionBarContent>
    </OptionBarContainer>
  );
};

const OptionBarContainer = styled.div`
  overflow-x: auto;
  max-width: 100%;
`;
const OptionBarContent = styled.div`
  display: flex;
  flex-wrap: nowrap;
  padding: 10px;
`;

export default OptionBar;
