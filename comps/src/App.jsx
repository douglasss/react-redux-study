import Accordion from './components/Accordion';

function App() {
  const items = [
    {
      id: 's126s12',
      label: 'label 1',
      content:
        'content 1 content 1 content 1 content 1 content 1 content 1 content 1 content 1',
    },
    {
      id: '2s2123',
      label: 'label 2',
      content:
        'content 2 content 2 content 2 content 2 content 2 content 2 content 2 content 2',
    },
    {
      id: '12s2134',
      label: 'label 3',
      content:
        'content 3 content 3content 3content 3content 3content 3content 3content 3content 3',
    },
  ];

  return <Accordion items={items} />;
}

export default App;
