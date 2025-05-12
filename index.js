const functions = require('firebase-functions');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, conf: { distDir: '.next' } });
const handle = app.getRequestHandler();
// Kick off Next.js preparation at cold start
const appPrepare = app.prepare();

exports.nextServer = functions
  .runWith({
    memory: '1GiB',         // allocate more memory for faster startup
    timeoutSeconds: 300,    // extend timeout if needed
    minInstances: 1         // keep one instance warm for real-time responses
  })
  .https.onRequest(async (req, res) => {
    await appPrepare;       // wait for preparation (fast after cold start)
    return handle(req, res);
  });