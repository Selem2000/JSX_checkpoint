import "./App.css";
import "./style.css";

function App() {
  return (
    <>
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }} className="container">
        <h1 className="title red">Salem Menssi</h1>
        <br />
        <img src="/imageInSrc.jpg" alt="myimage" />
        <br />
        <img src="/imageInPublic.jpg" alt="myimage" />
      </div>
      <video width="320" height="240" controls>
        <source
          src="https://www.youtube.com/watch?v=IUN664s7N-c"
          type="video/mp4"
        />
      </video>
    </>
  );
}

export default App;
