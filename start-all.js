import { spawn } from "child_process";

function start() {
  console.log("🚀 Starting backend server...");

  const server = spawn("node", ["server.js"], {
    stdio: "pipe",
    shell: true
  });

  server.stdout.on("data", (data) => {
    const output = data.toString();
    console.log(output);

    // 🔥 Start tunnel ONLY after server is ready
    if (output.includes("Server running")) {
      console.log("🌐 Starting Cloudflare Tunnel...");

      spawn("cloudflared", ["tunnel", "run", "pinwheel-rag"], {
        stdio: "inherit",
        shell: true
      });
    }
  });
}

start();