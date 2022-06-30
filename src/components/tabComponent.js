import { useState, useEffect } from "react";

export function Tabs(props) {
  const [activeTab, setActive] = useState(0);

  useEffect(() => {
    props.loadData(activeTab);
  }, [activeTab]);

  return (
    <div className="tabsWrapper">
      <div className="text-wrapper">
        {props.crew ? (
          <>
            <h1 className="heading-4">{props.crew.role}</h1>
            <h1 className="heading-3">{props.crew.name}</h1>
            <div className="text">
              <p>{props.crew.bio}</p>
            </div>
          </>
        ) : (
          <h1 className="heading-3">Loading</h1>
        )}
      </div>
      <div className="slide-buttons">
        <span
          className={`circle ${activeTab === 0 ? "active" : null}`}
          onClick={() => {
            setActive(0);
          }}
        ></span>
        <span
          className={`circle ${activeTab === 1 ? "active" : null}`}
          onClick={() => {
            setActive(1);
          }}
        ></span>
        <span
          className={`circle ${activeTab === 2 ? "active" : null}`}
          onClick={() => {
            setActive(2);
          }}
        ></span>
        <span
          className={`circle ${activeTab === 3 ? "active" : null}`}
          onClick={() => {
            setActive(3);
          }}
        ></span>
      </div>
    </div>
  );
}

export function VerticalTabs(props) {
  const [activeTab, setActive] = useState(0);

  useEffect(() => {
    props.loadData(activeTab);
  }, [activeTab]);

  return (
    <div className="tabsWrapper">
      <div className="buttons">
        <button
          className={`button-main-transparent  ${
            activeTab === 0 ? "active" : null
          }`}
          onClick={() => {
            setActive(0);
          }}
        >
          1
        </button>
        <button
          className={`button-main-transparent  ${
            activeTab === 1 ? "active" : null
          }`}
          onClick={() => {
            setActive(1);
          }}
        >
          2
        </button>
        <button
          className={`button-main-transparent  ${
            activeTab === 2 ? "active" : null
          }`}
          onClick={() => {
            setActive(2);
          }}
        >
          3
        </button>
      </div>
      {props.tech ? (
        <div className="tab">
          <h1
            className="section-caption"
            style={{ margin: "1.5rem 1", padding: "0px", color: "#d0d9f9" }}
          >
            the terminology...
          </h1>
          <h1 className="heading-3" style={{ margin: "1rem" }}>
            {props.tech.name}
          </h1>
          <div className="text" style={{ padding: "0" }}>
            <p>{props.tech.description}</p>
          </div>
        </div>
      ) : (
        <h1 className="heading-2">Loading</h1>
      )}
    </div>
  );
}
