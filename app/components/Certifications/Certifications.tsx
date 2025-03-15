"use client";
import React from "react";
import { certifications } from "@/assets/assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./Certifications.module.css";
import Image from "next/image";

interface CertificationsProps {
  isDarkMode: boolean;
}
const Certifications: React.FC<CertificationsProps> = ({ isDarkMode }) => {
  return (
    <div id="Certifications" className={styles.certificationsContainer}>
      <h2 className={styles.title}>Certifications</h2>
      <p className={styles.description}>
        I have earned industry-recognized IBM certifications in Full-Stack
        Development, Cloud Computing, DevOps, and Microservices, validating my
        ability to build scalable, high-performance applications using modern
        technologies.
      </p>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={false}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        className={styles.swiper}
      >
        {certifications.map((cert, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <div
              className={`${styles.certCard} ${
                isDarkMode ? styles.certCardDark : ""
              }`}
            >
              <Image
                src={cert.image}
                alt={cert.title}
                // layout="responsive"
                style={{ objectFit: "cover" }}
                width={500}
                height={800}
                className={styles.certImage}
              />
              <div className={styles.certDetails}>
                <h3 className={styles.certTitle}>{cert.title}</h3>
                <p
                  className={`${styles.issuedBy} ${
                    isDarkMode ? styles.issuedByDark : ""
                  }`}
                >
                  Issued By : {cert.issuedBy}
                </p>
                <p
                  className={`${styles.date} ${
                    isDarkMode ? styles.dateDark : ""
                  }`}
                >
                  {cert.date}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Certifications;
