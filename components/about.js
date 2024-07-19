
import React, { useState, useEffect } from 'react';
import './styles/about.css';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile, faTasks, faHeadphones, faUsers } from '@fortawesome/free-solid-svg-icons';
function About() {
  const [happyClients, setHappyClients] = useState(0);
  const [projects, setProjects] = useState(0);
  const [hoursOfSupport, setHoursOfSupport] = useState(0);
  const [hardWorkers, setHardWorkers] = useState(0);

  const startCounting = () => {
    const counts = [232, 233, 1406, 47]; 
    const intervals = counts.map((targetValue, index) => {
      let currentValue = 0;
      return setInterval(() => {
        if (currentValue < targetValue) {
          switch (index) {
            case 0:
              setHappyClients((prevCount) => prevCount + 1);
              break;
            case 1:
              setProjects((prevCount) => prevCount + 1);
              break;
            case 2:
              setHoursOfSupport((prevCount) => prevCount + 1);
              break;
            case 3:
              setHardWorkers((prevCount) => prevCount + 1);
              break;
            default:
              break;
          }
          currentValue++;
        } else {
          clearInterval(intervals[index]);
        }
      }, 10);
    });

    
    setTimeout(() => {
      intervals.forEach((interval) => clearInterval(interval));
    }, 10000); 
  };

  useEffect(() => {
    startCounting();
    
    return () => {
      setHappyClients(0);
      setProjects(0);
      setHoursOfSupport(0);
      setHardWorkers(0);
    };
  }, []);

  const teamMembers = [
    { name: 'James Cole', role: 'Architect', certification: '(D. Arch.)', image: 'https://img.freepik.com/free-photo/natural-masculinity-is-him_329181-3691.jpg?ga=GA1.1.648658519.1720816939&semt=ais_user' },
    { name: 'Jane Smith', role: 'Interior Designer', certification: 'NCIDQ', image: 'https://img.freepik.com/free-photo/hot-young-lady-put-her-leg-white-box-looking-camera-high-quality-photo_144627-75744.jpg?ga=GA1.1.648658519.1720816939&semt=ais_user' },
    { name: 'Bob Johnson', role: 'Project Manager', certification: 'PMP', image: 'https://img.freepik.com/free-photo/african-american-man-wearing-stylish-hat_23-2148634061.jpg?ga=GA1.1.648658519.1720816939&semt=ais_user' },
    { name: 'Alice Brown', role: 'Urban Planner', certification: 'Bsc', image: 'https://img.freepik.com/free-photo/close-up-portrait-beautiful-teenager_23-2149153361.jpg?ga=GA1.1.648658519.1720816939&semt=ais_user' },
    { name: 'Michael Davis', role: 'BIM Specialist', certification: 'CM-BIM', image: 'https://img.freepik.com/free-photo/man-posing-with-trucker-hat-side-view_23-2149410267.jpg?ga=GA1.1.648658519.1720816939&semt=ais_user' },
    { name: 'Emily Wilson', role: 'Sustainability Consultant', certification: 'LEED GA', image: 'https://img.freepik.com/free-photo/charming-adult-lady-with-lilac-wavy-short-hair-round-earrings-white-shirt-isolated-pink_197531-19239.jpg?ga=GA1.1.648658519.1720816939&semt=ais_user' },
  ];

  return (
    <div className='about'>
      <div className="about-container">
        <div className="about-content">
          <h1>About Us</h1>
        </div>
      </div>
      <div className="info-container">
        <div className="info-box">
          <h1>About Us</h1>
          <h2>Our story</h2>
          <h3>Est. 2002</h3>
          <p>
            Our history of Architek is rooted in a commitment to innovation and excellence.
            Since our establishment in 2002, we have been at the forefront of architectural
            design, creating iconic structures that blend aesthetics and functionality.
            Our journey has been marked by a relentless pursuit of quality and a passion
            for transforming visions into reality.
          </p>
        </div>
        <div className="image-box">
          <img src="https://img.freepik.com/free-photo/labor-union-members-working-together_23-2150995046.jpg?ga=GA1.1.648658519.1720816939&semt=ais_user" alt="Architek History" />
        </div>
      </div>
      <div className='stats'>
        <header>Stats</header>
        <div className='stats-container'>
          <div className='stats-item'>
            <FontAwesomeIcon icon={faSmile} className='stat-icon'  />
            <div className='count'>{happyClients}</div>
            <div className='label'>Happy Clients</div>
          </div>
          <div className='stats-item'>
            <FontAwesomeIcon icon={faTasks} className='stat-icon' />
            <div className='count'>{projects}</div>
            <div className='label'>Projects</div>
          </div>
          <div className='stats-item'>
            <FontAwesomeIcon icon={faHeadphones} className='stat-icon' />
            <div className='count'>{hoursOfSupport}</div>
            <div className='label'>Hours of Support</div>
          </div>
          <div className='stats-item'>
            <FontAwesomeIcon icon={faUsers} className='stat-icon' />
            <div className='count'>{hardWorkers}</div>
            <div className='label'>Hard Workers</div>
          </div>
        </div>
      </div>
      <div className="team-section">
      <h1>Team</h1>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.image} alt={`${member.name}`} className="team-image" />
            <h2>{member.name}</h2>
            <h4>{member.role}</h4>
            <p>{member.certification}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default About;

