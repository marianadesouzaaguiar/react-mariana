import React from "react"
import Img from "../../assets/imagem.svg"
import "./styles.css"

        const Banner = () => {
            return (
                <div className="main">
                <div>

                    <h1>Meu site divertido</h1>
                    <p>Seja bem-vindo ao meu terceiro projeto de React para treinar React router dom e Axios</p>

                </div>

                <img src={Img} alt="Ilustração com logo do React"/>

                </div>

            )
        
        }

        export default Banner




