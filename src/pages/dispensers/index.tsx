import { useEffect, useState } from "react";
import { getAllDispensers } from "../../api/apiDispenser";

const Dispensers = () => {
  const [dispensers, setDispensers] = useState<Dispenser[]>([]);

  useEffect(() => {
    getAllDispensers().then((data) => setDispensers(data));
  }, []);
  if (dispensers.length > 0)
    return (
      <div>
        {dispensers.map((each) => {
          return <div key={each.id}>{`${each.id}, ${each.status}`}</div>;
        })}
      </div>
    );
  return <>EMPTY</>;
};

export default Dispensers;
