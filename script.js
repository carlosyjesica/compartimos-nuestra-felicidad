// =====================================
// CARLOS & JÉSICA
// SCRIPT.JS
// =====================================

const abrir = document.getElementById("abrir");

const seal = document.getElementById("seal");

const sealTop = document.getElementById("sealTop");

const sealBottom = document.getElementById("sealBottom");

const intro = document.getElementById("intro");
const invitacion = document.getElementById("invitacion");

// =====================================
// ABRIR SELLO
// =====================================

if (seal) {

    seal.addEventListener("click", abrirInvitacion);

}

function abrirInvitacion(){

   if (seal.disabled) return;

seal.disabled = true;

    seal.style.display="none";

    sealTop.style.display="block";

    sealBottom.style.display="block";

    sealTop.classList.add("break-top");

    sealBottom.classList.add("break-bottom")
const tarjeta = document.querySelector(".contenido");

setTimeout(() => {

    tarjeta.style.opacity = "0";

    tarjeta.style.transform = "translateY(-10px)";

}, 500);

    setTimeout(()=>{

        intro.style.opacity="0";

        setTimeout(()=>{

            intro.style.display="none";

            invitacion.style.display="block";

            requestAnimationFrame(()=>{

                invitacion.style.opacity="1";

                invitacion.style.transform="translateY(0)";

            });

            window.scrollTo({

                top:0,

                behavior:"smooth"

            });

        },500);

    },1200);

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