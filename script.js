document.addEventListener('DOMContentLoaded', () => {
    const sobreContainer = document.getElementById('sobre');
    const instruccion = document.querySelector('.instruccion');

    sobreContainer.addEventListener('click', () => {
        const abierto = sobreContainer.classList.toggle('abierto');

        if (instruccion) {
            instruccion.textContent = abierto
                ? '👆 Haz clic para volver a cerrar el sobre'
                : '👆 Haz clic en el sobre';
        }
    });
});
