
import SignIn from "@/components/auth/SignIn";
import { getUserAuth } from "@/lib/auth/utils";
import Dashboard from "./dashboard";

export default async function Home() {
  const { session } = await getUserAuth();
  return (
    <main className="space-y-4">
      {session ? (
        <Dashboard />
      ) : null}
      {/* <SignIn /> */}
    </main>
  );
}
