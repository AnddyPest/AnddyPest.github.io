document.getElementById('formulario').addEventListener('submit', function (event) {
    event.preventDefault();
    const ns = document.getElementById('nameSurname').value;
    const tel = document.getElementById('telefono').value;
    const mail = document.getElementById('email').value;
    const cons = document.getElementById('consulta').value;

    let bandera = false;

    // Aca limpiamos los inputs cuando los campos estann OKKK!!
    const mensajeError = document.querySelectorAll('span.mensajeError');
    mensajeError.forEach(function (span) {
        span.style.display = 'none';
        span.innerHTML = '';
    });

    if (ns.length > 30 || ns === '') {
        bandera = true;
        const errorSpan = document.getElementById('errorNameSurname');
        errorSpan.style.display = 'block';
        errorSpan.innerHTML = '*Debe enviar un nombre para contactarlo.';
    }

    if (isNaN(tel) || tel === '') {
        bandera = true;
        const errorSpan = document.getElementById('errorTelefono');
        errorSpan.style.display = 'block';
        errorSpan.innerHTML = '*El teléfono debe ser un número y no puede estar vacío.';
    }

    if (mail === '' || !/^[^\s@]{5,}@[^\s@]{4,}\.(com|gob|gov|org|edu)(\.[a-z]{2})?$/.test(mail)) {
        bandera = true;
        const errorSpan = document.getElementById('errorEmail');
        errorSpan.style.display = 'block';
        errorSpan.innerHTML = '*No puede estar vacio, el formato debe ser xxxxx@xxxx.xxx y opcionalmente .xx';
    }

    if (cons.length > 200) {
        bandera = true;
        const errorSpan = document.getElementById('errorConsulta');
        errorSpan.style.display = 'block';
        errorSpan.innerHTML = '*La consulta debe tener un máximo de 200 caracteres.';
    }

    if (!bandera) {
        const contactosDiv = document.getElementById('contactos');
        const nuevoContacto = document.createElement('p');
        nuevoContacto.classList.add('cont');
        document.getElementById('nameSurname').focus();

        if (cons) {
            nuevoContacto.innerHTML = `${ns} se ha comunicado con nuestro equipo y nos ha dicho: ${cons}.`;
        } else {
            nuevoContacto.innerHTML = `${ns} se ha comunicado con nuestro equipo.`;
        }

        contactosDiv.appendChild(nuevoContacto);
        contactosDiv.style.display = 'block';
        document.getElementById('formulario').reset();
    }

});