const d = document

export default function Token() {
    const $btnLogin = d.getElementById('getToken')

    $btnLogin.addEventListener('click', () => {
        fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                        // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify({
                    username: 'Juan Diego',
                    password: 'test123'
                })
            })
            .then(res => {
                return res.json()
            })
            .then(data => {
                console.log(data.token)
                if (data.ok) {
                    document.cookie = `token=${data.token};path="/" `
                    location.href = 'localhost:3000/dashboard'
                }
            })
            .then(token => {

            })
            .catch(err => console.log(err))
    })
}