import { command_appender } from "./commands";
import { writeFileSync, readFileSync } from "fs";

(async () => {
  const args = process.argv.slice(2);

  if (args[0] != "순형아") {
    process.exit(1);
  }
  if (args[5] == "변환해줘^^") {
    let code = readFileSync(args[1], "utf-8");
    let lines = code.split("\n");
    let result: string[] = [];
    lines.forEach((line, index, lines) => {
      let jsLine = command_appender(line, index, lines);
      result.push(jsLine);
    });
    writeFileSync(args[3], "#!/usr/bin/env node\n" + result.join("\n"));
    console.log("변환헀어요!");
  }
})();
