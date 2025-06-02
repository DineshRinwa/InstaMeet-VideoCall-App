import { ShipWheelIcon, LogIn, Linkedin, X, Github } from "lucide-react";
import { Link } from "react-router-dom";

// Image Assets
import logo from "../assets/call-bro.png";
import deshboard from "../assets/instameet.png";
import chat from "../assets/mobileInsta.png";
import video from "../assets/videoCall.png";
import chatImage from "../assets/people-chat.png";
import chatImage1 from "../assets/people-chat2.png";
import sayHello from "../assets/say-hello.png";
import sayHello2 from "../assets/say-hello2.png";

export const DefaultHomePage = () => {
  // Common utility classes for footer icons
  const iconBaseClasses = `
    relative inline-flex items-center justify-center w-10 h-10 rounded-full 
    text-[#111b21] bg-[#25d366] overflow-hidden 
    transition-colors duration-500 ease-in-out group
  `;

  const overlayClasses = `
    absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 
    transition-transform duration-500 ease-in-out z-0
  `;

  const iconWrapper = `relative z-10 w-5 h-5 sm:w-6 sm:h-6`;

  return (
    <div className="min-h-screen bg-[#fcf5eb]">
      {/* Root Container */}
      <div className="bg-[#fcf5eb] pb-10 max-w-[1440px] mx-auto w-full pt-[4rem]">
        {/* ========== NAVIGATION BAR ========== */}
        <nav className="max-w-[1440px] m-auto fixed top-0 left-0 right-0 z-50 h-16 flex  items-center justify-between px-4 md:px-6 backdrop-blur-md bg-transparent text-[#1c1e21]">
          {/* Brand Logo */}
          <div className="pl-2 md:pl-5 flex items-center gap-2.5">
            <Link to="/" className="flex items-center gap-2.5">
              <ShipWheelIcon className="w-6 h-6 md:w-9 md:h-9 text-[#7c780c]" />
              <span className="text-xl md:text-3xl font-bold font-mono tracking-wider text-[#7c780c]">
                InstaMeet
              </span>
            </Link>
          </div>

          {/* Authentication Buttons */}
          <div className="flex flex-wrap items-center gap-3 pr-2 md:pr-5 mt-2 md:mt-0 w-full md:w-auto justify-center md:justify-end">
            <Link
              to="/signup"
              className="relative overflow-hidden px-4 md:px-6 py-2 border rounded-3xl text-[#1C1E21] bg-white font-sans text-xs md:text-sm lg:text-lg transition-colors duration-500 hover:text-white group w-fit min-w-[100px] text-center"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Sign up
              </span>
              <span className="absolute inset-0 bg-[#1C1E21] origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-in-out" />
            </Link>

            <Link
              to="/login"
              className="relative overflow-hidden px-4 md:px-6 py-2 border rounded-3xl text-[#1C1E21] bg-[#26d466] font-sans text-xs md:text-sm lg:text-lg transition-colors duration-500 hover:text-white group w-fit min-w-[100px] text-center"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <LogIn size={16} /> Log in
              </span>
              <span className="absolute inset-0 bg-[#1C1E21] origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-in-out" />
            </Link>
          </div>
        </nav>

        {/* ========== HERO SECTION ========== */}
        <section className="w-[90%] m-auto mt-[3rem] rounded-3xl bg-[#000] flex flex-col lg:flex-row">
          {/* Left: Text */}
          <div className="w-full lg:w-[38%] text-amber-50 p-6 flex flex-col justify-center items-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[3rem] font-bold text-center mb-6 px-4 md:leading-normal  sm:leading-snug">
              Message & Video Call Privately
            </h1>
            <p className="text-center text-base md:text-lg">
              Simple, reliable, private messaging and calling for free,
              <br />
              available all over the world.
            </p>
          </div>

          {/* Right: Image */}
          <div className="w-full lg:w-[62%] overflow-hidden flex items-center justify-center">
            <img
              src={logo}
              alt="Messaging and video call illustration"
              className="w-full h-auto object-contain"
            />
          </div>
        </section>

        {/* ========== MORDEN DESHBOARD SECTION =========== */}
        <section className="w-[90%] m-auto mt-[10rem] rounded-3xl bg-[#000] flex flex-col justify-center items-center py-16">
          <div className="w-full lg:w-[38%] text-amber-50 p-6 flex flex-col justify-center items-center">
            <h1 className="whitespace-nowrap text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-center mb-6 leading-tight tracking-tight dashboard-heading">
              Modern Dashboard
            </h1>

            <p className="text-center text-base md:text-lg text-amber-100">
              Simple, modern, responsive dashboard for all users
              <br />
              with real-time online status.
            </p>
          </div>

          {/* Image */}
          <div className="w-full lg:w-[62%] overflow-hidden flex items-center justify-center m-10">
            <img
              src={deshboard}
              alt="Messaging and video call illustration"
              className="w-full h-auto object-contain rounded-3xl"
            />
          </div>
        </section>

        {/* ========== CHAT AND VIDEO CALL SECTION =========== */}
        <section className="w-[90%] m-auto mt-[10rem] rounded-3xl bg-[#000] flex flex-col justify-center items-center py-16">
          <div className="w-full lg:w-[38%] text-amber-50 p-6 flex flex-col justify-center items-center">
            <h1 className="whitespace-nowrap text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-center mb-6 leading-tight tracking-tight dashboard-heading">
              Chat & Video Call
            </h1>

            <p className="text-center text-base md:text-lg text-amber-100">
              Users can chat, make video calls, and share their screens with
              real-time responses.
            </p>
          </div>

          <div className="flex flex-col items-center md:flex-row gap-4 mt-10 h-auto md:h-[40rem] p-6">
            {/* Left Image */}
            <div className="w-full md:w-1/2 h-[20rem] md:h-full overflow-hidden flex items-center justify-center">
              <img
                src={chat}
                alt="Messaging and video call illustration"
                className="w-full h-full object-cover rounded-3xl border-2"
              />
            </div>

            {/* Right Image */}
            <div className="w-full md:w-1/2 h-[20rem] md:h-full overflow-hidden flex items-center justify-center">
              <img
                src={video}
                alt="Video call illustration"
                className="w-full h-full object-cover rounded-3xl border-2"
              />
            </div>
          </div>
        </section>

        {/* ========== CHAT FEATURES SECTION ========== */}
        <section className="mt-40">
          {/* First Image */}
          <div className="mt-10 mx-auto w-[90%] sm:w-[85%]">
            <img
              src={chatImage}
              alt="Group chat illustration"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Description Text */}
          <div className="p-4 sm:p-6 md:p-8 w-[90%] md:w-[70%] lg:w-[70%] m-auto">
            <h2 className="font-sans text-base sm:text-lg md:text-xl lg:text-[36px] xl:text-[48px] text-center text-[#1C1E21] md:font-semibold md:leading-snug">
              With private messaging and calling, you can be yourself, speak
              freely and feel close to the most important people in your life no
              matter where they are.
            </h2>
          </div>

          {/* Second Image */}
          <div className="mt-10 mx-auto w-[90%] sm:w-[85%]">
            <img
              src={chatImage1}
              alt="Mobile app chat preview"
              className="w-full h-auto object-contain"
            />
          </div>
        </section>

        {/* ========== STICKERS & VOICE SECTION ========== */}
        <section className="w-[90%] m-auto pt-20 flex flex-col lg:flex-row">
          {/* Image Container with Overlay */}
          <div className="relative w-fit mx-auto">
            <img
              src={sayHello2}
              alt="Decorative background"
              className="w-full h-auto"
            />
            <img
              src={sayHello}
              alt="Say hello image overlay"
              className="absolute inset-0 w-full h-full object-contain"
            />
          </div>

          {/* Accompanying Text */}
          <div className="w-full lg:w-1/2 px-4 py-8 sm:text-left mt-16">
            <h1 className="font-sans font-semibold text-[#1C1E21] text-xl sm:text-2xl md:text-4xl lg:text-[3rem] leading-none text-center">
              Say what you feel
              {/* <br className="hidden sm:block" /> */}
            </h1>
            <p className="m-auto font-sans text-[#1C1E21] mt-8 text-base sm:text-lg md:text-xl lg:text-2xl leading-tight w-full sm:w-[80%] md:w-[70%] lg:w-[90%] text-center">
              Express yourself without words. Use stickers and GIFs or share
              everyday moments on Status. Record a voice message for a quick
              hello or a longer story.
            </p>
          </div>
        </section>
      </div>

      {/* Decorative bottom section */}
      <div className="bg-black m-auto">
        <div className="p-10 rounded-b-[2rem] sm:rounded-b-[3rem] lg:rounded-b-[5rem] bg-[#fcf5eb]" />
      </div>

      {/* ========== FOOTER SECTION ========== */}
      <footer className="w-full m-auto bg-black">
        <div className="max-w-[1440px] w-[90%] mx-auto py-10 px-4 flex flex-col md:flex-row justify-between items-center gap-10">
          {/* Footer Logo (visible on all screens now) */}
          <div className="flex items-center gap-2.5">
            <Link to="/" className="flex items-center gap-2.5">
              <ShipWheelIcon className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 text-[#7c780c]" />
              <span className="text-lg sm:text-xl md:text-3xl font-bold font-mono tracking-wider text-[#7c780c]">
                InstaMeet
              </span>
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://x.com/DR65561261"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter/X profile"
              className={iconBaseClasses}
            >
              <span className={overlayClasses} />
              <X className={iconWrapper} />
            </a>
            <a
              href="https://www.linkedin.com/in/dinesh-rinwa/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className={iconBaseClasses}
            >
              <span className={overlayClasses} />
              <Linkedin className={iconWrapper} />
            </a>
            <a
              href="https://github.com/dineshrinwa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className={iconBaseClasses}
            >
              <span className={overlayClasses} />
              <Github className={iconWrapper} />
            </a>
          </div>
        </div>

        <p className="text-center text-[#fff] text-sm md:text-base">
          © 2025 InstaMeet. All rights reserved.
        </p>
      </footer>
    </div>
  );
};
