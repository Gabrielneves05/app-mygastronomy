import styles from "./footer.module.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.logoSection}>
          <img src="/images/logo.png" alt="Logo" className={styles.logo} />
          <p>MyGastronomy - Sua plataforma de gastronomia</p>
        </div>
        
        <div className={styles.linksSection}>
          <div className={styles.linkColumn}>
            <h4>Menu</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/plates">Pratos</Link></li>
              <li><Link to="/cart">Carrinho</Link></li>
              <li><Link to="/profile">Perfil</Link></li>
            </ul>
          </div>
          
          <div className={styles.linkColumn}>
            <h4>Ajuda</h4>
            <ul>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/contact">Contato</Link></li>
              <li><Link to="/terms">Termos de Uso</Link></li>
              <li><Link to="/privacy">Privacidade</Link></li>
            </ul>
          </div>
        </div>
        
        <div className={styles.socialSection}>
          <h4>Siga-nos</h4>
          <div className={styles.socialIcons}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <span className={styles.icon}>&#xf39e;</span> Facebook
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <span className={styles.icon}>&#xf16d;</span> Instagram
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <span className={styles.icon}>&#xf099;</span> Twitter
            </a>
          </div>
        </div>
      </div>
      
      <div className={styles.copyright}>
        <p>&copy; {new Date().getFullYear()} MyGastronomy. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}