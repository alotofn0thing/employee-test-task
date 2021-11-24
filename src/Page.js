import Alphabet from './modules/Alphabet';
import Birthdays from './modules/Birthdays';
import './App.scss';

const Page = ()  => {
  return (
    <div className="page">
    <Alphabet />
    <Birthdays />
    </div>
  );
}

export default Page;
