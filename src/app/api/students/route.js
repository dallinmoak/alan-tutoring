import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export async function GET(request) {
  const myRequest = new NextRequest(request);
  const client_id = new URL(myRequest.url).searchParams.get('client_id');
  const supabase = createRouteHandlerClient({ cookies });
  const supaResponse = await supabase
    .from("students")
    .select("*")
    .eq("client_id", client_id)
  let sendData;
  let status;
  if(supaResponse){
    if (supaResponse.data.length) {
      sendData = supaResponse.data;
      status = 200;
    } else if (supaResponse.error) {
      sendData = supaResponse.error;
      status = supaResponse.status;
    } else if(supaResponse.data.length == 0){
      sendData = { msg: "no data" };
      status = 404 ;
    } else {
      sendData = { msg: "something went wrong" };
      status = 500;
    }
    return new NextResponse(JSON.stringify(sendData), {
      status: status,
    });
  } else {
    return new NextResponse(JSON.stringify({message: "no response from supabase"}, {status: 501}))
  }
}
