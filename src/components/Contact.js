import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
      <section>
        <div className="buy-heading">
                <h3>Contactame</h3>
                <div className="buy-heading-bars">
                    <img className="fixed-bar" src="/images/iconos/bar.webp" alt="barra clara"/>
                    <img className="transitioned-bar" src="/images/iconos/bar2.webp" alt="barra oscura"/>
                </div>    
        </div>
        <div>
            <form>
              <label for="name" >
              Nombre<br/><input type='text' name='name' ></input>
              </label>
              <label for="apellido" >
              Apellido<br/><input type='text' name='apellido' ></input>
              </label>
              <label for="numero" >
              Numero de telefono<br/><input type='tel' name='numero' ></input>
              </label>
              <label for="comentario" >
              Comentario<br/><input type='text' name='comentario' ></input>
              </label>
              
            </form>
        </div>

      </section>
    )
}

export default Contact


