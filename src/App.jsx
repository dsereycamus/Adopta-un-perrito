import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import MyCard from "./components/MyCard";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header title="Adopta un perrito" />
      <div className="container-card">
        <MyCard
          img="./src/assets/1.webp"
          name="Bartolo"
          text="Lleno de energía y listo para jugar. ¡Dale a Bartolo el hogar amoroso que se merece!"
          color="success"
          breed="Huski"
        />
        <MyCard
          img="./src/assets/2.jpg"
          name="Messi"
          text="Es juguetón, amigable y se lleva bien con niños y otros animales. ¡Haz de Messi parte de tu familia hoy mismo!"
          color="primary"
          breed="Bob Tail"
        />
        <MyCard
          img="./src/assets/3.jpg"
          name="Gohan"
          text="Mediano con un corazón gigante. Hazte amigo de Gohan y experimenta un amor incondicional!"
          color="danger"
          breed="Shar Pei"
        />
        <MyCard
          img="./src/assets/4.webp"
          name="Princesa"
          text="Es una compañera leal y cariñosa que adora los mimos y los abrazos. ¡Ayuda a Princesa a encontrar su final feliz!"
          color="warning"
          breed="Beagle"
        />
      </div>
      <Footer
        footer="Explora nuestra galería en adopción de perros para encontrar a tu compañero perfecto. Tenemos una variedad de
      perros con diferentes personalidades y tamaños, todos en busca de un hogar amoroso. Cada imagen captura su escencia única. Adopta un perro y bríndale una segunda oportunidad, 
      Encuentra a tu compañero peludo para siempre."
      />
    </div>
  );
}

export default App;
