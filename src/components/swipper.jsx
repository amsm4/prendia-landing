import React, { useEffect } from "react";
import Swiper from "swiper";

function SwiperComponent() {
    
  useEffect(() => {
    // Swiper
    document.querySelectorAll(".init-swiper").forEach(swiperElement => {
        const swiperConfig = {
            loop: true,
            speed: 600,
            autoplay: {
                delay: 5000,
            },
            slidesPerView: "auto",
            pagination: {
                el: ".swiper-pagination",
                type: "bullets",
                clickable: true,
            },
        };
        new Swiper(swiperElement, swiperConfig);
      });
  }, []);

  return (
    <div className="swiper init-swiper">
        <div className="swiper-wrapper">

        <div className="swiper-slide">
            <div className="testimonial-item">
            <div className="row gy-4 justify-content-center">
                <div className="col-lg-6">
                <div className="testimonial-content">
                    <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    <span>No sabía qué ponerme para una boda. ¡La IA me salvó con un look increíble!</span>
                    <i className="bi bi-quote quote-icon-right"></i>
                    </p>
                    <h3>Juan Carmona</h3>
                    <h4>Empresario</h4>
                    <div className="stars">
                    <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                    </div>
                </div>
                </div>
                <div className="col-lg-2 text-center">
                <img src="assets/img/testimonials/testimonials-1.jpg" className="img-fluid testimonial-img" alt="" />
                </div>
            </div>
            </div>
        </div>

        <div className="swiper-slide">
            <div className="testimonial-item">
            <div className="row gy-4 justify-content-center">
                <div className="col-lg-6">
                <div className="testimonial-content">
                    <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    <span>Ahorré horas buscando ropa. ¡Esto es un cambio total!</span>
                    <i className="bi bi-quote quote-icon-right"></i>
                    </p>
                    <h3>Sara Wilsson</h3>
                    <h4>Diseñadora gráfica</h4>
                    <div className="stars">
                    <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                    </div>
                </div>
                </div>
                <div className="col-lg-2 text-center">
                <img src="assets/img/testimonials/testimonials-2.jpg" className="img-fluid testimonial-img" alt="" />
                </div>
            </div>
            </div>
        </div>

        </div>
        <div className="swiper-pagination"></div>
    </div>
  );
}

export default SwiperComponent;
