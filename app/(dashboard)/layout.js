import { Inter } from 'next/font/google'
import Sidebar from "@/components/dashboard/sidebar"
import { SidebarItem } from '@/components/dashboard/sidebar';
import {
LuLifeBuoy,
LuReceipt,
LuBoxes,
LuPackage,
LuUserCircle,
LuBarChart3,
LuLayoutDashboard,
LuSettings,
} from 'react-icons/lu'


export const metadata = {
  title: 'SwapAirtime | Dashborad',
  description: 'Swap airtime for cash, widthdraw directly into your bank account',
}

export default function RootLayout({ children }) {
  return (
    <>
      <div className='flex'>
           
           <Sidebar>
             <SidebarItem 
             icon={<LuLayoutDashboard  />} 
             text={"Dashboard"} alert active link={"/dashboard"} ></SidebarItem>
 
             <SidebarItem 
             icon={<LuBarChart3 />}  
             text={"Swap Airtime"} link={"/swap-airtime"} ></SidebarItem>
             <SidebarItem 
             icon={<LuUserCircle />}  
             text={"Buy Airtime"} link={"/buy-airtime"} ></SidebarItem>
             <SidebarItem 
             icon={<LuBoxes />}  
             text={"Buy Data"} link={"/buy-data"} ></SidebarItem>

             {/* <SidebarItem 
             icon={<LuPackage />}  
             text={"Orders"} link={"/withdraw"} ></SidebarItem> */}

             <SidebarItem 
             icon={<LuReceipt />}  
             text={"History"} link={"/transactions"} ></SidebarItem>

             <SidebarItem 
             icon={<LuSettings />}  
             text={"Settings"} link={"/settings"}  ></SidebarItem>
             <SidebarItem 
             icon={<LuLifeBuoy />}  
             text={"Contact help"} link={"/account-manager"} ></SidebarItem>
           </Sidebar>

            <div className="min-h-screen w-full ">
        
              {children}
            </div>  
 
           
         </div>
         <footer className="py-4">
          <p className="text-sm text-center">&copy; 2023 SwapAirtime</p>
         </footer>
    </>
        
        
  )
}
