import { BrowserRouter, Routes, Route } from "react-router-dom";
import ModuleLayout from "./layouts/ModuleLayout";
import ModuleLandingPage from "./pages/ModuleLandingPage";
import SubModulePage from "./pages/SubModulePage";
import SolutionDetailPage from "./pages/SolutionDetailPage";
import ResourceDetailPage from "./pages/ResourceDetailPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { mainSiteHref } from "./lib/mainSite";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ModuleLayout />}>
          <Route index element={<ModuleLandingPage />} />
          <Route path="solutions/:id" element={<SolutionDetailPage />} />
          <Route path="resources/:id" element={<ResourceDetailPage />} />
          <Route path=":subId" element={<SubModulePage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="*" element={<RedirectToMainSite />} />
      </Routes>
    </BrowserRouter>
  );
}

function RedirectToMainSite() {
  window.location.replace(mainSiteHref("/"));
  return null;
}

export default App;
