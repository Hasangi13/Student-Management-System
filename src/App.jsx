function App() {

  function handleClick() {
    alert("Button clicked!");
  }

  return (
    <div>
      <h1>React Events</h1>

      <button onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}

export default App;

