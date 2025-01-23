import { StyledTableLine } from "./TableLine.styled";

type TableLineProps = {
  elements: string[];
  onClick: () => void;
};

const TableLine = ({ elements, onClick }: TableLineProps) => {
  return (
    <StyledTableLine onClick={onClick}>
      {elements.map((element, index) => (
        <span key={`${index}${element}`}>{element}</span>
      ))}
    </StyledTableLine>
  );
};

export default TableLine;
