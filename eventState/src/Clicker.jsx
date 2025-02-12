function Clicker() {
  function handleClick(event) {
        event.stopPropagation();
    console.log(event.target
    )
  }

  return (
    <button onClick={handleClick}>
      {" "}
      <img width={48} height={48} src="./cat.jpg" alt="cat photo" />
    </button>
  );
}
export default Clicker;
