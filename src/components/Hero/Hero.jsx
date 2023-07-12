import Image from 'next/image';
import { GithubIcon, LinkedinIcon } from '../svgs';
import NextArrow from '../NextArrow';

import styles from './Hero.module.scss';
import photo from '../../../public/profile-photo.png';
// import hello from '../../../public/waving-hand.gif';

export default function Hero() {
  return (
    <section className={ styles.hero } id="hero">
      <div className={ styles.background }></div>
      <div className={ styles.foreground }>
        <div className={ styles.text_container }>
          <span className={ styles.hello_world }>{ 'helloWorld' }<span>{'()'}</span></span>
          {/* <h3><Image src={ hello } alt='Mão acenando'/>, Me chamo</h3> */}
          <h3>Me chamo</h3>
          <h1>Lucas Rocha</h1>
          <h2>E sou Desenvolvedor Web Full Stack</h2>
          <p>Dando vida à <span>ideias e soluções</span> através de <span>código e criatividade.</span></p>
          <div className={ styles.button_container }>
            <a
              href="https://www.linkedin.com/in/lucasjrocha/"
              target='blank'
            >
              <button>
                <LinkedinIcon />
                LinkedIn
              </button>
            </a>
            <a
              href="https://github.com/skrowll"
              target='blank'
            >
              <button>
                <GithubIcon />
                Github
              </button>
            </a>
          </div>
        </div>
        <div className={ styles.photo_container }>
          <Image src={ photo } alt='Foto de Lucas Rocha' priority={true}/>
          <div className={ styles.glitch_layers }>
            <div className={ styles.glitch_layer }></div>
            <div className={ styles.glitch_layer }></div>
            <div className={ styles.glitch_layer }></div>
          </div>
        </div>
      </div>
      <NextArrow href={ '#projects' }/>
    </section>
  )
}