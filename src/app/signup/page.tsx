import { authOptions } from "@/lib/auth/authOptions";

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Home = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/");
  }

  return (
    <section className="bg-primary h-screen w-screen flex justify-center items-center">
      <div className="w-[800px]">
        SignUpForm
      </div>
    </section>
  );
};

export default Home;
