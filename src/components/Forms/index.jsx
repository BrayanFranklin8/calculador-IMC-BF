import { useEffect, useState } from 'react';
import styles from './Forms.module.css'

const Forms = () =>{
    const [nome, setNome] = useState('');
    const[altura, setAltura] = useState(0);
    const[peso, setPeso] = useState(0);
    const[imc, setImc] = useState(0);
    const[classificacao, setClassificacao] = useState('');

    useEffect(()=>{
        console.log(classificacao)
    })


    const calcula = () => {
        if(altura > 0 && peso > 0){
            const calculaImc = peso / (altura * altura);
            setImc(calculaImc.toFixed(2));
            classificador(calculaImc);

        }
        
    }

        const classificador = (valorImc) =>{
        
        if (valorImc < 18.5) {
            return(
                setClassificacao('Abaixo do peso')
            )
        } else if(valorImc >= 18.5 && valorImc <= 24.9){
            return(
                setClassificacao('Peso normal')
                
            )
        }else if(valorImc > 25 && valorImc < 29.9){
            return(
                setClassificacao('SobrePeso')
            )
        }else if(valorImc > 30){
            setClassificacao('Obesidade')
        }
    }

    
    
    
    
    
    
    return(
        <div className="container">
            <form>
                <label htmlFor="nome">Nome:</label>
                <input placeholder='Seu nome' id='nome' type="text" onChange={evento => setNome(evento.target.value)} />
                <label htmlFor="Altura">Altura:</label>
                <input placeholder='Sua altura em metros' id='Altura' type="number" onChange={evento => setAltura(parseFloat(evento.target.value))} />
                <label htmlFor="Peso">Peso:</label>
                <input placeholder='Seu peso' id='Peso' type="number" onChange={evento => setPeso(parseFloat(evento.target.value))} />
                <button type='button' onClick={calcula} >Calcular</button>
                
            </form>
        <div className="container">
            <table>
                <thead>
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
                </thead>
                <tbody>
                    <td>{nome}</td>
                    <td>{altura}</td>
                    <td>{peso}</td>
                    <td>{imc}</td>
                    <td>{classificacao}</td>
                </tbody>
            </table>
        </div>
        </div>
    )
}




export default Forms;