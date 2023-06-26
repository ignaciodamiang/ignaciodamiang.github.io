import Layout from '../components/Layout';
import MyPresentation from '../components/MyPresentation';
import Link from 'next/link';

import { skills, experiences, projects } from '../profile';

import { useState, useEffect } from 'react';
import Modal from 'react-modal';

const Index = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [skillsModalIsOpen, setSkillsModalIsOpen] = useState(false);

  useEffect(() => {
    Modal.setAppElement('#__next');
  }, []);

  return (
    <Layout>
      {/* Header Card */}
      <header className='row'>
        <div className='col-md-12'>
          <MyPresentation />
        </div>
      </header>

      {/* Second section */}

      <section className='row'>
        {/* Skills section */}
        <div className='col-md-4 py-2'>
          <div className='card bg-light border-success border animate__animated animate__fadeInLeft'>
            <div className='card-body'>
              <h1>Skills</h1>

              {/* Skill Progress */}
              {skills.slice(0, 8).map(({ skill, percentage }, i) => (
                <div className='py-3' key={i}>
                  <h5>{skill}</h5>
                  <div className='progress'>
                    <div
                      className='progress-bar'
                      role='progressbar'
                      style={{ width: `${percentage}%` }}
                      aria-valuenow='50'
                      aria-valuemin='0'
                      aria-valuemax='100'
                    ></div>
                  </div>
                </div>
              ))}
              <button
                className='btn btn-light'
                onClick={() => setSkillsModalIsOpen(true)}
              >
                Show More
              </button>
              <Modal
                isOpen={skillsModalIsOpen}
                onRequestClose={() => setSkillsModalIsOpen(false)}
                style={{
                  content: {
                    width: '66vw',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                  },
                }}
              >
                <h2>All Skills</h2>
                <div className='row p-4'>
                  <div className='col-md-4'>
                    <ul className='list-unstyled'>
                      {skills
                        .slice(0, Math.floor(skills.length / 3))
                        .map(({ skill, percentage }, index) => (
                          <li key={index}>
                            <h3>{skill}</h3>
                            <div className='progress'>
                              <div
                                className='progress-bar'
                                role='progressbar'
                                style={{ width: `${percentage}%` }}
                                aria-valuenow='50'
                                aria-valuemin='0'
                                aria-valuemax='100'
                              ></div>
                            </div>
                          </li>
                        ))}
                    </ul>
                  </div>
                  <div className='col-md-4'>
                    <ul className='list-unstyled'>
                      {skills
                        .slice(
                          Math.floor(skills.length / 3),
                          Math.floor((skills.length * 2) / 3)
                        )
                        .map(({ skill, percentage }, index) => (
                          <li key={index}>
                            <h3>{skill}</h3>
                            <div className='progress'>
                              <div
                                className='progress-bar'
                                role='progressbar'
                                style={{ width: `${percentage}%` }}
                                aria-valuenow='50'
                                aria-valuemin='0'
                                aria-valuemax='100'
                              ></div>
                            </div>
                          </li>
                        ))}
                    </ul>
                  </div>
                  <div className='col-md-4'>
                    <ul className='list-unstyled'>
                      {skills
                        .slice(Math.floor((skills.length * 2) / 3))
                        .map(({ skill, percentage }, index) => (
                          <li key={index}>
                            <h3>{skill}</h3>
                            <div className='progress'>
                              <div
                                className='progress-bar'
                                role='progressbar'
                                style={{ width: `${percentage}%` }}
                                aria-valuenow='50'
                                aria-valuemin='0'
                                aria-valuemax='100'
                              ></div>
                            </div>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
                <button
                  className='btn btn-light'
                  onClick={() => setSkillsModalIsOpen(false)}
                >
                  Close
                </button>
              </Modal>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className='col-md-8 py-2'>
          <div className='card bg-light border-success animate__animated animate__fadeInRight'>
            <div className='card-body'>
              <h1>Experience</h1>

              <ul>
                {/* List Item Experience */}
                {experiences
                  .slice(0, 2)
                  .map(({ title, from, to, description }, index) => (
                    <li key={index}>
                      <h3>{title}</h3>
                      <h5>
                        {from} {to ? `- ${to}` : '- current'}
                      </h5>
                      <p>{description}</p>
                    </li>
                  ))}
              </ul>
              <button
                className='btn btn-light'
                onClick={() => setModalIsOpen(true)}
              >
                Show More
              </button>
              <Modal
                isOpen={modalIsOpen}
                onAfterOpen={() => document.body.classList.add('noScroll')}
                onRequestClose={() => {
                  setModalIsOpen(false);
                  document.body.classList.remove('noScroll');
                }}
                style={{
                  content: {
                    width: '66vw',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                  },
                }}
                contentLabel='My dialog'
              >
                <h2>All Experiences</h2>
                <ul>
                  {experiences.map(
                    ({ title, from, to, description }, index) => (
                      <li key={index}>
                        <h3>{title}</h3>
                        <h5>
                          {from} {to ? `- ${to}` : '- current'}
                        </h5>
                        <p>{description}</p>
                      </li>
                    )
                  )}
                </ul>
                <button
                  className='btn btn-light'
                  onClick={() => {
                    setModalIsOpen(false);
                    document.body.classList.remove('noScroll');
                  }}
                >
                  Close
                </button>
              </Modal>
            </div>
          </div>
        </div>
      </section>

      {/* Porfolio */}
      <section>
        <div className='row'>
          <div className='col-md-12'>
            <div className='card card-body bg-dark'>
              <div className='row'>
                <div className='col-md-12 my-2'>
                  <h1 className='text-center text-light'>Portfolio</h1>
                </div>
                {projects.map(({ name, description, image }, index) => (
                  <div className='col-md-4 p-2' key={index}>
                    <div className='card h-100'>
                      <div className='overflow'>
                        <img
                          src={`/${image}`}
                          alt=''
                          className='card-img-top'
                        />
                      </div>
                      <div className='card-body'>
                        <h3>{name}</h3>
                        <p>{description}</p>
                        <a href='#!'>Know More</a>
                      </div>
                    </div>
                  </div>
                ))}

                <div className='col-md-12 mt-4'>
                  <div className='text-center'>
                    <Link href='/portfolio'>
                      <a className='btn btn-outline-light'>More Projects</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
