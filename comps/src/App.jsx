import Button from './Button';
import { GoBell, GoCloudDownload, GoDatabase, GoAlert } from 'react-icons/go';

function App() {
  return (
    <div>
      <div>
        <Button onClick={() => console.log('teste')}>Plain</Button>
        <Button outline>Plain</Button>
        <Button outline rounded>
          Plain
        </Button>
      </div>
      <div>
        <Button primary>
          <GoBell />
          Primary
        </Button>
        <Button primary outline>
          Primary
        </Button>
        <Button primary rounded outline>
          Primary
        </Button>
      </div>
      <div>
        <Button secondary>
          <GoCloudDownload />
          Secondary
        </Button>
        <Button secondary outline>
          Secondary
        </Button>
        <Button secondary outline rounded>
          Secondary
        </Button>
      </div>
      <div>
        <Button warning>
          <GoAlert />
          Warning
        </Button>
        <Button warning outline>
          Warning
        </Button>
        <Button warning outline rounded>
          Warning
        </Button>
      </div>
      <div>
        <Button danger>
          <GoDatabase />
          Danger
        </Button>
        <Button danger outline>
          Danger
        </Button>
        <Button danger outline rounded>
          <GoDatabase />
          Danger
        </Button>
      </div>
      <div>
        <Button success>Success</Button>
        <Button success outline>
          Success
        </Button>
        <Button success rounded outline>
          Success
        </Button>
      </div>
    </div>
  );
}

export default App;
