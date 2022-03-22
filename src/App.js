import Reac, {useState} from 'react';
import Button from './components/Button';
import Functions from './components/Functions';
import MathOperations from './components/MathOperations';
import Numbers from './components/Numbers';
import Result from './components/Result';
import './App.css';
const App = () => {
  const arrayTextoFuncionModificaTexto = useState("")
  const clickHandlerFunction = text => {
    console.log("Button.clickHandler", text)
  }
  console.log("renderizando de App")
  return (
    <main className="react-calculator">
      <Result />
      <Numbers onClickNumber={number =>
        console.log('Click en number', number) 
      }/>
      <Functions 
        onContentClear={() => 
          console.log('Content clear')
        }
        onDelete = {() =>
          console.log('Delete')
        }
        />
      <MathOperations 
        onClickOperation={operation => 
          console.log("Operation:", operation)
        }
        onClickEqual={equal =>
          console.log("Operation:", equal)
        }/>
    </main>
  );
}

export default App;
