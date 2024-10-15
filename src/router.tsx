import { Route, Routes, BrowserRouter } from "react-router-dom";
import LoginPage from "./Pages/loginPage";
import { GlobalStyle } from "./Styles/GlobalStyle.style";
import Layout from "./Components/Layout/index";

function router() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="main" element={<></>} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<>404 page</>} />
      </Routes>
    </BrowserRouter>
  );
}

export default router;
