export interface UserInfo {
  sub?: string;
  name?: string;
  email?: string;
  roles?: string[];
  [key: string]: any;
}
