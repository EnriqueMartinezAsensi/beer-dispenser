import { StyledTableLine, TableData } from "./TableLine.styled";

type TableLineProps = {
  elements: string[];
  isClickable: boolean;
  onClick?: () => void;
};

const TableLine = ({ elements, onClick, isClickable }: TableLineProps) => {
  return (
    <StyledTableLine onClick={onClick} isClickable={isClickable}>
      {elements.map((element, index) => (
        <TableData key={`${index}${element}`}>{element}</TableData>
      ))}
    </StyledTableLine>
  );
};

export default TableLine;
