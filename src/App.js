import React, { useEffect, useState } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.css";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import PureCounter from "@srexi/purecounterjs";
import SwiperComponent from "./components/swipper";
import DBService from "./services/DBService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {  
  const [email, setEmail] = useState('');
  const handleSave = async () => {
    try {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!email || !emailRegex.test(email)) {
        toast.error("Por favor, ingresa un correo válido.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        return;
      }
      console.log("entre");
      var id = await DBService.addSubscriber(email);
      console.log(id);
      if (id != null) {
        setEmail('');
        toast.success("Gracias por suscribirte, te mantendremos informado!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("Hubo un error al guardar tu correo, por favor intenta de nuevo.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };
  useEffect(() => {
    // Scroll class
    function toggleScrolled() {
      const body = document.querySelector("body");
      const header = document.querySelector("#header");
      if (header && (header.classList.contains("sticky-top") || header.classList.contains("fixed-top"))) {
        window.scrollY > 100 ? body.classList.add("scrolled") : body.classList.remove("scrolled");
      }
    }

    window.addEventListener("scroll", toggleScrolled);
    window.addEventListener("load", toggleScrolled);

    // Mobile nav toggle
    const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");
    function mobileNavToggle() {
      document.querySelector("body").classList.toggle("mobile-nav-active");
      mobileNavToggleBtn.classList.toggle("bi-list");
      mobileNavToggleBtn.classList.toggle("bi-x");
    }
    
    if (mobileNavToggleBtn) {
      mobileNavToggleBtn.addEventListener("click", mobileNavToggle);
    }

    // AOS Animation
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });

    // Lightbox
    GLightbox({
      selector: ".glightbox",
    });

    // Pure Counter
    new PureCounter();

    

    // Cleanup event listeners
    return () => {
      window.removeEventListener("scroll", toggleScrolled);
      window.removeEventListener("load", toggleScrolled);
      if (mobileNavToggleBtn) {
        mobileNavToggleBtn.removeEventListener("click", mobileNavToggle);
      }
    };
  }, []);
  return (
    <>
      <header id="header" className="header d-flex align-items-center sticky-top">
        <div className="container position-relative d-flex align-items-center justify-content-between">
          <a href="index.html" className="logo d-flex align-items-center me-auto me-xl-0">
            <h1 className="sitename">Prendia</h1>
            <span>.</span>
          </a>
          <nav id="navmenu" className="navmenu d-flex justify-content-center align-items-center py-3">
            <a href="#" className="mx-3 text-decoration-none text-dark" aria-label="Facebook">
              <i className="bi bi-facebook fs-4"></i>
            </a>
            <a href="#" className="mx-3 text-decoration-none text-dark" aria-label="Instagram">
              <i className="bi bi-instagram fs-4"></i>
            </a>
            <a href="#" className="mx-3 text-decoration-none text-dark" aria-label="Twitter">
              <i className="bi bi-twitter fs-4"></i>
            </a>
            <a href="#" className="mx-3 text-decoration-none text-dark" aria-label="LinkedIn">
              <i className="bi bi-linkedin fs-4"></i>
            </a>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>
        </div>
      </header>

      <main className="main">
        <ToastContainer />
        <section id="hero" className="hero section light-background">
          <div className="container container-fluid position-relative hero-container">
            <div className="row align-items-center">
              <div className="col-lg-6 text-container">
                <h1 className="headline">
                  <span className="big-title">¿Sin idea de qué ponerte?</span><br />
                  <span className="ia-highlight">Deja que la <span className="ia">IA</span> te ayude</span>
                </h1>
                <p className="subtext">Outfit perfecto en segundos, sin complicaciones.</p>
                <form className="row g-2 align-items-center">
                  <div className="col-sm-6">
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control custom-input" placeholder="Tu acceso exclusivo empieza aquí..." required />
                  </div>
                  <div className="col-sm-auto">
                    <button type="button" onClick={handleSave} className="btn btn-custom">Quiero mi outfit IA</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-6 hero-img-container">
            <img src="assets/img/landing-img.png" className="img-fluid animated hero-img" alt="" />
          </div>
        </section>
        <section id="how-it-works" className="section light-background">
          <div className="container">
            <div className="section-title text-center" data-aos="fade-up">
              <h2 className="title-main">Cómo Funciona</h2>
              <p className="subtitle">Tu outfit ideal en <strong>3 simples pasos</strong></p>
            </div>
        
            <div className="row text-center" data-aos="fade-up" data-aos-delay="100">
              <div className="col-md-4">
                <img src="assets/img/1.png" className="img-fluid animated how-img" alt="" />
                <h4 className="step-title"><span className="step-number">1</span> Cuéntanos tu ocasión</h4>
                <p className="step-description">¿Evento formal o casual? Solo dinos cómo quieres verte.</p>
              </div>
              <div className="col-md-4">
                <img src="assets/img/2.png" className="img-fluid animated how-img" alt="" />
                <h4 className="step-title"><span className="step-number">2</span> La IA elige tu look</h4>
                <p className="step-description">Analizamos tendencias y combinaciones para ti.</p>
              </div>
              <div className="col-md-4">
                <img src="assets/img/3.png" className="img-fluid animated how-img" alt="" />
                <h4 className="step-title"><span className="step-number">3</span> Compra con un clic</h4>
                <p className="step-description">Te llevamos directo a la tienda para completar tu outfit.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="benefits" className="section dark-background">
          <div className="container text-center">
            <div className="section-title" data-aos="fade-up">
              <h2>¿Por qué suscribirte ahora?</h2>
              <p>Accede antes que nadie y obtén ventajas exclusivas</p>
            </div>
        
            <div className="row gy-4 justify-content-center" data-aos="fade-up" data-aos-delay="100">
              <div className="col-md-4">
                <i className="bi bi-clock-fill step-icon"></i>
                <h4>Acceso anticipado</h4>
                <p>Prueba la plataforma antes de su lanzamiento oficial.</p>
              </div>
              <div className="col-md-4">
                <i className="bi bi-gem step-icon"></i>
                <h4>Descuentos en primeras compras</h4>
                <p>Suscríbete y recibe cupones para tus outfits.</p>
              </div>
              <div className="col-md-4">
                <i className="bi bi-stars step-icon"></i>
                <h4>Personalización premium</h4>
                <p>Consigue recomendaciones aún más precisas.</p>
              </div>
            </div>
        
            <div className="mt-4">
              <a href="#hero" className="btn btn-custom">Sí, quiero probarlo</a>
            </div>
          </div>
        </section>
        <section id="testimonials" className="testimonials section light-background">
          <div className="container section-title" data-aos="fade-up">
            <h2>TESTIMONIALS</h2>
            <p>Lo que dicen nuestros <span className="description-title">usuarios</span></p>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <SwiperComponent />
          </div>

        </section>
        <section id="final-cta" className="section dark-background text-center">
          <div className="container">
            <h2>¿Listo para cambiar la forma en que te vistes?</h2>
            <p>Únete ahora y deja que la IA elija por ti.</p>
            <a href="#hero" className="btn btn-custom">¡Quiero ser el primero!</a>
          </div>
        </section>

        <section id="contact" className="contact section">

          <div className="container section-title" data-aos="fade-up">
            <h2>Contact</h2>
            <p><span>Need Help?</span> <span className="description-title">Contact Us</span></p>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay="100">

            <div className="mb-5">
              <iframe style={{ width: "100%", height: "400px" }} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameBorder="0" allowFullScreen=""></iframe>
            </div>

            <div className="row gy-4">

              <div className="col-md-6">
                <div className="info-item d-flex align-items-center" data-aos="fade-up" data-aos-delay="200">
                  <i className="icon bi bi-geo-alt flex-shrink-0"></i>
                  <div>
                    <h3>Dirección</h3>
                    <p>A108 Adam Street, Barcelona, NY 535022</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="info-item d-flex align-items-center" data-aos="fade-up" data-aos-delay="300">
                  <i className="icon bi bi-telephone flex-shrink-0"></i>
                  <div>
                    <h3>Teléfono</h3>
                    <p>+34 689-348169</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="info-item d-flex align-items-center" data-aos="fade-up" data-aos-delay="400">
                  <i className="icon bi bi-envelope flex-shrink-0"></i>
                  <div>
                    <h3>Email</h3>
                    <p>info@prendia.ai</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="info-item d-flex align-items-center" data-aos="fade-up" data-aos-delay="500">
                  <i className="icon bi bi-clock flex-shrink-0"></i>
                  <div>
                    <h3>Horas de contacto<br /></h3>
                    <p><strong>Mon-Sat:</strong> 11AM - 23PM; <strong>Sunday:</strong> Closed</p>
                  </div>
                </div>
              </div>

            </div>

            <form action="forms/contact.php" method="post" className="php-email-form" data-aos="fade-up" data-aos-delay="600">
              <div className="row gy-4">

                <div className="col-md-6">
                  <input type="text" name="name" className="form-control" placeholder="Nombre" required="" />
                </div>

                <div className="col-md-6 ">
                  <input type="email" className="form-control" name="email" placeholder="Email" required="" />
                </div>

                <div className="col-md-12">
                  <input type="text" className="form-control" name="subject" placeholder="En que podemos ayudarte?" required="" />
                </div>

                <div className="col-md-12">
                  <textarea className="form-control" name="message" rows="6" placeholder="Cuentanos un poco mas..." required=""></textarea>
                </div>

                <div className="col-md-12 text-center">
                  <div className="loading">Cargando...</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Tu mensaje fue enviado. Te responderemos a la brevedad!</div>

                  <button type="submit">Enviar Mensaje</button>
                </div>

              </div>
            </form>

          </div>

        </section>
      </main>
      <footer id="footer" className="footer dark-background">
        <div className="container">
          <div className="row gy-3">
            <div className="col-lg-3 col-md-6 d-flex">
              <i className="bi bi-geo-alt icon"></i>
              <div className="address">
                <h4>Address</h4>
                <p>A108 Adam Street</p>
                <p>New York, NY 535022</p>
                <p></p>
              </div>

            </div>

            <div className="col-lg-3 col-md-6 d-flex">
              <i className="bi bi-telephone icon"></i>
              <div>
                <h4>Contact</h4>
                <p>
                  <strong>Phone:</strong> <span>+34 689 348169</span><br />
                  <strong>Email:</strong> <span>info@prendia.ai</span><br />
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 d-flex">
              <i className="bi bi-clock icon"></i>
              <div>
                <h4>Opening Hours</h4>
                <p>
                  <strong>Mon-Sat:</strong> <span>11AM - 23PM</span><br />
                  <strong>Sunday</strong>: <span>Closed</span>
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <h4>Follow Us</h4>
              <div className="social-links d-flex">
                <a href="#" className="twitter"><i className="bi bi-twitter-x"></i></a>
                <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>

          </div>
        </div>

        <div className="container copyright text-center mt-4">
          <p>© <span>Copyright</span> <strong className="px-1 sitename">Prendia</strong> <span>Todos los derechos reservados</span></p>
        </div>

      </footer>
    </>
  );
}

export default App;
