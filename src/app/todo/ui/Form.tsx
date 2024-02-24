"use client";

import { crearTodo } from "@/actions/crearTodo";
import { useState } from "react";

export const Form = () => {
   const [title, setTitle] = useState("");
   const [description, setDescription] = useState("");
   const handleSubmit = (e: any) => {
      e.preventDefault();
      crearTodo(title, description);
      setTitle("");
      setDescription("");
   };

   return (
      <form onSubmit={handleSubmit}>
         <div className="flex flex-col mb-2 border">
            <label htmlFor="">Title</label>
            <input
               type="text"
               placeholder="title"
               name="title"
               value={title}
               onChange={(e) => setTitle(e.target.value)}
            />
         </div>
         <div className="flex flex-col mb-2 border">
            <label htmlFor="">Descripcion</label>
            <input
               type="text"
               placeholder="Descripcion"
               name="description"
               value={description}
               onChange={(e) => setDescription(e.target.value)}
            />
         </div>

         <button type="submit" className="border p-4">
            Enviar
         </button>
      </form>
   );
};
