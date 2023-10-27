import { useEffect, useRef, useState } from "react";

function Content() {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [showButton, setShowButton] = useState(false); // State to control button visibility

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.classList.add("animate");

      // Wait for the fadeIn animation to complete (3.2 seconds) and then show the button
      const animationDuration = 3.2 * 1000; // Convert seconds to milliseconds
      const timeout = setTimeout(() => {
        setShowButton(true);
      }, animationDuration); // Wait for the animation to complete before showing the button

      // Clear the timeout to avoid triggering the button reveal if the component is unmounted
      return () => {
        clearTimeout(timeout);
      };
    }
  }, []);

  const openResume = () => {
    const resumeWindow = window.open("/assets/CurriculumVitae.pdf", "_blank");
    if (resumeWindow) {
      setTimeout(() => {
        resumeWindow.document.title = "Curriculum Vitae";
      }, 50); // Add a slight delay to ensure the window is fully loaded
    }
  };

  return (
    <div
      className={`content ${showButton ? "show-button" : ""}`}
      ref={contentRef}
    >
      <div className="main">
        <img
          src="/assets/me.png"
          alt="programmer"
          className={`intro-picture slide-from-left-animation`}
        />
        <p>
          Hello, I am Van Xavier. <br />I <span className="name">design</span>{" "}
          and <span className="name">develop</span> websites.
        </p>
      </div>
      {showButton && (
        <button className="resume-button" onClick={openResume}>
          Curriculum Vitae
        </button>
      )}
    </div>
  );
}

export default Content;
