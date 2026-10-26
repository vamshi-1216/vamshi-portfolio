import "dotenv/config";

import { resolve } from "node:path";
import express from "express";
import rateLimit from "express-rate-limit";
import { handleContactSubmission } from "./contact-email.js";

const app = express();
const port = Number(process.env.PORT);

app.disable("x-powered-by");
app.use(express.json({ limit: "10kb" }));

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  handler: (_request, response) => {
    response.status(429).json({
      error: "Too many messages have been sent. Please try again later.",
    });
  },
});

app.post("/api/contact", contactLimiter, async (request, response) => {
  const result = await handleContactSubmission(request.body);
  return response.status(result.status).json(result.body);
});

app.use(express.static(resolve("dist")));
app.get("/{*path}", (_request, response, next) => {
  response.sendFile(resolve("dist", "index.html"), (error) => {
    if (error) next(error);
  });
});

app.use((error, _request, response, _next) => {
  if (error.type === "entity.parse.failed") {
    return response.status(400).json({ error: "Invalid request body." });
  }

  if (error.type === "entity.too.large") {
    return response.status(413).json({ error: "Request is too large." });
  }

  console.error("Unhandled server error:", error);
  return response.status(500).json({ error: "Something went wrong." });
});

app.listen(port, () => {
  console.log(`Portfolio server listening on port ${port}`);
});
