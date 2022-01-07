import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    background-color: gray;
    padding: 20px;
    min-height: 400px;
    width: 90%;
    border-radius: 10px;
    justify-content: center;
  }
`;
