function App() {
  const handleAPI = () => {
    fetch("https://randomuser.me/api/?results=5000").then((res) =>
      res.json().then((data) => {
        console.log(data.results);
      })
    );
  };
  return (
    <div className="App">
      <h3> Random User generator</h3>
      <button onClick={handleAPI}>Call the API</button>
    </div>
  );
}

export default App;
