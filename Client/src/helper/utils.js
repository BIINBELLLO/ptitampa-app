export const Logout = () => {
  localStorage.removeItem('token');
}

export const CreateSession = (token) => {
  localStorage.setItem('token', token);
}

export const GetToken = () => {
  return localStorage.getItem('token');
}