import { join } from "@std/path/join";

export const version = "0.0.1";
export const zedDir = ".zed";
export const settingsPath = join(zedDir, "settings.json");

export const help = `
dkit — CLI для быстрой настройки Deno-проектов

Использование:
  dkit <command>

Команды:
  init-zed       Создать .zed/settings.json для локальной поддержки Deno в Zed Editor
  help           Показать справку
`;

export const config = {
  lsp: {
    deno: {
      settings: {
        deno: { enable: true },
      },
    },
  },
  languages: {
    JavaScript: {
      language_servers: [
        "deno",
        "!typescript-language-server",
        "!vtsls",
        "!eslint",
      ],
      formatter: "language_server",
    },
    TypeScript: {
      language_servers: [
        "deno",
        "!typescript-language-server",
        "!vtsls",
        "!eslint",
      ],
      formatter: "language_server",
    },
    TSX: {
      language_servers: [
        "deno",
        "!typescript-language-server",
        "!vtsls",
        "!eslint",
      ],
      formatter: "language_server",
    },
  },
};
