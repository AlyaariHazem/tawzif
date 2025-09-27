import { loadRemoteModule } from '@angular-architects/module-federation';

export function  loadWithFallback(remoteEntry: string, exposedModule: string, moduleName: string) {
  return loadRemoteModule({
    type: 'module',
    remoteEntry,
    exposedModule,
  })
    .then(m => m[moduleName])
    .catch(async (err) => {
      console.error(`[MF] Failed to load ${exposedModule}:`, err);
      const { ErrorRemoteModuleModule } = await import('./../pages/error/error-remote-module/error-remote-module.module');
      return ErrorRemoteModuleModule;
    });
}
