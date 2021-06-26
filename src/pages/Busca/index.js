import React, {useState, useEffect} from 'react'
import Menu from "../../components/Menu"
import Footer from '../../components/Footer'
import "./styles.css"


const Busca = () =>{
    const [filtroRepositorios, setFiltroRepositorios] = useState([])
    const [busca, setBusca] = useState('')
    const [usuario, setUsuario] = useState({
        login:"",
        avatar:"",
        repositorios: []
    })

    useEffect(()=>{
        fetch('https://api.github.com/users/marianadesouzaaguiar/repos')
            .then(resposta => resposta.json())
            .then(dados => setUsuario({
                login: dados[0].owner.login,
                avatar: dados[0].owner.avatar_url,
                repositorios: dados

            }))
    },[])

    useEffect(()=>{
        setFiltroRepositorios(
            usuario.repositorios.filter(repositorio => {
                return repositorio.name.includes(busca)
            })
        )
    },[busca, usuario])

    return(
        <>        

        <Menu />

            <h2 className="subtitle">{usuario.login}</h2>

        <section className="flex">

        <img src ={usuario.avatar} alt={usuario.login} height="350px" width="450px"/>
        
        <input type="name" placeholder="Digite um repositorio" onChange={e=>{setBusca(e.target.value)}}/>
        </section>

             {filtroRepositorios.map(repositorio=> (
                <div key={repositorio.id}>
                   <ul className="repos">
                       <li>{repositorio.name}</li>
                   </ul>
                </div>
                
            )) }
        <Footer />

    
        </>
    )
   
}

export default Busca