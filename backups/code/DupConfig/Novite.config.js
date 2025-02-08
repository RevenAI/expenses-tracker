import {
  defineConfig
} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import {
  fileURLToPath
} from "url";

// Define __dirname for ES Modules
const __filename = fileURLToPath(
  import.meta.url);
const __dirname = path.dirname(__filename);


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Maps @ to the src folder
    },
  },
})


/* 
Note:
The __dirname variable is not available in ES modules (type: "module" in package.json or when using import/export). Since Vite uses ES modules by default, one needs to manually define __dirname.

🛠 Why This Works
import.meta.url gets the current module's file URL.
fileURLToPath(import.meta.url) converts it to a file path.
path.dirname(__filename) gets the directory (__dirname alternative).
✅ Now your vite.config.js will work without ESLint errors.
🚀 Restart Vite (npm run dev) and test @ alias imports. 🎉
*/