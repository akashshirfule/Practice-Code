import logo from './logo.svg';
import './App.css';
import Formik from './sept19/Registration';
import Tablature from './sept20/Tablefeature';

function App() {
  return (
    <div className="App">
      <h1>19-09-2022</h1>
      <Formik></Formik> 

      <h1 className='mt-5'>20-09-2022</h1>
      <Tablature></Tablature>
    </div>
  );
}

export default App;
