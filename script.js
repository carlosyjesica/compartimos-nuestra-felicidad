// =====================================
// CARLOS & JÉSICA
// SCRIPT.JS
// =====================================

const abrir = document.getElementById("abrir");
const intro = document.getElementById("intro");
const invitacion = document.getElementById("invitacion");

// =====================================
// ABRIR SOBRE
// =====================================

if (abrir) {

    abrir.addEventListener("click", abrirInvitacion);

}

function abrirInvitacion() {

    // Evita abrir dos veces
    if (abrir.classList.contains("sobre-abierto")) return;

    // Animación del sobre
    abrir.classList.add("sobre-abierto");

    // Esperamos a que se abra el sobre
    setTimeout(() => {

        intro.style.opacity = "0";

        setTimeout(() => {

            intro.style.display = "none";

            invitacion.style.display = "block";

            requestAnimationFrame(() => {

                invitacion.style.opacity = "1";
                invitacion.style.transform = "translateY(0)";

            });

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }, 800);

    }, 1200);

}

// =====================================
// CUENTA ATRÁS
// =====================================

const fechaBoda = new Date("June 5, 2027 13:00:00").getTime();

function actualizarContador() {

    const ahora = new Date().getTime();
    const diferencia = fechaBoda - ahora;

    if (diferencia <= 0) {

        document.getElementById("dias").textContent = "000";
        document.getElementById("horas").textContent = "00";
        document.getElementById("minutos").textContent = "00";
        document.getElementById("segundos").textContent = "00";

        return;

    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
    const segundos = Math.floor((diferencia / 1000) % 60);

    document.getElementById("dias").textContent =
        String(dias).padStart(3, "0");

    document.getElementById("horas").textContent =
        String(horas).padStart(2, "0");

    document.getElementById("minutos").textContent =
        String(minutos).padStart(2, "0");

    document.getElementById("segundos").textContent =
        String(segundos).padStart(2, "0");

}

actualizarContador();
setInterval(actualizarContador, 1000);

// =====================================
// ACORDEÓN
// =====================================

function toggleSection(id) {

    const secciones = document.querySelectorAll(".accordion-content");

    secciones.forEach(seccion => {

        if (seccion.id !== id) {

            seccion.classList.remove("active");

        }

    });

    document.getElementById(id).classList.toggle("active");

}

window.toggleSection = toggleSection;