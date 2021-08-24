// const URL = 'https://salty-river-59360.herokuapp.com';
const URL = 'http://localhost:7890'

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