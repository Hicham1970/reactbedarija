export default function Fruits({ fruits }) {
  const displayFruits = () => {
    return fruits.map((fruit) => <li className="listItems">{fruit}</li>);
  };
  return (
    <>
      <h1 className="h1"> Fruits : </h1>
      <ul className="myList">{displayFruits()}</ul>
    </>
  );
}
