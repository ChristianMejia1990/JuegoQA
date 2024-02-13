$(function () {
  var intentos = 0;
  var tiempoLimite = 60;
  var tiempoRestante = tiempoLimite;
  var temporizador;

  function actualizarTemporizador() {
    $("#tiempoRestante").text(tiempoRestante);
  }

  function iniciarTemporizador() {
    temporizador = setInterval(function () {
      tiempoRestante--;
      actualizarTemporizador();

      if (tiempoRestante <= 0) {
        gameOver("Se agotó el tiempo. ¡Perdiste!");
      }
    }, 1000);
  }

  function reiniciarTemporizador() {
    tiempoRestante = tiempoLimite;
    actualizarTemporizador();
  }

  function detenerTemporizador() {
    clearInterval(temporizador);
  }

  function gameOver(mensaje) {
    detenerTemporizador();
	 $("#mensaje").text("*** GAME OVER ***");
    $("#mensaje2").text("Se agotó el tiempo. ¡Perdiste");
    $("#contenedorPreguntas").append("<button id='btnReset' class='btn boton btn-block btn-sm'>¿Jugar de nuevo?</button>");
	 $("#btnCabra").remove();
      $("#btnLobo").remove();
      $("#btnCol").remove();
	   $("#btnSi").remove();
	    $("#btnNo").remove();

    $("#btnReset").click(function () {
      location.reload();
    });
  }
  
    // Ocultar los elementos al inicio
  $("#temporizador").addClass("d-none");
  $("#intentos").addClass("d-none");

  $("#contenedorBotonIniciar").append("<button id='btnIniciar' class='btn boton btn-block btn-sm'>Iniciar</button>");

  $("#btnIniciar").click(function () {
    intentos = 0;
    $("#intentos").text("Intentos: " + intentos);

    $("#btnIniciar").remove();
    $("#mensaje").text("¿Qué deseas llevar?");

    $("#nombre1").append("Lobo");
    $("#nombre2").append("Cabra");
    $("#nombre3").append("Col");
    $("#nombre4").append("Vacio");
    $("#nombre5").append("Vacio");
    $("#nombre6").append("Vacio");

 $("#temporizador").removeClass("d-none");
    $("#intentos").removeClass("d-none");
    $("#contenedorPreguntas").append("<button id='btnLobo' class='btn boton btn-block btn-sm'>Lobo</button><button id='btnCabra' class='btn boton btn-block btn-sm'>Cabra</button><button id='btnCol' class='btn boton btn-block btn-sm'>Col</button>");

    iniciarTemporizador();

    $("#btnCabra").click(function(){
		 intentos++;
    $("#intentos").text("Intentos: " + intentos);
      $("#btnCabra").remove();
      $("#btnLobo").remove();
      $("#btnCol").remove();

      $("#nombre2").text("Vacio");
      $("#imgOpcion2").attr("src","img/cajita.png").slideUp( 300 ).delay( 200 ).fadeIn( 300 );
      
      $("#nombre5").text("Cabra");
      $("#imgOpcion5").attr("src","img/goat.png").slideUp( 300 ).delay( 200 ).fadeIn( 300 );

      $("#mensaje").text("Gran Elección!");
      $("#mensaje2").text("¿Deseas volver solo?");

      $("#contenedorPreguntas").append("<button id='btnSi' class='btn boton btn-block btn-sm'>Si</button><button id='btnNo' class='btn boton btn-block btn-sm'>No</button>");

      $("#btnSi").click(function(){
		  intentos++;
    $("#intentos").text("Intentos: " + intentos);
        $("#btnSi").remove();
        $("#btnNo").remove();
        $("#mensaje").text("¿Qué deseas llevar?");
        $("#mensaje2").text("Tienes 2 opciones");


        $("#contenedorPreguntas").append("<button id='btnLobo' class='btn boton btn-block btn-sm'>Lobo</button><button id='btnCol' class='btn boton btn-block btn-sm'>Col</button>");

        $("#btnLobo").click(function(){
			 intentos++;
    $("#intentos").text("Intentos: " + intentos);
          $("#btnLobo").remove();
          $("#btnCol").remove();
          $("#mensaje").text("Vas muy bien!");
          $("#mensaje2").text("¿Deseas volver solo?");

          $("#nombre1").text("Vacio");
          $("#imgOpcion1").attr("src","img/cajita.png").slideUp( 300 ).delay( 200 ).fadeIn( 300 );
      
          $("#nombre4").text("Lobo");
          $("#imgOpcion4").attr("src","img/wolf.png").slideUp( 300 ).delay( 200 ).fadeIn( 300 );
          
          $("#contenedorPreguntas").append("<button id='btnSi' class='btn boton btn-block btn-sm'>Si</button><button id='btnNo' class='btn boton btn-block btn-sm'>No</button>");

          $("#btnSi").click(function(){
			  intentos++;
    $("#intentos").text("Intentos: " + intentos);
            $("#btnSi").remove();
            $("#btnNo").remove();
            $("#mensaje").text("*** GAME OVER ***");
            $("#mensaje2").text("El lobo se comió a la cabra!");
			detenerTemporizador();
            $("#contenedorPreguntas").append("<button id='btnReset' class='btn boton btn-block btn-sm'>¿Jugar de nuevo?</button>");

            $("#btnReset").click(function(){
              location.reload();
            });

          });
          $("#btnNo").click(function(){
			  intentos++;
    $("#intentos").text("Intentos: " + intentos);
            $("#btnSi").remove();
            $("#btnNo").remove();
            $("#mensaje").text("Muy Bien!");
            $("#mensaje2").text("Tienes 2 opciones");

            $("#contenedorPreguntas").append("<button id='btnLobo' class='btn boton btn-block btn-sm'>Lobo</button><button id='btnCabra' class='btn boton btn-block btn-sm'>Cabra</button>");
            $("#btnLobo").click(function(){
              $("#btnLobo").remove();
              $("#btnCabra").remove();
              $("#mensaje").text("PIENSAS QUE TE LAS SABES TODAS!");
              $("#mensaje2").text("¿Es necesario volver a llevar el lobo?");

              $("#contenedorPreguntas").append("<button id='btnReset' class='btn boton btn-block btn-sm'>¿Jugar de nuevo?</button>");

              $("#btnReset").click(function(){
                location.reload();
              });

            });
            $("#btnCabra").click(function(){
				intentos++;
    $("#intentos").text("Intentos: " + intentos);
              $("#btnLobo").remove();
              $("#btnCabra").remove();
              $("#mensaje").text("Te falta poco!");
              $("#mensaje2").text("¿Qué deseas llevar?");

              $("#nombre5").text("Vacio");
              $("#imgOpcion5").attr("src","img/cajita.png").slideUp( 300 ).delay( 200 ).fadeIn( 300 );
          
              $("#nombre2").text("Cabra");
              $("#imgOpcion2").attr("src","img/goat.png").slideUp( 300 ).delay( 200 ).fadeIn( 300 );

              $("#contenedorPreguntas").append("<button id='btnCabra' class='btn boton btn-block btn-sm'>Cabra</button><button id='btnCol' class='btn boton btn-block btn-sm'>Col</button>");

              $("#btnCabra").click(function(){
                $("#btnCabra").remove();
                $("#btnCol").remove();
                $("#mensaje").text("PIENSAS QUE TE LAS SABES TODAS!");
                $("#mensaje2").text("¿Es necesario volver a llevar la cabra?");
				 $("#contenedorPreguntas").append("<button id='btnReset' class='btn boton btn-block btn-sm'>¿Jugar de nuevo?</button>");
				 $("#btnReset").click(function(){
                  location.reload();
                });
				

              });
			  
              $("#btnCol").click(function(){
				  intentos++;
    $("#intentos").text("Intentos: " + intentos);
				   intentos++;
    $("#intentos").text("Intentos: " + intentos);
                $("#btnCabra").remove();
                $("#btnCol").remove();
                $("#mensaje").text("Magnifico!");
                $("#mensaje2").text("¿Deseas volver solo?");

                $("#nombre3").text("Vacio");
                $("#imgOpcion3").attr("src","img/cajita.png").slideUp( 300 ).delay( 200 ).fadeIn( 300 );
            
                $("#nombre6").text("Col");
                $("#imgOpcion6").attr("src","img/plant.png").slideUp( 300 ).delay( 200 ).fadeIn( 300 );

                $("#contenedorPreguntas").append("<button id='btnSi' class='btn boton btn-block btn-sm'>Si</button><button id='btnNo' class='btn boton btn-block btn-sm'>No</button>");

                $("#btnSi").click(function(){
					 intentos++;
    $("#intentos").text("Intentos: " + intentos);
                  $("#btnSi").remove();
                  $("#btnNo").remove();
                  $("#mensaje").text("EXCELENTE!");
                  $("#mensaje2").text("Solo te falta la cabra");

                  $("#contenedorPreguntas").append("<button id='btnCabra' class='btn boton btn-block btn-sm'>Llevar la cabra</button>");

                  $("#btnCabra").click(function(){
  $("#btnCabra").remove();
$("#mensaje").text("FELICITACIONES!");
$("#mensaje2").text("Todos cruzaron al río :)");
$("#star-rating-container").html(`
  <img src="img/level1.png" class="img-level">
  <i class="fas fa-star" data-rating="1"></i>
  <i class="fas fa-star" data-rating="2"></i>
  <i class="fas fa-star" data-rating="3"></i>
  <i class="fas fa-star" data-rating="4"></i>
  <i class="fas fa-star" data-rating="5"></i>
`);

// Manejar clics en las estrellas para calificar
// Inicializar las estrellas en color negro
// Inicializar las estrellas en color negro
$("#star-rating-container i").css("color", "black");

// Manejar clics en las estrellas para calificar
$("#star-rating-container i").on("click", function () {
  var rating = $(this).data("rating");
  calificarEstrellas(rating);

  // Desvincular el evento de clic después de la calificación
  $("#star-rating-container i").off("click");
});

// Agregar efecto de relieve al pasar el mouse sobre las estrellas
$("#star-rating-container i").hover(
  function () {
    // Cambiar el color de la estrella al pasar el mouse a negro
    $(this).css("color", "gold");
  },
  function () {
    // Restablecer el color de la estrella cuando el mouse sale de la estrella si no está calificada
    if (!$(this).hasClass("calificado")) {
      $(this).css("color", "black");
    }
  }
);

function calificarEstrellas(rating) {
  // Cambiar el color de todas las estrellas según la calificación
  $("#star-rating-container i").removeClass("calificado").css("color", "black");
  $("#star-rating-container i:lt(" + rating + ")").addClass("calificado").css("color", "gold");

  // Mostrar el popup de SweetAlert2 con la calificación
  Swal.fire({
    icon: 'success',
    title: '¡Gracias por tu calificación!',
    text: 'Calificación: ' + rating,
    showConfirmButton: false,
    timer: 5000 // Cerrar automáticamente después de 2 segundos
  });
}

  $("#nombre2").text("Vacio");
  $("#imgOpcion2").attr("src","img/cajita.png").slideUp( 300 ).delay( 200 ).fadeIn( 300 );  
  $("#nombre5").text("Cabra");
  $("#imgOpcion5").attr("src","img/goat.png").slideUp( 300 ).delay( 200 ).fadeIn( 300 );
  $("#contenedorPreguntas").append("<button id='btnReset' class='btn boton btn-block btn-sm'>¿Jugar de nuevo?</button>");
   detenerTemporizador();
      
  $("#btnReset").click(function(){
    location.reload();
                    });
                  });

                });
                $("#btnNo").click(function(){
					 intentos++;
    $("#intentos").text("Intentos: " + intentos);
                  $("#btnSi").remove();
                  $("#btnNo").remove();
                  $("#mensaje").text("PIENSAS QUE TE LAS SABES TODAS!");
                  $("#mensaje2").text("¿Es necesario no volver solo?");

                  $("#contenedorPreguntas").append("<button id='btnReset' class='btn boton btn-block btn-sm'>¿Jugar de nuevo?</button>");
                  $("#btnReset").click(function(){
                    location.reload();
                  });
                });
              });
            });
          });
        });
        $("#btnCol").click(function(){
			intentos++;
    $("#intentos").text("Intentos: " + intentos);
          $("#btnLobo").remove();
          $("#btnCol").remove();
          $("#mensaje").text("Vas muy bien!");
          $("#mensaje2").text("¿Deseas volver solo?");

          $("#nombre3").text("Vacio");
          $("#imgOpcion3").attr("src","img/cajita.png").slideUp( 300 ).delay( 200 ).fadeIn( 300 );
      
          $("#nombre6").text("Col");
          $("#imgOpcion6").attr("src","img/plant.png").slideUp( 300 ).delay( 200 ).fadeIn( 300 );

          $("#contenedorPreguntas").append("<button id='btnSi' class='btn boton btn-block btn-sm'>Si</button><button id='btnNo' class='btn boton btn-block btn-sm'>No</button>");

          $("#btnSi").click(function(){
			  intentos++;
    $("#intentos").text("Intentos: " + intentos);
            $("#btnSi").remove();
            $("#btnNo").remove();
            $("#mensaje").text("*** GAME OVER ***");
            $("#mensaje2").text("La cabra se comió la col!");
			detenerTemporizador();
            $("#contenedorPreguntas").append("<button id='btnReset' class='btn boton btn-block btn-sm'>¿Jugar de nuevo?</button>");
            $("#btnReset").click(function(){
              location.reload();
            });
          });
          $("#btnNo").click(function(){
			  intentos++;
    $("#intentos").text("Intentos: " + intentos);
            $("#btnSi").remove();
            $("#btnNo").remove();
            $("#mensaje").text("Muy Bien!");
            $("#mensaje2").text("Tienes 2 opciones");

            $("#contenedorPreguntas").append("<button id='btnCabra' class='btn boton btn-block btn-sm'>Cabra</button><button id='btnCol' class='btn boton btn-block btn-sm'>Col</button>");

            $("#btnCabra").click(function(){
				intentos++;
    $("#intentos").text("Intentos: " + intentos);
              $("#btnCabra").remove();
              $("#btnCol").remove();
              $("#mensaje").text("Te falta poco!");
              $("#mensaje2").text("¿Qué deseas llevar? Tienes 2 opciones");

              $("#nombre5").text("Vacio");
              $("#imgOpcion5").attr("src","img/cajita.png").slideUp( 300 ).delay( 200 ).fadeIn( 300 );
          
              $("#nombre2").text("Cabra");
              $("#imgOpcion2").attr("src","img/goat.png").slideUp( 300 ).delay( 200 ).fadeIn( 300 );
              
              $("#contenedorPreguntas").append("<button id='btnLobo' class='btn boton btn-block btn-sm'>Lobo</button><button id='btnCabra' class='btn boton btn-block btn-sm'>Cabra</button>");

              $("#btnLobo").click(function(){
				  intentos++;
    $("#intentos").text("Intentos: " + intentos);
                $("#btnCabra").remove();
                $("#btnLobo").remove();
                $("#mensaje").text("Magnifico!");
                $("#mensaje2").text("¿Deseas volver solo?");

                $("#nombre1").text("Vacio");
                $("#imgOpcion1").attr("src","img/cajita.png").slideUp( 300 ).delay( 200 ).fadeIn( 300 );
          
                $("#nombre4").text("Lobo");
                $("#imgOpcion4").attr("src","img/wolf.png").slideUp( 300 ).delay( 200 ).fadeIn( 300 );

                $("#contenedorPreguntas").append("<button id='btnSi' class='btn boton btn-block btn-sm'>Si</button><button id='btnNo' class='btn boton btn-block btn-sm'>No</button>");

                $("#btnSi").click(function(){
					intentos++;
    $("#intentos").text("Intentos: " + intentos);
                  $("#btnSi").remove();
                  $("#btnNo").remove();
                  $("#mensaje").text("EXCELENTE!");
                  $("#mensaje2").text("Solo te falta la cabra");

                  $("#contenedorPreguntas").append("<button id='btnCabra' class='btn boton btn-block btn-sm'>Llevar la cabra</button>");

                  $("#btnCabra").click(function(){
					  intentos++;
    $("#intentos").text("Intentos: " + intentos);
                    $("#btnCabra").remove();
$("#mensaje").text("FELICITACIONES!");
$("#mensaje2").text("Todos cruzaron al río :)");
$("#star-rating-container").html(`
  <img src="img/level1.png" class="img-level">
  <i class="fas fa-star" data-rating="1"></i>
  <i class="fas fa-star" data-rating="2"></i>
  <i class="fas fa-star" data-rating="3"></i>
  <i class="fas fa-star" data-rating="4"></i>
  <i class="fas fa-star" data-rating="5"></i>
`);

// Manejar clics en las estrellas para calificar
// Inicializar las estrellas en color negro
$("#star-rating-container i").css("color", "black");

// Manejar clics en las estrellas para calificar
$("#star-rating-container i").on("click", function () {
  var rating = $(this).data("rating");
  calificarEstrellas(rating);

  // Desvincular el evento de clic después de la calificación
  $("#star-rating-container i").off("click");
});

// Agregar efecto de relieve al pasar el mouse sobre las estrellas
$("#star-rating-container i").hover(
  function () {
    // Cambiar el color de la estrella al pasar el mouse a negro
    $(this).css("color", "gold");
  },
  function () {
    // Restablecer el color de la estrella cuando el mouse sale de la estrella si no está calificada
    if (!$(this).hasClass("calificado")) {
      $(this).css("color", "black");
    }
  }
);

function calificarEstrellas(rating) {
  // Cambiar el color de todas las estrellas según la calificación
  $("#star-rating-container i").removeClass("calificado").css("color", "black");
  $("#star-rating-container i:lt(" + rating + ")").addClass("calificado").css("color", "gold");

  // Mostrar el popup de SweetAlert2 con la calificación
  Swal.fire({
    icon: 'success',
    title: '¡Gracias por tu calificación!',
    text: 'Calificación: ' + rating,
    showConfirmButton: false,
    timer: 5000 // Cerrar automáticamente después de 2 segundos
  });
}


			        $("#nombre2").text("Vacio");
                    $("#imgOpcion2").attr("src","img/cajita.png").slideUp( 300 ).delay( 200 ).fadeIn( 300 );
                
                    $("#nombre5").text("Cabra");
                    $("#imgOpcion5").attr("src","img/goat.png").slideUp( 300 ).delay( 200 ).fadeIn( 300 );
 detenerTemporizador();
                    $("#contenedorPreguntas").append("<button id='btnReset' class='btn boton btn-block btn-sm'>¿Jugar de nuevo?</button>");
                    $("#btnReset").click(function(){
                      location.reload();
                    });
                  });
                });
                $("#btnNo").click(function(){
					intentos++;
    $("#intentos").text("Intentos: " + intentos);
                  $("#btnSi").remove();
                  $("#btnNo").remove();
                  $("#mensaje").text("PIENSAS QUE TE LAS SABES TODAS!");
                  $("#mensaje2").text("¿Es necesario no volver solo?");

                  $("#contenedorPreguntas").append("<button id='btnReset' class='btn boton btn-block btn-sm'>¿Jugar de nuevo?</button>");

                  $("#btnReset").click(function(){
                    location.reload();
                  });
                });
              });
              $("#btnCabra").click(function(){
				  intentos++;
    $("#intentos").text("Intentos: " + intentos);
                $("#btnCabra").remove();
                $("#btnLobo").remove();
                $("#mensaje").text("PIENSAS QUE TE LAS SABES TODAS!");
                $("#mensaje2").text("¿Es necesario volver a llevar la cabra?");
                $("#contenedorPreguntas").append("<button id='btnReset' class='btn boton btn-block btn-sm'>¿Jugar de nuevo?</button>");
                $("#btnReset").click(function(){
                  location.reload();
                });
    
              });
            });
            $("#btnCol").click(function(){
				intentos++;
    $("#intentos").text("Intentos: " + intentos);
              $("#btnCabra").remove();
              $("#btnCol").remove();
              $("#mensaje").text("PIENSAS QUE TE LAS SABES TODAS!");
              $("#mensaje2").text("¿Es necesario volver a llevar la col?");
              $("#contenedorPreguntas").append("<button id='btnReset' class='btn boton btn-block btn-sm'>¿Jugar de nuevo?</button>");
              $("#btnReset").click(function(){
                location.reload();
              });
            });
          });
        });
      });
      $("#btnNo").click(function(){
		  intentos++;
    $("#intentos").text("Intentos: " + intentos);
        $("#btnSi").remove();
        $("#btnNo").remove();

        $("#mensaje").text("PIENSAS QUE TE LAS SABES TODAS!");
        $("#mensaje2").text("¿Es necesario volver a llevar la cabra?");
        $("#contenedorPreguntas").append("<button id='btnReset' class='btn boton btn-block btn-sm'>¿Jugar de nuevo?</button>");

        $("#btnReset").click(function(){
          location.reload();
        });
      });
    });

    $("#btnLobo").click(function(){
		intentos++;
    $("#intentos").text("Intentos: " + intentos);
      $("#btnCabra").remove();
      $("#btnLobo").remove();
      $("#btnCol").remove();

      $("#nombre1").text("Vacio");
      $("#imgOpcion1").attr("src","img/cajita.png").slideUp( 300 ).delay( 200 ).fadeIn( 300 );
  
      $("#nombre4").text("Lobo");
      $("#imgOpcion4").attr("src","img/wolf.png").slideUp( 300 ).delay( 200 ).fadeIn( 300 );

      $("#mensaje").text("*** GAME OVER ***");
      $("#mensaje2").text("La cabra se comió la col!");
       detenerTemporizador();
      $("#contenedorPreguntas").append("<button id='btnReset' class='btn boton btn-block btn-sm'>¿Jugar de nuevo?</button>");

      $("#btnReset").click(function(){
        location.reload();
      });
    });

    $("#btnCol").click(function(){
		intentos++;
    $("#intentos").text("Intentos: " + intentos);
      $("#btnCabra").remove();
      $("#btnLobo").remove();
      $("#btnCol").remove();

      $("#nombre3").text("Vacio");
      $("#imgOpcion3").attr("src","img/cajita.png").slideUp( 300 ).delay( 200 ).fadeIn( 300 );
  
      $("#nombre6").text("Col");
      $("#imgOpcion6").attr("src","img/plant.png").slideUp( 300 ).delay( 200 ).fadeIn( 300 );

      $("#mensaje").text("*** GAME OVER ***");
      $("#mensaje2").text("El lobo se comió a la cabra!");
	  detenerTemporizador();

      $("#contenedorPreguntas").append("<button id='btnReset' class='btn boton btn-block btn-sm'>¿Jugar de nuevo?</button>");
      $("#btnReset").click(function(){
        location.reload();
      });
    });
  });
});