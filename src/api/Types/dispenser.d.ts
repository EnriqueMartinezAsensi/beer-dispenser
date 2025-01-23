type Status = "open" | "close";

declare type BasicDispenser = {
  id: string;
  flow_volume?: number;
};

declare type DispenserStatus = {
  status: Status;
  updated_at: string;
};

declare type Dispenser = BasicDispenser & DispenserStatus;

declare type DispenserUsage = {
  amount: number;
  usages: Usage[];
};

declare type Usage = {
  opened_at: string;
  closed_at: string;
  flow_volume: number;
  total_spent: number;
};
