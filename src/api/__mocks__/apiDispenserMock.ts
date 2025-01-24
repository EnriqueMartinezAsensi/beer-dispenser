export const GET_ALL_DISPENSERS_MOCK: Dispenser[] = [
  { id: "121b67ad-6367-408d-a25b-0245e6510e6f", status: "close", updated_at: "2025-01-22T16:00:59.482000Z" },
  { id: "89688d66-81ee-4ceb-8a1b-79b34ed98e2a", status: "close", updated_at: "2025-01-21T14:43:06.585819Z" },
  { id: "cc996ad4-9de4-4f5d-a72b-82cfcf14ad9f", status: "close", updated_at: "2025-01-22T09:29:28.965390Z" },
];

export const CREATE_DISPENSER_MOCK: BasicDispenser = { id: "121b67ad-6367-408d-a25b-0245e6510e6f", flow_volume: 0.05 };

export const GET_DISPENSER_USSAGE_MOCK: DispenserUsage = {
  amount: 24.5,
  usages: [
    {
      opened_at: "2025-01-22T18:11:45.991000Z",
      closed_at: "2025-01-22T18:11:48.335000Z",
      flow_volume: 0.08,
      total_spent: 24.5,
    },
  ],
};
