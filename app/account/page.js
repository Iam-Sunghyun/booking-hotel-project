import { auth } from "../_lib/auth";

export const metadata = {
  title: "Guest area",
};

export default async function Page() {
  const session = await auth();

  return <div>Welcome! {session?.user?.name}</div>;
}
