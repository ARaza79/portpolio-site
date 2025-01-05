import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { RotatingLines } from 'react-loader-spinner'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  const [isMobile, setIsMobile] = useState(false);

  const [showProgress, setShowProgress] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set showProgress to true if the user has scrolled down, otherwise set it to false
      setShowProgress(window.scrollY > 0);
    };

    // Add event listener for the scroll event
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Optional: smooth scrolling animation
    });
  };

  const form = useRef();
  const [formErrors, setFormErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const errors = {};

    formData.forEach((value, key) => {
      if (!value.trim()) {
        errors[key] = 'This field is required';
      }
    });

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      // Show loader
      setSubmitting(true);

      emailjs.sendForm('service_uh09573', 'template_0bf4gse', e.target, '5qRWx741Y3uqM8VqQ')
        .then((result) => {
          console.log(result.text);
          setSuccessMessage(true);
        })
        .catch((error) => {
          console.log(error.text);
        })
        .finally(() => {
          // Hide loader whether success or error
          setSubmitting(false);
        });
    }

  };

  useEffect(() => {
    const handleResize = () => {
      // Update state based on window width
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    // Initial check on mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false, // Disable arrows
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Set autoplay speed in milliseconds (adjust as needed)
    responsive: [
      {
        breakpoint: 768, // Adjust breakpoint as needed
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // Adjust breakpoint as needed
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200, // Adjust breakpoint as needed
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>


      <nav class="main_menu_2">
        <span class="menu_2_icon">
          <i class="fa-light fa-bars bar_icon-staggered bar_icon"></i>
          <i class="fa-light fa-xmark close_icon"></i>
        </span>

        <a class="logo_2" href="index_2.html">
          <h6>Ahmad Raza </h6>
          {/* <img src="images/logo2.png" alt="ZAYAN" class="img-fluid w-100"/> */}
        </a>

        <ul id="list-example" class="list-group">
          <li>
            <a class="list-group-item list-group-item-action text_hover_animaiton" href="#banner">
              <span
              ><img
                  src="svg/home-2.svg"
                  alt="icon"
                  class="img-fluid w-100 svg" /></span
              >Home
            </a>
          </li>
          <li>
            <a class="list-group-item list-group-item-action text_hover_animaiton" href="#about">
              <span
              ><img
                  src="svg/clipboard.svg"
                  alt="icon"
                  class="img-fluid w-100 svg" /></span
              >About Me
            </a>
          </li>
          <li>
            <a class="list-group-item list-group-item-action text_hover_animaiton" href="#service">
              <span
              ><img
                  src="svg/briefcase.svg"
                  alt="icon"
                  class="img-fluid w-100 svg" /></span>
              Service
            </a>
          </li>
          <li>
            <a class="list-group-item list-group-item-action text_hover_animaiton" href="#skills">
              <span
              ><img src="svg/path.svg" alt="icon" class="img-fluid w-100 svg" /></span>
              skills
            </a>
          </li>
          <li>
            <a class="list-group-item list-group-item-action text_hover_animaiton" href="#portfolio">
              <span
              ><img
                  src="svg/messages-1.svg"
                  alt="icon"
                  class="img-fluid w-100 svg" /></span>
              portfolio
            </a>
          </li>

          <li>
            <a class="list-group-item list-group-item-action text_hover_animaiton" href="#contact">
              <span
              ><img
                  src="svg/user-square.svg"
                  alt="icon"
                  class="img-fluid w-100 svg" /></span>
              Contact
            </a>
          </li>
        </ul>
      </nav>


      <div class="main">
        <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="0">

          <section id="banner" class="tf__banner_2 banner"
            style={{
              background: isMobile ? 'none' : 'url(images/bg/bg-profile.png) no-repeat center center / cover',
            }}

          >
            <div class="container">
              <div class="row justify-content-between">
                <div class="col-md-6">
                  <div class="tf__banner_text">
                    <h1>
                      Hi, I'm Ahmad! Professional in&nbsp;
                      <span class="cd-headline rotate-1">
                        <span class="cd-words-wrapper">
                          <b class="is-visible">Amazon</b>
                          <b>Angular Developer</b>
                          <b>Mobile App Developer</b>
                          <b>React Developer</b>
                          <b>NestJs Developer</b>
                          <b>MEAN Developer</b>
                          <b>MERN Developer</b>
                 
                        </span>
                      </span>
                    </h1>
                    <p>
                    Full-Stack Developer specializing in Angular, React, and MEAN/MERN stack. Skilled in building scalable applications, API integration, and backend development with Node.js, .NET, and PostgreSQL. Experienced in e-commerce, LMS systems, and real-time chat solutions.
                    </p>
                    <ul>
                      <li>
                        <a class="common_btn" href="#contact">Contact Me
                          {/* <i class="fa-solid fa-arrow-down-to-line"></i
                      > */}
                        </a>
                      </li>
                      {/* <li>
                                        <a class="banner_video_btn play_btn" href="https://www.youtube.com/watch?v=B-ytMSuwbf8"><i class="fa-sharp fa-solid fa-circle-play"></i> Watch
                        the Video</a
                      >
                    </li> */}
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">

                </div>
              </div>
            </div>
          </section>

          <section id="about" class="tf__about_2 pt_130 xs_pt_80">
            <div class="container">
              <div class="row">
                <div class="col-xl-12 col-lg-12">
                  <div class="tf__section_heading mb_40">
                    <h5 class="has-animation">ABOUT Me</h5>
                    {/* <h2 class="has-animation mb-4">E-commerce Developer & Digital Marketing Specialist</h2> */}
                    <p>With over 4 years of experience as a Full-Stack Developer, I specialize in Angular, React, and the MEAN/MERN stack. I have successfully built dynamic web and mobile applications, focusing on e-commerce platforms, LMS systems, and real-time chat solutions.</p>
                    <p>Alongside my development expertise, I am skilled in backend technologies like Node.js, .NET, and PostgreSQL. Additionally, I bring creativity to the table with my proficiency in content writing and social media marketing, ensuring well-rounded and impactful solutions.</p>

                  </div>
                  
                </div>
              </div>
              {/* <div class="row">
                <div class="col-xl-12 col-lg-12">
                  <div class="tf__section_heading mb_40">
                    <h2 class="has-animation mb-4">Speed Optimized Specialist</h2>
                    <p>Optimizing the speed and performance of a Shopify store is essential for providing a seamless and efficient online shopping experience. Start by choosing a lightweight and well-optimized theme that prioritizes speed and clean code. Optimize images by compressing them and specifying dimensions to reduce file sizes without compromising quality. It's also crucial to minimize the number of installed apps and scripts, as each one can add additional code and requests that can slow down your store. Implement lazy loading for images and videos to defer loading non-essential resources until they're needed, which can significantly improve initial page load times.</p>
                    <p>To further enhance performance, optimize CSS and JavaScript by minifying files and combining them to reduce the number of HTTP requests. Utilize browser caching to store static resources locally on visitors' devices, reducing the need for repeated downloads. Integrating a Content Delivery Network (CDN) can also speed up content delivery by serving resources from servers closer to your visitors. Regularly monitor your store's performance using tools like Google PageSpeed Insights or GTmetrix to identify areas for improvement and ensure ongoing optimization. By implementing these strategies and staying proactive in managing your Shopify store's performance, you can create a fast, responsive, and enjoyable shopping experience for your customers, leading to improved user satisfaction and increased conversions.</p>
                  </div>
                  
                </div>
              </div> */}
              <div class="row justify-content-between">
                <div class="col-xl-6 col-lg-6">
                  <div class="tf__about_text_2">
                    <ul>
                      <li>
                        {/* <div class="top fade_bottom" data-trigerId="about">
                          <div class="img">
                            <img
                              src="images/icon/about_1.png"
                              alt="about"
                              class="img-fluid w-100" />
                          </div>
                          <div>
                            <h3>My Ambition</h3>
                            <p>

                              Fulfilling ambitions to excel as a versatile developer, mastering cutting-edge technologies. Aspiring to craft impactful digital solutions, blend creativity with innovation, and contribute meaningfully to the tech landscape. Striving for continuous learning, collaborative projects, and a lasting impact on the ever-evolving world of technology.
                            </p>
                          </div>
                        </div> */}
                      </li>
                      <li>
                        <div class="top fade_bottom" data-trigerId="about">
                          <div class="img">
                            <img
                              src="images/icon/about_2.png"
                              alt="about"
                              class="img-fluid w-100" />
                          </div>
                          <div>
                            <h3>My Purpose</h3>
                            <p>My purpose is to build impactful digital solutions that simplify lives and drive innovation. By leveraging my expertise in full-stack development, I aim to create applications that enhance user experiences and address real-world challenges. Dedicated to continuous learning and collaboration, I strive to make meaningful contributions to the ever-evolving digital landscape.</p>

                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-xl-6 col-lg-6">
                  <div class="tf__about_img tf__about_img_2">
                    {/* <img
                      src="images/umardaraz.png"
                      alt=""
                      class="img-fluid w-100" /> */}
                    <div class="tf__about_img_text">
                      <i class="fa-sharp fa-solid fa-award"></i>
                      <h4>4+ <span>Years Of Experience</span></h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>



          <section id="service" class="tf__service_2 pt_130 xs_pt_80 animation">
            <div class="container">
              <div class="row">
                <div class="col-xl-12 col-lg-12 m-auto">
                  <div class="tf__section_heading mb_40">
                    <h5 class="has-animation">MY SERVICES</h5>
                
                    <h2 class="has-animation">
                      "Empowering Businesses with Expert Full-Stack Development Solutions"
                    </h2>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-xl-4 col-md-6 col-lg-4">
                  <div
                    class="tf__single_service_2 fade_left"
                    data-trigerId="service"
                  >
                    <div class="text">
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#000000" d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/></svg>
                   </span>
                      <h3>Frontend Development</h3>
                      <p>
                        I specialize in building modern, responsive, and user-friendly interfaces using Angular, React, and Ionic. From crafting stunning designs to delivering smooth user experiences, I ensure your web and mobile applications look and perform flawlessly.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-md-6 col-lg-4">
                  <div class="tf__single_service_2 fade_left active" data-trigerId="service">
                    <div class="text">
                      <span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#050505" d="M128 32C92.7 32 64 60.7 64 96l0 256 64 0 0-256 384 0 0 256 64 0 0-256c0-35.3-28.7-64-64-64L128 32zM19.2 384C8.6 384 0 392.6 0 403.2C0 445.6 34.4 480 76.8 480l486.4 0c42.4 0 76.8-34.4 76.8-76.8c0-10.6-8.6-19.2-19.2-19.2L19.2 384z"/></svg>
                      </span>
                      <h3>Backend Development</h3>
                      <p>
                        With expertise in Node.js and NestJS, I develop robust, scalable, and secure backends. Whether it's creating RESTful APIs or managing server-side logic, I ensure seamless functionality for your applications.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-md-6 col-lg-4">
                  <div class="tf__single_service_2 fade_left" data-trigerId="service">
                    <div class="text">
                      <span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#000000" d="M448 80l0 48c0 44.2-100.3 80-224 80S0 172.2 0 128L0 80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6L448 288c0 44.2-100.3 80-224 80S0 332.2 0 288L0 186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6l0 85.9c0 44.2-100.3 80-224 80S0 476.2 0 432l0-85.9z"/></svg>
                      </span>
                      <h3>Database Management</h3>
                      <p>
                        Proficient in PostgreSQL and MongoDB, I design efficient database schemas, optimize queries, and ensure data integrity to support your application's performance and scalability.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
              <div class="col-xl-4 col-md-6 col-lg-4">
                  <div class="tf__single_service_2 fade_left" data-trigerId="service">
                    <div class="text">
                      <span>
                      <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="110px" width="90px" stroke="#000000" stroke-width="2" fill="#000000">
<g>
	<path d="M91.425,157.435c-1.065-2.297-3.366-3.767-5.897-3.767c-0.005,0-0.01,0-0.015,0c-2.537,0.006-4.839,1.487-5.895,3.794   L47.402,227.83c-1.494,3.264-0.06,7.122,3.204,8.616c0.877,0.401,1.797,0.591,2.702,0.591c2.464,0,4.821-1.409,5.914-3.796   l8.08-17.649h36.75l8.193,17.677c1.51,3.257,5.373,4.674,8.631,3.164c3.257-1.51,4.673-5.374,3.164-8.631L91.425,157.435z    M73.254,202.592l12.311-26.888l12.462,26.888H73.254z"/>
	<path d="M166.496,152.865H135.07c-3.59,0-6.5,2.91-6.5,6.5v71.17c0,3.59,2.91,6.5,6.5,6.5c3.59,0,6.5-2.91,6.5-6.5V203.5h24.926   c13.96,0,25.316-11.357,25.316-25.316C191.813,164.223,180.456,152.865,166.496,152.865z M166.496,190.5H141.57v-24.635h24.926   c6.792,0,12.316,5.526,12.316,12.318C178.813,184.975,173.288,190.5,166.496,190.5z"/>
	<path d="M203.313,152.865c-3.59,0-6.5,2.91-6.5,6.5v71.17c0,3.59,2.91,6.5,6.5,6.5s6.5-2.91,6.5-6.5v-71.17   C209.813,155.775,206.902,152.865,203.313,152.865z"/>
	<path d="M368.317,46.487H11.684C5.241,46.487,0,51.73,0,58.173v263.656c0,6.442,5.241,11.684,11.684,11.684h356.634   c6.442,0,11.683-5.242,11.683-11.684V58.173C380,51.73,374.76,46.487,368.317,46.487z M280.949,259.268   c5.162-12.192,17.053-20.07,30.295-20.07c4.411,0,8.721,0.878,12.813,2.61c16.696,7.072,24.529,26.408,17.461,43.105   c-5.167,12.191-17.058,20.068-30.294,20.068c0,0,0,0-0.001,0c-4.411,0-8.721-0.878-12.81-2.611   c-8.089-3.424-14.361-9.793-17.659-17.935C277.455,276.294,277.524,267.356,280.949,259.268z M320.868,79.771   c6.844,0,12.387,5.547,12.387,12.387c0,6.842-5.543,12.387-12.387,12.387c-6.839,0-12.385-5.545-12.385-12.387   C308.483,85.318,314.029,79.771,320.868,79.771z M283.715,79.771c6.839,0,12.386,5.547,12.386,12.387   c0,6.842-5.547,12.387-12.386,12.387c-6.839,0-12.387-5.545-12.387-12.387C271.328,85.318,276.876,79.771,283.715,79.771z    M246.561,79.771c6.839,0,12.381,5.547,12.381,12.387c0,6.842-5.542,12.387-12.381,12.387c-6.844,0-12.387-5.545-12.387-12.387   C234.175,85.318,239.718,79.771,246.561,79.771z M21.27,314.01V141.424H358.73v67.274c-1.537-2.202-3.677-4.02-6.327-5.143   l-20.614-8.726c-1.835-0.778-3.771-1.172-5.754-1.172c-5.956,0-11.303,3.54-13.623,9.02l-1.253,2.959   c-9.227,0.129-18.381,2.255-26.728,6.193l-2.426-2.107c-1.174-1.018-2.499-1.841-3.932-2.447c-1.841-0.779-3.782-1.174-5.771-1.174   c-4.276,0-8.341,1.858-11.154,5.099l-14.671,16.915c-2.583,2.986-3.855,6.794-3.581,10.735c0.285,3.941,2.084,7.535,5.064,10.115   l2.417,2.098c-2.755,8.849-3.563,18.179-2.365,27.344l-2.749,1.654c-6.981,4.2-9.242,13.302-5.039,20.293L249.044,315H22.26   C21.714,315,21.27,314.556,21.27,314.01z"/>
</g>
</svg>

                      </span>
                      <h3>API Integration</h3>
                      <p>
                        I have extensive experience in integrating third-party APIs and creating custom APIs to enable smooth communication between your application and external services, ensuring an interconnected ecosystem.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-md-6 col-lg-4">
                  <div class="tf__single_service_2 fade_left" data-trigerId="service">
                    <div class="text">
                      <span>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABCklEQVR4nO2ZSQ6CUBBE6yC69irC3cB7GOKhZIsLuUAZEuKK4Y/QhHpJJy7E/s9qW6KAECKEK4AGQA+ARqoH8AJw85H4GDg4Z2o428VFpDFwWK7U00XE0jhxpr4uIjxIrRJ0UWYoESiRLFCjBY1WFnjq0bIIXURKAG3ib93h9YqtRdpMtxDvrUW45/2QRCZI+S6aSiSGXVckDYmUAcvnvyEtibQxG9KSCGM2pEQ2SGSJQyWyhERw9kTounUgESiROU45WlNQIlAi9j8jTFixIvS53vWJHYDa8//FVCLd2LtLIVKNzeodRCqH3l6JPAIS8YERvU39QNfG9CrGB6kl7gEiRcBZQnsJcSp+Nw/1a7uHoL4AAAAASUVORK5CYII=" alt="multiple-devices"/>
                      </span>
                      <h3>Cross-Platform Solutions</h3>
                      <p>
                        Utilizing frameworks like Ionic, I create cross-platform applications that deliver native-like experiences on both web and mobile platforms, saving development time and cost without compromising quality.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-md-6 col-lg-4">
                  <div class="tf__single_service_2 fade_left" data-trigerId="service">
                    <div class="text">
                      <span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#000000" d="M323.4 85.2l-96.8 78.4c-16.1 13-19.2 36.4-7 53.1c12.9 17.8 38 21.3 55.3 7.8l99.3-77.2c7-5.4 17-4.2 22.5 2.8s4.2 17-2.8 22.5l-20.9 16.2L512 316.8 512 128l-.7 0-3.9-2.5L434.8 79c-15.3-9.8-33.2-15-51.4-15c-21.8 0-43 7.5-60 21.2zm22.8 124.4l-51.7 40.2C263 274.4 217.3 268 193.7 235.6c-22.2-30.5-16.6-73.1 12.7-96.8l83.2-67.3c-11.6-4.9-24.1-7.4-36.8-7.4C234 64 215.7 69.6 200 80l-72 48 0 224 28.2 0 91.4 83.4c19.6 17.9 49.9 16.5 67.8-3.1c5.5-6.1 9.2-13.2 11.1-20.6l17 15.6c19.5 17.9 49.9 16.6 67.8-2.9c4.5-4.9 7.8-10.6 9.9-16.5c19.4 13 45.8 10.3 62.1-7.5c17.9-19.5 16.6-49.9-2.9-67.8l-134.2-123zM16 128c-8.8 0-16 7.2-16 16L0 352c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-224-80 0zM48 320a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM544 128l0 224c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-208c0-8.8-7.2-16-16-16l-80 0zm32 208a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z"/></svg>
                      </span>
                      <h3>Custom Solutions</h3>
                      <p>
                        I offer tailored solutions to meet unique business needs, from building enterprise-level applications to designing features that align with your specific requirements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>





          <section id="skills" class="tf__skills_2 pt_115 xs_pt_75 pb_120 xs_pb_80 mt_165 xs_mt_80">
            <div class="container">
              <div class="row">
                <div class="col-xl-9 col-lg-9 m-auto">
                  <div class="tf__section_heading mb_30">
                    <h5 class="has-animation">Skills and Expertise
                    </h5>
                    {/* <h2 class="has-animation">
                      Tech Tactician for Web and App Realms
                    </h2> */}
                  </div>
                </div>
              </div>


              <div class="row">
                <div class="col-12">
                  <div class="tab-content" id="pills-tabContent">
                    <div>
                      <div class="row experience">
                        <div class="col-xl-6 col-lg-6">
                          <div class="tf__single_skill_2 fade_bottom" data-trigerId="skills">
                            <h3>Full-Stack Development</h3>
                            <p>
                              I am a skilled Full-Stack Developer with extensive experience in building scalable web and mobile applications. My expertise includes frontend frameworks like Angular, React, and Ionic, as well as backend technologies such as Node.js and NestJS. I specialize in creating efficient APIs, seamless integrations, and delivering robust user experiences.
                            </p>
                          </div>
                        </div>
                        <div class="col-xl-6 col-lg-6">
                          <div class="tf__single_skill_2 fade_bottom" data-trigerId="skills">
                            <h3>Frontend Development</h3>
                            <p>
                              With 4+ years of experience, I excel at creating dynamic, responsive, and user-friendly interfaces using Angular, React, and Ionic. My focus is on ensuring exceptional user experience through intuitive design and performance optimization.
                            </p>
                          </div>
                        </div>
                        <div class="col-xl-6 col-lg-6">
                          <div class="tf__single_skill_2 fade_bottom" data-trigerId="skills">
                            <h3>Backend Development</h3>
                            <p>
                              I have a strong command of backend development with Node.js and NestJS. My expertise lies in building RESTful APIs, handling complex database structures, and ensuring security and scalability for applications.
                            </p>
                          </div>
                        </div>
                        <div class="col-xl-6 col-lg-6">
                          <div class="tf__single_skill_2 fade_bottom" data-trigerId="skills">
                            <h3>Database Management</h3>
                            <p>
                              Proficient in database technologies like PostgreSQL and MongoDB, I design and optimize database schemas to ensure efficient data handling and storage for applications.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>

          <section id="portfolio" class="tf__portfolio tf__portfolio_2 mt_120 xs_mt_80">
            <div class="container">
              <div class="row">
                <div class="col-xl-10 col-lg-9 mb_30">
                  <div class="tf__section_heading">
                    <h5 class="has-animation">my recent Portfolio</h5>
                    <p class="has-animation">
                    My track record of success speaks volumes. With numerous successful projects and satisfied clients, I’ve demonstrated my ability to deliver results. My approach is data-driven and focused on achieving measurable outcomes.
                    </p>
                  </div>
                </div>
              </div>
              <div class="row">


                
                <div class="col-xl-4 col-sm-6 portfolio-item-card">
                  <a href="https://www.paramountsoftwaresolutions.com/" target='_blank' class="tf__portfolio_item" >
                    <img
                      src="images/portfolio/pss.png"
                      alt="portfolio"
                      class="img-fluid w-100" />
                    <div class="text">
                      <h4>PSS</h4>
                      <p>Web Developemnt Services</p>
                    </div>
                  </a>
                </div>
                <div class="col-xl-4 col-sm-6 portfolio-item-card">
                  <a href="https://sky-lark-1ef76.web.app/" target='_blank' class="tf__portfolio_item" >
                    <img
                      src="images/portfolio/sky-lark-screen-shot.png"
                      alt="portfolio"
                      class="img-fluid w-100" />
                    <div class="text">
                      <h4>Sky Lark</h4>
                      <p>E-commerce</p>
                    </div>
                  </a>
                </div>
                <div class="col-xl-4 col-sm-6 portfolio-item-card">
                  <a href="https://pakprintwishes.com/" target='_blank' class="tf__portfolio_item" >
                    <img
                      src="images/portfolio/parkwinter.png"
                      alt="portfolio"
                      class="img-fluid w-100" />
                    <div class="text">
                      <h4>PakPrintWishes</h4>
                      <p>E-commerce, Wedding Card Designer</p>
                    </div>
                  </a>
                </div>
                <div class="col-xl-4 col-sm-6 portfolio-item-card">
                  <a href="https://360synergytech.com/" target='_blank' class="tf__portfolio_item" >
                    <img
                      src="images/portfolio/360.png"
                      alt="portfolio"
                      class="img-fluid w-100" />
                    <div class="text">
                      <h4>Podio service provider</h4>
                      <p>Full Stack</p>
                    </div>
                  </a>
                </div>

                <div class="col-xl-4 col-sm-6 portfolio-item-card">
                  <a href="https://techling.ai/" target='_blank' class="tf__portfolio_item" >
                    <img
                      src="images/portfolio/tech.png"
                      alt="portfolio"
                      class="img-fluid w-100" />
                    <div class="text">
                      <h4>AI service provider</h4>
                      <p>Full Stack</p>
                    </div>
                  </a>
                </div>

                <div class="col-xl-4 col-sm-6 portfolio-item-card">
                  <a href="https://noxutechnologies.com/" target='_blank' class="tf__portfolio_item" >
                    <img
                      src="images/portfolio/nuxus.png"
                      alt="portfolio"
                      class="img-fluid w-100" />
                    <div class="text">
                      <h4>Shopify Services</h4>
                      <p>React Developer</p>
                    </div>
                  </a>
                </div>
                
              </div>
            </div>
          </section>

          {/* <div class="tf__brand mt_120 xs_mt_80">
                <div class="row">
                    <div class="col-12">
                        <div class="marquee_animi">
                            <ul>
                                <li>* React js</li>
                                <li>* React Native</li>
                                <li>* Shopify</li>
                                <li>* Laravel</li>
                                <li>* PHP</li>
                                <li>* Firebase</li>
                             
                            </ul>
                        </div>
                    </div>
                </div>
            </div> */}



          <section id="contact" class="tf__contact_2 pt_95 xs_pt_45">
            <div class="container">
              <div class="row text-center animation">

                <Slider {...settings}>

                  <div>
                    <h3>Web Developer</h3>
                  </div>
                  <div>
                    <h3>Angular Developer</h3>
                  </div>
                  <div>
                    <h3>Ionic Developer</h3>
                  </div>
                  <div>
                    <h3>React Developer</h3>
                  </div>
                  <div>
                    <h3>MEAN Stack Developer</h3>
                  </div>
                  <div>
                    <h3>MERN Stack Developer</h3>
                  </div>
                  
                  <div>
                    <h3>NodeJs Developer</h3>
                  </div>

                </Slider>

              </div>
              <div class="contact_form_2">
                <form ref={form} onSubmit={sendEmail}>
                  <div class="row">
                    <div class="col-lg-6">
                      <input type="text" name='name' placeholder="Your Name" />
                      <div style={{ textAlign: "left", color: "red", fontSize: "14px", paddingTop: "3px" }}>{formErrors.name && 'Name is required'}</div>

                    </div>
                    <div class="col-lg-6">
                      <input type="text" name='subject' placeholder="Subject" />
                      <div style={{ textAlign: "left", color: "red", fontSize: "14px", paddingTop: "3px" }}>{formErrors.subject && 'Subject is required'}</div>
                    </div>
                    <div class="col-lg-12">
                      <input type="email" name='email' placeholder="Email" />
                      <div style={{ textAlign: "left", color: "red", fontSize: "14px", paddingTop: "3px" }}>{formErrors.email && 'Email is required'}</div>
                    </div>
                    <div class="col-12">
                      <textarea
                        rows="5"
                        name='message'
                        placeholder="Your Message"
                      ></textarea>
                      <div style={{ textAlign: "left", color: "red", fontSize: "14px", paddingTop: "3px" }}>{formErrors.message && 'Message is required'}</div>
                    </div>
                  </div>
                  {successMessage ? (<div className="success-msg" style={{ textAlign: "center", color: "white" }}>
                    Thank you 👍. I will get back to you soon.
                  </div>
                  ) : (
                    <button type="submit">{submitting ? (
                      <RotatingLines
                        visible={true}
                        height="16"
                        width="16"
                        color="white"
                        strokeWidth="4"
                        animationDuration="0.75"
                        ariaLabel="rotating-lines-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                      />
                    ) : (
                      "Submit"
                    )}</button>
                  )}

                </form>
              </div>
            </div>
          </section>

          <div class="footer_2_copyright_area mt_120 xs_mt_80">
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <div class="tf__footer_copyright">
                    <a href="mailto:ahmadag7954@gmail.com">ahmadag7954@gmail.com</a>
                    <a href="tel:+923156180031
">+923156180031
                    </a>
                  </div>
          
                

           
                </div>
              </div>
            </div>
          </div>

          <div className={`progress ${showProgress ? 'active' : ''}`} onClick={scrollToTop}>
            <svg class="progress-svg" width="100%" height="100%" viewBox="-1 -1 102 102">
              <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"></path>
            </svg>
          </div>

          <div id="magic-cursor">
            <div id="ball"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
