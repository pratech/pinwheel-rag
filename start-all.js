import { spawn } from "child_process";

const PORT = 3000;

function start() {
  console.log("🚀 Starting backend server...");

  const serverProcess = spawn("node", ["server.js"], {
    stdio: "inherit",
    shell: true
  });

  setTimeout(() => {
    console.log("🌐 Starting ngrok...");

    const ngrokProcess = spawn("ngrok", ["http", PORT], {
      stdio: "inherit",
      shell: true
    });

    process.on("SIGINT", () => {
      console.log("\n🛑 Shutting down...");

      serverProcess.kill();
      ngrokProcess.kill();

      process.exit();
    });

  }, 3000);
}

start();