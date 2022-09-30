import React from "react";
import "./Banner.css";
import { BsFillArrowDownCircleFill } from 'react-icons/bs';

const Banner = () => {
  return (
    <div>
      <div>
        <div class="carousel w-full">
          {/* Carosol-01 */}
          <div id="slide1" class="carousel-item relative w-full">
            <div className="hero bannerImg">
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <h1
                    className="mb-5 text-5xl font-bold"
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                  >
                    Hey visitor!
                  </h1>
                  <p
                    className="mb-5"
                    data-aos="fade-up"
                    data-aos-duration="3000"
                  >
                    Welcome to our center. <br /> You can visit here and get
                    product as you like.
                  </p>
                  <a
                    href="#product"
                    className="seeherebtn  text-white bg-green-900 flex "
                  >
                    See Here <span className="m-1"> <BsFillArrowDownCircleFill/></span>
                  </a>
                </div>
              </div>
            </div>

            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" class="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" class="btn btn-circle">
                ❯
              </a>
            </div>
          </div>

          {/* Carosol-02 */}

          <div id="slide2" class="carousel-item relative w-full">
            <div className="hero bannerImg02">
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <h1
                    className="mb-5 text-5xl font-bold"
                  >
                    Wanna know about reviews?
                  </h1>
                  <p
                    className="mb-5"
                    data-aos="fade-up"
                    data-aos-duration="3000"
                  >
                    You must trust and believe in people or life becomes
                    impossible. <br /> _ Anton Chekhov
                  </p>
                  <a
                    href="#product"
                    className="seeherebtn  text-white bg-green-900 flex "
                  >
                    See Here <span className="m-1"> <BsFillArrowDownCircleFill/></span>
                  </a>
                </div>
              </div>
            </div>
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" class="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" class="btn btn-circle">
                ❯
              </a>
            </div>
          </div>

          {/* Carosol-03 */}

          <div id="slide3" class="carousel-item relative w-full">
            <div className="hero bannerImg03">
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <h1
                    className="mb-5 text-5xl font-bold"
                  >
                    Let's make more charmful!
                  </h1>
                  <p
                    className="mb-5"
                    data-aos="fade-up"
                    data-aos-duration="3000"
                  >
                   Good in keeping up with customer trends, new technologies, and best practices.
                  </p>
                  <a
                    href="#product"
                    className="seeherebtn  text-white bg-green-900 flex "
                  >
                    See Here <span className="m-1"> <BsFillArrowDownCircleFill/></span>
                  </a>
                </div>
              </div>
            </div>
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" class="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" class="btn btn-circle">
                ❯
              </a>
            </div>
          </div>

          {/* Carosol-04 */}

          <div id="slide4" class="carousel-item relative w-full">
            <div className="hero bannerImg04">
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <h1
                    className="mb-5 text-5xl font-bold"
                  >
                    Contact with us
                  </h1>
                  <p
                    className="mb-5"
                    data-aos="fade-up"
                    data-aos-duration="3000"
                  >
                    We’re well-disciplined in conducting researches about the value of a business.
                  </p>
                  <a
                    href="#product"
                    className="seeherebtn  text-white bg-green-900 flex "
                  >
                    See Here <span className="m-1"> <BsFillArrowDownCircleFill/></span>
                  </a>
                </div>
              </div>
            </div>
            <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" class="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" class="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
