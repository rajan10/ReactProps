import logo from './logo.svg';
import './App.css';


// child component as this component receives props from parent component
function Hello(props){
 return <h1>Hello {props.name}! How are you?</h1>
}
  
//parent component as this component sends props to child component
function App() {
  return <Hello name="Ram" / >;
}

export default App;
