import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App";
import User from "./pages/User";
import { Posts } from "./components/Posts/Posts";
import { Comments } from "./components/Comments/Comments";


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="posts/:id/comments" element={<Comments />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
