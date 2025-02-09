import { Routes, Route } from "react-router-dom";
import Layout from "./components/app/Layout";
import Expenses from "./pages/Expenses";
import Trips from "./pages/Trips";
import Approval from "./pages/Approval";
import Settings from "./pages/Settings";
import Home from "./pages/home";
import NotFound from "./pages/NotFound";
import Header from "./components/app/Header";
import Footer from "./components/app/Footer";
import Support from "./pages/Support";
import MobileFooter from "./components/app/MobileFooter";
import MobileHeader from "./components/app/MobileHeader";

function App() {
  return (
    <>
      <Header />
      <MobileHeader />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="expenses" element={<Expenses />} />
          <Route path="trips" element={<Trips />} />
          <Route path="approval" element={<Approval />} />
          <Route path="settings" element={<Settings />} />
          <Route path="support" element={<Support />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <MobileFooter />
    </>
  );
}

export default App;


