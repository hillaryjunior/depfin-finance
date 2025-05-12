const { https } = require("firebase-functions");
const { default: next } = require("next");

const isDev = process.env.NODE_ENV !== "production";
const server = next({
  dev: isDev,
  conf: { distDir: ".next" },
});
const nextjsHandle = server.getRequestHandler();

const serverReady = server.prepare();

exports.nextServer = https.onRequest(async (req, res) => {
  await serverReady;
  return nextjsHandle(req, res);
});