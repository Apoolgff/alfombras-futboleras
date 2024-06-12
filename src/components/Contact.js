import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section>
      <div className="buy-heading">
        <h1>Contactame</h1>
        <div className="buy-heading-bars">
          <img className="fixed-bar" src="/images/iconos/bar.webp" alt="barra clara" loading="lazy"/>
          <img className="transitioned-bar" src="/images/iconos/bar2.webp" alt="barra oscura" loading="lazy"/>
        </div>
      </div>
      
      <div className="contact-container">
            <div className='form-container'>
                <img className="contact-icon" src="/images/iconos/ContactIcon.webp" alt="Imagen Usuario" loading="lazy"/>
                <form action="https://api.web3forms.com/submit" method="POST">
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="firstName">Nombre:</label>
                            <input type="text" id="firstName" name="firstName" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Apellido:</label>
                            <input type="text" id="lastName" name="lastName" required />
                        </div>
                    </div>
                    <div className="form-group">
                    <input type="hidden" name="access_key" value="key" />{/*fb0b369c-a110-4553-a5ce-91e77eea6cc7*/}
                        <label htmlFor="email">Correo Electrónico:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Mensaje:</label>
                        <textarea id="message" name="message" rows="5" required></textarea>
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            </div>

            <div className="map-container">
                
                <iframe title='ubication' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13631.813438405925!2d-64.30947701567558!3d-31.332661150881098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94329dc08c855a1b%3A0x2da10c63c236df2c!2sPampa%20de%20los%20Guanacos%2010485%2C%20La%20Calera%2C%20C%C3%B3rdoba%2C%20Argentina!5e0!3m2!1ses!2suy!4v1715724351427!5m2!1ses!2suy" 
                loading="lazy"></iframe>
                <h3>Ubicacion : Córdoba, Argentina.</h3>            
            </div>

      </div>
    </section>
  )
}

export default Contact


