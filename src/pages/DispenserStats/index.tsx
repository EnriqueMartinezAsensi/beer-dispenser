import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getDispenserUsage } from "../../api/apiDispenser";

const DispenserStats = () => {
  const { id } = useParams();
  const [dispenserUsage, setDispenserUsage] = useState<DispenserUsage>();

  useEffect(() => {
    if (id) getDispenserUsage(id).then((data) => setDispenserUsage(data));
  }, []);

  console.log(dispenserUsage?.usages);

  return (
    <>
      <div>STATISTICS SCREEN: {id} </div>
      <ul>
        Services{dispenserUsage?.usages.length}
        {dispenserUsage?.usages.map((usage) => (
          <li key={`${id}${usage.opened_at}`}>
            <div>{usage.opened_at}</div>
            <div>{usage.closed_at}</div>
            <div>{usage.total_spent}</div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default DispenserStats;
