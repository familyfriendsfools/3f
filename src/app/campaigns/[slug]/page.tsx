import Client from "./client";
import type { ApiPayload } from "./types";
import { headers } from "next/headers";

async function getData(slug: string): Promise<ApiPayload> {
  const h = headers();
  const host = h.get("x-forwarded-host") ?? h.get("host");
  const proto = h.get("x-forwarded-proto") ?? "http";
  const baseUrl = `${proto}://${host}`;

  const res = await fetch(`${baseUrl}/api/campaigns/${slug}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Falha ao carregar a campanha");
  return res.json();
}

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await getData(params.slug);
  return <Client data={data} />;
}
