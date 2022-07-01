import "../resources/css/crew.css";
import { fireStore as db, storage } from "../firebaseConfig";
import { collection, getDocs, addDoc } from "firebase/firestore";
import bg from "../resources/images/background/background-crew-desktop.jpg";
import { Tabs } from "./tabComponent";
import { useEffect, useState } from "react";
import Caption from "./caption";
import { getDownloadURL, ref } from "firebase/storage";

function Crew(props) {
  const [crew, setCrew] = useState({});

  useEffect(() => {
    props.changeBg(bg);
  }, []);

  async function loadData(i) {
    setCrew("");
    try {
      const crewRef = collection(db, "crew");
      const data = await getDocs(crewRef);
      const result = data.docs[i].data();
      setCrew(result);
    } catch (err) {
      console.log("error in fetching data from technology");
      console.log(err);
    }
  }

  return (
    <section className="page" id="crew-section">
      <div className="main">
        <div className="left">
          <Caption num="03" heading="meet our crew"></Caption>
          <Tabs loadData={loadData} crew={crew}></Tabs>
        </div>
        <div className="right">
          <div className="imageWrapper" id="crewImgWrapper">
            {crew ? (
              <img src={crew.imgLoc}></img>
            ) : (
              <h1 className="heading-4">Loading</h1>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Crew;
