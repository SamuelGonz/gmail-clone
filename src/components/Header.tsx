import {
   RiFilterLine,
   RiGridFill,
   RiQuestionLine,
   RiSearchLine,
   RiSettings3Line,
} from "react-icons/ri";

export const Header = () => {
   return (
      <header className="flex items-center justify-between">
         <div className="w-1/2">
            <form>
               <div className="relative w-3/4">
                  <button
                     className="absolute top-1/2 -translate-y-1/2 left-1.5 p-2 hover:bg-gray-300 transition-colors rounded-full"
                     type="button"
                  >
                     <RiSearchLine className="" />
                  </button>
                  <input
                     type="text"
                     className="bg-secondary/40 py-2 px-10 outline-none w-full rounded-lg text-gray-500"
                     placeholder="Buscar correo"
                  />
                  <button className="absolute top-1/2 -translate-y-1/2 right-1.5 p-2 hover:bg-gray-300 transition-colors rounded-full">
                     <RiFilterLine />
                  </button>
               </div>
            </form>
         </div>
         <ul className="flex gap-1 items-center">
            <li>
               <button
                  type="button"
                  className="text-xl p-2 hover:bg-gray-300 rounded-full transition-colors text-neutral-500"
               >
                  <RiQuestionLine />
               </button>
            </li>
            <li>
               <button
                  type="button"
                  className="text-xl p-2 hover:bg-gray-300 rounded-full transition-colors text-neutral-500"
               >
                  <RiSettings3Line />
               </button>
            </li>
            <li>
               <button
                  type="button"
                  className="text-xl p-2 hover:bg-gray-300 rounded-full transition-colors text-neutral-500"
               >
                  <RiGridFill />
               </button>
            </li>
            <li>
               <button
                  type="button"
                  className="w-8 h-8 flex items-center justify-center text-xl p-2 rounded-full transition-colors bg-sky-600 text-white hover:ring-2"
               >
                  S
               </button>
            </li>
         </ul>
      </header>
   );
};
