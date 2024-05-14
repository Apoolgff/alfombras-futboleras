import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section>
      <div className="buy-heading">
        <h3>Contactame</h3>
        <div className="buy-heading-bars">
          <img className="fixed-bar" src="/images/iconos/bar.webp" alt="barra clara" />
          <img className="transitioned-bar" src="/images/iconos/bar2.webp" alt="barra oscura" />
        </div>
      </div>
      <div className="contact-container">
        <div className='form-container'>
          <img className="contact-icon" src="/images/iconos/ContactIcon.webp" alt="Imagen Usuario" />
          <form>
            <div className="form-row">
              <div className="form-group">
                <label for="firstName">Nombre:</label>
                <input type="text" id="firstName" name="firstName" required />
              </div>
              <div className="form-group">
                <label for="lastName">Apellido:</label>
                <input type="text" id="lastName" name="lastName" required />
              </div>
            </div>
            <div className="form-group">
              <label for="email">Correo Electrónico:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label for="message">Mensaje:</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit">Enviar</button>
          </form>
        </div>

        <div className="map-container">
          <h3>Ubicacion : Córdoba, Argentina.</h3>
          <iframe title="ubicacion" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13631.792515850857!2d-64.3094371!3d-31.3328056!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94329dfc8e24a273%3A0xf696b8e9235f484c!2sAlfombras%20Futboleras!5e0!3m2!1ses!2suy!4v1715713505246!5m2!1ses!2suy" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
         
        </div>

      </div>
    </section>
  )
}

export default Contact


