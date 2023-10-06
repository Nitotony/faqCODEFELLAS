import "./App.css";
import Accordion from "./Accordion";
import { details } from "./details";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="Accordion-container">
        {details.map(({ title, content }) => (
          <Accordion title={title} content={content}></Accordion>
        ))}
      </div>
    </div>
  );
}

export default App;
