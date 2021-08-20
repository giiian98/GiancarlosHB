const fotoPerfil = document.querySelector(".text-img h3");
const fotoPerfil2 = document.querySelector(".text-img h3 img");

fotoPerfil.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 120;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  fotoPerfil.style.transform = `rotateY(0deg) rotateX(${yAxis}deg)`;
});

fotoPerfil.addEventListener("mouseenter", (e) => {
  fotoPerfil2.style.transform = "translateZ(260px)";
  console.log("Hola");
});

fotoPerfil.addEventListener("mouseleave", (e) => {
  fotoPerfil2.style.transform = "translateZ(0px)";
});

/* FORMULARIO */
const form = document.querySelector("#form__contacto");
const $cargando = document.querySelector("#cargando");
const $btnEnviar = document.querySelector(".form__btn");
form.addEventListener("submit", handleSubmit);

async function handleSubmit(event) {
  $cargando.style.display = "flex";
  $btnEnviar.style.display = "none";
  event.preventDefault();
  const datos = new FormData(this);

  const respuesta = await fetch(this.action, {
    method: this.method,
    body: datos,
    headers: {
      Accept: "application/json",
    },
  });

  if (respuesta.ok) {
    $cargando.style.display = "none";
    $btnEnviar.style.display = "block";
    this.reset();

    swal(
      "¡Mensaje Enviado!",
      "Recibirá una respuesta en el correo registrado lo mas pronto posible.",
      "success"
    );
  }
}
