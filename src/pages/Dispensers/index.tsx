import { useEffect, useState } from "react";
import { getAllDispensers } from "../../api/apiDispenser";
import { useNavigate } from "react-router";
import TableLine from "../../components/TableLine";
import { DispensersTitle, DispenserTable } from "./Dispensers.styled";

const Dispensers = () => {
  const [dispensers, setDispensers] = useState<Dispenser[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllDispensers().then((data) => setDispensers(data));
  }, []);

  if (dispensers.length > 0)
    return (
      <>
        <DispensersTitle>Dispensers</DispensersTitle>
        <DispenserTable>
          <thead>
            <tr>
              <th>Dispenser ID</th>
            </tr>
          </thead>
          <tbody>
            {dispensers.map((item) => {
              return (
                <TableLine
                  key={item.id}
                  elements={[item.id]}
                  onClick={() => navigate(`/${item.id}`)}
                  isClickable={true}
                ></TableLine>
              );
            })}
          </tbody>
        </DispenserTable>
      </>
    );
  return <>There are no dispensers yet!</>;
};

export default Dispensers;
