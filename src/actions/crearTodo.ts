"use server";
import primsa from "@/lib/prisma";
export const crearTodo = async (title: string, description: string) => {
   const todo = await prisma?.todo.create({
      data: {
         title,
         description,
      },
   });
};
