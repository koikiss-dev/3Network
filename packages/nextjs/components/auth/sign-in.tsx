import { auth, currentUser } from "@clerk/nextjs/server";

export default function SignIn() {
    const {getToken} = auth()
  return (
    <p>{getToken()} </p>
  );
}
