export async function POST(request) {
  let requestData;
  try {
    requestData = await request.json();
  } catch (e) {
    return new Response(JSON.stringify(e), { status: 501 });
  }
  return new Response(JSON.stringify({request: requestData}), {status: 201});
}
