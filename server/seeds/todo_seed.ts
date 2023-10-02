import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  return knex("todos")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("todos").insert([
        {
          title: "Buy groceries",
          description: "Milk, eggs, bread",
          completed: false,
          created_at: new Date(),
        },
        {
          title: "Finish homework",
          description: "Math and history assignments",
          completed: true,
          created_at: new Date(),
        },
        {
          title: "Go for a run",
          description: "5 miles in the park",
          completed: false,
          created_at: new Date(),
        },
      ]);
    });
}
