import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Navbar from "../components/Navbar";
import Grid from "@mui/material/Grid";
import { ConfigFile } from "../service/ConfigFile";
import { Button } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import MemoryIcon from "@mui/icons-material/Memory";
import Slider from "react-slick";

const HeroSection = () => {
  const skills = [
    {
      id: 1,
      skill: "Html",
    },
    {
      id: 2,
      skill: "Css",
    },
    {
      id: 3,
      skill: "Bootstrap",
    },
    {
      id: 4,
      skill: "React Js",
    },
    {
      id: 5,
      skill: "React Native",
    },
  ];
  const projects = [
    {
      id: 1,
      image: "./bikash.jpg",
      subtitle: "hghgh",
      title: "ghgyyyyyyyyyy",
      description: "wwwwwwwwwwwwww",
      link: "https://pythonbootcamp.com",
    },
    {
      id: 2,
      image: "./bikash.jpg",
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

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    // centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const testimonial = [
    {
      id: 1,
      image: "./bikash.jpg",
      quote: "hgggggggggggggggggggggggggggggggg",
      name: "fsssssssssss",
    },
    {
      id: 2,
      image: "./bikash.jpg",
      quote: "hgggggggggggggggggggggggggggggggg",
      name: "fsssssssssss",
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
              <Button>Get Resume</Button>
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
      <div>
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
                          style={{ color: "aquamarine", padding: "0px 10px" }}
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
      <div>
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
                          style={{ width: "50%" }}
                        />
                        <div className=''>
                          <h2 className='tracking-widest text-sm title-font font-medium text-green-400 mb-1'>
                            {item.subtitle}
                          </h2>
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
          <div className='container px-5 py-10 mx-auto'>
            <div className='text-center mb-20'>
              <h2 className='sm:text-4xl text-3xl font-medium title-font text-white mb-4'>
                Testimonials
                <Slider {...settings}>
                  {/* <div><img src={ConfigFile.BaseUrl+filteredName} alt="" /> </div> */}

                  {testimonial.map((item, index) => (
                    <div>
                      <p className='leading-relaxed mb-6'>{item.quote}</p>
                      <div className='inline-flex items-center'>
                        <img
                          alt='testimonial'
                          src={item.image}
                          style={{ width: "10%" }}
                          className='w-12 rounded-full flex-shrink-0 object-cover object-center'
                        />
                        <span className='flex-grow flex flex-col pl-4'>
                          <span className='title-font font-medium text-white'>
                            {item.name}
                          </span>
                        </span>
                      </div>
                    </div>
                  ))}
                </Slider>
              </h2>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default HeroSection;
