import CalculateScore from "./Components/CalculateScore";

function App() {
  return (
    <div>
      <CalculateScore
        name="Subiksha M"
        school="Bannari Amman Institute of Technology"
        total={480}
        goal={6}
      />
    </div>
  );
}

export default App;