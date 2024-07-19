import React from 'react';
import './styles/services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faCouch, faTasks, faCity, faCube, faLeaf,faCheckCircle, faClipboardList, faTools, faCheck } from '@fortawesome/free-solid-svg-icons';

function Services() {
  return (
    <div className='service'>
    <div className="service-container">
      <div className="service-content">
        <h1>Services</h1>
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
<div className="plans-container">
      <h1>Our Plans</h1>
      <div className="plans">
        <div className="plan">
          <h2>Regular</h2>
          <FontAwesomeIcon icon={faCheckCircle} className="plan-icon" />
          <ul>
            <li>Basic Support</li>
            <li>Access to standard features</li>
            <li>Community access</li>
          </ul>
          <div className="price">$3000/Year</div>
        </div>
        <div className="plan">
          <h2>Gold</h2>
          <FontAwesomeIcon icon={faCheckCircle} className="plan-icon" />
          <ul>
            <li>Priority Support</li>
            <li>Access to all features</li>
            <li>Community access</li>
            <li>Monthly webinars</li>
          </ul>
          <div className="price">$4500/year</div>
        </div>
        <div className="plan">
          <h2>Platinum</h2>
          <FontAwesomeIcon icon={faCheckCircle} className="plan-icon" />
          <ul>
            <li>24/7 Support</li>
            <li>Access to premium features</li>
            <li>Community access</li>
            <li>Monthly webinars</li>
            <li>1-on-1 consultations</li>
          </ul>
          <div className="price">$6500/year</div>
        </div>
      </div>
    </div>
    <div className="how-we-work">
      <h2>How We Work</h2>
      <div className="steps">
        <div className="step">
          <FontAwesomeIcon icon={faClipboardList} className="icon" />
          <h3>Receive Job</h3>
          <p>We start by receiving your job request.</p>
        </div>
        <div className="step">
          <FontAwesomeIcon icon={faTasks} className="icon" />
          <h3>Plan & Organize</h3>
          <p>We carefully plan and organize the project requirements.</p>
        </div>
        <div className="step">
          <FontAwesomeIcon icon={faTools} className="icon" />
          <h3>Execute Tasks</h3>
          <p>We execute tasks according to the planned schedule.</p>
        </div>
        <div className="step">
          <FontAwesomeIcon icon={faCheck} className="icon" />
          <h3>Quality Check</h3>
          <p>Each task undergoes rigorous quality checks.</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Services;
