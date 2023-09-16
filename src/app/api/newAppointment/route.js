import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export async function POST(request) {
  const requestData = await request.json();
  const supabase = createRouteHandlerClient({ cookies });
  const supaResponse = await supabase
    .from("appointments")
    .insert([requestData])
    .select();
  console.log(supaResponse)
  if(supaResponse.data) {
    return new NextResponse(JSON.stringify(supaResponse.data[0]), {
      status: 200,
    });
  } else if (supaResponse.error) {
    return new NextResponse(JSON.stringify(supaResponse.error), {
      status: supaResponse.status
    })
  }
}
