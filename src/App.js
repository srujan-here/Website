import Details from "./components/Details";
import Footer from "./components/Footer";
import ImageCorusel from "./components/ImageCorusel";
import Maintext from "./components/Maintext";
import Navbar from "./components/Navbar";
import Video from "./components/Video";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Maintext />

      <Video />
      <Footer />

      <Details />
      <ImageCorusel />
    </div>
  );
}

export default App;
