"use client";

import { useEffect } from 'react';
import Image from 'next/image';
import tunesApp from '../../../public/tunes-app.png';
import recipesApp from '../../../public/recipes-app.png';
import tfcApp from '../../../public/tfc-app.png';
import NextArrow from '../NextArrow';
import { EyeIcon, CodeIcon } from '../svgs';

import styles from './Projects.module.scss';

export default function Projects() {
  useEffect(() => {
    const observer = new IntersectionObserver((elements) => {
      elements.forEach((element) => {
        if (element.isIntersecting) {
          element.target.classList.add(styles.show);
        }
      })
    })

    const hiddenElements = document.querySelectorAll(`.${styles.card}`);
    hiddenElements.forEach((element) => observer.observe(element));
  });


  return (
    <section className={ styles.projects } id="projects">
      <h1>projects<span>{'()'}</span></h1>
      <div className={ styles.project_cards }>
        <div className={ styles.card }>
          <div className={ styles.image_container } data-number="1">
            <Image src={ tunesApp } alt="Imagem aplicativo tunes" priority={false} />
          </div>
          <div className={ styles.description_container } data-number="1">
            <div className={ styles.content }>
              <h2>SkrowllTunes</h2>
              <span><p>Descrição:</p></span>
              <p>
                Este projeto consiste em uma aplicação criada para permitir que o usuário 
                pesquise por álbuns musicais de um artista específico e execute uma prévia das faixas desse álbum.
              </p>
              <span><p>Tecnologias:</p></span>
              <p>
                React, Hooks, React Router, React Testing Library e CSS Modules.
              </p>
              <span><p>Informações adicionais:</p></span>
              <p>
                Login e Registro podem ser feitos com qualquer e-mail no formato válido, porém 
                é possível logar através do botão {'"Entrar como Convidado"'} onde não é preciso fornecer nenhum dado.
              </p>
              <div className={ styles.button_container }>
                <a href="https://github.com/skrowll/project-skrowlltunes" target="_blank">
                  <CodeIcon />
                  code
                </a>
                <a href="https://tunes.skrowll.online/" target="_blank">
                  <EyeIcon />
                  preview
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={ styles.card }>
          <div className={ styles.image_container } data-number="2">
            <Image src={ recipesApp } alt="Imagem aplicativo recipes" priority={false} />
          </div>
          <div className={ styles.description_container } data-number="2">
          <div className={ styles.content }>
              <h2>App de Receitas</h2>
              <span><p>Descrição:</p></span>
              <p>
                Este projeto consiste em uma aplicação criada para permitir que, através de consulta à APIs, o usuário busque, filtre, 
                favorite e acompanhe o progresso de preparação de receitas e drinks.
              </p>
              <span><p>Tecnologias:</p></span>
              <p>
                React, Hooks, Context API, React Router, Axios e CSS Vanilla.
              </p>
              <span><p>Informações adicionais:</p></span>
              <p>
                O login é feito fornecendo qualquer e-mail no formato válido e qualquer senha apenas respeitando a quantidade mínima de caracteres.
              </p>
              <div className={ styles.button_container }>
                <a href="https://github.com/skrowll/project-recipes-app" target="_blank">
                  <CodeIcon />
                  code
                </a>
                <a href="https://recipes.skrowll.online/" target="_blank">
                  <EyeIcon />
                  preview
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={ styles.card }>
          <div className={ styles.image_container } data-number="3">
            <Image src={ tfcApp } alt="Imagem aplicativo tfc" priority={false} />
          </div>
          <div className={ styles.description_container } data-number="3">
          <div className={ styles.content }>
              <h2>Trybe Futebol Clube</h2>
              <span><p>Descrição:</p></span>
              <p>
                Esse projeto consiste no desenvolvimento de uma API REST para um Frontend pronto de um site informativo 
                sobre partidas e classificações de futebol utilizando POO e Arquitetura MSC.
              </p>
              <span><p>Tecnologias:</p></span>
              <p>
                Node.js, TypeScript, Express, Sequelize, MySQL, Docker, Mocha, Chai e Sinon.
              </p>
              <span><p>Informações adicionais:</p></span>
              <p>
                Para realizar o login como usuário:
                <br />
                Login: user@user.com Senha: secret_user
                <br />
                <br />
                Para realizar o login como administrador:
                <br />
                Login: admin@admin.com Senha: secret_admin
              </p>
              <div className={ styles.button_container }>
                <a href="https://github.com/skrowll/trybe-project-TFC" target="_blank">
                  <CodeIcon />
                  code
                </a>
                <a href="https://tfc.skrowll.online/" target="_blank">
                  <EyeIcon />
                  preview
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NextArrow href={ '#skills' }/>
    </section>
  )
}