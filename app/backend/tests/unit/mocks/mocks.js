const allUsers = [
  {
    displayName: 'Rafael Santos',
    email: 'rafaelsantos@gmail.com',
  },
  {
    displayName: 'Emerson Moreira',
    email: 'emersonmoreira@gmail.com',
  },
  {
    displayName: 'Camila Ranniele',
    email: 'camilaranniele@gmail.com',
  },
];

const findUserReject = {
  id: 1,
  displayName: 'Rafael Santos',
  email: 'rafaelsantos@gmail.com',
};

const findUser = {
  id: 1,
  displayName: 'Rafael Santos',
  email: 'rafaelsantos@gmail.com',
};

const createUserResolves = {
  id: 1,
  displayName: 'Rafael Santos',
  email: 'rafaelsantos@gmail.com',
};

const createUser = {
  displayName: 'Rafael Santos',
  email: 'rafaelsantos@gmail.com',
  password: '123456',
}

const login = {
  email: 'rafaelsantos@gmail.com',
  password: '123456'
};

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJkaXNwbGF5TmFtZSI6IlJhZmFlbCBTYW50b3MiLCJlbWFpbCI6InJhZmFlbHNhbnRvc0BnbWFpbC5jb20ifSwiaWF0IjoxNjU2NzEyNjU5LCJleHAiOjE2NTczMTc0NTl9.rgRBVHNuWnLPB0-voKbOf7MStweDmcRI_sBmvxKRECI'

const loginResolves = {
  user: {
    id: 1,
    displayName: 'Rafael Santos',
    email: 'rafaelsantos@gmail.com',
  }, token
};

const updateUser = {
  id: 2,
  displayName: 'Emerson Moreira',
  email: 'emersonmoreira@yahoo.com.br',
};

const updateUserReq = {
  displayName: 'Emerson Moreira',
  email: 'emersonmoreira@gmail.com',
};

const deleteUser = 1;

const allTasks = [
  {
    id: 1,
    title: 'Realizar o cadastro de serviços',
    content: 'Cadastavar um novo serviço para estudantes',
    status: 'em andamento',
    userId: 1,
    published: '2022-07-01',
  },
  {
    id: 2,
    title: 'Atualizar o cadastro de serviços',
    content: 'Atualizar o serviço para os estudantes',
    status: 'em andamento',
    userId: 1,
    published: '2022-07-01',
  },
];

const tasksById = {
  id: 1,
  title: 'Realizar o cadastro de serviços',
  content: 'Cadastavar um novo serviço para estudantes',
  status: 'em andamento',
  userId: 1,
  published: '2022-07-01',
};

const createTaskResolves = {
  id: 1,
  title: 'Realizar o cadastro de serviços',
  content: 'Cadastavar um novo serviço para estudantes',
  status: 'em andamento',
  userId: 1,
  published: '2022-07-01',
};

const createTask = {
  title: 'Remover Estutande',
  content: 'Remover a matrícula do estudante, para atualização do cadastro',
  status: 'Pendente',
};

const updateTask = {
  title: 'Remover Estutande',
  content: 'Remover a matrícula do estudante, para atualização do cadastro',
  status: 'Pendente',
};

module.exports = {
  token,
  allUsers,
  findUser,
  findUserReject,
  login,
  loginResolves,
  updateUser,
  updateUserReq,
  createUserResolves,
  createUser,
  deleteUser,
  allTasks,
  tasksById,
  createTask,
  createTaskResolves,
  updateTask,
};
