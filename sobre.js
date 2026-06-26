// ==========================
// SOBRE PREMIUM
// ==========================

const sobre = document.getElementById("abrir");
const intro = document.getElementById("intro");
const invitacion = document.getElementById("invitacion");

if (sobre) {

    sobre.addEventListener("click", abrirSobre);

}

function abrirSobre() {

    // Evita abrir dos veces
    if (sobre.classList.contains("sobre-abierto")) return;

    // Animación del sobre
    sobre.classList.add("sobre-abierto");

    // Esperamos a que salga la carta
    setTimeout(() => {

        intro.style.transition = "opacity .8s ease";
        intro.style.opacity = "0";

        setTimeout(() => {

            intro.style.display = "none";

            invitacion.style.display = "block";
            invitacion.style.opacity = "0";
            invitacion.style.transform = "translateY(40px)";

            setTimeout(() => {

                invitacion.style.transition = "all .8s ease";
                invitacion.style.opacity = "1";
                invitacion.style.transform = "translateY(0)";

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            },50);

        },800);

    },1800);

}