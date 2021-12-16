import React, { useState } from "react";
import SidebarComponent from "./components/sidebar/sidebar";
import Header from "./components/header/header";
import ContentPage1 from "./pages/content-page1";
import ContentPage2 from "./pages/content-page2";
import { Sidebar } from "semantic-ui-react";
import { Routes, Route } from "react-router-dom";
function App() {
  const [visibilitySlidebar, setVisibilitySlidebar] = useState(false);
  return (
    <Sidebar.Pushable>
      <SidebarComponent visible={visibilitySlidebar} />;
      <Header setVisible={setVisibilitySlidebar} visible={visibilitySlidebar} />
      <Routes>
        <Route path="/content1" element={<ContentPage1 />} />
        <Route path="/content2" element={<ContentPage2 />} />
        <Route path="*" element={<div>Not found</div>} />
      </Routes>
    </Sidebar.Pushable>
  );
}

export default App;
