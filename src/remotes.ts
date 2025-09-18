export const REMOTE_ENTRY = {
  companies : 'http://localhost:4201/CompaniesModule.js',  // or .mjs (see remote’s webpack filename)
  jobs      : 'http://localhost:4202/JobsModule.js',
  jobseeker : 'http://localhost:4203/JobseekerModule.js',
} as const;
