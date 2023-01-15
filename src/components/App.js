import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";


function App() {
  const [app, setApp] = useState(false);

  function handleClick() {
    setApp(app => !app);
  }
  const appClass = app ? "App dark" : "App light"

  return (
    <div className={appClass}>
        <header>
          <h2>Shopster</h2>
          <button onClick={handleClick}>{app ? "Light Mode" : "Dark Mode"}</button>
        </header>
        <ShoppingList items={itemData} />
      </div>
  );
}


export default App;