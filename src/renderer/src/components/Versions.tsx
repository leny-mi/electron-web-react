import { useState } from 'react'
import isElectron from 'is-electron'

const Versions: React.FC = () => {
  const [versions] = useState(isElectron() ? window.electron.process.versions : undefined);

  return (<> {versions &&
    <ul className="versions">
      <li className="electron-version">Electron v{versions.electron}</li>
      <li className="chrome-version">Chromium v{versions.chrome}</li>
      <li className="node-version">Node v{versions.node}</li>
      <li className="v8-version">V8 v{versions.v8}</li>
    </ul> }
  </>)
}

export default Versions
