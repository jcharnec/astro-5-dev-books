// @ts-check
import { defineConfig, envField } from "astro/config";

export default defineConfig({
    output: "server",
    integrations: [],
    env: {
        schema: {
            SHOW_BUY_BUTTON: envField.boolean({
                default: true,
                context: "server", // Esto significa que la variable solo está disponible en el servidor
                access: "public", // Si deseas acceder a esta variable desde el cliente
            }),
            SCORE_API_ENDPOINT: envField.string({
                context: "server",
                access: "public",
            }),
        },
    },
});
