import"@/styles/clientes.css";

export const metadata = {
  title: "Freelancer 2026",
  description: "Servicios Freelancer",
};

export default function Clientes() {
  return (
    <section className="holder">

      <div className="empresas">

        <h2>Empresas</h2>

        <p>
          Trabajo con empresas de distintos rubros, desarrollando soluciones digitales adaptadas a sus necesidades y objetivos. Creo sitios web funcionales, modernos y de calidad, con diseños personalizados que fortalecen la identidad y presencia de cada marca.
        </p>

        <p>
          Integro estrategias de SEO y SEM, copywriting especializado y herramientas de marketing digital para mejorar la visibilidad, conectar con el público y potenciar el crecimiento de cada proyecto.
        </p>

      </div>

      <div className="clientes">

        <h2>Mis clientes</h2>

        <div className="personas">

          <div className="persona">

            <img src="/img/gerente-gral.png" alt="Juan Gómez" />

            <h5>Juan Gómez</h5>

            <h6>Gerente General</h6>

            <p>
              Excelente servicio. Muy responsable y atenta. <br />
              Su trabajo realmente es de calidad. El sitio web que realizó para mi empresa nos ayudó a elevar la visibilidad y conseguir un posicionamiento privilegiado. Recomendable
            </p>

          </div>

          <div className="persona">

            <img src="/img/CEO-corporativa.png" alt="Julieta Pérez" />

            <h5>Julieta Pérez</h5>

            <h6>CEO corporativo</h6>

            <p>
              Entregó el trabajo antes del tiempo acordado. En la empresa quedamos muy satisfechos con el producto final. El diseño realmente se alinea con la visual y estética de la compañía. Sin dudas volveremos a colaborar en varios proyectos.
            </p>

          </div>

          <div className="persona">

            <img src="/img/Software-engineer.png" alt="Ayrton Ramírez" />

            <h5>Ayrton Ramírez</h5>

            <h6>Software Engineer</h6>

            <p>
              Producto final muy completo. Trato muy amable, sin límite de consultas y modificaciones. Realmente se adaptó a nuestras necesidades en todos los sentidos. Sin dudas volveremos a contratar este excelente servicio.
            </p>

          </div>

          <div className="persona">

            <img src="/img/gerenta-gral-RRHH.png" alt="Kiara Martínez" />

            <h5>Kiara Martínez</h5>

            <h6>Gerenta general RRHH</h6>

            <p>
              No sólo nos dio asesoría sin cargo, sino que realmente nos ofreció una conjunción de conocimientos que concluyó en un posicionamiento privilegiado de nuestro sitio web. Elevamos las visualizaciones casi al doble en dos meses.
            </p>

          </div>

          <div className="persona">

            <img src="/img/ingeniero-electromecanico.png" alt="Bruno Sánchez" />

            <h5>Bruno Sánchez</h5>

            <h6>Ingeniero electromecánico</h6>

            <p>
              Mejoró notablemente nuestro sitio y la aplicación web de la empresa. Lo hizo de manera profesional y en el tiempo estimado. Trato muy agradable y el producto final superó nuestras expectativas completamente.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}