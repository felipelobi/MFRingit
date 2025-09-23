$(document).ready(function () {
  const modal = new bootstrap.Modal(document.getElementById("modalReserva"));

  $(".reservar-btn").on("click", function () {
    const pelicula = $(this).data("pelicula");
    $("#pelicula").val(pelicula);
    $("#form-reserva")[0].reset();
    $("#pelicula").val(pelicula);
    modal.show();
  });

  $("#form-reserva").on("submit", function (e) {
    e.preventDefault();

    const pelicula = $("#pelicula").val();
    const horario = $("#horario").val();
    const asientos = $("#asientos").val();

    if (!horario || !asientos) {
      alert("Por favor completa todos los campos.");
      return;
    }

    modal.hide();

    setTimeout(() => {
      alert(
        `🎟️ Reserva confirmada:\n\nPelícula: ${pelicula}\nHora: ${horario}\nAsientos: ${asientos}`
      );
    }, 500);
  });
});
