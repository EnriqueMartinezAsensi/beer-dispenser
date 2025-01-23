import api from "./apiConnection";

export const getAllDispensers = async () => {
  return api.get<Dispenser[]>(`/dispenser`).then(({ data }) => data);
};

export const createDispenser = async (flow: number) => {
  return api.post<BasicDispenser>(`/dispenser`, { flow_volume: flow }).then(({ data }) => data);
};

export const manageDispenser = async (status: DispenserStatus, id: string) => {
  return api.put<DispenserStatus>(`/dispenser/${id}`, status).then(({ data }) => data);
};

export const getDispenserUsage = async (id: string) => {
  return api.get<DispenserUsage>(`/dispenser/${id}`).then(({ data }) => data);
};
