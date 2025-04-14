document.getElementById("contactForm").addEventListener("submit", async function (event) {
    event.preventDefault(); // Evita que el formulario se recargue

    // Capturar datos del formulario
    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value
    };

    try {
        // Enviar datos al backend
        const response = await fetch("http://localhost:8080/api/contacto/enviar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            alert("Mensaje enviado con éxito.");
            document.getElementById("contactForm").reset(); // Limpiar formulario
        } else {
            alert("Error al enviar el mensaje.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("No se pudo enviar el mensaje.");
    }
});
