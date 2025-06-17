const { https } = require('firebase-functions')
const { default: next } = require('next')
const cors = require('cors')

const isDev = process.env.NODE_ENV !== 'production'
const server = next({
  dev: isDev,
  conf: { distDir: '.next' },
})
const nextjsHandle = server.getRequestHandler()

// Prepare the Next.js server once at startup
const serverReady = server.prepare()

// Initialize CORS middleware
const corsHandler = cors({
  origin: true, // Reflects the request origin, or set specific origins like ['yourdomain.com']
  credentials: true, // Allow cookies and credentials to be sent
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
})

exports.sendEmail = https.onRequest(async (req, res) => {
  return corsHandler(req, res, async () => {
    await serverReady
    return nextjsHandle(req, res)
  })
})
