export const REMOTE_ENTRY = {
  companies: 'http://localhost:4201/CompaniesModule.js',
  jobs:      'http://localhost:4202/JobsModule.js',
  jobseeker: 'http://localhost:4203/JobseekerModule.js',
} as const;

export type RemoteAppKey = keyof typeof REMOTE_ENTRY; // "companies" | "jobs" | "jobseeker"
