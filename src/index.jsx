import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CreatePost } from "./screens/CreatePost/CreatePost";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <CreatePost />
  </StrictMode>,
);
