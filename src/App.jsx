import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ButtonGroup from "./components/ButtonGroup/ButtonGroup";
import Academy from "./pages/Academy/Academy";

function App() {
  return (
    <>
      <Header />
      <Academy />
      <ButtonGroup />
      <Footer />
    </>
  );
}

export default App;
