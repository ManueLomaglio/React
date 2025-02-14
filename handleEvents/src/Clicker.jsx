


function Clicker() {
    function handleButtonClick(event) {
      console.log(event.target.name);
    }
  
    function handlePropClick(event) {
      event.stopPropagation();
      console.log(event.target.src);
    }
  
    return (
      <main className="flex flex-row gap-6">
        <button className="bg-green-700" name="one" onClick={handleButtonClick}>First button</button>
        
        
        <button className="flex flex-row gap-4 bg-amber-300" name="two" onClick={handleButtonClick}>
          <img className="w-16 h-16"  src="./cat.jpg" alt="cat photo"  onClick={handlePropClick} />
         Second button</button>
      </main>
    );
  }
  export default Clicker;
  