import { Route, Routes, BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./Styles/GlobalStyle.style";
import Layout from "./Components/Layout";
import Notice from "./Pages/Notice"
import LoginPage from "./Pages/loginPage";

function router() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<Layout />}>
          <Route path="/Notice" element={<Notice />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default router;
