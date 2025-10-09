import { NextResponse } from "next/server";

type Contribution = { userId: string; name: string; amount: number };
type Campaign = {
  id: string;
  title: string;
  goalAmount: number;
  raisedAmount: number;
  contributions: Contribution[];
};

const db: Record<string, Campaign> = {
  "alpha-123": {
    id: "alpha-123",
    title: "Herzog and Sons",
    goalAmount: 31104,
    raisedAmount: 5000,
    contributions: [
      { userId: "u1", name: "João", amount: 2000 },
      { userId: "u2", name: "Maria", amount: 1000 },
      { userId: "u3", name: "António", amount: 500 },
      { userId: "u1", name: "João", amount: 1000 }, // João voltou a contribuir
      { userId: "u4", name: "Rita", amount: 1500 },
    ],
  },
};

function perUserTotals(contribs: Contribution[]) {
  const map = new Map<string, { name: string; total: number }>();
  for (const c of contribs) {
    const cur = map.get(c.userId) ?? { name: c.name, total: 0 };
    cur.total += c.amount;
    map.set(c.userId, cur);
  }
  return Array.from(map, ([userId, v]) => ({
    userId,
    name: v.name,
    total: v.total,
  }));
}

export async function GET(
  _req: Request,
  { params }: { params: { slug: string } }
) {
  const c = db[params.slug];
  if (!c)
    return NextResponse.json(
      { error: "Campanha não encontrada" },
      { status: 404 }
    );

  const progress = Math.min(
    100,
    Math.round((c.raisedAmount / c.goalAmount) * 100)
  );
  const perUser = perUserTotals(c.contributions).sort(
    (a, b) => b.total - a.total
  );

  return NextResponse.json({
    campaign: {
      id: c.id,
      title: c.title,
      goalAmount: c.goalAmount,
      raisedAmount: c.raisedAmount,
      progress,
    },
    perUser, // [{ userId, name, total }]
  });
}
