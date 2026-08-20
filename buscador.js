// ============================BUSCADOR DE LIBROS===========================
document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('buscador');
    const tarjetas = document.querySelectorAll('.tarjeta-libro');

    input.addEventListener('input', function () {
        const texto = input.value.toLowerCase();

        tarjetas.forEach(function (tarjeta) {
            const titulo = tarjeta.querySelector('.info-libro h3').textContent.toLowerCase();
            const autor = tarjeta.querySelector('.info-libro .autor').textContent.toLowerCase();

            if (titulo.includes(texto) || autor.includes(texto)) {
                tarjeta.style.display = 'flex';
            } else {
                tarjeta.style.display = 'none';
            }
        });
    });
});