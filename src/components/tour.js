import Cards from "./cards";
function Tours({ data, remove }) {
  return (
    <div className="tour">
      {data.map((ele) => {
        return <Cards key={ele.id} {...ele} move={remove}></Cards>;
      })}
    </div>
  );
}

export default Tours;
