/// <reference types="vite-plugin-svgr/client" />
import { RouterProvider } from "react-router-dom";
import { Page } from "./components";
import { router } from "./routes/routes";
import { DarkModeProvider } from "./utils/darkModeContext";

function App() {
  return (
    <>
      <DarkModeProvider>
        <Page>
          <RouterProvider router={router} />
        </Page>
      </DarkModeProvider>
    </>
  );
}

export default App;
