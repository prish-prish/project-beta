import { Button } from "@/components/ui/button";
import { addTodo, getTodos } from './actions'

// https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations#passing-additional-arguments


export default async function ExamplePage() {

    const todos = await getTodos()

    return <div className="content-center">

        <form action={addTodo}>
            <input type="text" name="todo-desc" placeholder="todo description" required />
            <Button>
                Add
            </Button>
        </form>
        <ul>
            {todos.map((todo) => {
                //
                return <li key={todo.id}>{todo.description}</li>
            })}
        </ul>
    </div>
}