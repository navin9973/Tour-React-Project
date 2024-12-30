import { useState } from "react";
function Cards({ move, ...ele }) {
  const [readmore, setRead] = useState(false);
  const description = readmore ? ele.info : `${ele.info.substring(0, 200)}....`;
  function more() {
    setRead(!readmore);
  }

  return (
    <div className="card">
      <img className="image" src={ele.image}></img>
      <div className="place">
        <div>₹{ele.price}</div>
        <div>{ele.name}</div>
      </div>
      <div>
        <div className="des">
          {description}
          <span className="read" onClick={more}>{`${
            readmore ? "read less" : "read more"
          }`}</span>
        </div>
      </div>
      <button className="not-intrest" onClick={() => move(ele.id)}>
        Not Intrested
      </button>
    </div>
  );
}

export default Cards;
