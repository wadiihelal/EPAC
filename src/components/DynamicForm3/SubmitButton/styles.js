import styled from "styled-components";

export const StyledButton = styled.button`
  border-radius: 3px;
  font-size: 13px;
  font-weight: 700;
  height: 40px;
  width: 100%;
  min-width: 130px;
  line-height: 28px;
  padding: 5px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #ea0000;
  color: white;
  border-color: transparent;
  &:hover {
    /* border-width: 5px; */
    border-color: #c40000;
    background-color: #c40000;
  }
`;
