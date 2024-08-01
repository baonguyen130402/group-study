import { authOptions } from "@/lib/auth/authOptions";

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Home = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/");
  }

  return (
    <div>
      SignUpForm
    </div>
  );
};

export default Home;
