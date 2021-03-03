import './App.css';
import './components/task1';
import Checkbox from './components/task2';
import Click from './components/task3';
import TodoList from './components/task4';
import Animation from './components/task5';
import Button from './components/task6';

function App() {
  return (
    <div>
      <Checkbox />
      <Click />
      <TodoList />
      <Animation />
      <Button name={true}/>
      <Button name={false}/>
    </div>
  );
}

export default App;
