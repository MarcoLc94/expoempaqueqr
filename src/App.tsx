import "./App.css";

function App() {
  return (
    <div className="app-container">
      {/* Ambient Animated Background */}
      <div className="bg-ambient">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      {/* Main Glassmorphism Card */}
      <div className="glass-card">
        {/* Texts & Buttons */}
        <div className="card-content">
          <div className="badge">Acceso Anticipado</div>
          <h1 className="title">
            Te damos la bienvenida a<span>Expo Empaque QR</span>
          </h1>
          <p className="description">
            Ponemos a su disposición nuestra APP gratuita para escaneo de
            gafetes dentro de EXPO EMPAQUE NORTE, la cual permite almacenar y
            exportar la información de contacto obtenida. Al hacer uso de esta
            herramienta, el expositor asume la responsabilidad total sobre el
            tratamiento y uso de dichos datos, comprometiéndose a utilizarlos
            exclusivamente para fines comerciales relacionados con los productos
            y/o servicios que ofrece durante la exposición.
          </p>

          <div className="btn-group">
            {/* Download Android */}
            <a
              href="https://github.com/MarcoLc94/expoempaqueqr/releases/download/apk/expo_empaque.apk"
              className="btn btn-android"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="btn-icon"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.65 10.39l1.83-3.17c.05-.1.01-.23-.08-.28-.1-.05-.22-.01-.28.08l-1.85 3.2c-1.63-.74-3.41-1.15-5.27-1.15-1.86 0-3.64.41-5.27 1.15l-1.85-3.2c-.06-.09-.18-.13-.28-.08-.09.05-.13.18-.08.28l1.83 3.17C3.12 12.44 1 16.03 1 20.25v.75h22v-.75c0-4.22-2.12-7.81-5.35-9.86zM8 17.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm8 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
              </svg>
              <div className="btn-text">
                <span className="btn-text-small">Descargar para</span>
                <span>Android (APK)</span>
              </div>
            </a>

            {/* Download iOS */}
            {/* <a
              href="https://testflight.apple.com/join/placeholder"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ios"
            >
              <svg
                className="btn-icon"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.36 12.08c0-3.37 2.76-5 2.89-5.08-1.57-2.3-4.01-2.61-4.88-2.65-2.07-.21-4.05 1.22-5.11 1.22-1.06 0-2.68-1.19-4.38-1.16-2.26.03-4.35 1.31-5.52 3.34-2.36 4.09-.6 10.16 1.7 13.48 1.12 1.62 2.45 3.44 4.19 3.38 1.66-.06 2.32-1.07 4.33-1.07 1.99 0 2.6.1 4.35 1.04 1.79.03 2.94-1.62 4.05-3.24 1.28-1.86 1.81-3.66 1.84-3.76-.04-.01-3.52-1.35-3.52-5.4zM15.42 4.11c.92-1.11 1.54-2.66 1.37-4.11-1.25.05-2.88.83-3.83 1.94-.85.99-1.59 2.57-1.39 3.99 1.41.11 2.93-.7 3.85-1.82z" />
              </svg>
              <div className="btn-text">
                <span className="btn-text-small">Descargar en</span>
                <span>iOS / iPadOS</span>
              </div>
            </a> */}
          </div>

          <p className="terms-note">
            Para Android, asegúrate de habilitar "Orígenes desconocidos".
          </p>
        </div>

        {/* Visual / Image Side */}
        <div className="card-visuals">
          <div className="hero-image-wrapper">
            <svg
              className="hero-image"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                filter: "drop-shadow(0 0 30px rgba(12, 224, 255, 0.4))",
                width: "100%",
                height: "100%",
                maxWidth: "300px",
              }}
            >
              <defs>
                <linearGradient
                  id="qr-grad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#0ce0ff" />
                  <stop offset="100%" stopColor="#9045ff" />
                </linearGradient>
                <filter
                  id="neon-glow"
                  x="-20%"
                  y="-20%"
                  width="140%"
                  height="140%"
                >
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>
              <rect
                x="0"
                y="0"
                width="200"
                height="200"
                rx="40"
                fill="rgba(255, 255, 255, 0.05)"
                stroke="url(#qr-grad)"
                strokeWidth="4"
              />

              <g fill="url(#qr-grad)" filter="url(#neon-glow)">
                {/* QR Finder patterns */}
                <path d="M40 40h40v40H40zm10 10h20v20H50z" />
                <path d="M120 40h40v40h-40zm10 10h20v20h-20z" />
                <path d="M40 120h40v40H40zm10 10h20v20H50z" />

                {/* QR Data nodes random pattern */}
                <rect x="100" y="40" width="10" height="10" />
                <rect x="90" y="60" width="20" height="10" />
                <rect x="40" y="90" width="10" height="20" />
                <rect x="60" y="90" width="30" height="10" />
                <rect x="140" y="90" width="20" height="20" />
                <rect x="110" y="100" width="20" height="10" />
                <rect x="140" y="130" width="10" height="30" />
                <rect x="90" y="140" width="40" height="10" />
                <rect x="100" y="150" width="20" height="10" />
                <rect x="120" y="120" width="10" height="10" />
                <rect x="150" y="120" width="10" height="10" />
                <rect x="90" y="100" width="10" height="30" />

                {/* Center scan text box shape abstract */}
                <rect
                  x="75"
                  y="75"
                  width="50"
                  height="50"
                  rx="10"
                  fill="rgba(12, 224, 255, 0.2)"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="15"
                  fill="none"
                  stroke="url(#qr-grad)"
                  strokeWidth="4"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
