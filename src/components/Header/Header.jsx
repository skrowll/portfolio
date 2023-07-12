"use client";

import { useEffect } from 'react'
import { LogoWhite, LogoCyan, LogoMagenta, DownloadIcon, MenuIcon } from '../svgs';

import styles from './Header.module.scss';

export default function Header() {
  useEffect(() => {
    window.addEventListener('mousewheel', (event) => {
      if (event.deltaY > 0) {
        scrollDown();
      }
    });
  }, []);


  const scrollDown = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const headerHeight = document.querySelector(`.${styles.header}`).offsetHeight;

    if (scrollPosition < (windowHeight - headerHeight)) {
      window.scrollBy(0, (windowHeight - headerHeight - scrollPosition))
    };
  };

  const menuShow = () => {
    const menuMobile = document.querySelector(`.${styles.menu_mobile_nav}`);
    if (menuMobile.classList.contains(styles.open)) {
      menuMobile.classList.remove(styles.open);
    } else {
      menuMobile.classList.add(styles.open);
    }
  };

  const menuClose = () => {
    const menuMobile = document.querySelector(`.${styles.menu_mobile_nav}`);
    if (menuMobile.classList.contains(styles.open)) {
      menuMobile.classList.remove(styles.open);
    }
  };

  return (
    <header className={ styles.header }>
      <a className={ styles.logo } href="#hero" onClick={ menuClose }>
      <LogoWhite className={ styles.white } />
      <LogoCyan className={ styles.cyan } />
      <LogoMagenta className={ styles.magenta } />
      </a>
      <nav>
        <ul>
          <li><a href="#projects">Projetos</a></li>
          <li><a href="#skills">Habilidades</a></li>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#contact">Contato</a></li>
          <li>
            <a id={ styles.resume } href="curriculo-lucasrocha.pdf" download>
              <button>
                <DownloadIcon />
                Currículo
              </button>
            </a>
          </li>
        </ul>
      </nav>
      <button
        className={ styles.menu_mobile_button }
        type="button"
        onClick={ menuShow }
      >
        <MenuIcon />
      </button>
      <nav className={ styles.menu_mobile_nav }>
        <ul>
          <li><a href="#projects" id='projectsLink' onClick={ menuClose }>Projetos</a></li>
          <li><a href="#skills" onClick={ menuClose }>Habilidades</a></li>
          <li><a href="#about" onClick={ menuClose }>Sobre</a></li>
          <li><a href="#contact" onClick={ menuClose }>Contato</a></li>
          <li>
            <a id={ styles.resume } href="curriculo-lucasrocha.pdf" download>
              <button>
                <DownloadIcon />
                Currículo
              </button>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}