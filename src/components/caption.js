function Caption(props) {
  return (
    <div className="section-heading-wrapper">
      <h1 className="section-caption" id="heading">
        <span>
          {props.num}
        </span>
        {props.heading}
      </h1>
    </div>
  );
}

export default Caption
