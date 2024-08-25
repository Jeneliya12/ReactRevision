import Test from "./props/test";
function App() {
  return (
    <div>
      <Test
        personone={{ firstname: "jenny", lastname: "grg" }}
        persontwo={{ firstname: "milli", lastname: "brook" }}
      />
    </div>
  );
}

export default App;
