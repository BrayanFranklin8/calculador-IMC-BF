import styles from './Tabela.module.css'

const Tabela = () =>{

    return(
        <div className="container">
        <table>
            <tr>
                <th>
                    Nome
                </th>
                <th>
                    Altura
                </th>
                <th>
                    Peso
                </th>
                <th>
                    IMC
                </th>
                <th>
                    Classificação
                </th>
            </tr>
            <tr>
                <td>Brayan</td>
                <td>1,82</td>
                <td>92 kg</td>
                <td>27</td>
                <td>Sobrepeso</td>
            </tr>
        </table>
        </div>

    )
}

export default Tabela
