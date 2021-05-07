const d = document

export default function Token() {
    const $btnLogin = d.getElementById('getToken')

    $btnLogin.addEventListener('click', () => {
        fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    "Content-type": "application/json"
                },
                body: {
                    username: 'Juan Diego',
                    password: 'test123'
                }
            })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    })
}