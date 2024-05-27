import js from "./javascript.js";
import { ScriptTarget, transpile } from "typescript";

async function exec(data) {
    try {
        const tsCode = data.files[""];
        const messages = [];
        js.patchConsole(messages);

        const jsCode = transpile(tsCode, {
            target: ScriptTarget.ES5,
        });

        data.files[""] = jsCode;

        const [out, elapsed] = await js.execCode(data.files[""]);
        console.log()
        // return either the function result or the console log
        // if the function returned nothing
        return {
            ok: true,
            duration: elapsed,
            stdout: out ?? messages.join("\n"),
            stderr: "",
        };
    } catch (exc) {
        return {
            ok: false,
            duration: 0,
            stdout: "",
            stderr: exc.toString(),
        };
    } finally {
        js.unpatchConsole();
    }
}

export default { exec };