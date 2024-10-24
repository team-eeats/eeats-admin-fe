import { Route, Routes, BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./Styles/GlobalStyle.style";
import Layout from "./Components/Layout";
import LoginPage from "./Pages/loginPage";
import { SuggestPage } from "./Pages/suggestPage";
import { HideSuggest } from "./Pages/suggestPage/hide";
import VotePage from "./Pages/votePage";

function router() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<Layout />}>
          <Route path="/suggest" element={<SuggestPage />} />
          <Route path="/suggest/hide" element={<HideSuggest />} />
          <Route path="/vote" element={<VotePage />} />
          <Route path="/vote/makingVote" element={<></>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default router;
