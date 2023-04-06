import Sidebar from './components/Sidebar';
import Route from './components/Route';
import AccordionPage from './pages/AccordionPage';
import ButtonPage from './pages/ButtonPage';
import DropdownPage from './pages/DropdownPage';
import ModalPage from './pages/ModalPage';
import TablePage from './pages/TablePage';
import CounterPage from './pages/CounterPage';

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
        <Route path="/modal" title="Modal page">
          <ModalPage />
        </Route>
        <Route path="/table" title="Table page">
          <TablePage />
        </Route>
        <Route path="/counter" title="Counter page">
          <CounterPage initialCount={10} />
        </Route>
      </div>
    </div>
  );
}

export default App;
