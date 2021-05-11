export default function deleteProduct() {
    const $delete = document.getElementById('delete')
    if ($delete) {
        $delete.onclick = async() => {
            const res = await fetch(location.href, {
                method: 'DELETE'
            })
            location.href = "/dashboard"
        }
    }
}