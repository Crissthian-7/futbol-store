import Navbar from "./components/Navbar";
import Slider from './components/Slider.tsx'
import Notification from './components/Notification.tsx'

const App = () => {
  return (
    <div>
      <Navbar />
      <Notification />
      <Slider />
    </div>
  );
};

export default App;
