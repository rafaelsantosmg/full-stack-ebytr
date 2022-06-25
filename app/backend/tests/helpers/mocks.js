const allUsers = [
  {
    name: 'Rafael Santos',
    email: 'rafaelsantos@gmail.com',
  },
  {
    name: 'Emerson Moreira',
    email: 'emersonmoreira@gmail.com',
  },
  {
    name: 'Camila Ranniele',
    email: 'camilaranniele@gmail.com',
  },
];

const findUser = {
  name: 'Emerson Moreira',
  email: 'emersonmoreira@gmail.com',
};

const createUser = {
  id: 1,
  name: 'Rafael Santos',
  email: 'rafaelsantos@gmail.com',
};

const updateUser = {
  id: 2,
  name: 'Emerson Moreira',
  email: 'emersonmoreira@yahoo.com.br',
};

const updateUserReq = {
  name: 'Emerson Moreira',
  email: 'emersonmoreira@gmail.com',
};

const deleteUser = 1;

const allTasks = [
  {
    id: 1,
    userId: 1,
    title: 'Realizar o cadastro de serviços',
    content: 'Cadastavar um novo serviço para estudantes',
    status: 'em andamento',
  },
  {
    id: 2,
    userId: 1,
    title: 'Atualizar o cadastro de serviços',
    content: 'Atualizar o serviço para os estudantes',
    status: 'em andamento',
  },
];

const tasksByIdDB = {
  id: 1,
  userId: 1,
  title: 'Realizar o cadastro de serviços',
  content: 'Cadastavar um novo serviço para estudantes',
  status: 'em andamento',
};

const createTask = [
  {
    productId: 1,
    quantity: 3,
  },
];

const updateTask = {
  id: 1,
  task: {
    title: 'Remover Estutande',
    content: 'Remover a matrícula do estudante, para atualização do cadastro',
  },
};

const deleteTask = 1;

module.exports = {
  allUsers,
  findUser,
  updateUser,
  updateUserReq,
  createUser,
  deleteUser,
  allTasks,
  tasksByIdDB,
  createTask,
  updateTask,
  deleteTask,
};
