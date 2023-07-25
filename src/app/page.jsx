import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import HomeClient from "@/componnents/home-client";
import { Suspense } from "react";
import Loading from "./loading";

export const dynamic = "force-dynamic";

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <Suspense fallback={<Loading/>} >
      <HomeClient />
    </Suspense>
  );
}
