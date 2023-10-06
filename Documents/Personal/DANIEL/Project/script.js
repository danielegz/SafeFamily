function validarFormulario() {
    // Obtiene los valores ingresados por el usuario
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Verifica si el nombre de usuario y la contraseña son correctos (cambiar por lógica real)
    if (username === "usuario" && password === "12345") {
        alert("Inicio de sesión exitoso");
        // Redirige al usuario a main.html
        window.location.href = "main.html";
        return false; // Evita el envío del formulario
    } else {
        alert("Nombre de usuario o contraseña incorrectos");
        return false; // Evita el envío del formulario
    }
}
//SCRIPT saltos de pagina (botones)
function redirigirAPagina(pagina) {
    window.location.href = pagina;
}

// Agrega eventos click a los botones para redirigir
document.getElementById('B_localizar').addEventListener('click', function() {
    redirigirAPagina('main-localizar.html');
});

document.getElementById('B_mensajes').addEventListener('click', function() {
    redirigirAPagina('main-mensajes.html');
});

document.getElementById('B_archivos').addEventListener('click', function() {
    redirigirAPagina('pagina3.html');
});

document.getElementById('B_aplicaciones').addEventListener('click', function() {
    redirigirAPagina('main-aplicaciones.html');
});

document.getElementById('B_remoteview').addEventListener('click', function() {
    redirigirAPagina('pagina5.html');
});

document.getElementById('B_bloquear').addEventListener('click', function() {
    redirigirAPagina('main-bloqueo.html');
});



//--------SCRIPT MAIN APLICATIONS-------------
function mostrarMensaje(mensaje) {
    var mensajeDiv = document.getElementById('mensaje');
    mensajeDiv.style.display = 'block';
    mensajeDiv.textContent = mensaje;

    // Oculta el mensaje después de 3 segundos
    setTimeout(function() {
        mensajeDiv.style.display = 'none';
    }, 3000);
}

// Agrega la funcionalidad para eliminar una aplicación
var eliminarBotones = document.querySelectorAll('.eliminar');
eliminarBotones.forEach(function(boton) {
    boton.addEventListener('click', function() {
        var span = this.parentElement.querySelector('span');
        span.classList.add('eliminado');
        mostrarMensaje('Aplicación marcada como eliminada');
    });
});

// Agrega la funcionalidad para bloquear una aplicación
var bloquearBotones = document.querySelectorAll('.bloquear');
bloquearBotones.forEach(function(boton) {
    boton.addEventListener('click', function() {
        var span = this.parentElement.querySelector('span');
        var isBloqueado = span.classList.contains('bloqueado');
        
        if (isBloqueado) {
            span.classList.remove('bloqueado');
            this.textContent = 'Bloquear';
            mostrarMensaje('Aplicación desbloqueada con éxito');
        } else {
            span.classList.add('bloqueado');
            this.textContent = 'Desbloquear';
            mostrarMensaje('Aplicación bloqueada con éxito');
        }
    });
});

//MENSAJES main-mensajes

document.getElementById('enviar').addEventListener('click', function() {
    var mensaje = document.getElementById('mensaje').value;

    if (mensaje.trim() === '') {
        alert('Por favor, ingresa un mensaje antes de enviar.');
    } else {
        var confirmacion = confirm('¿Estás seguro de que deseas enviar este mensaje?\n\nMensaje: ' + mensaje);

        if (confirmacion) {
            alert('Mensaje enviado con éxito.');
            document.getElementById('mensaje').value = ''; // Borra el contenido del cuadro de texto
            // Aquí puedes agregar el código para enviar el mensaje, si es necesario.
        }
    }
});


//BLOQUEO

// Función para mostrar un mensaje de confirmación personalizado
function mostrarConfirmacion(mensaje) {
    return confirm(mensaje);
}

// Agrega eventos click a los botones con mensajes de confirmación personalizados
document.getElementById('robo').addEventListener('click', function() {
    var confirmacion = mostrarConfirmacion('¿Estás seguro de que quieres bloquear el equipo debido a un robo?');
    if (confirmacion) {
        alert('Equipo bloqueado debido a un robo.');
    }
});

document.getElementById('perdida').addEventListener('click', function() {
    var confirmacion = mostrarConfirmacion('¿Estás seguro de que quieres bloquear el equipo debido a una pérdida?');
    if (confirmacion) {
        alert('Equipo bloqueado debido a una pérdida.');
    }
});

document.getElementById('bloqueoParental').addEventListener('click', function() {
    var confirmacion = mostrarConfirmacion('¿Estás seguro de que quieres aplicar un bloqueo parental en el equipo?');
    if (confirmacion) {
        alert('Bloqueo parental aplicado en el equipo.');
    }
});