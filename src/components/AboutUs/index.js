import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import GithubIcon from '../../assets/icons/github-icon.svg';
import LinkedinIcon from '../../assets/icons/linkedin-icon.svg';
import NavBar from "../NavBar";
import "./styles.css";



export default function AboutUs() {

    return (
        <section id="about-us">
            <NavBar />            

            <h1>About us</h1>

            <Swiper
                slidesPerView={window.screen.width < 800 ? 1 : 3}
                spaceBetween={30}
                slidesPerGroup={window.screen.width < 800 ? 1 : 3}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    clickable: true,
                }}
                navigation={window.screen.width < 800 ? false : true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="img-box">
                        J
                    </div>

                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>

                    <div className="about-us-links">
                        <a href='https://www.linkedin.com/in/leonardo-melo-896a98124/'>
                            <img src={LinkedinIcon} alt="linkedin icon" />
                        </a>

                        <a href='https://github.com/TWISPETA'>
                            <img src={GithubIcon} alt="github icon" />
                        </a>
                    </div>
                </SwiperSlide><SwiperSlide>
                    <div className="img-box">
                        J
                    </div>

                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>

                    <div className="about-us-links">
                        <a href='https://www.linkedin.com/in/leonardo-melo-896a98124/'>
                            <img src={LinkedinIcon} alt="linkedin icon" />
                        </a>

                        <a href='https://github.com/TWISPETA'>
                            <img src={GithubIcon} alt="github icon" />
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="img-box">
                        J
                    </div>

                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>

                    <div className="about-us-links">
                        <a href='https://www.linkedin.com/in/leonardo-melo-896a98124/'>
                            <img src={LinkedinIcon} alt="linkedin icon" />
                        </a>

                        <a href='https://github.com/TWISPETA'>
                            <img src={GithubIcon} alt="github icon" />
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="img-box">
                        J
                    </div>

                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>

                    <div className="about-us-links">
                        <a href='https://www.linkedin.com/in/leonardo-melo-896a98124/'>
                            <img src={LinkedinIcon} alt="linkedin icon" />
                        </a>

                        <a href='https://github.com/TWISPETA'>
                            <img src={GithubIcon} alt="github icon" />
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="img-box">
                        J
                    </div>

                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>

                    <div className="about-us-links">
                        <a href='https://www.linkedin.com/in/leonardo-melo-896a98124/'>
                            <img src={LinkedinIcon} alt="linkedin icon" />
                        </a>

                        <a href='https://github.com/TWISPETA'>
                            <img src={GithubIcon} alt="github icon" />
                        </a>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
}
