const BASE_URL = `http://localhost:8080/api/task-management`;

export const URLS = {
    PING_URL: `${BASE_URL}/ping`,
    GET_ALL_TASK_URL: `${BASE_URL}/get-all-task`,
    CREATE_TASK_URL: `${BASE_URL}/create-task`,
    UPDATE_TASK_URL: `${BASE_URL}/update-task`,
    DELETE_TASK_URL: `${BASE_URL}/delete-task`
};

export const ROUTES = {
    WELCOME: '',
    DASHBOARD: 'dashboard',
    CREATE_TASK: 'create-task',
    TASK_DETAIL: 'task-detail',
    UPDATE_TASK: 'update-task'
};
