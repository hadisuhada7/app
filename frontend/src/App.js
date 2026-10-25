import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Portfolio from "@/pages/Portfolio";
import { ServiceDetail, LegalPage } from "@/pages/SimplePages";
import ArticleDetail from "@/pages/ArticleDetail";
import ArticlesPage from "@/pages/ArticlesPage";
import ContactPage from "@/pages/ContactPage";
import MemberPage from "@/pages/MemberPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="tentang-kami" element={<About />} />
          <Route path="portofolio" element={<Portfolio />} />
          <Route path="layanan/:slug" element={<ServiceDetail />} />
          <Route path="artikel" element={<ArticlesPage />} />
          <Route path="artikel/:slug" element={<ArticleDetail />} />
          <Route path="kontak" element={<ContactPage />} />
          <Route path="member" element={<MemberPage />} />
          <Route path="kebijakan-privasi" element={<LegalPage kind="privasi" />} />
          <Route path="syarat-ketentuan" element={<LegalPage kind="syarat" />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
