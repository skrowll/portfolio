"use client";

import { useEffect } from 'react'
import NextArrow from '../NextArrow';

import styles from './Skills.module.scss';
import Image from 'next/image';

export default function Skills() {
  useEffect(() => {
    const tabButtons = document.querySelectorAll(`.${styles.tabs} > button`)
    const tabContents = document.querySelectorAll(`.${styles.content}`)
    tabButtons.forEach((tab, index) => {
      if (index === 0) {
        tab.classList.add(`${styles.active}`)
      } else {
        tabContents[index].setAttribute("hidden", "");
      }
    })
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
    <section className={ styles.skills } id="skills">
      <h1>skills<span>{'()'}</span></h1>
      <div className={ styles.container }>
        <div className={ styles.tabs }>
          <button href='#front-end' onClick={ handleClick }>Front-end</button>
          <button href='#back-end' onClick={ handleClick }>Back-end</button>
          <button href='#db' onClick={ handleClick }>Banco de dados</button>
          <button href='#tests' onClick={ handleClick }>Teste</button>
          <button href='#devops' onClick={ handleClick }>DevOps</button>
          <button href='#tools' onClick={ handleClick }>Ferramentas</button>
          <button href='#all' onClick={ handleClick }>Todos</button>
        </div>
        <div className={ styles.content } id='front-end'>
          <h3>Front-end</h3>
          <hr />
          <div className={ styles.icons_container }>
          <span style={{ '--index': 1 }}>
              <i className="devicon-html5-plain colored"></i>
              <p>Html 5</p> 
            </span>
            <span style={{ '--index': 2 }}>
              <i className="devicon-css3-plain colored"></i>
              <p>Css 3</p> 
            </span>
            <span style={{ '--index': 3 }}>
              <i className="devicon-javascript-plain colored"></i>
              <p>JavaScript</p> 
            </span>
            <span style={{ '--index': 4 }}>
              <i className="devicon-typescript-plain colored"></i>
              <p>TypeScript</p> 
            </span>
            <span style={{ '--index': 5 }}>
              <i className="devicon-sass-original colored"></i>
              <p>Sass</p> 
            </span>
            <span style={{ '--index': 6 }}>
              <i className="devicon-tailwindcss-plain colored"></i>
              <p>Tailwind css</p> 
            </span>
            <span style={{ '--index': 7 }}>
              <i className="devicon-bootstrap-plain colored"></i>
              <p>Bootstrap</p> 
            </span>
            <span style={{ '--index': 8 }}>
              <i className="devicon-react-original colored"></i>
              <p>React</p> 
            </span>
            <span style={{ '--index': 9 }}>
              <i className="devicon-redux-original colored"></i>
              <p>Redux</p> 
            </span>
            <span style={{ '--index': 10 }}>
              <i className="devicon-nextjs-original"></i>
              <p>Next.js</p> 
            </span>
            <span style={{ '--index': 11 }}>
              <i><Image height="56" width="56" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt='figma'/></i>
              <p>Figma</p>
            </span>
          </div>  
        </div>
        <div className={ styles.content } id='back-end'>
          <h3>Back-end</h3>
          <hr />
          <div className={ styles.icons_container }>
          <span style={{ '--index': 1 }}>
              <i className="devicon-nodejs-plain colored"></i>
              <p>Node.js</p> 
            </span>
            <span style={{ '--index': 2 }}>
              <i className="devicon-typescript-plain colored"></i>
              <p>TypeScript</p> 
            </span>
            <span style={{ '--index': 3 }}>
              <i className="devicon-express-original"></i>
              <p>Express</p> 
            </span>
            <span style={{ '--index': 4 }}>
            <i><Image height="56" width="56" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" alt='sequelize'/></i>
              <p>Sequelize</p> 
            </span>
            <span style={{ '--index': 5 }}>
              <i><Image height="56" width="56" src="https://cdn.simpleicons.org/prisma/white" alt='prisma'/></i>
              <p>Prisma</p>
            </span>
            <span style={{ '--index': 6 }}>
              <i><Image height="56" width="56" src="https://cdn.simpleicons.org/mongoose/880000" alt='mongoose'/></i>
              <p>Mongoose</p>
            </span>
            <span style={{ '--index': 7 }}>
              <i><Image height="56" width="56" src="https://cdn.simpleicons.org/dotenv/ECD53F" alt='.env'/></i>
              <p>.env</p>
            </span>
            <span style={{ '--index': 8 }}>
              <i><Image height="56" width="56" src="https://cdn.simpleicons.org/jsonwebtokens/magenta" alt='jwt'/></i>
              <p>JWT</p>
            </span>
            <span style={{ '--index': 9 }}>
              <i><Image height="56" width="56" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt='python'/></i>
              <p>Poython</p>
            </span>
            <span style={{ '--index': 10 }}>
              <i className="devicon-django-plain colored"></i>
              <p>Django</p>
            </span>
            <span style={{ '--index': 11 }}>
              <i><Image height="56" width="56" src="https://cdn.simpleicons.org/swagger/85EA2D" alt='swagger'/></i>
              <p>Swagger</p>
            </span>
          </div> 
        </div>
        <div className={ styles.content } id='db'>
          <h3>Banco de dados</h3>
          <hr />
          <div className={ styles.icons_container }>
          <span style={{ '--index': 1 }}>
              <i><Image height="56" width="56" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" alt='mysql'/></i>
              <p>MySQL</p>
            </span>
            <span style={{ '--index': 2 }}>
              <i><Image height="56" width="56" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt='mongodb'/></i>
              <p>Mongodb</p>
            </span>
            <span style={{ '--index': 3 }}>
              <i><Image height="56" width="56" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt='postgresql'/></i>
              <p>PostgreSQL</p>
            </span>
          </div> 
        </div>
        <div className={ styles.content } id='tests'>
          <h3>Testes</h3>
          <hr />
          <div className={ styles.icons_container }>
            <span style={{ '--index': 1 }}>
              <i><Image height="56" width="56" src="https://cdn.simpleicons.org/cypress/white" alt='cypress'/></i>
              <p>Cypress</p>
            </span>
            <span style={{ '--index': 2 }}>
              <i className="devicon-jest-plain colored"></i>
              <p>Jest</p>
            </span>
            <span style={{ '--index': 3 }}>
              <i><Image height="56" width="56" src="https://cdn.simpleicons.org/testinglibrary/E33332" alt='RTL'/></i>
              <p>React Testing Library</p>
            </span>
            <span style={{ '--index': 4 }}>
              <i className="devicon-mocha-plain colored"></i>
              <p>Mocha</p>
            </span>
            <span style={{ '--index': 5 }}>
              <i><Image height="56" width="56" src="https://cdn.simpleicons.org/chai/A30701" alt='chai'/></i>
              <p>Chai</p>
            </span>
            <span style={{ '--index': 6 }}>
              <i><Image height="56" width="56" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytest/pytest-original.svg" alt='pytest'/></i>
              <p>Pytest</p>
            </span>
          </div> 
        </div>
        <div className={ styles.content } id='devops'>
          <h3>DevOps</h3>
          <hr />
          <div className={ styles.icons_container }>
            <span style={{ '--index': 1 }}>
              <i><Image height="56" width="56" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt='docker'/></i>
              <p>Docker</p>
            </span>
            <span style={{ '--index': 2 }}>
              <i><Image height="56" width="56" src="https://cdn.simpleicons.org/githubactions/2088FF" alt='githubactions'/></i>
              <p>GitHub Actions</p>
            </span>
          </div> 
        </div>
        <div className={ styles.content } id='tools'>
          <h3>Ferramentas</h3>
          <hr />
          <div className={ styles.icons_container }>
            <span style={{ '--index': 1 }}>
              <i><Image height="56" width="56" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt='linux'/></i>
              <p>Linux</p>
            </span>
            <span style={{ '--index': 2 }}>
              <i className="devicon-bash-plain"></i>
              <p>Bash</p>
            </span>
            <span style={{ '--index': 3 }}>
              <i><Image height="56" width="56" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt='vscode'/></i>
              <p>vscode</p>
            </span>
            <span style={{ '--index': 4 }}>
              <i className="devicon-git-plain colored"></i>
              <p>Git</p>
            </span>
            <span style={{ '--index': 5 }}>
              <i className="devicon-github-original"></i>
              <p>GitHub</p>
            </span>
            <span style={{ '--index': 6 }}>
              <i className="devicon-npm-original-wordmark colored"></i>
              <p>npm</p>
            </span>
            <span style={{ '--index': 7 }}>
              <i className="devicon-trello-plain colored"></i>
              <p>Trello</p>
            </span>
            <span style={{ '--index': 8 }}>
              <i><Image height="56" width="56" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg" alt='slack'/></i>
              <p>Slack</p>
            </span>
            <span style={{ '--index': 9 }}>
              <i><Image height="56" width="56" src="https://cdn.simpleicons.org/zoom/2D8CFF" alt='zoom'/></i>
              <p>Zoom</p>
            </span>
            <span style={{ '--index': 10 }}>
              <i><Image height="56" width="56" src="https://cdn.simpleicons.org/microsoftteams/6264A7" alt='teams'/></i>
              <p>Teams</p>
            </span>
            <span style={{ '--index': 11 }}>
              <i><Image height="56" width="56" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt='figma'/></i>
              <p>Figma</p>
            </span>
          </div> 
        </div>
        <div className={ styles.content } id='all'>
          <h3>Todos</h3>
          <hr />
          <div className={ styles.icons_container }>
            <span style={{ '--index': 1 }}>
              <i className="devicon-html5-plain colored"></i>
              <p>Html 5</p> 
            </span>
            <span style={{ '--index': 2 }}>
              <i className="devicon-css3-plain colored"></i>
              <p>Css 3</p> 
            </span>
            <span style={{ '--index': 3 }}>
              <i className="devicon-javascript-plain colored"></i>
              <p>JavaScript</p> 
            </span>
            <span style={{ '--index': 4 }}>
              <i className="devicon-sass-original colored"></i>
              <p>Sass</p> 
            </span>
            <span style={{ '--index': 5 }}>
              <i className="devicon-tailwindcss-plain colored"></i>
              <p>Tailwind css</p> 
            </span>
            <span style={{ '--index': 6 }}>
              <i className="devicon-bootstrap-plain colored"></i>
              <p>Bootstrap</p> 
            </span>
            <span style={{ '--index': 7 }}>
              <i className="devicon-react-original colored"></i>
              <p>React</p> 
            </span>
            <span style={{ '--index': 8 }}>
              <i className="devicon-redux-original colored"></i>
              <p>Redux</p> 
            </span>
            <span style={{ '--index': 9 }}>
              <i className="devicon-nextjs-original"></i>
              <p>Next.js</p> 
            </span>
            <span style={{ '--index': 10 }}>
              <i className="devicon-nodejs-plain colored"></i>
              <p>Node.js</p> 
            </span>
            <span style={{ '--index': 11 }}>
              <i className="devicon-typescript-plain colored"></i>
              <p>TypeScript</p> 
            </span>
            <span style={{ '--index': 12 }}>
              <i className="devicon-express-original"></i>
              <p>Express</p> 
            </span>
            <span style={{ '--index': 13 }}>
            <i><Image height="56" width="56" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" alt='sequelize'/></i>
              <p>Sequelize</p> 
            </span>
            <span style={{ '--index': 14 }}>
              <i><Image height="56" width="56" src="https://cdn.simpleicons.org/prisma/white" alt='prisma'/></i>
              <p>Prisma</p>
            </span>
            <span style={{ '--index': 15 }}>
              <i><Image height="56" width="56" src="https://cdn.simpleicons.org/mongoose/880000" alt='mongoose'/></i>
              <p>Mongoose</p>
            </span>
            <span style={{ '--index': 16 }}>
              <i><Image height="56" width="56" src="https://cdn.simpleicons.org/dotenv/ECD53F" alt='.env'/></i>
              <p>.env</p>
            </span>
            <span style={{ '--index': 17 }}>
              <i><Image height="56" width="56" src="https://cdn.simpleicons.org/jsonwebtokens/magenta" alt='jwt'/></i>
              <p>JWT</p>
            </span>
            <span style={{ '--index': 18 }}>
              <i><Image height="56" width="56" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt='python'/></i>
              <p>Poython</p>
            </span>
            <span style={{ '--index': 19 }}>
              <i className="devicon-django-plain colored"></i>
              <p>Django</p>
            </span>
            <span style={{ '--index': 20 }}>
            <i><Image height="56" width="56" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt='docker'/></i>
              <p>Docker</p>
            </span>
            <span style={{ '--index': 21 }}>
              <i><Image height="56" width="56" src="https://cdn.simpleicons.org/swagger/85EA2D" alt='swagger'/></i>
              <p>Swagger</p>
            </span>
            <span style={{ '--index': 22 }}>
              <i><Image height="56" width="56" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" alt='mysql'/></i>
              <p>MySQL</p>
            </span>
            <span style={{ '--index': 23 }}>
            <i><Image height="56" width="56" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt='mongodb'/></i>
              <p>Mongodb</p>
            </span>
            <span style={{ '--index': 24 }}>
              <i><Image height="56" width="56" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt='postgresql'/></i>
              <p>PostgreSQL</p>
            </span>
            <span style={{ '--index': 25 }}>
              <i><Image height="56" width="56" src="https://cdn.simpleicons.org/cypress/white" alt='cypress'/></i>
              <p>Cypress</p>
            </span>
            <span style={{ '--index': 26 }}>
              <i className="devicon-jest-plain colored"></i>
              <p>Jest</p>
            </span>
            <span style={{ '--index': 27 }}>
              <i><Image height="56" width="56" src="https://cdn.simpleicons.org/testinglibrary/E33332" alt='RTL'/></i>
              <p>React Testing Library</p>
            </span>
            <span style={{ '--index': 28 }}>
              <i className="devicon-mocha-plain colored"></i>
              <p>Mocha</p>
            </span>
            <span style={{ '--index': 29 }}>
              <i><Image height="56" width="56" src="https://cdn.simpleicons.org/chai/A30701" alt='chai'/></i>
              <p>Chai</p>
            </span>
            <span style={{ '--index': 30 }}>
              <i><Image height="56" width="56" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytest/pytest-original.svg" alt='pytest'/></i>
              <p>Pytest</p>
            </span>
            <span style={{ '--index': 31 }}>
              <i className="devicon-git-plain colored"></i>
              <p>Git</p>
            </span>
            <span style={{ '--index': 32 }}>
              <i className="devicon-github-original"></i>
              <p>GitHub</p>
            </span>
            <span style={{ '--index': 33 }}>
              <i><Image height="56" width="56" src="https://cdn.simpleicons.org/githubactions/2088FF" alt='githubactions'/></i>
              <p>GitHub Actions</p>
            </span>
            <span style={{ '--index': 34 }}>
              <i><Image height="56" width="56" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt='linux'/></i>
              <p>Linux</p>
            </span>
            <span style={{ '--index': 35 }}>
              <i className="devicon-bash-plain"></i>
              <p>Bash</p>
            </span>
            <span style={{ '--index': 36 }}>
              <i><Image height="56" width="56" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt='vscode'/></i>
              <p>vscode</p>
            </span>
            <span style={{ '--index': 37 }}>
              <i className="devicon-npm-original-wordmark colored"></i>
              <p>npm</p>
            </span>
            <span style={{ '--index': 38 }}>
              <i className="devicon-trello-plain colored"></i>
              <p>Trello</p>
            </span>
            <span style={{ '--index': 39 }}>
              <i><Image height="56" width="56" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg" alt='slack'/></i>
              <p>Slack</p>
            </span>
            <span style={{ '--index': 40 }}>
              <i><Image height="56" width="56" src="https://cdn.simpleicons.org/zoom/2D8CFF" alt='zoom'/></i>
              <p>Zoom</p>
            </span>
            <span style={{ '--index': 41 }}>
              <i><Image height="56" width="56" src="https://cdn.simpleicons.org/microsoftteams/6264A7" alt='teams'/></i>
              <p>Teams</p>
            </span>
            <span style={{ '--index': 42 }}>
              <i><Image height="56" width="56" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt='figma'/></i>
              <p>Figma</p>
            </span>
          </div>   
        </div>
      </div>
      <NextArrow href={ '#about' }/>
    </section>
  )
}