import React, { useState } from 'react';
import './Contact.css';
import './HowToBuy.css';
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const [capVal, setCapVal] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const accessKey = "fb0b369c-a110-4553-a5ce-91e77eea6cc7"; //fb0b369c-a110-4553-a5ce-91e77eea6cc7

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const isFormValid = () => {
    // Verificar que los campos requeridos no estén vacíos ni contengan solo espacios
    if (formData.firstName.trim() === '' ||
        formData.lastName.trim() === '' ||
        formData.email.trim() === '' ||
        formData.message.trim() === '') {
      return false;
    }
    
    // Verificar que el campo de mensaje no contenga solo espacios
    if (formData.message.trim() === '') {
      return false;
    }

    return true;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!capVal) {
      alert('Por favor, completa la validación ReCAPTCHA.');
      return;
    }

    if (!isFormValid()) {
      alert('Por favor, completa todos los campos correctamente.');
      return;
    }

    const data = {
      access_key: accessKey,
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      message: formData.message,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('Error en la solicitud HTTP: ' + response.status);
      }

      const responseData = await response.json();
      console.log('Respuesta del servidor:', responseData);

      alert('¡Formulario enviado correctamente!');

      // Opcional: limpiar el formulario después del envío
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
      });

    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      alert('Hubo un error al enviar el formulario. Por favor, inténtalo nuevamente.');
    }
  };

  return (
    <section>
      <div className="buy-heading">
        <h1>Contactame</h1>
        <div className="buy-heading-bars">
          <img className="fixed-bar" src="/images/iconos/bar.webp" alt="barra clara" loading="lazy" />
          <img className="transitioned-bar" src="/images/iconos/bar2.webp" alt="barra oscura" loading="lazy" />
        </div>
      </div>

      <div className="contact-container">
        <article className='form-container'>
          <img className="contact-icon" src="/images/iconos/ContactIcon.webp" alt="Imagen Usuario" loading="lazy" />
          <form onSubmit={handleFormSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">Nombre:</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Apellido:</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Correo Electrónico:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensaje:</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            <div className="recaptcha-container">
              <ReCAPTCHA
                sitekey="6LckAAEqAAAAAKCXLykquEnkhYYGQiVfLjVhskz7"
                onChange={(val) => setCapVal(val)}
              />
            </div>
            <button type="submit" disabled={!capVal}>Enviar</button>
          </form>
        </article>

        <article className="map-container">
          <iframe className="iframe-map" title='ubication' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13631.813438405925!2d-64.30947701567558!3d-31.332661150881098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94329dc08c855a1b%3A0x2da10c63c236df2c!2sPampa%20de%20los%20Guanacos%2010485%2C%20La%20Calera%2C%20C%C3%B3rdoba%2C%20Argentina!5e0!3m2!1ses!2suy!4v1715724351427!5m2!1ses!2suy"
            loading="lazy"></iframe>
          <h3>Ubicacion : Córdoba, Argentina.</h3>
        </article>
      </div>
    </section>
  );
};

export default Contact;
