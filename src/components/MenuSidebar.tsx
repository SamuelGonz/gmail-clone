import Link from "next/link";
import {
   RiInboxFill,
   RiStarLine,
   RiTimeLine,
   RiSendPlane2Line,
   RiFile3Line,
   RiArrowDownSLine,
} from "react-icons/ri";

export const MenuSidebar = () => {
   return (
      <ul className="flex flex-col">
         <li>
            <Link
               href="#"
               className="flex items-center justify-between bg-secondary py-1.5 rounded-tr-full px-5 rounded-br-full text-sm"
            >
               <span className="flex items-center gap-4 font-bold">
                  <RiInboxFill /> Recibidos
               </span>
               <span className="font-bold text-xs">11</span>
            </Link>
         </li>
         {/*  */}
         <li>
            <Link
               href="#"
               className="flex items-center justify-between py-1.5 rounded-tr-full px-5 rounded-br-full hover:bg-gray-200 transition-colors text-sm"
            >
               <span className="flex items-center gap-4">
                  <RiStarLine /> Destacados
               </span>
            </Link>
         </li>
         {/*  */}
         <li>
            <Link
               href="#"
               className="flex items-center justify-between py-1.5 rounded-tr-full px-5 rounded-br-full hover:bg-gray-200 transition-colors text-sm"
            >
               <span className="flex items-center gap-4">
                  <RiTimeLine /> Pospuestos
               </span>
            </Link>
         </li>
         {/*  */}
         <li>
            <Link
               href="#"
               className="flex items-center justify-between py-1.5 rounded-tr-full px-5 rounded-br-full hover:bg-gray-200 transition-colors text-sm"
            >
               <span className="flex items-center gap-4">
                  <RiSendPlane2Line /> Enviados
               </span>
            </Link>
         </li>
         {/*  */}
         <li>
            <Link
               href="#"
               className="flex items-center justify-between py-1.5 rounded-tr-full px-5 rounded-br-full hover:bg-gray-200 transition-colors text-sm"
            >
               <span className="flex items-center gap-4">
                  <RiFile3Line /> Borradores
               </span>
            </Link>
         </li>
         {/* mas */}
         <li>
            <Link
               href="#"
               className="flex items-center justify-between py-1.5 rounded-tr-full px-5 rounded-br-full hover:bg-gray-200 transition-colors text-sm"
            >
               <span className="flex items-center gap-4">
                  <RiArrowDownSLine /> Más
               </span>
            </Link>
         </li>
      </ul>
   );
};
