import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getDispenserUsage } from "../../api/apiDispenser";
import TableLine from "../../components/TableLine";

const DispenserStats = () => {
  const { id } = useParams();
  const [dispenserUsage, setDispenserUsage] = useState<DispenserUsage>();

  const time = (start: string, end: string) => {
    return Math.abs(new Date(end).getMilliseconds() - new Date(start).getMilliseconds());
  };

  useEffect(() => {
    if (id) getDispenserUsage(id).then((data) => setDispenserUsage(data));
  }, [id]);

  return (
    <>
      <div>STATISTICS SCREEN: {id} </div>
      <ul>
        Services{dispenserUsage?.usages.length}
        {dispenserUsage?.usages.map((usage, index) => (
          <TableLine
            key={`${id}${usage.opened_at}`}
            elements={[
              index.toString(),
              time(usage.opened_at, usage.closed_at).toString(),
              usage.total_spent.toString(),
            ]}
            onClick={() => {}}
          />
        ))}
      </ul>
    </>
  );
};

export default DispenserStats;
