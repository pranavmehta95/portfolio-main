import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const About1 = ({ clientHeight }) => {
  const sectionRef = useRef(null);
  const quoteRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline({
          defaults: { ease: "none", duration: 0.1 },
        })
        .fromTo(
          quoteRef.current.querySelector(".about-1"),
          { opacity: 0.2 },
          { opacity: 1 }
        )
        .to(quoteRef.current.querySelector(".about-1"), {
          opacity: 0.2,
          delay: 0.5,
        })
        .fromTo(
          quoteRef.current.querySelector(".about-2"),
          { opacity: 0.2 },
          { opacity: 1 },
          "<"
        )
        .to(quoteRef.current.querySelector(".about-2"), {
          opacity: 0.2,
          delay: 1,
        });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "center 80%",
        end: "center top",
        scrub: 0,
        animation: tl,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full relative select-none">
      <div
        className={`${
          clientHeight > 650 ? "pt-28 pb-16" : "pt-80 pb-72"
        } section-container flex flex-col md:flex-row items-center gap-12`}
      >
        {/* Left Side: Text Content */}
        <div className="flex flex-col md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-medium text-gradient mb-6">
            About Me
          </h2>
          <h1
            ref={quoteRef}
            className="font-medium text-[2.2rem] md:text-4xl lg:text-5xl text-left"
          >
            <span className="about-1 leading-tight">
              I&apos;m an engineering student passionate about technology
              and web development.{" "}
            </span>
            <span className="about-2 leading-tight">
              I enjoy building projects, exploring modern tools, and continuously
              improving my skills as a developer.{" "}
            </span>
          </h1>
        </div>

        {/* Right Side: Profile Picture */}
        <div className="md:w-1/2 flex items-center justify-center">
          <div
            className="relative rounded-xl overflow-hidden"
            style={{
              width: "280px",
              height: "340px",
              boxShadow: "0 0 30px rgba(99, 102, 241, 0.5), 0 0 60px rgba(99, 102, 241, 0.2)",
              border: "3px solid rgba(99, 102, 241, 0.6)",
            }}
          >
            <img
              src="https://avatars.githubusercontent.com/u/145219665?v=4"
              alt="About Me"
              className="w-full h-full object-cover"
              style={{ transform: "scale(1.1)" }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About1;
