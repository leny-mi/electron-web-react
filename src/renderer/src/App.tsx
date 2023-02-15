import Versions from './components/Versions'
import icons from './assets/icons.svg'
import isElectron from 'is-electron'

function App(): JSX.Element {
  return (
    <div className="container">
      <Versions></Versions>

      <svg className="hero-logo" viewBox="0 0 900 300">
        <use xlinkHref={`${icons}#electron`} />
      </svg>
      <h2 className="hero-text">
        You{"'"}re successfully running an Electron/Web project on {isElectron() ? window.electron.process.platform : 'Web'}!
      </h2>
      <p className="hero-tagline">
        Please try pressing <code>F12</code> to open the devTool
      </p>

      <div className="links">
        <div className="link-item">
          <a target="_blank" href="https://evite.netlify.app" rel="noopener noreferrer">
            Created from electron-vite
          </a>
        </div>
        <div className="link-item link-dot">•</div>
        <div className="link-item">
          <a
            target="_blank"
            href="https://github.com/leny-mi/electron-web-react"
            rel="noopener noreferrer"
          >
            Issues
          </a>
        </div>
      </div>

      <div className="features">
        <div className="feature-item">
          <article>
            <h2 className="title">Electron Configuring</h2>
            <p className="detail">
              Config with <span>electron.vite.config.ts</span> and refer to the{' '}
              <a target="_blank" href="https://evite.netlify.app/config/" rel="noopener noreferrer">
                electron-vite config guide
              </a>
              .
            </p>
          </article>
        </div>
        <div className="feature-item">
          <article>
            <h2 className="title">HMR</h2>
            <p className="detail">
              Edit <span>src/renderer</span> files to test HMR. See{' '}
              <a
                target="_blank"
                href="https://evite.netlify.app/guide/hmr-in-renderer.html"
                rel="noopener noreferrer"
              >
                electron-vite docs
              </a>
              .
            </p>
          </article>
        </div>
        <div className="feature-item">
          <article>
            <h2 className="title">Run Web and Electron</h2>
            <p className="detail">
              Run{' '}<span>{"'"}yarn web-dev{"'"}</span>{' '} 
              or 
              {' '}<span>{"'"}yarn electron-dev{"'"}</span>{' '}
              to enable. See {' '}<span>{"'"}package.json{"'"}</span>{' '} for more commands.
            </p>
          </article>
        </div>
        <div className="feature-item">
          <article>
            <h2 className="title">Distribution</h2>
            <p className="detail">
              Run {' '}<span>{"'"}yarn electron-build:linux{"'"}</span>{' '} to build for Electron/Linux. See {' '}<span>{"'"}package.json{"'"}</span>{' '} for more commands.
            </p>
          </article>
        </div>
        <div className="feature-item">
          <article>
            <h2 className="title">The Unlicense</h2>
            <p className="detail">
              Do whatever you want with this project.
            </p>
          </article>
        </div>
        <div className="feature-item">
          <article>
            <h2 className="title">Source Code Protection</h2>
            <p className="detail">
              Supported via built-in plugin <span>bytecodePlugin</span>. See{' '}
              <a
                target="_blank"
                href="https://evite.netlify.app/guide/source-code-protection.html"
                rel="noopener noreferrer"
              >
                electron-vite docs
              </a>
              .
            </p>
          </article>
        </div>
        
      </div>
    </div>
  )
}

export default App
