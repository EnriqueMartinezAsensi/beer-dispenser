import styled from "styled-components";

export const StyledTableLine = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  border-bottom: 1px solid #000;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;
