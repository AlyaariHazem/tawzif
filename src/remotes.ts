export const REMOTE_ENTRY = {
  companies : 'http://localhost:4201/remoteEntry.js',  // or .mjs (see remote’s webpack filename)
  jobs      : 'http://localhost:4202/remoteEntry.js',
  jobseeker : 'http://localhost:4203/remoteEntry.js',
} as const;