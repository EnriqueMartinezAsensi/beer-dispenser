import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getAllDispensers, createDispenser } from "../../api/apiDispenser";
import TableLine from "../../components/TableLine";
import DispenserAdder from "./DispenserAdder";
import { StyledAdminTable } from "./AdminPanel.styled";

const AdminPanel = () => {
  const [dispensers, setDispensers] = useState<Dispenser[]>([]);
  const [flow, setFlow] = useState<string>("");
  const navigate = useNavigate();

  const getData = () =>
    getAllDispensers()
      .then((data) => setDispensers(data))
      .catch((error) => console.error(error));

  const handleAddDispenser = () => {
    createDispenser(Number(flow)).then(() => getData());
  };

  useEffect(() => {
    getData();
  }, []);

  if (dispensers.length > 0)
    return (
      <>
        <DispenserAdder
          flow={flow}
          onFlowChange={(value) => setFlow(value)}
          onClick={() => {
            handleAddDispenser();
          }}
        />
        <StyledAdminTable>
          <thead>
            <tr>
              <th>Id</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {dispensers.map((item) => {
              return (
                <TableLine
                  key={item.id}
                  elements={[item.id, item.status]}
                  onClick={() => navigate(`/admin/${item.id}`)}
                ></TableLine>
              );
            })}
          </tbody>
        </StyledAdminTable>
      </>
    );
  return <div>No tabs were found on the database.</div>;
};

export default AdminPanel;
