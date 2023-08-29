import { useEffect, useState } from "react";
function App() {

  const [ listaTarefas, setListaTarefas ] = useState( [] );
  const [ tarefa, setTarefa ] = useState( { id: '' , texto: ""} );

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

  useEffect( () => {
    setTarefa( {id: "", texto:" "} );
  }, [listaTarefas] )

  return (
    <> 
      <header>
        <h1>Compras do mês</h1>
      </header>
      <div>
        <ul>
        {listaTarefas.map( ( item, index ) => (
          <li key={index}>{item.texto} <button onClick={ () => excluirTarefa(item.id) }>X</button></li>
        ))}
        </ul>
      </div>
      <div>
        <button onClick={addTarefa} >+</button>
        <input type="text" nome= "tarefa" placeholder="Digite sua lista" value={tarefa.texto} onChange={ (e) => setTarefa( {id: Math.random(), texto: e.target.value })} />
      </div>
      
    </>
  );
}

export default App;
