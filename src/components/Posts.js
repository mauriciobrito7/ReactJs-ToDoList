import React, { Component } from 'react'

export default class Posts extends Component {

    state = {
        posts : []
    }
    
    /*Existe algo llamado lifecycle methods es decir yo puedo ejecutar métodos dependiendo de como va cargando la aplicación */
    
    //Este método se ejecuta cuando el componente ha sido montado, que se ejecuta solo
    async componentDidMount(){
        //api del navegador, hace una petición http
        //para que pida los datos va tomar tiempo entonces tiene que manejarlo de manera asiconcrona
        const res = await fetch('http://jsonplaceholder.typicode.com/posts')

        //De esta respuesta que he recibido quiero que lo conviertas a un json
        const data =  await res.json()
        console.log(data)
        this.setState({posts: data})
    }

    render() {
        return (
            <div>
                <h1>Pots</h1>
                {
                    this.state.posts.map( post =>{
                        return <div key={post.id}>
                            <h1>{post.title}</h1>
                            <p>{post.body}</p>
                        </div>
                    })
                }
            </div>
        )
    }
}
