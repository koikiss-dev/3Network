import { auth, currentUser } from "@clerk/nextjs/server";

export async function GET() {
  const { getToken, sessionId, userId } = auth();

  const user = await currentUser()

  const template = "test";

  const token = await getToken();

  return Response.json({ token, sessionId, user });
}
