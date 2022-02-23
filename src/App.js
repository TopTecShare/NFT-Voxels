import "./App.css"

import Home from "./pages/home"
import PresaleMint from "./pages/presalemint"
import PresaleWait from "./pages/presalewait"
import PublicSaleMint from "./pages/publicsalemint"
import Staking from "./pages/staking"
import Burning from "./pages/burning"

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <PresaleMint /> */}
      <PresaleWait />
      <PublicSaleMint />
      <Staking />
      <Burning />
    </div>
  )
}

export default App
