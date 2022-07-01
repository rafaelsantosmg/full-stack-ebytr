export const saveUser = (user, token) => localStorage
  .setItem('ebytr', JSON.stringify({ user, token }));

export const getUser = () => JSON.parse(localStorage.getItem('ebytr'));
