// Importing browser router, install it first --- npm i -D react-router-dom@latest
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importing components
import Template from "./components/Template";
import Nav from "./components/navbar/Nav";
import Footer from "./components/footer/Footer";
import Member from "./components/pages/Member/Member";
import Error from "./components/pages/error/Error";

import './App.css';

function App() {
  return (
    <div className="App">

      <BrowserRouter>

        {/* Importing the Nav component before nested routes */}
        <Nav />

        {/* Using the Routes and Route components from react-router-dom */}
        <Routes>
          <Route path="/" element={<Template />}>
            <Route path="/member" element={<Member name="Aton Alwin A. David" studentNumber="2021106971" />} />
            <Route path="/member1" element={<Member name="Chauncey Oswold Thomas B. Plaza" studentNumber="2020102545" />} />
            <Route path="/member2" element={<Member name="Dennise Nicole T. Lopena" studentNumber="2021106469" />} />
            <Route path="/member3" element={<Member name="James Alvis R. Azarcon" studentNumber="2021105589" />} />
            <Route path="/member4" element={<Member name="Bradney G. Guzon" studentNumber="2021106324" />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
        {/* Importing the Footer component after nested routes */}
        <Footer />

      </BrowserRouter>

    </div>
  );
}

export default App;
