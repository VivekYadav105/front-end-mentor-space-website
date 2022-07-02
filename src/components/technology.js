import "../resources/css/technology.css";
import Caption from "./caption";
import { useEffect, useState } from "react";
import { VerticalTabs } from "./tabComponent";
import { getDocs, collection } from "firebase/firestore";
import { fireStore as db, storage } from "../firebaseConfig";
import CircleLoader from 'react-spinners/'

function Technology(props) {
  const [tech, setTech] = useState();

  useEffect(() => {
    if (window.innerWidth > 850) {
      props.changeBg("images/background/background-technology-desktop.jpg");
    } else {
      props.changeBg("images/background/background-technology-tablet.jpg");
    }
  });

  async function loadData(i) {
    try {
      setTech("");
      const techRef = collection(db, "technology");
      const data = await getDocs(techRef);
      const result = data.docs[i].data();
      setTech(result);
    } catch (err) {
      console.log("error in fetching data from technology");
      console.log(err);
    }
  }

  return (
    <section className="page" id="tech-section">
      <div className="main">
        <div className="left">
          <Caption num="04" heading="space launch 101"></Caption>
          <VerticalTabs loadData={loadData} tech={tech}></VerticalTabs>
        </div>
        <div className="right">
          {tech ? (
            <div className="imageWrapper">
              <img src={tech.imgLoc} alt="" />
            </div>
          ) : (
            <h1 className="heading-4">Loading</h1>
          )}
        </div>
      </div>
    </section>
  );
}

export default Technology;
