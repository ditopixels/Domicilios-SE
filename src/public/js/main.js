const d = document

d.addEventListener('DOMContentLoaded', () => {

    const $inputs = d.querySelectorAll('[inputAnimated] input,[inputAnimated] textarea');
    $inputs.forEach(input => {
        const inputParent = input.parentElement
        if (!input.value.trim() == 0) inputParent.classList.add('focus')
        input.addEventListener('focus', () => {
            inputParent.classList.add('focus')
        })
        input.addEventListener('blur', () => {
            input.value = input.value.trim();
            if (input.value.trim() == 0) inputParent.classList.remove('focus')
        })
        input.addEventListener('change', () => {
            input.value = input.value.trim();
            if (input.value == 0) inputParent.classList.remove('focus')
            else inputParent.classList.add('focus')
        })
    })

    const $inputPass = d.querySelectorAll('input[type="password"]')

    $inputPass.forEach((el) => {
        let i = 1;
        const $eye = el.nextElementSibling.nextElementSibling
        $eye.addEventListener('click', () => {
            if (i) {
                console.log(i);
                $eye.setAttribute('class', 'fas fa-eye-slash eye')
                el.setAttribute('type', 'text')
                i = 0
            } else {
                $eye.setAttribute('class', 'fas fa-eye eye')
                el.setAttribute('type', 'password')
                i = 1
            }
        })
    })

    const $btnDone = d.querySelectorAll('.pedido-add')
    $btnDone.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault()
            const url = btn.dataset.fetch

            fetch(url, { method: 'PUT' })
                .then(res => res.json)
                .then(json => location.reload())
                .catch(e => console.log(e))
        })
    })

    const $modal = document.getElementById('modal')
    const $btnModal = $modal.querySelector('span.x')
    if ($btnModal) {
        $btnModal.addEventListener('click', () => {
            console.log('click')
            location.hash = ''
        })
    }

    const $delete = document.getElementById('delete')
    if ($delete) {
        $delete.onclick = () => {
            fetch(location.href, {
                method: 'DELETE'
            }).then(res => location.href = "/dashboard")

        }
    }

    const $menu = d.getElementById('icono-menu')
    const $nav = d.getElementById('menu')
    $menu.addEventListener('click', () => {
        $nav.classList.toggle('active')
    })

    const $logo = d.querySelector('.logo')
    if ($logo) {
        $logo.addEventListener('click', () => {
            location.href = '/'
        })
    }
    // El listener va asignado al input
    const $file = d.getElementById('imagen')

    if ($file) {
        $file.addEventListener('change', () => {
            if ($file.files && $file.files[0]) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    // Asignamos el atributo src a la tag de imagen

                    const imagen = d.getElementById('imagenetq')

                    imagen.src = e.target.result
                    imagen.classList.remove('slow')
                }
                reader.readAsDataURL($file.files[0]);
            }
        })
    }
})