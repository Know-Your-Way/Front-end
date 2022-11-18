import React from "react";

const About = () => {
  return (
    <div className="mx-auto">
      <img className=" min-h-fit object-cover absolute "
        src="../Asset/bg.jpg" alt="bg"/>
      <div className="container mx-auto flex">
        <div className="w-1/2">
          <h2 className="leading-none text-4xl pt-10 pl-20 font-semibold  text-white absolute">
            About Us
          </h2>
          <p className=" pt-20 pl-20 w-2/5 mt-10 text-2xl   text-justify text-yellow-300 absolute">
            The walnut wood card tray is precision milled to perfectly fit a
            stack of Focus cards. The powder coated steel divider separates
            active cards from new ones, or can be used to archive important task
            lists.
          </p>
        </div>
        <div className="z-10 w-1/2">
          <img className="pl-20 pt-10" src="../Asset/About.svg" alt=""  width="384" height="512"/>
        </div>
      </div>

      <div className="container mx-auto flex">
        <div className="z-10 pt-10 w-1/2">
          <img src="../Asset/AboutUs.jpg" alt="bg" className="w-80 pt-20 pl-20" />
        </div>
        <div className="w-1/2 pt-10">
          <h2 className="leading-none pt-10 text-4xl font-semibold text-white absolute">
            Who are we?
          </h2>
          <p className="w-2/5 mt-20 pt-10 text-2xl text-justify text-yellow-300 absolute">
            There are many variations of passages of Lorem Ipsum available, But
            the majority have suffered alteration in some form, by injected
            humour, or randomized words which don't look even slightly
            believable. There are many variations of passages of Lorem ipsum
            available.
          </p>
        </div>
      </div>

      <div className="container mx-auto flex pt-20">
        <div className=" w-full pl-40 min-h-full">
          <h2 className="leading-none text-4xl pl-60 mx-auto font-semibold text-white absolute">
            What is our motive?
          </h2>
          <p className=" h-24 min-h-0 pt-20 w-3/5 text-2xl text-justify justify-center text-yellow-300 absolute">
            Its a long established fact that a reader wil be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem ipsum is that it has more-or-less normal distribution of
            letters, as opposed to using 'Content here, Content here' making it
            look like more readable English. Many desktop publication pages.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
