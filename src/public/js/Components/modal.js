export default function modal() {
    const $modal = document.getElementById('modal')
    const $btnModal = $modal.querySelector('span.x')
    if ($btnModal) {
        $btnModal.addEventListener('click', () => {
            console.log('click')
            location.hash = ''
        })
    }
}