import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="footer">
      <Link className="about" to="about">About</Link>
      <Link className="careers" to="careers">Careers</Link>
      <Link className="contact" to="contact">Contact</Link>
      <div className="description">Copyright © 2025 implexrr</div>
      <a
        className="github icon"
        href="https://github.com/implexrr/vybe-fabrics"
      />
    </footer>
  )
}

export default Footer
//TDL