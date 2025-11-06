import { REMOTE_ENTRY, RemoteAppKey } from '../remotes';

export enum RemoteApps {
  companies = 'companies',
  jobs = 'jobs',
  jobseeker = 'jobseeker',
}

export function getRemoteUrl(app: RemoteApps | RemoteAppKey, file?: string): string {
  const base = REMOTE_ENTRY[app as RemoteAppKey];
  if (!base) throw new Error(`Unknown remote app: ${String(app)}`);
  if (!file) return base;

  const i = base.lastIndexOf('/');
  return i >= 0 ? base.slice(0, i + 1) + file : file;
}
