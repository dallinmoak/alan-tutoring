import { JWT } from "google-auth-library";

export const dynamic = "force-dynamic";

export async function POST(request) {
  let requestData;
  try {
    requestData = await request.json();
  } catch (e) {
    console.log(e);
    return new Response(JSON.stringify(e), { status: 500 });
  }
  if (requestData) {
    try {
      const client = new JWT({
        email: process.env.GOOGLE_SERVICE_ACCOUNT,
        key: process.env.GOOGLE_SA_PRIVATE_KEY.replaceAll("\\n", "\n"),
        scopes: ["https://www.googleapis.com/auth/calendar"],
      });
      const res = await client.request({
        url: `https://www.googleapis.com/calendar/v3/calendars/${process.env.GOOGLE_CALENDAR_ID}/events`,
        method: "POST",
        body: JSON.stringify(requestData),
      });
      return new Response(JSON.stringify(res), { status: 200 });
    } catch (e) {
      console.log(e);
      return new Response(JSON.stringify(e), { status: 500 });
    }
  }
}
