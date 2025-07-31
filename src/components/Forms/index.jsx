import styles from './Forms.module.css'

const Forms = () =>{
    


    return(
        <div className="container">
            <form>
                <label htmlFor="nome">Nome:</label>
                <input id='nome' type="text" />
                <label htmlFor="Altura">Altura:</label>
                <input id='Altura' type="number" />
                <label htmlFor="Peso">Peso:</label>
                <input id='Peso' type="number" />

                
            </form>
        </div>
    )


}

export default Forms;