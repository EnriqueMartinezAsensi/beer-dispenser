import { StyledTableLine, TableData } from "./TableLine.styled";

type TableLineProps = {
  elements: string[];
  onClick?: () => void;
};

const TableLine = ({ elements, onClick }: TableLineProps) => {
  return (
    <StyledTableLine onClick={onClick}>
      {elements.map((element, index) => (
        <TableData key={`${index}${element}`}>{element}</TableData>
      ))}
    </StyledTableLine>
  );
};

export default TableLine;
