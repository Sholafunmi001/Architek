import React, { useState } from 'react';
import './styles/home.css';
import Footer from './footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faCouch, faTasks, faCity, faCube, faLeaf } from '@fortawesome/free-solid-svg-icons';
import image1 from '../images/image1.jpeg'
import image2 from '../images/image2.jpeg';
import image3 from '../images/image3.jpeg';
import image4 from '../images/image4.jpeg';
import image5 from '../images/image5.jpeg';
import image6 from '../images/image6.jpeg';
import image7 from '../images/image7.jpeg';
import image8 from '../images/image8.jpeg';
import image9 from '../images/image9.jpeg';
import image10 from '../images/image10.jpeg';
import image11 from '../images/image11.jpeg';
import image12 from '../images/image12.jpeg';
import picture1 from '../images/picture1.avif';
import picture2 from '../images/picture2.avif';
import picture3 from '../images/picture3.avif';
import picture4 from '../images/picture4.avif';


function Home() {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
  ];
  const picture =[
    picture1,
    picture2,
    picture3,
    picture4
  ]
  const testimonials = [
    {
      picture: picture1,
      name: 'David Breacher',
      review: 'Exceptional attention to detail and design precision. Our new office space reflects both elegance and functionality. Highly recommend',
    },
    {
      picture: picture2,
      name: 'Mary Smoak',
      review: 'Impressed by their innovative approach to sustainable architecture. They transformed our vision into a green, modern masterpiece.',
    },
    {
      picture: picture3,
      name: 'Barry Dibny',
      review: 'Professionalism at its best! From concept to completion, they delivered on time and within budget. We are very happy with our new home.',
    },
    {
      picture: picture4,
      name: 'Iris Ramon',
      review: 'Outstanding customer service and creativity. They created a space that perfectly captures my brand ethos. Truly exceeded expectations',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  

  return (
    <div className='main'>
    <div className="home">
      <div className="welcome-message">
        <h1>Welcome to Architek</h1>
        <p>Welcome to Architek, where innovative architecture <br/> meets stunning design.Explore our portfolio to see how we transform visions into reality!</p>
        <button className="btn">Get Started</button>
      </div>
    </div>
    <div className='home-service'>
      <div className='home-service-arc' >
        <h1>Architek ?</h1>
        <p>Architek was founded in 2002 by David Gates with a vision to integrate traditional<br/> architectural principles with modern technology. Early challenges were overcome<br/> through innovative projects like the acclaimed Green Tower in 2005. The firm expanded<br/> internationally in 2010, embracing tools like BIM and virtual reality to enhance<br/> design processes. David Gates' leadership fostered a culture of continuous learning<br/> and collaboration, nurturing young talent. Today, Architek is renowned for its<br/> sustainable and creative designs, remaining a leader in architectural innovation<br/> while staying true to its core values of innovation, sustainability, and precision. <img className='billion' src='https://img.freepik.com/free-photo/modern-architect-front-building_23-2147702104.jpg?ga=GA1.1.396312734.1721154201&semt=ais_user'></img></p>
      </div>
      <div className='home-service-form'>
      <h3>Want to know more about us ?</h3>
      <h5>Get a qoute</h5>
        <form>

<input type='name' placeholder='Name'></input>
<input type='email' placeholder='Email'></input>
<input type='number' placeholder='Phone'></input>
<textarea placeholder='Message'></textarea>
<button>Get a Qoute</button>
        </form>
      </div>
    </div>
    <div class="services-container">
  <h2 class="services-heading">Services</h2>
    <div class="services-row">
  <div class="service-item">
    <FontAwesomeIcon icon={faPencilAlt} className='service-icon' />
    <h3>Architectural Design</h3>
    <p>Creating innovative and functional building designs that meet client needs while adhering to building codes and regulations.</p>
  </div>
  <div class="service-item">
    <FontAwesomeIcon icon={faCouch} className='service-icon' />
    <h3>Interior Design</h3>
    <p>Designing interior spaces to enhance functionality, aesthetics, and user experience within buildings.</p>
  </div>
  <div class="service-item">
    <FontAwesomeIcon icon={faTasks} className='service-icon' />
    <h3>Project Management</h3>
    <p>Overseeing and coordinating all aspects of a construction project, ensuring it stays on schedule, within budget, and meets quality standards.</p>
  </div>
</div>
<div class="services-row">
  <div class="service-item">
    <FontAwesomeIcon icon={faCity} className='service-icon' />
    <h3>Urban Planning</h3>
    <p>Developing sustainable plans and designs for cities, neighborhoods, and communities to optimize land use and infrastructure.</p>
  </div>
  <div class="service-item">
    <FontAwesomeIcon icon={faCube} className='service-icon'/>
    <h3>Building Information Modeling (BIM)</h3>
    <p>Using digital models to simulate and manage the entire building lifecycle, from design and construction to maintenance and renovation.</p>
  </div>
  <div class="service-item">
    <FontAwesomeIcon icon={faLeaf} className='service-icon' />
    <h3>Sustainability Consulting</h3>
    <p>Integrating environmentally sustainable practices and technologies into architectural projects to reduce carbon footprint and enhance energy efficiency.</p>
  </div>
</div>
</div>
<div className='projects-container'>
        <h1>Projects</h1>
        <div className='projects-grid'>
          {images.map((image, index) => (
            <div key={index} className='project-item'>
              <img src={image} alt={`Project ${index + 1}`} />
              <div className='view-overlay'>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='testimony'>
        <h1>Testimonials</h1>
        <div className='testimonial-slides'>
          {testimonials.slice(currentSlide * 2, currentSlide * 2 + 2).map((testimonial, index) => (
            <div key={index} className='testimonial-item'>
              <img src={testimonial.picture} alt={testimonial.name} className='testimonial-image' />
              <h3>{testimonial.name}</h3>
              <p>{testimonial.review}</p>
            </div>
          ))}
        </div>
        <div className='testimonial-dots'>
          {[...Array(Math.ceil(testimonials.length / 2)).keys()].map((dot, index) => (
            <span
              key={index}
              className={`dot ${currentSlide === index ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Home;
