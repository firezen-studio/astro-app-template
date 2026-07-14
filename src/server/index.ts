import { Hono } from "hono";
import type { Context } from "hono";

const app = new Hono();

// app.get("/", (c) => c.text("Hono!"));
// app.get("/json",(c) => c.json({ message: "Hello, Hono!" }));
const healthResponse = (c: Context) => c.json("Health! 🔥");

app.get("/api/health", healthResponse);
app.get("/api/healthy", healthResponse);

export default app;
