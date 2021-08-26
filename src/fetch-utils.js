const URL = 'https://salty-river-59360.herokuapp.com';
// const URL = 'http://localhost:7890'

export async function getToken(loginInfo, type) {
    const authURL =`${URL}/auth/${type}`;
    const resp = await fetch(authURL, {
        method:'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(loginInfo),
    });
    const data = await resp.json();
    console.log(resp);
    localStorage.setItem('TOKEN', data.token);
    return data.token;
}

export async function getToDos(token) {
    const todoURL = `${URL}/api/todos`;
    const resp = await fetch(todoURL, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Authorization': token
        },
       
    });
    const data = await resp.json();
    return data;
};
export async function createTodo(token, todo){
    const todoURL = `${URL}/api/todos`;
    const resp = await fetch(todoURL, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(todo)
       
    });
    const data = await resp.json();
    return data;
};

export async function updateTodo(token, todo){
    const todoURL = `${URL}/api/todos/${todo.id}`;
    const resp = await fetch(todoURL, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
            Authorization: token
        },
        
        body: JSON.stringify(todo)
    });
    const data = await resp.json();
    return data;
};