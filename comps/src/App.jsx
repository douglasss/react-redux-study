import Sidebar from './components/Sidebar';
import Route from './components/Route';
import AccordionPage from './pages/AccordionPage';
import ButtonPage from './pages/ButtonPage';
import DropdownPage from './pages/DropdownPage';

function App() {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <Sidebar />
      <div className="col-span-5">
        <Route path="/accordion" title="Accordion page">
          <AccordionPage />
        </Route>
        <Route path="/buttons" title="Buttons page">
          <ButtonPage />
        </Route>
        <Route path="/" title="Dropdown page">
          <DropdownPage />
        </Route>
      </div>
    </div>
  );
}

export default App;
