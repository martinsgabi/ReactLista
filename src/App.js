import { useEffect, useState } from "react";
import "./global.css"

function App() {

  const [ listaTarefas, setListaTarefas ] = useState( [] );
  const [ tarefa, setTarefa ] = useState( { id: '' , texto: "", status: ""} );

  function addTarefa()
  {
    if( tarefa.texto !== "" ){
      setListaTarefas([...listaTarefas, tarefa ]);
    }
  }

  function excluirTarefa( id ){
    const novaLista = listaTarefas.filter( (tarefa) => tarefa.id !== id );
    setListaTarefas(novaLista);
  }

  function statusTarefa( id, status ){
    const index = listaTarefas.findIndex( (tarefa) => tarefa.id === id );
    listaTarefas[index].status = !status;
    setListaTarefas( [...listaTarefas ] );
  }

  useEffect( () => {
    setTarefa( {id: "", texto:" "} );
  }, [listaTarefas] )

  return (
    <> 
  
      <header className="titulo">
        <h2>🛒 COMPRAS DO MÊS</h2>
      </header>
      <div>
        <ul>
        {listaTarefas.map( ( item, index ) => (
          <li className="margem" key={index}><button className="status" onClick={ () => statusTarefa(item.id, item.status) }>{item.status ? '🔴' : '🟢' }</button> <div className="texto">{item.texto}</div>   <button className="excluir" onClick={ () => excluirTarefa(item.id) }>❌</button></li>
        ))}
        </ul>
      </div>
      <div className="display">
        <button onClick={addTarefa} className="botaoAdd">+</button>
        <input type="text" nome= "tarefa" placeholder="Digite sua lista" value={tarefa.texto} onChange={ (e) => setTarefa( {id: Math.random(), texto: e.target.value, status: false })} />
      </div>
 
    </>
  );
}

export default App;
