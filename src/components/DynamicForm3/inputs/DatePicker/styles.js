import styled from "styled-components";
import { DatePicker } from "react-rainbow-components";

export const StyledDatePicker = styled(DatePicker)`
  &&& {
    .ceEIkZ {
      display: block;
      width: 100%;
      height: 3rem;
      padding: 0.75rem 0.9375rem;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.88;
      color: #6b6e6f;
      background-color: #fff;
      background-clip: padding-box;
      border-radius: 5px;
      &:focus {
        border: 2px solid black;
      }
      &:active {
        border: 2px solid black;
      }
      &:hover {
        border: 2px solid black;
      }
    }
    .ceEIkZ:focus {
      // border: 1px solid #e5e5e5;
      box-shadow: none;
    }
    .ceEIkZ:active {
      border: 1px solid #e5e5e5;
    }

    .gXjtHS {
      display: none;
    }
  }
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
