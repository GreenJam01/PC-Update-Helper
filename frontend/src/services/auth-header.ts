import { Nullable } from "../types/nullable";

export default function authHeader() {
  const userStr : Nullable<string> = localStorage.getItem('user');
  let user = null;
  if (userStr) {
    user = JSON.parse(userStr);
  }

  if (user && user.accessToken) {
    return { Authorization: `Bearer ${ user.accessToken}` };
  } else {
    return { Authorization: '' };
  }
}
