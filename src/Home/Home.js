import Logo from '../Logo.jpg'

export function Home() {
    return (
      <div className="container mt-4">
        <h1>Sigueme en mi pagina de instagram! </h1>
        <div>
          <img
            src={Logo}
            className="d-block w-100"
            alt="Ejemplo"
          />
        </div>
      </div>
    );
  }
  