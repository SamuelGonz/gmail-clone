import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
   return (
      <div className="bg-gray-100 min-h-screen flex flex-row">
         <Sidebar />
         <main className="flex-1 p-1 px-4">
            <Header />
            {children}
         </main>
      </div>
   );
};

export default MainLayout;
