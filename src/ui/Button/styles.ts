import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 137px;
  height: 48px;
  padding: 24px 8px;
  font-size: 16px;
  font-weight: 500;
  background-color: transparent;
  border: 1px solid #BBBFC1;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #007AFF;
    transition: all 0.2s ease-in-out;
    color: #FFFFFF;
    border: none;
  }
`;

