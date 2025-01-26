import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { getDispenserUsage } from "../../api/apiDispenser";
import TableLine from "../../components/TableLine";
import {
  DispenserStatsHeaderWrapper,
  DispenserStatsTittle,
  GlobalInfoWrapper,
  StyledStatsTable,
} from "./DispenserStats.styled";
import BackIcon from "../../components/ui/icons/BackIcon";

const DispenserStats = () => {
  const { id } = useParams();
  const [dispenserUsage, setDispenserUsage] = useState<DispenserUsage>();
  const navigate = useNavigate();

  const timeUsed = (start: string, end: string) => {
    return Math.abs((new Date(end).getMilliseconds() - new Date(start).getMilliseconds()) / 100);
  };

  useEffect(() => {
    if (id) getDispenserUsage(id).then((data) => setDispenserUsage(data));
  }, [id]);

  return (
    <>
      <div>
        <DispenserStatsHeaderWrapper>
          <BackIcon size='45' onClick={() => navigate("/admin")} />
          <DispenserStatsTittle>STATISTICS SCREEN: {id} </DispenserStatsTittle>
        </DispenserStatsHeaderWrapper>
        <GlobalInfoWrapper>
          <div>Services: {dispenserUsage?.usages.length}</div>
          <div>Total earnings: {dispenserUsage?.amount}</div>
        </GlobalInfoWrapper>
      </div>
      <StyledStatsTable>
        <thead>
          <tr>
            <th>Id</th>
            <th>Time Used</th>
            <th>Amount Sold</th>
          </tr>
        </thead>
        <tbody>
          {dispenserUsage?.usages.map((usage, index) => (
            <TableLine
              key={`${id}${usage.opened_at}`}
              elements={[
                index.toString(),
                timeUsed(usage.opened_at, usage.closed_at).toString(),
                usage.total_spent.toString(),
              ]}
              isClickable={false}
            />
          ))}
        </tbody>
      </StyledStatsTable>
    </>
  );
};

export default DispenserStats;
