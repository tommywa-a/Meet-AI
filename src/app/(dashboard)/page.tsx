import { headers } from "next/headers";

import { auth } from "@/lib/auth";

import { HomeView } from "@/modules/home/ui/views/home-view";
import { HeroHeader } from "@/modules/home/ui/components/header";
import HeroSection from "@/modules/home/ui/components/hero-section";

const Page = async () => {
  const session = await auth.api.getSession({
    headers: await headers()
  })

  // if (!session) {
  //   redirect('/sign-in')
  // }

  const isUserLoggedIn = !!session?.user

  return (
    <>
    {!isUserLoggedIn && (<HeroHeader />)}
    {isUserLoggedIn ? 
      (<HomeView />) 
      : 
      (<HeroSection />)
    }
    </>
  );
}
 
export default Page;