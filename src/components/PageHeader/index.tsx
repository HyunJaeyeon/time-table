import styled from 'styled-components';

interface PageProps {
  currentPage: number;
  totalPages: number;
}

function PageHeader({ currentPage, totalPages }: PageProps) {
  const squares = Array.from({ length: totalPages });
  return (
    <Container>
      {squares.map((_, index) => (
        <StyledSquar
          key={index}
          page={currentPage}
          index={index + 1}
        ></StyledSquar>
      ))}
    </Container>
  );
}

export default PageHeader;

const StyledSquar = styled.div<{ page: number; index: number }>`
  display: flex;
  width: 8px;
  height: 8px;
  background: #0e0e0e;
  margin-right: 8px;
  background: ${(props) => (props.page === props.index ? '#0E0E0E' : 'white')};
`;
const Container = styled.div`
  display: flex;
  position: absolute;
  top: 84px;
  right: 24px;
`;
