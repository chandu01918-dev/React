import React from "react";
import Events from "../assets/Events.png";
import marketing from "../assets/marketing.jpg";
import social from "../assets/social.jpg";

export default function Services() {
  return (
    <div className="services-container" >
      


      {/* Events */}
      <div className="service-row">
        <div className="service-text text-animate-left">
          <h1>Events</h1>
          <p>
            Dedicated to creating distinctive artistic experiences, Zeit crafts
            innovative event concepts aligned with brand positioning and client
            objectives, while delivering end-to-end planning and execution.From strategy to execution, every event is carefully managed to ensure consistency, professionalism, and a unique brand experience.
          </p>
        </div>
        <div className="service-image">
          <img src={Events} alt="Events" />
        </div>
      </div>

      {/* Marketing */}
      <div className="service-row reverse">
        <div className="service-text text-animate-right">
          <h2>Integrated Marketing Communication</h2>
          <p>
            Through deep customer insight and data-driven planning, our IMC
            approach aligns communication strategies with business growth
            objectives.By delivering consistent messaging across multiple touchpoints, Zeit help brands optimize resources, maximize impact, and build stronger connections with target audiences.
          </p>
        </div>
        <div className="service-image">
          <img src={marketing} alt="Marketing" />
        </div>
      </div>

      {/* Media */}
      <div className="service-row">
        <div className="service-text text-animate-left" >
          <h1>Media Network</h1>
          <p>
            With a diverse media network, brands are empowered to expand their
            reach, strengthen visibility, and engage target audiences more
            effectively.Through services including media booking, sponsorship partnerships, and earned coverage, Zeit deliver comprehensive media solutions that amplify communication impact and elevate brand value.
          </p>
        </div>
        <div className="service-image">
          <img src={social} alt="Media" />
        </div>
      </div>
      

    </div>
  );
}
