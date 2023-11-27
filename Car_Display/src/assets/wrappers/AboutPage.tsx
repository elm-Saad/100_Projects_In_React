import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding:2rem;
  div{
    max-width: 600px;
  }
  h2{
    font-size:bold;
    color:gray;
  }
  p {
    line-height: 2;
    color: var(--grey-500);
    margin-top: 2rem;
  }
`;

export default Wrapper;
