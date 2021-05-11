const d = document

export default function PedidoDone() {
    const $btnDone = d.querySelectorAll('.pedido-add')
    $btnDone.forEach(btn => {
        btn.addEventListener('click', async(e) => {
            e.preventDefault()
            const url = btn.href
            const res = await fetch(url, { method: "PUT" })
            const json = await res.json()

            location.reload()
        })
    })
}