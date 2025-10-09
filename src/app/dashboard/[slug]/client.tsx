"use client";
import type { ApiPayload } from "./type";
//import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
//import { Progress } from "@/components/ui/progress";
import { User } from "lucide-react";

const currency = (
  v: number,
  opts?: { noCentsIfZero?: boolean } // removes,00 if does not exit
) => {
  // de-DE  1.234,56 €
  let s = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(v);

  // remove space between
  s = s.replace(/\s*€/, "€");

  if (opts?.noCentsIfZero) s = s.replace(/,00€$/, "€");
  return s;
};

export default function Client({ data }: { data: ApiPayload }) {
  const { campaign, perUser } = data;

  const totalRaised = Math.max(campaign.raisedAmount, 1);
  const rows = perUser.map(u => ({
    ...u,
    percent: Math.round((u.total / totalRaised) * 100),
  }));

  return (
    <div>TO DO</div>
    /*    <div className="mx-auto max-w-xl space-y-6 p-6 bg-orange-50/40 rounded-xl">
         {/* titule *
         <h1 className="text-center text-3xl md:text-4xl font-serif font-semibold tracking-wide text-orange-500">
           {campaign.title.toUpperCase()}
         </h1>
   
         {/* principal card progress*
         <Card className="rounded-2xl border border-orange-100 bg-white shadow-sm">
           <CardHeader className="pb-2">
             <CardTitle className="text-sm font-semibold uppercase tracking-wide text-neutral-800">
               {campaign.progress}% ALCANÇADO
             </CardTitle>
           </CardHeader>
           <CardContent className="space-y-2">
             {/* progress bar with grey *
             <Progress
               value={campaign.progress}
               className="h-3 rounded-full bg-neutral-200 [&>div]:bg-orange-500"
             />
             <div className="text-[15px] text-neutral-800">
               {currency(campaign.raisedAmount)} de {currency(campaign.goalAmount)}
             </div>
           </CardContent>
         </Card>
   
         {/* user list *
         <div className="space-y-4">
           {rows.map(u => (
             <div key={u.userId} className="rounded-lg">
               {/* line name value *
               <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3">
                 <div className="rounded-full bg-neutral-200 p-2 text-neutral-700">
                   <User className="h-4 w-4" />
                 </div>
                 <span className="text-[15px] text-neutral-900">{u.name}</span>
                 <span className="text-[15px] text-neutral-900 tabular-nums">
                   {currency(u.total)}
                 </span>
               </div>
   
               {/* user bar*
               <div className="mt-2">
                 <Progress
                   value={u.percent}
                   className="h-2 rounded-full bg-neutral-200 [&>div]:bg-orange-500"
                 />
               </div>
             </div>
           ))}
         </div>
       </div> */
  );
}
