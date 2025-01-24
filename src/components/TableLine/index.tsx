import { StyledTableLine } from "./TableLine.styled";

type TableLineProps = {
  elements: string[];
  onClick: () => void;
};

const TableLine = ({ elements, onClick }: TableLineProps) => {
  return (
    <StyledTableLine onClick={onClick}>
      {elements.map((element, index) => (
        <td key={`${index}${element}`}>{element}</td>
      ))}
    </StyledTableLine>
  );
};

export default TableLine;
