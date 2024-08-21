import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import Events from './components/Events';
import MyCalendar from './components/Calinder';



function App() {
  return (
    <div className='w-[430px] m-auto border border-gray-200'>
      <Hero/>
      <Events/>
      <MyCalendar/>
    </div>
  );
}

export default App;
