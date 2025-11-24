import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view card-3d">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I’m a <span className="purple">B.Tech IT student </span>
            who thrives on data, code, and building smart, scalable systems. I specialize in
            <span className="purple"> Data Analytics, Web Development, and DSA,</span>
            <br />
            backed by real-world experience at 
            <span className="purple"> Innoplexus, the Google GenAI Exchange, and HackRX. </span>
            <br />
            When I’m not shipping AI-driven projects, I’m leveling up my skills or crafting my next idea. 
            I keep it simple: learn fast, build faster, deliver impact.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>

          <ul className="clean-list">
            <li>Listening to music and discovering new artists</li>
            <li>Traveling and exploring new places for inspiration</li>
            <li>Approaching new people and building meaningful connections</li>
            <li>Listening to podcasts to gain insights</li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;