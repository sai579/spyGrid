import { useEffect } from "react";
import AssetDisplay from "./components/AssetDisplay";

function App() {
  useEffect(() => {
    document.body.className = "dark";
  }, []);

  return <AssetDisplay />;
}

export default App;
