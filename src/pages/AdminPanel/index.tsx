import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getAllDispensers, createDispenser } from "../../api/apiDispenser";
import TableLine from "../../components/TableLine";
import DispenserAdder from "./DispenserAdder";
import { DispensersSubTile, StyledAdminTable } from "./AdminPanel.styled";
import ErrorMessage from "../../components/ui/ErrorMessage";

const AdminPanel = () => {
  const [dispensers, setDispensers] = useState<Dispenser[]>([]);
  const [flow, setFlow] = useState<string>("");
  const [error, setError] = useState<Error | null>(null);
  const navigate = useNavigate();

  const getData = () =>
    getAllDispensers()
      .then((data) => setDispensers(data))
      .catch((error) => setError(error));

  const handleAddDispenser = () => {
    createDispenser(Number(flow))
      .then(() => getData())
      .catch((error) => setError(error))
      .finally(() => setFlow(""));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <DispenserAdder
        flow={flow}
        onFlowChange={(value) => setFlow(value)}
        onClick={() => {
          handleAddDispenser();
        }}
      />
      <ErrorMessage message={error?.message} />
      <DispensersSubTile>Dispensers</DispensersSubTile>
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
                isClickable={true}
              ></TableLine>
            );
          })}
        </tbody>
      </StyledAdminTable>
    </>
  );
};

export default AdminPanel;
