import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
  background: white;
  margin: 10px;
  border-radius: 10px;
  padding: 10px;
  height: 350px;
  img {
    height: 200px;
    flex: none;
  }
  button {
    margin-top: 10px;
  }
`;
