import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export async function GET(request) {
  const supabase = createRouteHandlerClient({ cookies });
  const supaResponse = await supabase
    .from('clients')
    .select()
  let sendData;
  if( supaResponse.data) {
    sendData = supaResponse.data
  } else if (supaResponse.error) {
    sendData = supaResponse.error
  } else {
    sendData = { msg: 'something went wrong'}
  }
  return new NextResponse(JSON.stringify(sendData), {status: supaResponse.status ? supaResponse.status : 500})
}
