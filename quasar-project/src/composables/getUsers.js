const URL = 'https://jsonplaceholder.typicode.com/users';

export const getUsers = async () => {
    const response = await fetch(URL); 
    const data = await response.json();
    return data;
};
