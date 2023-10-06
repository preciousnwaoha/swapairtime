'use client';
import { LuMoreVertical, LuChevronLast, LuChevronFirst, } from "react-icons/lu"
import { MdClose } from "react-icons/md"

import { useContext,  useState } from "react"
import Link from "next/link"
import Image from "next/image";
import  {AppContext} from "@/context/app-context"


export default function Sidebar({ children }) {
  const { sidebarExpanded: expanded, toggleSidebarExpanded } = useContext(AppContext)

  
  
  
  
  return (
    <aside className={`h-screen ${ expanded  && "absolute top-0 left-0 w-full sm:w-[auto]"}`}>
      <nav className={`h-full flex-col bg-white border-r shadow-sm  ${expanded ? "flex" : "hidden"}  sm:flex`}>
        <div className="p-4 pb-2 flex justify-between items-center border border-black">
          <Image
            src="https://img.logoipsum.com/243.svg"
            className={`overflow-hidden transition-all border border-red-300 `}
            width={expanded ? 50 : 0}
            height={expanded ? 50 : 0}
            alt="SwapAirtime Logo"
            priority={true}
          />
          <button
            onClick={toggleSidebarExpanded}
            className=" hidden sm:inline-block p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <LuChevronFirst /> : <LuChevronLast />}
          </button>

          <button
            onClick={toggleSidebarExpanded}
            className="p-1.5 sm:hidden rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            <MdClose />
          </button>
        </div>

          <ul className={`flex-1 px-3 ${expanded ? "block" : "hidden"} sm:block`}>{children}</ul>
        

        <div className="border-t flex p-3">
          <Image
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt=""
            className="w-10 h-10 rounded-md"
            width={expanded ? 40 : 0}
            height={expanded ? 40 : 0}
            priority={false}
          />
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? "w-full ml-3" : "w-0"}
          `}
          >
            <div className="leading-4">
              <h4 className="font-semibold">John Doe</h4>
              <span className="text-xs text-gray-600">johndoe@gmail.com</span>
            </div>
            <LuMoreVertical size={20} />
          </div>
        </div>
      </nav>
    </aside>
  )
}

export function SidebarItem({ icon, text, active, alert, link }) {
  const { sidebarExpanded: expanded } = useContext(AppContext)
  
  return (
    <Link href={link || "/"}>
      <li
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group  whitespace-nowrap
        ${
          active
            ? "bg-gradient-to-tr from-green-200 to-green-100 text-green-800 "
            : "hover:bg-green-50 text-gray-700"
        }
    `}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all whitespace-nowrap ${
          expanded  ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-green-400  ${
            expanded  ? "" : "top-2"
          }`}
        />
      )}

      {!expanded  && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-green-100 text-green-800 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
          whitespace-nowrap

      `}
        >
          {text}
        </div>
      )}
    </li>
    </Link>
    
  )
}