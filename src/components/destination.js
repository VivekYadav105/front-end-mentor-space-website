import { fireStore as db } from "../firebaseConfig";
import { collection, getDocs, addDoc } from "firebase/firestore";
import bg from "../resources/images/background/background-destination-desktop.jpg";
import { PlanetTabs, PlanetImage } from "./planet";
import "../resources/css/destination.css";
import { useEffect, useState } from "react";

const Destination = (props) => {
  const [planet, setPlanet] = useState("");

  useEffect(() => {
    props.changeBg(bg);
  });

  async function loadData(i) {
    setPlanet("");
    try {
      const destinationRef = collection(db, "destinations");
      const data = await getDocs(destinationRef);
      const Promiseresult = data.docs.filter((doc) => doc.data().name === i);
      const result = Promiseresult[0].data();
      setPlanet(result);
    } catch (err) {
      console.log("error in fetching data from destination");
      console.log(err);
    }
  }

  return (
    <section className="page" id="destination-section">
      <section className="main">
        <div className="left" style={{ margin: "1rem", flex: 1 }}>
          <PlanetImage planet={planet}></PlanetImage>
        </div>
        <div className="right" style={{ margin: "1rem", flex: 1 }}>
          <PlanetTabs loadData={loadData} planet={planet}></PlanetTabs>
        </div>
      </section>
    </section>
  );
};

export default Destination;
