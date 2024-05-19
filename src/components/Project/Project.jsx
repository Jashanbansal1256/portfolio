import React from 'react'
import './Project.css'
import IMG1 from '../../assets/f1.jpeg'
import IMG2 from '../../assets/f2.jpeg'
import IMG3 from '../../assets/f3.jpeg'
import IMG4 from '../../assets/f4.jpeg'
// import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/f6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Food recepiece',
    github: 'https://github.com/Jashanbansal1256/food-recepie',
    demo: 'https://cdn.dribbble.com/userupload/2848058/file/original-8b023f833615b8e51893b1f0e3d3c3dd.png?compress=1&crop=0x0-3479x2609&resize=320x240&vertical=top'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Search github profile',
    github: 'https://github.com/Jashanbansal1256/search-github-profile',
    demo: 'https://bansalsearchgit.netlify.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Weather',
    github: 'https://github.com/Jashanbansal1256/weather-test',
    demo: 'https://cdn.dribbble.com/userupload/2848058/file/original-8b023f833615b8e51893b1f0e3d3c3dd.png?compress=1&crop=0x0-3479x2609&resize=320x240&vertical=top'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Todo',
    github: 'https://github.com/Jashanbansal1256/todo-react',
    demo: 'https://cdn.dribbble.com/userupload/2848058/file/original-8b023f833615b8e51893b1f0e3d3c3dd.png?compress=1&crop=0x0-3479x2609&resize=320x240&vertical=top'
  },
  // {
  //   id: 5,
  //   image: IMG5,
  //   title: ' Clone',
  //   github: 'https://github.com/Jashanbansal1256/portfolio',
  //   demo: 'https://cdn.dribbble.com/userupload/2848058/file/original-8b023f833615b8e51893b1f0e3d3c3dd.png?compress=1&crop=0x0-3479x2609&resize=320x240&vertical=top'
  // },
  {
    id: 6,
    image: IMG6,
    title: 'Portfolio Website',
    github: 'https://github.com/Jashanbansal1256/portfolio',
    demo: 'https://cdn.dribbble.com/userupload/2848058/file/original-8b023f833615b8e51893b1f0e3d3c3dd.png?compress=1&crop=0x0-3479x2609&resize=320x240&vertical=top'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">{
        data.map(({id, image, title, github, demo}) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} className='portfolio__item-image'/>
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target="_blank"  rel="noopener noreferrer">
                  Github</a>
                <a href={demo} className="btn btn-primary" target="_blank"  rel="noopener noreferrer">Live Demo</a>
              </div>
            </article>
          )
        })
      }
      </div>
    </section>
  )
}

export default Portfolio