import styles from "./page.module.css";
import Dessert from "../../../public/images/homepage/dessert";
import NaturalFood from "../../../public/images/homepage/naturalFood";
import Vegetable from "../../../public/images/homepage/vegetable";
import { FaMapMarkerAlt, FaFacebookSquare, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <div className={styles.pageContainer}>
      <section>
        <h1>Bem-vindo ao My Gastronomy</h1>
        <p> 
          Aqui, celebramos a autêntica culinária italiana, com pratos preparados com ingredientes frescos e receitas tradicionais que trazem o verdadeiro sabor da Itália à sua mesa. Do aroma irresistível de um bom molho ao prazer de uma massa artesanal, cada refeição é uma experiência inesquecível.

          Sinta-se em casa e buon appetito! 🍷🍕
        </p>
      </section>

      <section className={styles.foodSection}>
        <div>
          <i><NaturalFood /></i>
          <h4>Excelência no seu dia a dia</h4>
          <p>
            Descubra nossa seleção diária de pratos únicos para adicionar um toque fresco e refinado à sua experiência gastronômica.
          </p>
        </div>

        <div>
          <i><Vegetable /></i>
          <h4>Ingredientes de primeira escolha</h4>
          <p>
            Selecionamos cuidadosamente ingredientes excepcionais para garantir a mais alta qualidade.
          </p>
        </div>

        <div>
          <i><Dessert /></i>
          <h4>Gosto para todos</h4>
          <p>
            Explore um mundo de sabores com nossa oferta completa, feita especialmente para satisfazer todos os paladares.
          </p>
        </div>
      </section>

      <section className={styles.contactSection}>
        <h1>Mantenha-se atualizado!</h1>
        <p>
          Entre no mundo do My Gastronomy seguindo-nos nas redes sociais. Você estará sempre atualizado sobre nossas criações culinárias, eventos especiais e surpresas gourmet. Não perca nenhuma mordida!
        </p>
        <div className={styles.socialButtonsContainer}>
          <button className={styles.socialButton}><FaInstagram /> Instagram</button>
          <button className={styles.socialButton}><FaFacebookSquare /> Facebook</button>
          <button className={styles.socialButton}><FaWhatsapp /> Whatsapp</button>
          <button className={styles.socialButton}><FaMapMarkerAlt /> Location</button>
        </div>
      </section>
    </div>
  ) 
}