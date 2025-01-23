import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getAllDispensers } from "../../api/apiDispenser";

const AdminPanel = () => {
  const [dispensers, setDispensers] = useState<Dispenser[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllDispensers().then((data) => setDispensers(data));
  }, []);

  if (dispensers.length > 0)
    return (
      <ul>
        {dispensers.map((each) => {
          return <li key={each.id} onClick={() => navigate(`/admin/${each.id}`)}>{`${each.id},${each.status}`}</li>;
        })}
      </ul>
    );
  return <>EMPTY</>;
};

export default AdminPanel;
