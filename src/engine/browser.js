// Execute code using browser APIs.

import http from "./http.js";
import js from "./javascript.js";
import ts from "./typescript.js";

// sandbox command executors
const executors = {
    javascript: js.exec,
    fetch: http.exec,
    typescript: ts.exec,
};

// exec executes a specific command using the appropriate browser API.
async function exec(req) {
    try {
        const executor = getExecutor(req);
        return executor(req);
    } catch (exc) {
        return {
            ok: false,
            duration: 0,
            stdout: "",
            stderr: exc.toString(),
        };
    }
}

// getExecutor returns the executor that matches the request.
function getExecutor(req) {
    if (!(req.sandbox in executors)) {
        throw Error(`unknown sandbox: ${req.sandbox}`);
    }
    if (req.command != "run") {
        throw Error(`unknown command: ${req.sandbox}.${req.command}`);
    }
    return executors[req.sandbox];
}

export default { init: () => {}, exec };
