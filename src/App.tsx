import Header from './components/header';
import Home from './pages/home';
import './Global.css';
import { MainProvider } from './Provider';

function App() {
  return (
    <MainProvider>
      <Header />
      <Home />
    </MainProvider>
  );
}

export default App;
