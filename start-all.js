import { spawn } from "child_process";

const PORT = 3000;

function start() {
  console.log("🚀 Starting backend server...");

  const serverProcess = spawn("node", ["server.js"], {
    stdio: "inherit",
    shell: true
  });

  setTimeout(() => {
    //console.log("🌐 Starting ngrok...");
    console.log("🌐 Starting cloudflared...");

    //const ngrokProcess = spawn("ngrok", ["http", PORT], {
    const cloudflaredProcess = spawn("cloudflared", ["tunnel", "--url", `http://localhost:${PORT}`], {
      stdio: "inherit",
      shell: true
    });

    process.on("SIGINT", () => {
      console.log("\n🛑 Shutting down...");

      serverProcess.kill();
      //ngrokProcess.kill();
      cloudflaredProcess.kill();
      process.exit();
    });

  }, 3000);
}

start();