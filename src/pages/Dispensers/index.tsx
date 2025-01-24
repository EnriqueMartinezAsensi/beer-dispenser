import { useEffect, useState } from "react";
import { getAllDispensers } from "../../api/apiDispenser";
import { useNavigate } from "react-router";
import TableLine from "../../components/TableLine";
import { DispenserTable } from "./Dispensers.styled";

const Dispensers = () => {
  const [dispensers, setDispensers] = useState<Dispenser[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllDispensers().then((data) => setDispensers(data));
  }, []);

  if (dispensers.length > 0)
    return (
      <DispenserTable>
        <thead>
          <tr>
            <th>Dispenser ID</th>
          </tr>
        </thead>
        <tbody>
          {dispensers.map((item) => {
            return <TableLine key={item.id} elements={[item.id]} onClick={() => navigate(`/${item.id}`)}></TableLine>;
          })}
        </tbody>
      </DispenserTable>
    );
  return <>EMPTY</>;
};

export default Dispensers;
