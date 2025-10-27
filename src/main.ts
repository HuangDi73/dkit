import { init } from "./cli.ts";

async function bootstrap(): Promise<void> {
  await init();
}

await bootstrap();
