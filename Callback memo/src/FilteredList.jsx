import { useMemo } from "react";

function FilteredList({ list }) {
    
    const filteredList = useMemo(() => {
      return list.filter((item) => item.age > 18);
    }, [list]);
  
    return (
      <div>
        <h1> Lista maggiorenni </h1>
        <ul>
          {filteredList.map((item) => (
            <li key={item.id}>
              {item.name} - Age: {item.age}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default FilteredList;