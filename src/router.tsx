import { Route, Routes, BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./Styles/GlobalStyle.style";
import Layout from "./Components/Layout";
import LoginPage from "./Pages/loginPage";
import { SuggestPage } from "./Pages/suggestPage";

function router() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<Layout />}>
          <Route path="/suggest" element={<SuggestPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
  ``;
}

export default router;
