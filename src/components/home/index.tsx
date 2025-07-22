import Chatbot from "../chatbot";
import "../../App.css";
const Home: React.FC = () => {
  return (
    <>
      <h1>Clara home</h1>
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Chatbot />{" "}
    </>
  );
};

export default Home;