import prisma from "@/lib/prisma";
import { Form } from "./ui/Form";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const TodoPage = async () => {
   const todos = await prisma?.todo.findMany();
   console.log("todos: ", todos);

   return (
      <div>
         <h1>Aquí van todos los todos</h1>

         <div>
            <Form />
         </div>
         <div className="flex gap-2 mt-2 flex-wrap">
            {todos.map((todo) => (
               <div key={todo.id} className="p-2 border w-fit">
                  <p>
                     Title={todo.title}, description={todo.description}
                  </p>
               </div>
            ))}
         </div>
      </div>
   );
};

export default TodoPage;
