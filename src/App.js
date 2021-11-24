import Alphabet from './modules/Alphabet';
import Birthdays from './modules/Birthdays';
import './App.scss';

const App = ()  => {
  return (
    <div className="page">
      <Alphabet />
      <Birthdays/>
    </div>
  );
}

export default App;
