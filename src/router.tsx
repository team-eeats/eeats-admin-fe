import { Route, Routes, BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./Styles/GlobalStyle.style";
import Layout from "./Components/Layout";
import LoginPage from "./Pages/loginPage";

function router() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<Layout />}>
          <Route path="/" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default router;
