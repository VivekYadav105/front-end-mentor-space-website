import Caption from "./caption";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../firebaseConfig";

import { useEffect, useState } from "react";

export function PlanetTabs(props) {
  const [activeTab, setActiveTab] = useState("Moon");



  useEffect(() => {
    props.loadData(activeTab);
  }, [activeTab]);

  return (
    <div className="tabs">
      <ul className="tab-selection ul-row">
        <li
          className={activeTab == "Moon" ? "active-link" : ""}
          onClick={() => {
            setActiveTab("Moon");
          }}
        >
          Moon
        </li>
        <li
          className={activeTab == "Mars" ? "active-link" : ""}
          onClick={() => {
            setActiveTab("Mars");
          }}
        >
          Mars
        </li>
        <li
          className={activeTab == "Europa" ? "active-link" : ""}
          onClick={() => {
            setActiveTab("Europa");
          }}
        >
          Europa
        </li>
        <li
          className={activeTab == "Titan" ? "active-link" : ""}
          onClick={() => {
            setActiveTab("Titan");
          }}
        >
          Titan
        </li>
      </ul>
      <div className="tab" id="plannetWrapper">
        {props.planet ? (
          <>
            <h1 className="heading-2">{props.planet.name}</h1>
            <div className="destination-text">
              <p>{props.planet.description}</p>
            </div>
            <div className="planet-info">
              <div className="stat">
                <span className="subheading-2">Avg. distance</span>
                <h1 className="subheading-1">{props.planet.distance}</h1>
              </div>
              <div className="stat">
                <span className="subheading-2">Est. Travel time</span>
                <h1 className="subheading-1">{props.planet.travel}</h1>
              </div>
            </div>
          </>
        ) : (
          <div style={{ margin: "3rem 0" }}>
            <h1 className="heading-3">Loading</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export function PlanetImage(props) {
  const [image, setImage] = useState(props.planet.imgLoc);

  useEffect(() => {
    setImage(props.planet.imgLoc);
  }, [props.planet.imgLoc]);

  return (
    <div className="planet">
      <Caption num="01" heading="pick your destination"></Caption>
      {image ? (
        <div className="imageWrapper">
          <img src={image} className="tab-img" />
        </div>
      ) : (
        <h1 className="heading-4">Loading</h1>
      )}
    </div>
  );
}
