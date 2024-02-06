import React from "react";
import crsl1 from "../Assets/crsl1.png"
import crsl2 from "../Assets/crsl2.png"
import crsl3 from "../Assets/crsl3.jpg"
import AOS from 'aos';
AOS.init();

const Program = () => {
  const programData = [
    {
      image: crsl1,
      title: "Choose How Often",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
    },
    {
      image: crsl2,
      title: "Choose How Often",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
    },
    {
      image: crsl3,
      title: "Fast Deliveries",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
  ];
  return (
    <section>
    <div className="work-section-wrapper" data-aos="fade-left">
      <div className="work-section-top" id="program">
        <h1 className="primary-heading">Programs</h1>
      </div>
      <div className="work-section-bottom">
        {programData.map((data) => (
          <div className="work-section-info" key={data.image}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Program;