import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Navbar from "../components/Navbar";
import Grid from "@mui/material/Grid";
import { ConfigFile } from "../service/ConfigFile";
import { Button } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import MemoryIcon from "@mui/icons-material/Memory";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";
import MailIcon from "@mui/icons-material/Mail";
import TelegramIcon from "@mui/icons-material/Telegram";
import DownloadIcon from "@mui/icons-material/Download";

const HeroSection = () => {
  const [sliderRef, setSliderRef] = useState(null);

  const sliderSettings = {
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
  };
  const skills = [
    {
      id: 1,
      skill: "Html",
    },
    {
      id: 2,
      skill: "CSS Modules",
    },
    {
      id: 3,
      skill: "Bootstrap",
    },
    {
      id: 4,
      skill: "React Js (Create React App,Router,Props,Component,State,JSX)",
    },
    {
      id: 5,
      skill: "React Native",
    },
    {
      id: 6,
      skill: "Responsive Design",
    },
    {
      id: 7,
      skill: "Deployment",
    },
  ];
  const projects = [
    {
      id: 1,
      image: "./Capture.JPG",
      subtitle: "Software and Web Application site",
      title: "ghgyyyyyyyyyy",
      description: "wwwwwwwwwwwwww",
      link: "https://pythonbootcamp.com",
    },
    {
      id: 2,
      image: "./Capture2.JPG",
      subtitle: "ppppppppppp",
      title: "uuuuuuuuuuuu",
      description: "ooooooooooooo",
      link: "https://pythonbootcamp.com",
    },
    {
      id: 3,
      image: "./bikash.jpg",
      subtitle: "ppppppppppp",
      title: "uuuuuuuuuuuu",
      description: "ooooooooooooo",
      link: "https://pythonbootcamp.com",
    },
    {
      id: 4,
      image: "./bikash.jpg",
      subtitle: "ppppppppppp",
      title: "uuuuuuuuuuuu",
      description: "ooooooooooooo",
      link: "https://pythonbootcamp.com",
    },
  ];

  const hotelCards = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1559508551-44bff1de756b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
      title: "Studio Room",
      description: "Lorem ipsum dolor sit amet, consectur dolori",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1616940844649-535215ae4eb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      title: "Deluxe Room",
      description: "Lorem ipsum dolor sit amet, consectur dolori",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1599619351208-3e6c839d6828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
      title: "King Deluxe Room",
      description: "Lorem ipsum dolor sit amet, consectur dolori",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1461092746677-7b4afb1178f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      title: "Royal Suite",
      description: "Lorem ipsum dolor sit amet, consectur dolori",
    },
  ];

  return (
    <div className='main_container'>
      <Navbar />
      <div className='hero_container'>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <div className='hero_section'>
              <h1>
                Hello ! I am
                <br />
                Swati Paul
              </h1>
              <p> I Am A Frontend Developer</p>
              <a
                // href='./Updated_CV.pdf'
                download
                style={{ color: "inherit", textDecoration: "inherit" }}>
                <Button>
                  Get Resume
                  <DownloadIcon />
                </Button>
              </a>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className='profile_img'>
              <div style={{ position: "relative" }}>
                <img
                  src='./bikash.png'
                  alt='profile_img'
                  style={{ width: "50%" }}
                />
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      {/* ABOUT */}
      <div className='about_container'>
        <div className='about_section'>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}></Grid>
            <Grid item xs={12} sm={6}>
              <div className='about_content'>
                <h3>ABOUT ME</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>

      {/* SKILLS */}
      <div className='skill_sectioner'>
        <section id='skills' className='skill_section'>
          <div className='container px-5 py-10 mx-auto'>
            <div className='text-center mb-20'>
              <h2 className='sm:text-4xl text-3xl font-medium title-font text-white mb-4'>
                Skills &amp; Technologies
                {/* SKILLS &amp; TECHNOLOGIES */}
              </h2>
              <p className='text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
                sit ipsa delectus eum quo voluptas aspernatur accusantium
                distinctio possimus est.
              </p>
            </div>
            <div className='skill_grid'>
              <Grid container spacing={2} style={{ marginTop: "2rem" }}>
                {skills.map((item, index) => (
                  <Grid key={index} item xs={12} sm={6}>
                    <div className='p-2 sm:w-1/2 w-full skill_set'>
                      <div
                        className='bg-gray-800 rounded flex p-4 h-full items-center'
                        style={{ textAlign: "left" }}>
                        <VerifiedIcon
                          className='text-green-400 w-6 h-6 flex-shrink-0 mr-4'
                          style={{
                            color: "aquamarine",
                            padding: "0px 10px",
                            verticalAlign: "top",
                          }}
                        />
                        <span
                          className='title-font font-medium'
                          style={{ color: "white" }}>
                          {item.skill}
                        </span>
                      </div>
                    </div>
                  </Grid>
                ))}
              </Grid>
            </div>
          </div>
        </section>
      </div>

      {/* PROJECT */}
      <div className='project_section'>
        <section id='projects' className='text-gray-400 bg-gray-900 body-font'>
          <div className='container px-5 py-10 mx-auto text-center lg:px-40'>
            <div className='flex flex-col w-full mb-20'>
              {/* <CodeIcon className='mx-auto inline-block w-10 mb-4' /> */}
              <h2 className='sm:text-4xl text-3xl font-medium title-font mb-4 text-white'>
                Apps I've Built
              </h2>
              <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Explicabo facilis repellat ab cupiditate alias vero aliquid
                obcaecati quisquam fuga dolore.
              </p>
            </div>
            <div className=' '>
              <Grid
                container
                spacing={2}
                style={{ marginTop: "2rem", marginBottom: "2rem" }}>
                {projects.map((item, index) => (
                  <Grid key={index} item xs={12} sm={4}>
                    <a
                      // href={project.link}
                      // key={project.image}
                      className=''
                      key={index}>
                      <div className='flex relative'>
                        <img
                          alt='gallery'
                          className=''
                          src={item.image}
                          style={{ width: "57%" }}
                        />
                        <div className=''>
                          <h6>{item.subtitle}</h6>
                          <p
                            className='leading-relaxed'
                            style={{ color: "white" }}>
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </a>
                  </Grid>
                ))}
              </Grid>
            </div>
          </div>
        </section>
      </div>
      {/* TESTIMONIALS */}
      <div className='testimonial_section'>
        <section id='skills' className='skill_section'>
          <div>
            <h2 style={{ margin: "1rem 0rem" }}>Testimonials </h2>
            <div className='content'>
              <Slider {...sliderSettings} ref={setSliderRef}>
                {hotelCards.map((card, index) => (
                  <div className='cart' key={index}>
                    <img
                      alt={card.title}
                      src={card.imageSrc}
                      width='100'
                      height='100'
                    />
                    <h6>{card.title}</h6>
                    <p>{card.description}</p>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </section>
      </div>
      {/* CONTACT */}
      <div className='contact_section'>
        <div className='contact_container'>
          <section id='contact' className='relative'>
            <div>
              <h6 style={{ margin: "1rem 0rem" }}>Contact Me </h6>
              <Grid container spacing={2} style={{ marginTop: "2rem" }}>
                <Grid item xs={12} sm={6}>
                  <div>
                    <a
                      target='_blank'
                      rel='noopener noreferrer'
                      style={{ color: "inherit", textDecoration: "inherit" }}
                      // href='https://www.linkedin.com/in/swati-paul-2760701bb/'
                      className='contact_link'>
                      <LinkedInIcon />
                      <h6>LinkedIn</h6>
                    </a>
                    <a
                      target='_blank'
                      rel='noopener noreferrer'
                      className='contact_link'
                      style={{ color: "inherit", textDecoration: "inherit" }}
                      // href=''
                    >
                      <MailIcon />
                      <h6>Email</h6>
                    </a>
                    <a
                      target='_blank'
                      rel='noopener noreferrer'
                      className='contact_link'
                      style={{ color: "inherit", textDecoration: "inherit" }}
                      // href='#'
                    >
                      <TelegramIcon />
                      <h6>Telegram</h6>
                    </a>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <form netlify name='contact' className='contact_form'>
                    <h2>Hire Me</h2>
                    <p className='leading-relaxed mb-5'>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Illum suscipit officia aspernatur veritatis. Asperiores,
                      aliquid?
                    </p>
                    <div className='form_input'>
                      <div>
                        <label htmlFor='name'>Name</label>
                        <input type='text' id='name' name='name' />
                      </div>
                      <div>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' name='email' />
                      </div>
                      <div>
                        <label htmlFor='message'>Message</label>
                        <textarea id='message' name='message' />
                      </div>
                      <button
                        type='submit'
                        className='text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
                        Submit
                      </button>
                    </div>
                  </form>
                </Grid>
              </Grid>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
