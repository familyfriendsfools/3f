export type ApiPayload = {
  campaign: {
    id: string;
    title: string;
    goalAmount: number;
    raisedAmount: number;
    progress: number;
  };
  perUser: { userId: string; name: string; total: number }[];
};
