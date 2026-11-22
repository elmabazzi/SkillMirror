import { app } from "./app";
import { config } from "./config";
import { sqlite } from "./db/client";

const server = app.listen(config.port, () => {
  console.log(`SkillMirror API listening on http://localhost:${config.port}`);
  console.log(`Health check: http://localhost:${config.port}/health`);
});

// Close the server and the database cleanly on Ctrl+C or when stopped.
function shutdown() {
  server.close(() => {
    sqlite.close();
    process.exit(0);
  });
}
process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
