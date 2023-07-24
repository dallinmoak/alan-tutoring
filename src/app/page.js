import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from 'next/headers'
import Login from "./componnents/login";
import Test from "./componnents/test";
export const dynamic = 'force-dynamic';

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();


  return( <>
  <Test />
  {user ? <div>{user.email}</div> : <Login />}
  </>);
}
