import Img2 from "../../assets/icons8-github.svg"
import Img3 from "../../assets/icons8-linkedin.svg"
import "./styles.css"

const Footer = () => {
    return (
    
    <div className="rodape">
        <div className="social-media">

        <a href="https://www.linkedin.com/in/marianadesouzaaguiar/" >LINKEDIN
            <img src={Img3} alt="Imagem do logo do Linkedin" width="30px" height="30px"/>

        </a>

        <a href="https://github.com/marianadesouzaaguiar/" >GITHUB
            <img src={Img2} alt="Imagem do logo do Github" width="30px" height="30px" />
        
        </a>
        
        </div>

        <div className="autora">

        <h3><strong>MARIANA AGUIAR</strong></h3>

        <p>Pós graduanda em Marketing Digital e estudante de desenvolvimento web front-end na Reprograma.</p>
        </div>

    </div>
    )
}
export default Footer