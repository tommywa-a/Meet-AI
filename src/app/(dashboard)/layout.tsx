import { SidebarProvider } from "@/components/ui/sidebar";
import { auth } from "@/lib/auth";

import { DashboardNavbar } from "@/modules/dashboard/ui/components/dashboard-navbar";
import { DashboardSidebar } from "@/modules/dashboard/ui/components/dashboard-sidebar";
import { headers } from "next/headers";

interface Props {
  children: React.ReactNode
}

const Layout = async ({ children }: Props) => {
  const session = await auth.api.getSession({
      headers: await headers()
    })
  
    const isUserLoggedIn = !!session?.user
  return ( 
    <SidebarProvider>
      {isUserLoggedIn && <DashboardSidebar />}
      <main className="flex flex-col h-screen w-screen bg-muted">
        {isUserLoggedIn && <DashboardNavbar />}
        {children}
      </main>
    </SidebarProvider>
   );
}
 
export default Layout;