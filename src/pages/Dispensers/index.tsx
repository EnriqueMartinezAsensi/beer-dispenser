import { useEffect, useState } from "react";
import { getAllDispensers } from "../../api/apiDispenser";
import { useNavigate } from "react-router";

const Dispensers = () => {
  const [dispensers, setDispensers] = useState<Dispenser[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllDispensers().then((data) => setDispensers(data));
  }, []);

  if (dispensers.length > 0)
    return (
      <ul>
        {dispensers.map((each) => {
          return <li key={each.id} onClick={() => navigate(`/${each.id}`)}>{`${each.id}`}</li>;
        })}
      </ul>
    );
  return <>EMPTY</>;
};

export default Dispensers;
