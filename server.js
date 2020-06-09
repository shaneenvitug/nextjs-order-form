// Import the datadog apm tracing lib
const datadogTracer = require("dd-trace").init({analytics: true});
// Import the express-opentracing lib
const OpenTracingMiddleware = require("express-opentracing").default;
// Enable the express-opentracing with datadog apm
const server = express();
server.use(OpenTracingMiddleware({ tracer: datadogTracer }));