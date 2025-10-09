import Client from "./client";
import type { ApiPayload } from "./type";
import { headers } from "next/headers";

async function getData(slug: string): Promise<ApiPayload> {
  const h = await headers();
  const host = h.get("x-forwarded-host") ?? h.get("host");
  const proto = h.get("x-forwarded-proto") ?? "http";
  const baseUrl = `${proto}://${host}`;

  const res = await fetch(`${baseUrl}/api/campaigns/${slug}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Falha ao carregar a campanha");
  return res.json();
}

type Params = Promise<{ slug: string }>

export default async function Page({ params }: { params: Params }) {
  const { slug } = await params;
  const data = await getData(slug);
  return <Client data={data} />;
}
