"use client";
import { useState } from "react";
import Image from "next/image";

import { RiAddFill, RiCloseLine, RiMenuFill, RiPencilLine } from "react-icons/ri";
import { MenuSidebar } from "./MenuSidebar";

export const Sidebar = () => {
   const [showSidebar, setShowSidebar] = useState(false);
   return (
      <>
         <aside
            className={`${
               showSidebar ? "left-0" : "-left-full"
            } fixed w-full sm:w-[60%] md:w-[40%] h-full top-0  lg:sticky lg:w-auto lg:h-screen  pr-2 bg-white lg:bg-gray-100 transition-all ease-in-out z-10`}
         >
            {/* Logo */}
            <div className="flex items-center gap-x-2 px-2 pb-2">
               <button
                  type="button"
                  className="p-4 hover:bg-gray-200 transition-colors rounded-full text-xl"
               >
                  <RiMenuFill />
               </button>
               <Image src="/logo-gmail.png" alt="logo" width={100} height={100} priority />
            </div>

            {/*Button */}
            <div className="mb-4 pl-4">
               <button
                  type="button"
                  className="flex gap-4 items-center py-4 px-6 bg-primary rounded-2xl justify-center hover:drop-shadow-md transition-all"
               >
                  <RiPencilLine className="text-2xl" /> Redactar
               </button>
            </div>
            <MenuSidebar />

            <div className="mt-4 p-4">
               <div className="flex items-center justify-between">
                  <h5 className="text-sm">Etiquetas</h5>
                  <button
                     type="button"
                     className="text-xl p-2 hover:bg-gray-200 transition-colors rounded-full"
                  >
                     <RiAddFill />
                  </button>
               </div>
            </div>
         </aside>
         {/* Botón movil */}
         <button
            type="button"
            className="lg:hidden fixed bottom-4 right-4 text-2xl rounded-full p-4 bg-secondary"
            onClick={() => setShowSidebar(!showSidebar)}
         >
            {showSidebar ? <RiCloseLine /> : <RiMenuFill />}
         </button>
      </>
   );
};
