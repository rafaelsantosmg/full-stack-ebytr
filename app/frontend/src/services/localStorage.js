export const saveUser = (user, token) => localStorage
  .setItem('user', JSON.stringify({ user, token }));

export const getUser = () => JSON.parse(localStorage.getItem('user'));
