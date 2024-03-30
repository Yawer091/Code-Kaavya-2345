import { HomeBhawesh } from "./home.bhawesh";
import Navbar from "./components/Navbar";

import "./App.css";
import Bottom from "./components/bottom";
import NewsletterSignup from "./components/Newsletter";
import Top from "./components/top";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Top />
      <HomeBhawesh />
      <Bottom />
      <NewsletterSignup />
      <Footer />
    </>
  );
}

export default App;
