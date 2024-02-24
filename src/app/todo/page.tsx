import prisma from "@/lib/prisma";
import { Form } from "./ui/Form";

const TodoPage = async () => {
   const todos = await prisma?.todo.findMany();

   return (
      <div>
         <h1>Aquí van todos los todos</h1>

         <div>
            <Form />
         </div>
         {todos.map((todo) => (
            <div key={todo.id}>
               <p>{todo.title}</p>
               <p>{todo.description}</p>
            </div>
         ))}
      </div>
   );
};

export default TodoPage;
