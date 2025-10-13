
const EMAIL = "pedro.luis.bernal@gmail.com";

// Fijar el navbar al hacer scroll
document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    const header = document.querySelector("header");
    let headerHeight = header.offsetHeight;

    window.addEventListener("scroll", function () {
        if (window.scrollY > headerHeight) {
            navbar.classList.add("navbar-fixed");
            document.body.classList.add("body-padding"); // Evita salto del contenido
        } else {
            navbar.classList.remove("navbar-fixed");
            document.body.classList.remove("body-padding");
        }
    });
});



// Generar estrellas en contenido de idiomas
function renderStars(_containerId, _count, _color) {
    const container = document.getElementById(_containerId);
    container.innerHTML = ''; // Limpia el contenido previo

    for (let i = 0; i < _count; i++) {
        const star = document.createElement('i');
        star.className = 'bi bi-star-fill';
        star.style.fontSize = '1rem';
        star.style.color = _color;
        container.appendChild(star);
    }
}

// Llamadas a la función con diferentes cantidades de estrellas
renderStars('es-stars', 5, 'gold');
renderStars('en-stars', 3, '#807575');
renderStars('jp-stars', 1, 'brown');



// Modificar la flecha de los botones
document.addEventListener("DOMContentLoaded", function () {

    function setCollapseIcon(_collapseId) {
        const toggleBtn = document.querySelector(`[data-bs-target="#${_collapseId}"]`);
        if (!toggleBtn) return;

        const icon = toggleBtn.querySelector("i");
        const collapseEl = document.getElementById(_collapseId);

        if (!icon || !collapseEl) return;

        collapseEl.addEventListener("show.bs.collapse", function () {
            icon.classList.remove("bi-chevron-down");
            icon.classList.add("bi-chevron-up");
        });

        collapseEl.addEventListener("hide.bs.collapse", function () {
            icon.classList.remove("bi-chevron-up");
            icon.classList.add("bi-chevron-down");
        });
    }

    // Llamadas para cada collapse:
    // setCollapseIcon("languages");
    // setCollapseIcon("AI");
    // setCollapseIcon("database");
    // setCollapseIcon("frontend");
    setCollapseIcon("competenciasMasterDataScience");
    setCollapseIcon("competenciasDAM");
    setCollapseIcon("competenciasMBA");
    setCollapseIcon("extraTraining");
    setCollapseIcon("cometidosJefatura");
    setCollapseIcon("cometidosInetum");
    setCollapseIcon("cometidosBripac");

});



// Botón de Copiar correo electronico
document.getElementById("copy-email-btn").addEventListener("click", function () {
    navigator.clipboard.writeText(EMAIL).then(() => {
        const msg = document.getElementById("copy-msg");
        msg.style.display = "inline";
        setTimeout(() => msg.style.display = "none", 2000);
    });
});



// Año actual
document.addEventListener("DOMContentLoaded", function () {
    const yearSpan = document.getElementById("currentYear");
    yearSpan.textContent = new Date().getFullYear();
});



// Para abrir pdf
function openPDF(_namepdf) {
    const ruta = `pdf/${_namepdf}`;
    const newWindow = window.open(ruta, '_blank');
    if (!newWindow) alert("Tu navegador bloqueó la apertura del PDF. Permite pop-ups para verlo.")
}


