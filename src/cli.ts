import * as cli from "@std/cli";
import { initZedConfig, showHelp, showVersion } from "./commands/mod.ts";
import { settingsPath } from "./common/utils.ts";

const args = cli.parseArgs(Deno.args, {
  boolean: ["init-zed", "help", "version"],
  alias: { h: "help", v: "version" },
});

export async function init(): Promise<void> {
  if (args["init-zed"]) {
    try {
      await initZedConfig();
      console.log(
        `✅ Конфигурационный файл zed успешно создан в ${settingsPath}`,
      );
    } catch (err) {
      console.error("Error: ", err);
      Deno.exit(1);
    }
  } else if (args.help) {
    showHelp();
  } else if (args.version) {
    showVersion();
  } else {
    console.error("Command not found!");
    showHelp();
  }
}
