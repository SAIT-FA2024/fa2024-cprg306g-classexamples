import { z } from "zod";
import {neon} from "@neondatabase/serverless";

export async function GET() {
    // fetch all dogs from database
    const dbUrl = process.env.DATABASE_URL || "";
    const sql = neon(dbUrl);

    const response = await sql`SELECT * FROM dogs`;

    return new Response(JSON.stringify(response), { status: 200 });
}

export async function POST(request) {
    let newDog = await request.json();
    newDog.age = Number(newDog.age);
    // validate incoming data
    const newDogSchema = z.object( {
            name: z.string(),
            age: z.number().min(1).max(30)
    });
    try {
        newDogSchema.parse(newDog);
    } catch (error) {
        return new Response("Data does not match valid schema.", {status: 406});
    }
    // add newDog to database
    const dbUrl = process.env.DATABASE_URL || "";
    const sql = neon(dbUrl);
    const response = await sql`
    INSERT INTO dogs (name,age) VALUES ( ${newDog.name}, ${newDog.age} ) RETURNING *;
    `;
    return new Response(JSON.stringify(response), { status: 201 });
}