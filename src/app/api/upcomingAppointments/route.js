import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(request) {
  // const { title } = await request.json();
  const supabase = createRouteHandlerClient({ cookies });
  const { data } = await supabase.from("appointments_w_clients").select("*");
  return NextResponse.json(data);
}


/*
HOW TO USE
fetch('api/upcomingAppointments')
  .then(res=>res.json())
  .then(res=>{
    console.log(res);
  })
*/