### **💻 Install All Dependencies (Forcefully)**
To install all dependencies listed in `package.json`, **even if some fail**, use:

```sh
npm install --force
```
or  
```sh
npm install --legacy-peer-deps
```
---

### **🚀 Run Your Next.js Project**
After installing dependencies, build and start the project:

```sh
npm run build   # Build the project
npm run start   # Start the production server
```

For development mode, use:
```sh
npm run dev
```

---

### **📌 Make GitHub Read `package.json` Properly**
1. **Ensure `package.json` is committed**  
   If it's missing from GitHub, add and push it:
   ```sh
   git add package.json package-lock.json
   git commit -m "Added package.json"
   git push origin main
   ```

2. **Check `.gitignore` for `package.json`**  
   Open `.gitignore` and **remove** any line that says `package.json` or `package-lock.json`.

3. **Verify on GitHub**  
   - Go to your repository on GitHub.  
   - Make sure `package.json` is visible in the root folder.

---

