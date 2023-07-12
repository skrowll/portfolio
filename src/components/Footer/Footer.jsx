import { DownloadIcon, LogoWhite, HeartSkrowll } from '../svgs';

import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={ styles.footer } id="footer">
      <div className={ styles.main }>
        <div className={ styles.logo }>
          <a href="#hero"><LogoWhite /></a>
        </div>
        <div className={ styles.nav }>
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
        </div>
        <div className={ styles.social }>
          <a href="https://github.com/skrowll" target="_blank">
            <i className="devicon-github-original"></i>
          </a>
          <a href="https://www.linkedin.com/in/lucasjrocha/" target="_blank">
            <i className="devicon-linkedin-plain"></i>
          </a>
        </div>
      </div>
      <hr />
      <div className={ styles.made }>
        <p>
          Made with<HeartSkrowll />by
          <a href="https://www.linkedin.com/in/lucasjrocha/" target="_blank">
            Lucas Rocha
          </a>
          <a href="https://github.com/skrowll" target="_blank">
            {'(skrowll)'}
          </a>
        </p>
      </div>
    </footer>
  )
}