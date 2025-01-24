import type { Config } from "drizzle-kit";

export default {
    schema: "./db/schema.ts",
    dialect: "sqlite",
    driver: "expo",
} satisfies Config;