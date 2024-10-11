
document.getElementById('formulario').addEventListener('submit', function (event) {
    event.preventDefault();
    const ns = document.getElementById('nameSurname').value;
    const tel = document.getElementById('telefono').value;
    const mail = document.getElementById('email').value;
    const cons = document.getElementById('consulta').value;

    let bandera = false;

    //Aca se limpian si mandas los datos OK!!!!!
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
        errorSpan.innerHTML = '*El teléfono de contacto no puede quedar vacío.';
    }

    if (mail === '' && !/^[^\s@]{5,}@[^\s@]{4,}\.(com|gob|gov|org|edu)(\.[a-z]{2})?$/.test(mail)) {
        bandera = true;
        const errorSpan = document.getElementById('errorEmail');
        errorSpan.style.display = 'block';
        errorSpan.innerHTML = '*El campo no puede estar vacío, su formato debe ser xxxxx@xxxx.xxx y opcionalmente .xx';
    }

    if (cons.length > 200) {
        bandera = true;
        const errorSpan = document.getElementById('errorConsulta');
        errorSpan.style.display = 'block';
        errorSpan.innerHTML = '*La consulta debe tener un máximo de 200 caracteres.';
    }

    if (!bandera) {
        const reseñasDiv = document.createElement('div');
        const nuevaReseña = document.createElement('p');
        reseñasDiv.id = 'reseñas';
        nuevaReseña.classList.add('reseña');
        nuevaReseña.innerHTML = cons
            ? `${ns} se ha contactado para consultar por nuestros servicios, nos ha dicho: ${cons}`
            : `${ns} se ha contactado para preguntar por nuestros servicios`;
        reseñasDiv.appendChild(nuevaReseña);
        document.body.appendChild(reseñasDiv);
        reseñasDiv.style.display = 'block';
        document.getElementById('formulario').reset();
    }
});