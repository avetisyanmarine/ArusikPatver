import styled from "styled-components";

const LastFooterPagePart = styled.div`
  background: #000000;
  color: aliceblue;
  border-top-left-radius: 70px;
  padding: 40px;
`;
const LastFooterPagePartContext = styled.div`
  font-size: 20px;
  > p {
    margin-top: 48px;
  }
  div {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 10px;
  }
  a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;
    transition: 0.2s;
  }

  a:hover {
    text-decoration: underline;
    opacity: 0.8;
  }
`;
export { LastFooterPagePart, LastFooterPagePartContext };
