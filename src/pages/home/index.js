// import React from "react";
// import Header from "../../components/header";
// import MovieSection from "../../components/sections/MovieSection";
// import Footer from "../../components/footer/Footer";

// const Home = () => {
//   const movies = [
//     {
//       title: "Bhoot Bhulaiyaa 3",
//       time: "20 Oct, 12:00 PM",
//       imageUrl:
//         "https://fanizm-prod.s3.amazonaws.com/upload/quiz/1728565370.webp",
//     },
//     {
//       title: "Pushpa",
//       time: "20 Oct, 01:00 PM",
//       imageUrl:
//         "https://fanizm-prod.s3.amazonaws.com/upload/quiz/1728552982.webp",
//     },
//     {
//       title: "Vikram Vedha",
//       time: "21 Oct, 06:20 PM",
//       imageUrl:
//         "https://fanizm-prod.s3.amazonaws.com/upload/quiz/1728552308.webp",
//     },
//   ];

//   const trailers = [
//     { title: "Maidaan", time: "21 Oct, 01:10 PM", imageUrl: "trailer1-url" },
//     {
//       title: "ManuMammel Boys",
//       time: "22 Oct, 10:00 AM",
//       imageUrl: "trailer2-url",
//     },
//     { title: "Hanuman", time: "24 Oct, 12:00 PM", imageUrl: "trailer3-url" },
//   ];

//   return (
//     <div className="App">
//       <Header />
//       <MovieSection title="Movies" movies={movies} />
//       <MovieSection title="Trailers" movies={trailers} />
//       <Footer />
//     </div>
//   );
// };

// export default Home;

// src/App.js
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "../../App.css";
import MovieSection from "../../components/allComp/MovieSection";
import Footer from "../../components/allComp/Footer";
import Header from "../../components/allComp/Header";
import { Autoplay } from "swiper/modules";

function Home() {
  // Sample movie data
  const movies = [
    {
      id: 1,
      title: "Bhoot Bhulaiyaa 3",
      time: "20 Oct, 12:00 PM",
      imageUrl:
        "https://fanizm-prod.s3.amazonaws.com/upload/quiz/1728565370.webp",
    },
    {
      id: 2,
      title: "Pushpa",
      time: "20 Oct, 01:00 PM",
      imageUrl:
        "https://fanizm-prod.s3.amazonaws.com/upload/quiz/1728552982.webp",
    },
    {
      id: 3,
      title: "Vikram Vedha",
      time: "21 Oct, 06:20 PM",
      imageUrl:
        "https://fanizm-prod.s3.amazonaws.com/upload/quiz/1728552308.webp",
    },
    {
      id: 4,
      title: "Hanuman",
      time: "22 Oct, 04:45 PM",
      imageUrl:
        "https://fanizm-prod.s3.amazonaws.com/upload/quiz/1728552598.webp",
    },
  ];

  const trailers = [
    {
      id: 1,
      title: "Maidaan",
      time: "21 Oct, 01:10 PM",
      imageUrl:
        "https://fanizm-prod.s3.amazonaws.com/upload/quiz/1728553244.webp",
    },
    {
      id: 2,
      title: "ManuMammel Boys",
      time: "22 Oct, 12:00 AM",
      imageUrl:
        "https://fanizm-prod.s3.amazonaws.com/upload/quiz/1728554665.webp",
    },
    {
      id: 3,
      title: "Pushpa",
      time: "23 Oct, 12:00 AM",
      imageUrl:
        "https://fanizm-prod.s3.amazonaws.com/upload/quiz/1728554967.webp",
    },
  ];

  return (
    <div
      className="Site-content"
      style={{
        backgroundImage:
          "url('https://fanizm-prod.s3.amazonaws.com/upload/front_bg.png')",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div></div>
      <div className="routing-550">
        <div className="web-body-container">
          <Header />
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1.2}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            style={{ height: "150px" }}
          >
            <SwiperSlide>
              <img
                src="https://fanizm-prod.s3.amazonaws.com/upload/banner/1726689398.webp"
                alt="Banner 1"
                className="swiper-image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://fanizm-prod.s3.amazonaws.com/upload/banner/1726689398.webp"
                alt="Banner 2"
                className="swiper-image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://fanizm-prod.s3.amazonaws.com/upload/banner/1726689398.webp"
                alt="Banner 3"
                className="swiper-image"
              />
            </SwiperSlide>
          </Swiper>

          {/* Movie Sections */}
          <MovieSection title="Movies" movies={movies} />
          <MovieSection title="Trailers" movies={trailers} />

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
