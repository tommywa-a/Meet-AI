import { SidebarProvider } from "@/components/ui/sidebar";
import { auth } from "@/lib/auth";

import { DashboardNavbar } from "@/modules/dashboard/ui/components/dashboard-navbar";
import { DashboardSidebar } from "@/modules/dashboard/ui/components/dashboard-sidebar";
import { headers } from "next/headers";
import ProgressBar from "@/components/ui/progress-bar";

interface Props {
  children: React.ReactNode
}

const Layout = async ({ children }: Props) => {
  const session = await auth.api.getSession({
      headers: await headers()
    })
  
    const isUserLoggedIn = !!session?.user
    
  // Ensure ProgressBar is outside any conditional rendering
  return (
    <SidebarProvider>
      <ProgressBar />
      <div className="flex h-screen w-screen bg-muted">
        {isUserLoggedIn && <DashboardSidebar />}
        <main className="flex-1 flex flex-col overflow-hidden">
          {isUserLoggedIn && <DashboardNavbar />}
          <div className="flex-1 overflow-y-auto">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
   );
}
 
export default Layout;