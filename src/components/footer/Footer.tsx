import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import { DiNodejs } from "react-icons/di";
import { FaCss3Alt, FaGitAlt, FaGithub, FaJsSquare, FaReact } from "react-icons/fa";
import { SiMysql, SiTypescript, SiVite } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
import { TbBrandReactNative } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";

import "swiper/css";
import "./FooterStule.css";

export const Footer: React.FC = () => {
  const icons: React.ReactNode[] = [
    <FaJsSquare />,
    <DiNodejs />,
    <FaReact />,
    <SiTypescript />,
    <TiHtml5 />,
    <FaCss3Alt />,
    <FaGithub />,
    <FaGitAlt />,
    <TbBrandReactNative />,
    <SiMysql />,
    <BiLogoPostgresql />,
    <SiVite />
  ];

  // Duplicar os ícones para o loop contínuo
  const repeatedIcons = [...icons, ...icons];

  return (
    <div className="container-footer-icons">
      <Swiper
        modules={[Autoplay]}
        slidesPerView="auto"
        spaceBetween={20}
        loop={true}
        speed={5000} // velocidade da rolagem contínua
        autoplay={{
          delay: 0,          
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        freeMode={true} // permite movimento contínuo sem snaps
        className="swiper-footer"
      >
        {repeatedIcons.map((icon, index) => (
          <SwiperSlide key={index} className="icon-slide">
            {icon}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
