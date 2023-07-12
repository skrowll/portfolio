"use client";

import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

import styles from './Contact.module.scss';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');

  const sendEmail = (event) => {
    event.preventDefault();

    if (!name || !email || !text) {
      alert('Preencha todos os campos!');
      return;
    }

    const templateParams = {
      from_name: name,
      from_email: email,
      message: text
    }

    emailjs.send('service_ifmgl59', 'template_j06mofj', templateParams, 'yHmOyRSMshSXX6GZc').then((response) => {
      console.log("EMAIL ENVIADO", response.status, response.text);
      setName('');
      setEmail('');
      setText('');
    }, (error) => {
      console.log("ERRO: ", error);
    });
  }

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    };
    if (name === 'email') {
      setEmail(value);
    };
    if (name === 'text') {
      setText(value);
    };
  }

  // useEffect(() => {
  //   console.log({
  //     name,
  //     email,
  //     text
  //   });
  // }, [name, email, text])

  return (
    <section className={ styles.contact } id="contact">
      <h1>contact<span>{'()'}</span></h1>
      <form
        // className={ styles.form }
        onSubmit={ sendEmail }
      >
        <h2>Pega um café e vamos conversar</h2>
        <div className={ styles.group }>
          <input
            type="text"
            name="name"
            id="name"
            onChange={ handleChange }
            value={ name }
            required
          />
          <label htmlFor="name">Nome</label>
        </div>
        <div className={ styles.group }>
          <input
            type="text" 
            name="email" 
            id="email" 
            onChange={ handleChange } 
            value={ email }
            required
          />
          <label htmlFor="email">E-mail</label>
        </div>
        <div className={ styles.group }>
          <textarea 
            name="text" 
            id="text" 
            cols="30" 
            rows="10" 
            onChange={ handleChange }  
            value={ text }
            required
          >
          </textarea>
          <label htmlFor="text">Mensagem</label>
        </div>
        <button type="submit">
          <p>Enviar</p>
        </button>
      </form>
    </section>
  )
}