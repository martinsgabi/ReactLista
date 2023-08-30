import { useEffect, useState } from "react";
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
      <header>
        <h1>Compras do mês</h1>
      </header>
      <div>
        <ul>
        {listaTarefas.map( ( item, index ) => (
          <li key={index}>{item.texto}<button onClick={ () => statusTarefa(item.id, item.status) }>{item.status ? 'Concluida' : 'Não concluida' }</button> <button onClick={ () => excluirTarefa(item.id) }>X</button></li>
        ))}
        </ul>
      </div>
      <div>
        <button onClick={addTarefa} >+</button>
        <input type="text" nome= "tarefa" placeholder="Digite sua lista" value={tarefa.texto} onChange={ (e) => setTarefa( {id: Math.random(), texto: e.target.value, status: false })} />
      </div>
      
    </>
  );
}

export default App;
