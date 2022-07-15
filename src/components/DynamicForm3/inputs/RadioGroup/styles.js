import styled from "styled-components";
import { RadioGroup } from "react-rainbow-components";
export const StyledRadioGroup = styled(RadioGroup)`
  .gtLlG {
    margin: 5px;
  }
  /* .css-1pahdxg-control {
    min-height: 48px;
    border-width: 2px;
    border-color: black;
    box-shadow: none;
    &:hover {
      border-width: 2px;
      border-color: black;
    }
    &:active {
      border-width: 2px;
      border-color: black;
    }
    &:focus {
      border-width: 2px;
      border-color: black;
    }
  }
  .css-b62m3t-container {
    min-height: 48px;
    background-color: red;
  }
  .css-1s2u09g-control {
    height: 30px;
    min-height: 48px;
    &:hover {
      border-width: 2px;
      border-color: black;
    }
    &:active {
      border-width: 2px;
      border-color: black;
    }
    &:focus {
      border-width: 2px;
      border-color: black;
    }
  } */
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;
export const StyledInput = styled.input``;

export const StyledLabel = styled.label`
  font-weight: 600;
  font-size: 16px;
  color: black;

  margin-bottom: 5px;
`;
export const Msg = styled.span``;
// export const StyledSelect = styled.select`
//   display: block;
//   width: 100%;
//   height: 3rem;
//   padding: 0.75rem 0.9375rem;
//   font-size: 1rem;
//   font-weight: 400;
//   line-height: 1.88;
//   background-color: #fff;
//   background-clip: padding-box;
//   border: 1px solid #e5e5e5;
//   border-radius: 0.3125rem;
//   transition: border-color 0.15s ease-in-out, box-shadow 0.15s;
//   color: black;
//   cursor: pointer;
//   &:focus {
//     border: 2px solid black;
//   }
//   &:active {
//     border: 2px solid black;
//   }
//   &:hover {
//     border: 2px solid black;
//   }
// `;
export const StyledOption = styled.option`
  width: auto;
  /* display: block;
  width: 100%;
  height: 3rem;
  padding: 0.75rem 0.9375rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.88;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #e5e5e5;
  border-radius: 0.3125rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s;
  color: black;
  cursor: pointer;
  &:focus {
    border: 2px solid black;
  }
  &:active {
    border: 2px solid black;
  }
  &:hover {
    border: 2px solid black;
  }
  background-color: green;
  width: 100%; */
`;
