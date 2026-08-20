document.addEventListener('DOMContentLoaded', function () {
    const map = {
        'tema-desarrollo':    'chip-desarrollo',
        'tema-mentalidad':    'chip-mentalidad',
        'tema-disciplina':    'chip-disciplina',
        'tema-finanzas':      'chip-finanzas',
        'tema-comunicacion':  'chip-comunicacion',
        'tema-productividad': 'chip-productividad',
        'tema-motivacion':    'chip-motivacion',
    };

    Object.entries(map).forEach(([seccionId, chipId]) => {
        const seccion = document.getElementById(seccionId);
        const chip    = document.getElementById(chipId);
        if (seccion && chip) {
            const cantidad = seccion.querySelectorAll('.tarjeta-libro').length;
            chip.textContent = cantidad;
        }
    });
});