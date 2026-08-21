import { defineConfig } from "vite"
import { writeFile } from "node:fs/promises"
import { resolve } from "node:path"

const ingredientLayoutEditor = {
  name: "ingredient-layout-editor",
  configureServer(server) {
    server.middlewares.use("/__ingredient-layout", (request, response, next) => {
      if (request.method !== "POST") return next()

      let body = ""
      request.on("data", (chunk) => {
        body += chunk
        if (body.length > 100_000) request.destroy()
      })
      request.on("end", async () => {
        try {
          const layout = JSON.parse(body)
          await writeFile(
            resolve(process.cwd(), "src/ingredient-layout.json"),
            `${JSON.stringify(layout, null, 2)}\n`,
          )
          response.statusCode = 204
          response.end()
        } catch {
          response.statusCode = 400
          response.end("Invalid ingredient layout")
        }
      })
    })
  },
}

export default defineConfig({
  base: "./",
  plugins: [ingredientLayoutEditor],
})
