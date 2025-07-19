interface CampaignI {
    id?: string;
    name: string;
    description?: string;
    isActive: boolean;
    userId: string;
    typeId: string;
    subtypeId: string;
    goal: number;
    paybackTime: number;
    paybackPlan: 'Weekly' | 'Biweekly' | 'Monthly' | 'Yearly';
    createdAt: Date;
    updatedAt: Date;
}

export type {
    CampaignI
};