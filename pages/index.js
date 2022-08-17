import Link from "next/link";

import { useState, useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import Title from "../components/Title";
import Media from "../components/Media";
import { data } from "../data/nav-data";
import useMousePosition from "../hooks/useMousePosition";

const Home = () => {
  const { x, y, clientX, clientY } = useMousePosition();
  const [withChangeValue, setWidthChangeValue] = useState(1);
  const ref1 = useRef();
  const wraperRef = useRef();
  const buttonRef = useRef();
  const containerRef = useRef();

  const { ref, inView, entry } = useInView({
    fallbackInView: true,
  });

  useEffect(() => {
    const handleMouseMove = () => {
      let containerTop = containerRef.current.offsetTop;
      let containerBottom =
        containerRef.current.offsetTop + containerRef.current.offsetHeight;
      // CHECK if element is inside container
      if (y > containerTop && y < containerBottom) {
        buttonRef.current.style.opacity = "1";
        buttonRef.current.style.pointerEvents = "auto";
        return;
      }
      buttonRef.current.style.opacity = "0";
      buttonRef.current.style.pointerEvents = "none";
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [y]);

  // useEffect(() => {
  //   const handleMouseMove = (ev) => {
  //     console.log("rokaaaaaaaj");
  //     // let body = document.querySelector('body');
  //     // let circle = document.getElementById('circle');
  //     // ref1.current.style.left = ev.pageX + "px";
  //     // ref1.current.style.top = ev.pageY + "px";

  //     ref1.current.style.left = ev.pageX + 16 + "px";
  //     ref1.current.style.top = ev.pageY + 16 + "px";
  //   };

  //   const handleScroll = (event) => {
  //     if (
  //       wraperRef.current.getBoundingClientRect().top /
  //         wraperRef.current.offsetHeight <
  //         0.9 &&
  //       wraperRef.current.getBoundingClientRect().top /
  //         wraperRef.current.offsetHeight >
  //         0
  //     ) {
  //       console.log("pokreni animaciju");
  //       setWidthChangeValue(
  //         wraperRef.current.getBoundingClientRect().top /
  //           wraperRef.current.offsetHeight
  //       );
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   window.addEventListener("mousemove", handleMouseMove);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //     window.removeEventListener("mousemove", handleMouseMove);
  //   };
  // }, []);

  // const [activeIndex, setActiveIndex] = useState(-1);

  const widthRation = withChangeValue !== 1 ? 39 * withChangeValue : 0;

  return (
    <>
      <div className="container"></div>
      <div
        className="container"
        // onMouseEnter={() => setMouseEnter(true)}
        // onMouseLeave={() => setMouseEnter(false)}
        ref={containerRef}
      >
        <a
          href="https://www.javascripttutorial.net/javascript-dom/javascript-width-height/"
          style={{
            transform: `translate(${
              clientX - buttonRef.current?.offsetWidth / 2
            }px, ${clientY - buttonRef.current?.offsetHeight / 2}px)`,
          }}
          ref={buttonRef}
        >
          Nas button
        </a>
      </div>
      <div className="container"></div>
      {/* <nav className="nav-wrapper">
        <div className="project-list">
          {data.map(({ title }, index) => {
            return (
              <Title
                key={index}
                title={title}
                setActiveIndex={setActiveIndex}
                index={index}
              />
            );
          })}
        </div>
        <div className="project-media">
          {data.map(({ imgUrl }, index) => {
            const isActive = activeIndex === index;
            const xPos = isActive ? x : 0;
            const yPos = isActive ? y : 0;
            return (
              <Media
                key={index}
                url={imgUrl}
                active={isActive}
                x={xPos}
                y={yPos}
              />
            );
          })}
        </div>
      </nav> */}
      {/* <div className="wrapper-4">
        <div className="wrapper-box">
          <div ref={ref1} className="obj"></div>
        </div>
      </div>
      <div className="wrapper-2">
        <div ref={ref}>
          <h2>{`Header inside viewport ${inView}.`}</h2>
        </div>
      </div>
      <div
        style={{ height: "200px", width: "100%", backgroundColor: "black" }}
      ></div>
      <div ref={wraperRef} className="wrapper-3">
        <div style={{ width: `calc(${69 - widthRation}%)` }}></div>
        <div style={{ width: `calc(${29 + widthRation}%)` }}></div>
      </div>
      <div
        style={{ height: "500px", width: "100%", backgroundColor: "black" }}
      ></div> */}
      {/* <div className="wrapper">
        <div className="even">
          <div className="part-1">
            <p>Text1</p>
            <p>Text2</p>
            <p>Text3</p>
            <p>Text4</p>
          </div>

          <div className="part-2">
            <p>Text1</p>
            <p>Text2</p>
            <p>Text3</p>
            <p>Text4</p>
          </div>
          <div className="part-1">
            <p>Text1</p>
            <p>Text2</p>
            <p>Text3</p>
            <p>Text4</p>
          </div>

          <div className="part-2">
            <p>Text1</p>
            <p>Text2</p>
            <p>Text3</p>
            <p>Text4</p>
          </div>
        </div>

      </div> */}
      {/* <div className="wrapper-img"></div> */}
      {/* <div className="other">
        <div
          // onMouseOver={(ev) => hoverFunc(ev, true)}
          // onMouseOut={(ev) => console.log("out")}
          className="img-wrapper"
        >
          <p>asdasdasd</p>
        </div>
        <img
          style={{
            // top: `${isHovered ? y : 0}px`,
            // left: `${isHovered ? x : 0}px`,
            // opacity: `${isHovered ? "1" : "0"}`,
            top: `${y}px`,
            left: `${x}px`,
          }}
          src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Giraffe_Mikumi_National_Park.jpg"
          alt="giraffe"
        />
      </div> */}
    </>
  );
};

export default Home;
