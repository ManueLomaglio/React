import Color from "./Colors";

function App() {
  return (
    <main>
      <h1>Lista di colori</h1>
      <Color
        colors={[
          { id: 1, name: "green" },
          { id: 2, name: "red" },
          { id: 3, name: "blue" },
          { id: 4, name: "yellow" },
          { id: 5, name: "gray" },
        ]}
      />
      ;
    </main>
  );
}

export default App;
