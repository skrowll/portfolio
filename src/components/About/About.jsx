"use client";

import Image from 'next/image';
import { useEffect } from 'react'
import NextArrow from '../NextArrow';

import styles from './About.module.scss';
import photo from '../../../public/profile-photo-about-bw.png';

export default function About() {
  useEffect(() => {
    const tabButtons = document.querySelectorAll(`.${styles.tabs} > button`);
    const tabContents = document.querySelectorAll(`.${ styles.content }`);
    tabButtons.forEach((tab, index) => {
      if (index === 0) {
        tab.classList.add(`${styles.active}`)
      } else {
        tabContents[index].setAttribute("hidden", "");
      }
    })

    const options = {
      threshold: 0.85,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log(entry.target);
          entry.target.style.animation = `${styles.paiting} 2s steps(24) forwards`;
          console.log(entry.target);
        } else {
          entry.target.style.animation = ''
        }
      })
    }, options)

    const colorImage = document.querySelectorAll(`.${styles.color_img}`);
    colorImage.forEach(element => observer.observe(element));
  }, []);

  const handleClick = (event) => {
    event.preventDefault();
    const activeContentId = event.target.getAttribute('href');
    const activeContent = document.querySelector(activeContentId);
    const tabContents = document.querySelectorAll(`.${styles.content}`);
    document.querySelector(`.${styles.active}`).classList.remove(`${styles.active}`);
    event.target.classList.add(`${styles.active}`);

    tabContents.forEach((content) => {
      content.setAttribute("hidden", "");
    });

    activeContent.removeAttribute("hidden", "");
  }

  return (
    <section className={ styles.about } id="about">
      <div className={ styles.background }></div>
      <div className={ styles.foreground }>
        <h1>about<span>{'()'}</span></h1>
        <div className={ styles.image_container }>
          <Image src={ photo } alt='Foto de Lucas Rocha' priority={true}/>
          {/* <div className={ styles.color_img } style={{"animation": "2s steps(24) 0s 1 normal forwards running paiting;"}}></div> */}
          <div className={ styles.color_img }></div>
        </div>
        <div className={ styles.text_container }>
          <div className={ styles.container }>
            <h2>Select difficulty level:</h2>
            <div className={ styles.tabs }>
              <button href='#easy' onClick={ handleClick }>Easy</button>
              <button href='#medium' onClick={ handleClick }>Medium</button>
              <button href='#hard' onClick={ handleClick }>Hard</button>
              <button href='#expert' onClick={ handleClick }>Expert</button>
            </div>
            <div className={ styles.content } id='easy'>
              <hr />
              <p>
              Com mais de uma década de experiência como eletricista de manutenção, 
              desenvolvi uma sólida ética de trabalho, resiliência e habilidades como capacidade analítica, 
              pensamento criativo, planejamento, organização e flexibilidade, fundamentais para a resolução de problemas.
              <br />
              Decidi seguir minha paixão pela programação e optar pela transição de carreira. Nos últimos 1 ano e 8 meses, 
              tenho desenvolvido meus conhecimentos na área e feito alguns trabalhos como freelancer.
              </p>
            </div>
            <div className={ styles.content } id='medium'>
              <hr />
              <p>
                Desde a infância, eu era uma criança curiosa e apaixonada por entender como as coisas funcionavam.
                Vivia desmontando meus brinquedos e adorava jogos de raciocínio lógico.
              </p>
              <br />
              <p>
                Durante a minha adolescência, iniciei o curso de eletroeletrônica e comecei a trabalhar como eletricista de manutenção. 
                Posteriormente, ao ingressar na faculdade, optei por cursar engenharia elétrica, 
                trocando depois para automação industrial onde teria um contato maior com programação, minha paixão.
              </p>
              <br />
              <p>
                Durante a pandemia decidi me dedicar integralmente ao meu sonho de trabalhar com programação, 
                estudando e fazendo alguns trabalhos como freelancer para me desenvolver.
              </p>
              <br />
              <p>
                Depois de adquirir habilidades com minhas experiências anteriores e desenvolver novas competências como desenvolvedor, 
                busco unir essas duas áreas durante essa minha nova etapa de transição de carreira.
              </p>
            </div>
            <div className={ styles.content } id='hard'>
              <hr />
              <p>
              Eu sempre fui uma criança peculiar. 
              Enquanto meus amigos sonhavam em ser jogadores de futebol, 
              meu sonho era ser um cientista e construir robôs. 
              Enquanto as outras crianças pediam revistas para colorir nas bancas, 
              eu pedia para o meu pai comprar revistas de sudoku para eu resolver. 
              Nas poucas ocasiões em que meu pai me presenteou com um carrinho de controle remoto, quando eu pedi, eu acho que ele não ficava muito feliz.
              Afinal, éramos em quatro irmãos, e não era um presente barato na época. 
              Além disso, o carrinho durava poucos dias nas minhas mãos antes de ser totalmente desmontado. 
              Sempre fui curioso e apaixonado pela lógica por trás do funcionamento das coisas.
              </p>
              <br />
              <p>
              Na adolescência, essa paixão me levou a iniciar o curso de eletroeletrônica no Senai e, 
              aos 16 anos, comecei a trabalhar como eletricista de manutenção. 
              Logo chegou a hora do vestibular e acreditei que a engenharia elétrica era o caminho certo a seguir. 
              Foi quando tive meu primeiro contato com a lógica de programação e foi amor à primeira vista. 
              Eu queria mais disso e decidi trocar de curso, mas na época não estava pronto para uma mudança radical. 
              Optei por automação industrial, onde aprenderia a programar microcontroladores e CLPs.
              </p>
              <br />
              <p>
              Foi nessa mesma época, aos 19 anos, que passei no concurso público da CPTM, ainda como eletricista de manutenção. 
              Algum tempo depois, veio a pandemia, um momento bastante introspectivo para mim. 
              Apesar de estar bem na faculdade e ter um emprego estável na CPTM, sentia que algo ainda não estava completo. 
              Foi quando, após um longo planejamento, decidi assumir os riscos, trancar a faculdade, 
              pedir demissão e dedicar mais de um ano da minha vida ao meu desenvolvimento profissional e transição de carreira. 
              Essa foi uma decisão difícil, porém necessária para que eu pudesse finalmente sentir que estava fazendo aquilo para o qual nasci.
              </p>
              <br />
              <p>
              Não considero que minhas experiências passadas tenham sido perda de tempo, pelo contrário, 
              a faculdade me ensinou muitas coisas e ajudou a desenvolver minha habilidade de aprender a aprender. 
              Além disso, minha experiência de mais de 10 anos trabalhando com manutenção contribuiu para o desenvolvimento 
              de habilidades como trabalho em equipe, capacidade analítica, pensamento criativo, planejamento, organização e flexibilidade, 
              fundamentais para a resolução de problemas.
              </p>
              <br />
              <p>
                Meu objetivo é alcançar minha realização pessoal, conforme Clóvis de Barros Filho destaca, 
                que só é possível através da excelência pessoal, a qual só pode ser alcançada ao encontrar seu propósito. 
                Hoje, sei qual é o meu propósito.
              </p>
            </div>
            <div className={ styles.content } id='expert'>
              <hr />
              <p>
                Eu <span>▉▉▉▉▉▉ muito ▉▉▉▉▉</span> assim <span>▉▉▉▉▉▉ ▉▉▉▉▉▉</span> <span>▉▉▉▉▉▉ . ▉▉▉▉▉▉</span> para <span>▉▉▉▉▉▉▉▉▉</span> 
                <span>▉▉▉▉▉▉▉</span>, também<span>▉▉▉▉▉ quando ▉▉▉▉▉▉</span> então <span>▉▉▉▉▉▉ ▉▉▉▉▉▉</span> e <span>▉▉▉▉▉▉▉▉</span> 
                <span>▉▉▉▉ ▉▉▉▉▉</span> como <span>▉▉▉▉▉▉ ▉▉▉▉▉▉▉</span> no <span>▉▉▉▉▉ foi ▉▉▉▉▉</span> <span>▉▉▉▉▉▉▉▉▉ , ▉▉▉▉▉▉▉▉▉</span>.
                {'▉▉33$?❐▚?$ @#▚$!❐❐_$*! @▚%@'}<span>▉▉▉▉▉▉▉</span>{'❐) ▚❐$@!_#!_ ??$▚*!@%@/'}
                <span>▉▉▉▉▉▉ ▉▉▉▉▉▉▉</span>{'4*+-/@#(*|*!@%▉@/{?❐?:*▚- '}<span>▉▉▉▉▉▉▉▉</span> {'#32❐ 21#)@!&#▉▉33@#'}
                {''}<span>▉▉▉▉▉ ▉▉▉▉▉ ▉▉▉▉▉</span>{'&#!$!?❐?) $&▉▉!)@"'}<span>▉▉▉▉▉▉▉▉▉</span>{'_$*! @▚%@❐▚$%* )$(}4*+-(*||'}
                <span>▉▉▉▉▉▉▉▉</span>{'▚33@#$▚❐ @#@▚??$%* )$)#$'}<span>▉▉▉▉▉▉ ▉▉▉▉▉▉▉ ▉▉▉▉▉</span>.
                {'&#!$ !?❐?) $&▉▉!)@"_*#"&) ▚#❐$@& ❐#(??*❐|3#❐❐) ▚❐$@!_#!_ ??$▚*!@%@/@#(*|$ %!!@#▚3❐ 201+-/-/@#▉30 21!&??#▚33@#"@#$ @#$▚❐ @#❐$?$@▚??$%* )$(}{#@??$)#$'}
                {'$!_$*!@❐%@ $%!!❐@#32❐ 30 21#)@ !&#▉▉3 3@#$?❐▚?@#$ @#$@#▚$!▚❐❐_$*! @▚%@/@#@ #$@❐▚$%* )$(}4* +-/-/@#(*|| !_$*!@%▉@/{?❐??:*▚-#$ *&#3▚3@#"❐@#$$%(%'}
                <br />
              </p>
              <hr style={{ border: '1px dashed red' }}/>
              <p>
              <strong>ERRO:</strong> Dificuldade não suportada. Para mais informações, por favor, entre em contato. <a href="#contact">clique aqui</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <NextArrow href={ '#contact' }/>
    </section>
  )
}