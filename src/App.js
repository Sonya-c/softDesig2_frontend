import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './utils/Layout';

import UserPage from './pages/UserPage';
import LogsPage from './pages/LogsPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<UserPage />} />
          <Route path="logs" element={<LogsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
