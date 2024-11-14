import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import bannerImage1 from "../../assets/images/banner2.png";
import bannerImage2 from "../../assets/images/banner4.png";
import bannerImage3 from "../../assets/images/banner5.png";
import bannerImage4 from "../../assets/images/banner6.png";
const Banner = () => {
  return (
    <div className="">
      <Carousel
        autoPlay={true} // Enables automatic sliding
        interval={4500} // Time interval between slides (in milliseconds)
        infiniteLoop={true} // Loops the slides infinitely
        stopOnHover={false} // Continues to autoplay even when hovered over
        showThumbs={false} // Hides thumbnail previews
        showStatus={false} // Hides status indicator
        showIndicators={true} // Shows dot indicators for slides
      >
        <div>
          <div className="w-11/12 mx-auto shadow-2xl border relative">
            <div className="md:flex justify-between">
              <div className="flex flex-col justify-center md:w-[50%] px-6 py-20 md:py-0">
                <h1 className="font-bold sm:text-4xl text-3xl">
                  Adventure Awaits -{" "}
                  <span className="text-[#d2aa6d] italic font-bold">
                    Graphic Tee
                  </span>
                </h1>
                <p className="italic py-4">
                  Embrace the spirit of exploration with our "Adventure Awaits"
                  graphic tee. Crafted from soft, breathable cotton, this
                  comfortable shirt features a vibrant, eye-catching design that
                  inspires wanderlust. Perfect for outdoor enthusiasts or anyone
                  who dreams of new horizons, this tee is ideal for casual
                  outings, hiking trips, or lounging at home.
                </p>
              </div>
              <div className="border"></div>
              <div className="md:w-[50%] bg-[#15171b] pt-20">
                <div className="flex justify-center">
                  <img src={bannerImage1} className="rounded-xl" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="w-11/12 mx-auto shadow-2xl border relative">
            <div className="md:flex justify-between">
              <div className="flex flex-col justify-center md:w-[50%] px-6 py-20 md:py-0">
                <h1 className="font-bold sm:text-4xl text-3xl">
                  Adventure Awaits -{" "}
                  <span className="text-[#d2aa6d] italic font-bold">
                    Graphic Tee
                  </span>
                </h1>
                <p className="italic py-4">
                  Embrace the spirit of exploration with our "Adventure Awaits"
                  graphic tee. Crafted from soft, breathable cotton, this
                  comfortable shirt features a vibrant, eye-catching design that
                  inspires wanderlust. Perfect for outdoor enthusiasts or anyone
                  who dreams of new horizons, this tee is ideal for casual
                  outings, hiking trips, or lounging at home.
                </p>
              </div>
              <div className="border"></div>
              <div className="md:w-[50%] bg-[#d2aa6d] pt-20">
                <div className="flex justify-center">
                  <img src={bannerImage2} className="rounded-xl" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="w-11/12 mx-auto shadow-2xl border relative">
            <div className="md:flex justify-between">
              <div className="flex flex-col justify-center md:w-[50%] px-6 py-20 md:py-0">
                <h1 className="font-bold sm:text-4xl text-3xl">
                  Adventure Awaits -{" "}
                  <span className="text-[#062246] italic font-bold">
                    Graphic Tee
                  </span>
                </h1>
                <p className="italic py-4">
                  Embrace the spirit of exploration with our "Adventure Awaits"
                  graphic tee. Crafted from soft, breathable cotton, this
                  comfortable shirt features a vibrant, eye-catching design that
                  inspires wanderlust. Perfect for outdoor enthusiasts or anyone
                  who dreams of new horizons, this tee is ideal for casual
                  outings, hiking trips, or lounging at home.
                </p>
              </div>
              <div className="border"></div>
              <div className="md:w-[50%] bg-[#062246] pt-20">
                <div className="flex justify-center">
                  <img src={bannerImage3} className="rounded-xl" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="w-11/12 mx-auto shadow-2xl border relative">
            <div className="md:flex justify-between">
              <div className="flex flex-col justify-center md:w-[50%] px-6 py-20 md:py-0">
                <h1 className="font-bold sm:text-4xl text-3xl">
                  Adventure Awaits -{" "}
                  <span className="text-slate-500 italic font-bold">
                    Graphic Tee
                  </span>
                </h1>
                <p className="italic py-4">
                  Embrace the spirit of exploration with our "Adventure Awaits"
                  graphic tee. Crafted from soft, breathable cotton, this
                  comfortable shirt features a vibrant, eye-catching design that
                  inspires wanderlust. Perfect for outdoor enthusiasts or anyone
                  who dreams of new horizons, this tee is ideal for casual
                  outings, hiking trips, or lounging at home.
                </p>
              </div>
              <div className="border"></div>
              <div className="md:w-[50%] bg-slate-500 pt-20">
                <div className="flex justify-center">
                  <img src={bannerImage4} className="rounded-xl" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;

{
  /* <div className="carousel w-full">
<div id="slide1" className="carousel-item relative w-full">

  <div className="w-11/12 mx-auto shadow-2xl border relative">
    <div className="md:flex justify-between">
      <div className="flex flex-col justify-center md:w-[50%] px-6 py-20 md:py-0">
        <h1 className="font-bold sm:text-4xl text-3xl">
          Adventure Awaits -{" "}
          <span className="text-[#d2aa6d] italic font-bold">
            Graphic Tee
          </span>
        </h1>
        <p className="italic py-4">
          Embrace the spirit of exploration with our "Adventure Awaits"
          graphic tee. Crafted from soft, breathable cotton, this
          comfortable shirt features a vibrant, eye-catching design that
          inspires wanderlust. Perfect for outdoor enthusiasts or anyone
          who dreams of new horizons, this tee is ideal for casual
          outings, hiking trips, or lounging at home.
        </p>
      </div>
      <div className="border"></div>
      <div className="md:w-[50%] bg-[#15171b] pt-20">
        <div className="flex justify-center">
          <img src={bannerImage1} className="rounded-xl" alt="" />
        </div>
      </div>
    </div>
  </div>

  <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
    <a href="#slide4" className="btn btn-circle">
      ❮
    </a>
    <a href="#slide2" className="btn btn-circle">
      ❯
    </a>
  </div>
</div>
<div id="slide2" className="carousel-item relative w-full">

   <div className="w-11/12 mx-auto shadow-2xl border relative">
    <div className="md:flex justify-between">
      <div className="flex flex-col justify-center md:w-[50%] px-6 py-20 md:py-0">
        <h1 className="font-bold sm:text-4xl text-3xl">
          Adventure Awaits -{" "}
          <span className="text-[#d2aa6d] italic font-bold">
            Graphic Tee
          </span>
        </h1>
        <p className="italic py-4">
          Embrace the spirit of exploration with our "Adventure Awaits"
          graphic tee. Crafted from soft, breathable cotton, this
          comfortable shirt features a vibrant, eye-catching design that
          inspires wanderlust. Perfect for outdoor enthusiasts or anyone
          who dreams of new horizons, this tee is ideal for casual
          outings, hiking trips, or lounging at home.
        </p>
      </div>
      <div className="border"></div>
      <div className="md:w-[50%] bg-[#d2aa6d] pt-20">
        <div className="flex justify-center">
          <img src={bannerImage2} className="rounded-xl" alt="" />
        </div>
      </div>
    </div>
  </div>

  <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
    <a href="#slide1" className="btn btn-circle">
      ❮
    </a>
    <a href="#slide3" className="btn btn-circle">
      ❯
    </a>
  </div>
</div>
<div id="slide3" className="carousel-item relative w-full">

<div className="w-11/12 mx-auto shadow-2xl border relative">
    <div className="md:flex justify-between">
      <div className="flex flex-col justify-center md:w-[50%] px-6 py-20 md:py-0">
        <h1 className="font-bold sm:text-4xl text-3xl">
          Adventure Awaits -{" "}
          <span className="text-[#062246] italic font-bold">
            Graphic Tee
          </span>
        </h1>
        <p className="italic py-4">
          Embrace the spirit of exploration with our "Adventure Awaits"
          graphic tee. Crafted from soft, breathable cotton, this
          comfortable shirt features a vibrant, eye-catching design that
          inspires wanderlust. Perfect for outdoor enthusiasts or anyone
          who dreams of new horizons, this tee is ideal for casual
          outings, hiking trips, or lounging at home.
        </p>
      </div>
      <div className="border"></div>
      <div className="md:w-[50%] bg-[#062246] pt-20">
        <div className="flex justify-center">
          <img src={bannerImage3} className="rounded-xl" alt="" />
        </div>
      </div>
    </div>
  </div>

  <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
    <a href="#slide2" className="btn btn-circle">
      ❮
    </a>
    <a href="#slide4" className="btn btn-circle">
      ❯
    </a>
  </div>
</div>
<div id="slide4" className="carousel-item relative w-full">

<div className="w-11/12 mx-auto shadow-2xl border relative">
    <div className="md:flex justify-between">
      <div className="flex flex-col justify-center md:w-[50%] px-6 py-20 md:py-0">
        <h1 className="font-bold sm:text-4xl text-3xl">
          Adventure Awaits -{" "}
          <span className="text-slate-500 italic font-bold">
            Graphic Tee
          </span>
        </h1>
        <p className="italic py-4">
          Embrace the spirit of exploration with our "Adventure Awaits"
          graphic tee. Crafted from soft, breathable cotton, this
          comfortable shirt features a vibrant, eye-catching design that
          inspires wanderlust. Perfect for outdoor enthusiasts or anyone
          who dreams of new horizons, this tee is ideal for casual
          outings, hiking trips, or lounging at home.
        </p>
      </div>
      <div className="border"></div>
      <div className="md:w-[50%] bg-slate-500 pt-20">
        <div className="flex justify-center">
          <img src={bannerImage4} className="rounded-xl" alt="" />
        </div>
      </div>
    </div>
  </div>

  <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
    <a href="#slide3" className="btn btn-circle">
      ❮
    </a>
    <a href="#slide1" className="btn btn-circle">
      ❯
    </a>
  </div>
</div>
</div> */
}
