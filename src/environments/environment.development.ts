export const environment = {
  baseUrl: ''+getBaseDomain()+'',
  production: false,
  app_platform: 'default',
  defaultTenant: 'default',
  devToken: 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ4T1FuZGhqVXB2Rzh5QzRmM2NZX3V2WE1SWFR3eWZsUkRXMVAtRDFSMnk4In0.eyJleHAiOjE3NTU3NDczODUsImlhdCI6MTc1NTUxNjk4NSwianRpIjoiZmM5MDc3OGItY2JmNC00MDM0LWExMDgtYTllNGZhODc3NWZjIiwiaXNzIjoiaHR0cHM6Ly9vYXV0aC5ib2FyZC5vc2FuZWQuY29tL3JlYWxtcy9mY2ZhYjU0My1kYTdhLTQzZTUtYjRjZC03YTM2OWZmYWQ1ZTciLCJzdWIiOiJhZDg5MGM1Yy0wMWQxLTQxZjYtOWQ0Zi1lOWE3YWNiNDJiYmUiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJzYW5lZC1hcGktZ2F0ZXdheS1jbGllbnQiLCJzZXNzaW9uX3N0YXRlIjoiZTkwMzMwZmYtNzc5MS00NjhlLThhYTYtNjcyNjAyMWZmNGIwIiwiYWNyIjoiMSIsInNjb3BlIjoiZW1haWwgcm9sZXMiLCJzaWQiOiJlOTAzMzBmZi03NzkxLTQ2OGUtOGFhNi02NzI2MDIxZmY0YjAiLCJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsIlN1cGVyIEFkbWluIiwidW1hX2F1dGhvcml6YXRpb24iLCJkZWZhdWx0LXJvbGVzLWZjZmFiNTQzLWRhN2EtNDNlNS1iNGNkLTdhMzY5ZmZhZDVlNyJdLCJlbWFpbCI6Im1hc2FsYWgudGVjaEBnbWFpbC5jb20ifQ.SkJoKz7P-oTi5uYSaHWrlzqauWxxjjOkOc6mPGxoQsnDussZwO9MJZ5ijedW-SOrxlQQB2RyyM652HlUA1R2OLdxxe0IXCvI-PfY7jKYsDMb6-AnjMujF6Np0USDvUMVFLOXdYUgHQr6PsfMTWxWfO9Cay6y05qgcdUF8zZTMopeBk2JuMsOdjLlVsfn51e4Z5pSx1aOSSSjfeBp-8BPrMk98z-JnLsgeMfEMJ1NXuL05Z44SC8TM6dOZTyoqrVOQdqxOuCFSwT2FOBC6JXX6ntUm-5hjFY-xj4kFlvnTeDo-B6iRCOt4yP916sZpGs89smPxYSL4OEc7nFxQ0e01A',

};

export function getBaseDomain():string{
    const host = window.location.origin.split('://')[1];
    const subdomainList = host.split('.');
    if (subdomainList.length > 2) {
      return subdomainList.slice(1).join('.');
    }else{
      return 'alyaarihazem.github.io/Hire-Me';
    }
  }

export function getTenantFromSubdomain(): string{
      const host = window.location.origin.split('://')[1];
      const subdomainList = host.split('.');
      if (subdomainList.length > 1) {
        return subdomainList[0];
      }else{
        return environment.defaultTenant;
      }
  }
