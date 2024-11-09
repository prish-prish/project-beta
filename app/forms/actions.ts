"use server"
import { revalidatePath } from "next/cache";
import { sql } from "@vercel/postgres";

// more examples of how to query: https://vercel.com/docs/storage/vercel-postgres/sdk

// create table todos(id serial, description text, status text);

export async function getTodos() {
    const { rows } = await sql`SELECT * FROM todos LIMIT 10`;

    return rows
}

export async function addTodo(formData: FormData) {

    const description = formData.get("todo-desc") as string || "Failed to get todo description :((";

    await sql`insert into todos(description, status) values (${description}, 'todo')`

    revalidatePath("/forms")
}
