import { config, settingsPath, zedDir } from "../common/utils.ts";

export const initZedConfig = async () => {
  await Deno.mkdir(zedDir, { recursive: true });
  await Deno.writeTextFile(settingsPath, JSON.stringify(config, null, 2));
};
