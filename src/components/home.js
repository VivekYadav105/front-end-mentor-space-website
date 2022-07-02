import "../resources/css/home.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Home(props) {
  useEffect(() => {
    if(window.innerWidth>850){props.changeBg('images/background/background-home-desktop.jpg')}
    else{props.changeBg('images/background/background-home-tablet.jpg')}
  },[]);

  return (
    <section className="page" id="home">
      <div className="main" id="home-section">
        <div className="left">
          <div className="text">
            <p>
              <span className="heading-5">So, you want to travel to </span>
              <span className="heading-1">Space</span>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience
            </p>
          </div>
        </div>
        <div className="right">
          <Link to="/dest">
            <button className="button-main">Explore</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
