document.addEventListener("DOMContentLoaded", function () {
    // 📌 FORMULARIO DE CONTACTO
    let contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const phone = document.getElementById("phone").value;
            const message = document.getElementById("message").value;

            const contactoData = { name, email, phone, message };

            fetch("http://localhost:8080/api/contacto/enviar", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(contactoData)
            })
            .then(response => response.ok ? response.json() : Promise.reject("Error al enviar el mensaje"))
            .then(data => {
                alert("Mensaje enviado con éxito.");
                console.log("Mensaje enviado:", data);
            })
            .catch(error => {
                alert("Hubo un error al enviar el mensaje.");
                console.error(error);
            });
        });
    }

    // 📌 FORMULARIO DE CUENTA (REGISTRO DE USUARIO)
    let registroForm = document.getElementById("registroForm");
    if (registroForm) {
        registroForm.addEventListener("submit", async function (event) {
            event.preventDefault();

            let nombre = document.getElementById("nombre").value;
            let correo = document.getElementById("correo").value;
            let contraseña = document.getElementById("password").value;

            let usuario = { nombre, correo, contraseña };

            try {
                let response = await fetch("http://localhost:8080/api/usuarios/registro", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(usuario)
                });

                let data = await response.json();

                if (response.ok) {
                    alert("Registro exitoso.");
                    console.log("Usuario registrado:", data);
                } else {
                    alert("Error en el registro.");
                }

            } catch (error) {
                alert("Error en la conexión con el servidor.");
                console.error(error);
            }
        });
    }
});
