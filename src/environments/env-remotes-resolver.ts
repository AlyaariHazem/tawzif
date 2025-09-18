// env-remotes-resolver.ts (or wherever you keep this)
import { REMOTE_ENTRY } from "../remotes";

export enum RemoteApps {
  companies = 'companies',
  jobs = 'jobs',
  jobseeker = 'jobseeker',
}

/**
 * Returns the full remoteEntry URL for the given app.
 * If `path` is provided, it replaces the filename while keeping the same host/port.
 * Example: getRemoteUrl(RemoteApps.companies, 'SomeOtherModule.js')
 */
export function getRemoteUrl(app: RemoteApps, path?: string): string {
  const base = REMOTE_ENTRY[app];
  if (!path) return base;

  // replace only the filename, keep protocol/host/port
  try {
    const u = new URL(base);
    u.pathname = u.pathname.replace(/[^/]+$/, path);
    return u.toString();
  } catch {
    // Fallback if base isn't a valid URL string for some reason
    const idx = base.lastIndexOf('/');
    return idx >= 0 ? base.slice(0, idx + 1) + path : path;
  }
}
