import { Route, Routes, BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./Styles/GlobalStyle.style";
import Layout from "./Components/Layout";
import Notice from "./Pages/Notice"
import LoginPage from "./Pages/loginPage";
import AddNotice from "./Pages/Notice/AddNotice";
import ModifyNotice from "./Pages/Notice/ModifyNotice"

function router() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<Layout />}>
          <Route path="/Notice" element={<Notice />} />
          <Route path="/addNotice" element={<AddNotice />} />
          <Route path="/modifyNotice" element={<ModifyNotice />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default router;
