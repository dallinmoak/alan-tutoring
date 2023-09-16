import { JWT } from "google-auth-library";

export const dynamic = "force-dynamic";

export async function POST(request) {
  let requestData;
  try {
    requestData = await request.json();
  } catch (e) {
    return new Response(JSON.stringify(e), { status: 501 });
  }
  const client = new JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT,
    key: process.env.GOOGLE_SA_PRIVATE_KEY.replaceAll("\\n", "\n"),
    scopes: ["https://www.googleapis.com/auth/calendar"],
  });
  return new Response(JSON.stringify({request: requestData, jwt: client}), {status: 201});
}
