# Tawzif

**Tawzif** is the host Angular application for integrating multiple microfrontends using **Webpack Module Federation**.  
It is built with [Angular CLI](https://github.com/angular/angular-cli) **v20.0.0** and serves as the entry point for loading remotes such as `companies`, `jobs`, and `jobseeker`.

---

## 🚀 Development server

To start a local development server:

```bash
ng serve
```

Once the server is running, open your browser and navigate to [http://localhost:4200/](http://localhost:4200/).  
The application will automatically reload whenever you modify any of the source files.

---

## 🛠️ Code scaffolding

Generate a new component with:

```bash
ng generate component component-name
```

For a complete list of schematics (components, directives, pipes, etc.):

```bash
ng generate --help
```

---

## 📦 Building

To build the project:

```bash
ng build
```

The build artifacts will be stored in the `dist/` directory.  
By default, the build is optimized for performance and speed.

---

## 🧪 Running unit tests

Run unit tests with [Karma](https://karma-runner.github.io):

```bash
ng test
```

---

## 🌐 Running end-to-end tests

For e2e tests, run:

```bash
ng e2e
```

> Note: Angular CLI does not include an e2e framework by default. You can integrate **Cypress** or **Playwright** for this purpose.

---

## 🔗 Module Federation Setup

Tawzif is configured as a **host shell** that dynamically loads microfrontends:

- **Host name:** `tawzif`  
- **Port:** `4200`  
- **Remotes:**  
  - `companies` → `http://localhost:4300/remoteEntry.js`  
  - `jobs` → `http://localhost:4400/remoteEntry.js`  
  - `jobseeker` → `http://localhost:4500/remoteEntry.js`

Update your `webpack.config.js` (or `webpack.prod.config.js`) to register new remotes as needed.

---

## 📚 Additional Resources

- [Angular CLI Documentation](https://angular.dev/tools/cli)  
- [Module Federation Plugin](https://webpack.js.org/concepts/module-federation/)  
- [Angular Architects Guide](https://www.angulararchitects.io/en/guide/module-federation/)  

---

⚡ **Tawzif acts as the glue** between all microfrontends, providing routing, authentication, and shared services.  
