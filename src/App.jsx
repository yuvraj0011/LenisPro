import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

const App = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  useGSAP(() => {
    document.querySelectorAll(".elem").forEach((elem) => {
      let image = elem.querySelector("img");
      let tl = gsap.timeline();

      let xTransform = gsap.utils.random(-100, 100);

      tl.set(
        image,
        {
          transformOrigin: `${xTransform < 0 ? 0 : "100%"}`,
        },
        "start"
      )
        .to(
          image,
          {
            scale: 0,
            ease: "none",
            scrollTrigger: {
              trigger: elem,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          },
          "start"
        )
        .to(
          elem,
          {
            xPercent: xTransform,
            ease: "none",
            scrollTrigger: {
              trigger: image,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
          "start"
        );
    });
  });

  return (
    <div className="w-full bg-zinc-900">
      <div>
        <div className="grid grid-cols-8 grid-rows-20 gap-2 overflow-hidden">
          <div
            style={{ "--r": 1, "--c": 3 }}
            className="elem col-start-[var(--c)] row-start-[var(--r)]"
          >
            <img
              src="src\img\1.jpg"
              alt="Image 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            style={{ "--r": 1, "--c": 7 }}
            className="elem col-start-[var(--c)] row-start-[var(--r)]"
          >
            <img
              src="src\img\2.jpg"
              alt="Image 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            style={{ "--r": 2, "--c": 2 }}
            className="elem col-start-[var(--c)] row-start-[var(--r)]"
          >
            <img
              src="src\img\3.jpg"
              alt="Image 3"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            style={{ "--r": 2, "--c": 5 }}
            className="elem col-start-[var(--c)] row-start-[var(--r)]"
          >
            <img
              src="src\img\4.jpg"
              alt="Image 4"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            style={{ "--r": 3, "--c": 1 }}
            className="elem col-start-[var(--c)] row-start-[var(--r)]"
          >
            <img
              src="src\img\5.jpg"
              alt="Image 5"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            style={{ "--r": 3, "--c": 8 }}
            className="elem col-start-[var(--c)] row-start-[var(--r)]"
          >
            <img
              src="src\img\6.jpg"
              alt="Image 6"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            style={{ "--r": 4, "--c": 4 }}
            className="elem col-start-[var(--c)] row-start-[var(--r)]"
          >
            <img
              src="src\img\7.jpg"
              alt="Image 7"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            style={{ "--r": 4, "--c": 6 }}
            className="elem col-start-[var(--c)] row-start-[var(--r)]"
          >
            <img
              src="src\img\8.jpg"
              alt="Image 8"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            style={{ "--r": 5, "--c": 2 }}
            className="elem col-start-[var(--c)] row-start-[var(--r)]"
          >
            <img
              src="src\img\9.jpg"
              alt="Image 9"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            style={{ "--r": 5, "--c": 7 }}
            className="elem col-start-[var(--c)] row-start-[var(--r)]"
          >
            <img
              src="src\img\10.jpg"
              alt="Image 10"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            style={{ "--r": 6, "--c": 1 }}
            className="elem col-start-[var(--c)] row-start-[var(--r)]"
          >
            <img
              src="src\img\11.jpg"
              alt="Image 11"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            style={{ "--r": 6, "--c": 5 }}
            className="elem col-start-[var(--c)] row-start-[var(--r)]"
          >
            <img
              src="src\img\12.jpg"
              alt="Image 12"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            style={{ "--r": 7, "--c": 3 }}
            className="elem col-start-[var(--c)] row-start-[var(--r)]"
          >
            <img
              src="src\img\13.jpg"
              alt="Image 13"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            style={{ "--r": 7, "--c": 8 }}
            className="elem col-start-[var(--c)] row-start-[var(--r)]"
          >
            <img
              src="src\img\14.jpg"
              alt="Image 14"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            style={{ "--r": 8, "--c": 2 }}
            className="elem col-start-[var(--c)] row-start-[var(--r)]"
          >
            <img
              src="src\img\15.jpg"
              alt="Image 15"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            style={{ "--r": 8, "--c": 6 }}
            className="elem col-start-[var(--c)] row-start-[var(--r)]"
          >
            <img
              src="src\img\16.jpg"
              alt="Image 16"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            style={{ "--r": 9, "--c": 4 }}
            className="elem col-start-[var(--c)] row-start-[var(--r)]"
          >
            <img
              src="src\img\17.jpg"
              alt="Image 17"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            style={{ "--r": 9, "--c": 7 }}
            className="elem col-start-[var(--c)] row-start-[var(--r)]"
          >
            <img
              src="src\img\18.jpg"
              alt="Image 18"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            style={{ "--r": 10, "--c": 1 }}
            className="elem col-start-[var(--c)] row-start-[var(--r)]"
          >
            <img
              src="src\img\19.jpg"
              alt="Image 19"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            style={{ "--r": 10, "--c": 5 }}
            className="elem col-start-[var(--c)] row-start-[var(--r)]"
          >
            <img
              src="src\img\20.jpg"
              alt="Image 20"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            style={{ "--r": 11, "--c": 3 }}
            className="elem col-start-[var(--c)] row-start-[var(--r)]"
          >
            <img
              src="src\img\21.jpg"
              alt="Image 21"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            style={{ "--r": 11, "--c": 7 }}
            className="elem col-start-[var(--c)] row-start-[var(--r)]"
          >
            <img
              src="src\img\22.jpg"
              alt="Image 22"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            style={{ "--r": 12, "--c": 2 }}
            className="elem col-start-[var(--c)] row-start-[var(--r)]"
          >
            <img
              src="src\img\23.jpg"
              alt="Image 23"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            style={{ "--r": 12, "--c": 5 }}
            className="elem col-start-[var(--c)] row-start-[var(--r)]"
          >
            <img
              src="src\img\24.jpg"
              alt="Image 24"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            style={{ "--r": 13, "--c": 1 }}
            className="elem col-start-[var(--c)] row-start-[var(--r)]"
          >
            <img
              src="src\img\25.jpg"
              alt="Image 25"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            style={{ "--r": 13, "--c": 8 }}
            className="elem col-start-[var(--c)] row-start-[var(--r)]"
          >
            <img
              src="src\img\26.jpg"
              alt="Image 26"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            style={{ "--r": 14, "--c": 4 }}
            className="elem col-start-[var(--c)] row-start-[var(--r)]"
          >
            <img
              src="src\img\27.jpg"
              alt="Image 27"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            style={{ "--r": 14, "--c": 6 }}
            className="elem col-start-[var(--c)] row-start-[var(--r)]"
          >
            <img
              src="src\img\28.jpg"
              alt="Image 28"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            style={{ "--r": 15, "--c": 2 }}
            className="elem col-start-[var(--c)] row-start-[var(--r)]"
          >
            <img
              src="src\img\29.jpg"
              alt="Image 29"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            style={{ "--r": 15, "--c": 7 }}
            className="elem col-start-[var(--c)] row-start-[var(--r)]"
          >
            <img
              src="src\img\30.jpg"
              alt="Image 30"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            style={{ "--r": 16, "--c": 1 }}
            className="elem col-start-[var(--c)] row-start-[var(--r)]"
          >
            <img
              src="src\img\31.jpg"
              alt="Image 31"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            style={{ "--r": 16, "--c": 5 }}
            className="elem col-start-[var(--c)] row-start-[var(--r)]"
          >
            <img
              src="src\img\32.jpg"
              alt="Image 32"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            style={{ "--r": 17, "--c": 3 }}
            className="elem col-start-[var(--c)] row-start-[var(--r)]"
          >
            <img
              src="src\img\33.jpg"
              alt="Image 33"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            style={{ "--r": 17, "--c": 8 }}
            className="elem col-start-[var(--c)] row-start-[var(--r)]"
          >
            <img
              src="src\img\34.jpg"
              alt="Image 34"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            style={{ "--r": 18, "--c": 2 }}
            className="elem col-start-[var(--c)] row-start-[var(--r)]"
          >
            <img
              src="src\img\35.jpg"
              alt="Image 35"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            style={{ "--r": 18, "--c": 6 }}
            className="elem col-start-[var(--c)] row-start-[var(--r)]"
          >
            <img
              src="src\img\36.jpg"
              alt="Image 36"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            style={{ "--r": 19, "--c": 4 }}
            className="elem col-start-[var(--c)] row-start-[var(--r)]"
          >
            <img
              src="src\img\37.jpg"
              alt="Image 37"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            style={{ "--r": 19, "--c": 7 }}
            className="elem col-start-[var(--c)] row-start-[var(--r)]"
          >
            <img
              src="src\img\38.jpg"
              alt="Image 38"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            style={{ "--r": 20, "--c": 1 }}
            className="elem col-start-[var(--c)] row-start-[var(--r)]"
          >
            <img
              src="src\img\39.jpg"
              alt="Image 39"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            style={{ "--r": 20, "--c": 5 }}
            className="elem col-start-[var(--c)] row-start-[var(--r)]"
          >
            <img
              src="src\img\40.jpg"
              alt="Image 40"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="image-gallery grid grid-cols-5 gap-4 p-4">
          {[...Array(40)].map((_, index) => (
            <div key={index} className="elem">
              <img
                src={`src/img/${index + 1}.jpg`}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center">
        <h1 className="text-5xl font-regular text-white mb-4 font-['Helvetica_Now_Display'] uppercase">
          Antique Treasures<sup>®</sup>
        </h1>
        <h2 className="text-3xl font-light text-white font-['Helvetica']">
          並外れたファッション
        </h2>
      </div>

      <div className="absolute w-full h-screen bg-[#D1D1D1] mx-auto py-96 z-[999] text-center flex items-center justify-center">
        <p className="text-lg font-['Helvetica'] text-gray-800 w-3/4">
          We are a company that specializes in handling antique objects. Our
          expertise lies in curating, preserving, and showcasing rare and
          valuable artifacts from various historical periods. With a passion for
          history and an eye for authenticity, we bring the past to life through
          our carefully selected collection of antiques.
        </p>
      </div>
    </div>
  );
};

export default App;
