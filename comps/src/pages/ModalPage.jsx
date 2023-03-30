import Modal from '../components/Modal';
import Button from '../components/Button';
import { useState } from 'react';

export default function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const actionBar = (
    <div>
      <Button primary onClick={handleClose}>
        I Accept
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is some content from the modal</p>
    </Modal>
  );
  return (
    <div>
      <Button onClick={() => setShowModal(true)} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ante mi,
        semper vel pulvinar at, pellentesque ut eros. Aenean condimentum
        consequat felis, et tincidunt eros ultricies sed. Nunc vel quam at ante
        pretium ornare sed at odio. Suspendisse consectetur, metus bibendum
        luctus accumsan, nisl augue ultrices mi, in auctor nisi ante vel risus.
        Ut nec aliquet arcu. Praesent hendrerit nunc lobortis eros varius
        dapibus. Pellentesque molestie rhoncus magna sit amet lacinia. Phasellus
        eget feugiat nisi. Donec quam est, fringilla sed lorem feugiat, egestas
        efficitur libero. Cras quis lobortis nunc. Pellentesque vehicula
        bibendum odio fermentum venenatis. Maecenas sit amet diam eget lectus
        fermentum efficitur vitae nec sapien. Nulla facilisi. Praesent eu
        consequat magna, a fringilla lacus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ante mi,
        semper vel pulvinar at, pellentesque ut eros. Aenean condimentum
        consequat felis, et tincidunt eros ultricies sed. Nunc vel quam at ante
        pretium ornare sed at odio. Suspendisse consectetur, metus bibendum
        luctus accumsan, nisl augue ultrices mi, in auctor nisi ante vel risus.
        Ut nec aliquet arcu. Praesent hendrerit nunc lobortis eros varius
        dapibus. Pellentesque molestie rhoncus magna sit amet lacinia. Phasellus
        eget feugiat nisi. Donec quam est, fringilla sed lorem feugiat, egestas
        efficitur libero. Cras quis lobortis nunc. Pellentesque vehicula
        bibendum odio fermentum venenatis. Maecenas sit amet diam eget lectus
        fermentum efficitur vitae nec sapien. Nulla facilisi. Praesent eu
        consequat magna, a fringilla lacus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ante mi,
        semper vel pulvinar at, pellentesque ut eros. Aenean condimentum
        consequat felis, et tincidunt eros ultricies sed. Nunc vel quam at ante
        pretium ornare sed at odio. Suspendisse consectetur, metus bibendum
        luctus accumsan, nisl augue ultrices mi, in auctor nisi ante vel risus.
        Ut nec aliquet arcu. Praesent hendrerit nunc lobortis eros varius
        dapibus. Pellentesque molestie rhoncus magna sit amet lacinia. Phasellus
        eget feugiat nisi. Donec quam est, fringilla sed lorem feugiat, egestas
        efficitur libero. Cras quis lobortis nunc. Pellentesque vehicula
        bibendum odio fermentum venenatis. Maecenas sit amet diam eget lectus
        fermentum efficitur vitae nec sapien. Nulla facilisi. Praesent eu
        consequat magna, a fringilla lacus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ante mi,
        semper vel pulvinar at, pellentesque ut eros. Aenean condimentum
        consequat felis, et tincidunt eros ultricies sed. Nunc vel quam at ante
        pretium ornare sed at odio. Suspendisse consectetur, metus bibendum
        luctus accumsan, nisl augue ultrices mi, in auctor nisi ante vel risus.
        Ut nec aliquet arcu. Praesent hendrerit nunc lobortis eros varius
        dapibus. Pellentesque molestie rhoncus magna sit amet lacinia. Phasellus
        eget feugiat nisi. Donec quam est, fringilla sed lorem feugiat, egestas
        efficitur libero. Cras quis lobortis nunc. Pellentesque vehicula
        bibendum odio fermentum venenatis. Maecenas sit amet diam eget lectus
        fermentum efficitur vitae nec sapien. Nulla facilisi. Praesent eu
        consequat magna, a fringilla lacus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ante mi,
        semper vel pulvinar at, pellentesque ut eros. Aenean condimentum
        consequat felis, et tincidunt eros ultricies sed. Nunc vel quam at ante
        pretium ornare sed at odio. Suspendisse consectetur, metus bibendum
        luctus accumsan, nisl augue ultrices mi, in auctor nisi ante vel risus.
        Ut nec aliquet arcu. Praesent hendrerit nunc lobortis eros varius
        dapibus. Pellentesque molestie rhoncus magna sit amet lacinia. Phasellus
        eget feugiat nisi. Donec quam est, fringilla sed lorem feugiat, egestas
        efficitur libero. Cras quis lobortis nunc. Pellentesque vehicula
        bibendum odio fermentum venenatis. Maecenas sit amet diam eget lectus
        fermentum efficitur vitae nec sapien. Nulla facilisi. Praesent eu
        consequat magna, a fringilla lacus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ante mi,
        semper vel pulvinar at, pellentesque ut eros. Aenean condimentum
        consequat felis, et tincidunt eros ultricies sed. Nunc vel quam at ante
        pretium ornare sed at odio. Suspendisse consectetur, metus bibendum
        luctus accumsan, nisl augue ultrices mi, in auctor nisi ante vel risus.
        Ut nec aliquet arcu. Praesent hendrerit nunc lobortis eros varius
        dapibus. Pellentesque molestie rhoncus magna sit amet lacinia. Phasellus
        eget feugiat nisi. Donec quam est, fringilla sed lorem feugiat, egestas
        efficitur libero. Cras quis lobortis nunc. Pellentesque vehicula
        bibendum odio fermentum venenatis. Maecenas sit amet diam eget lectus
        fermentum efficitur vitae nec sapien. Nulla facilisi. Praesent eu
        consequat magna, a fringilla lacus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ante mi,
        semper vel pulvinar at, pellentesque ut eros. Aenean condimentum
        consequat felis, et tincidunt eros ultricies sed. Nunc vel quam at ante
        pretium ornare sed at odio. Suspendisse consectetur, metus bibendum
        luctus accumsan, nisl augue ultrices mi, in auctor nisi ante vel risus.
        Ut nec aliquet arcu. Praesent hendrerit nunc lobortis eros varius
        dapibus. Pellentesque molestie rhoncus magna sit amet lacinia. Phasellus
        eget feugiat nisi. Donec quam est, fringilla sed lorem feugiat, egestas
        efficitur libero. Cras quis lobortis nunc. Pellentesque vehicula
        bibendum odio fermentum venenatis. Maecenas sit amet diam eget lectus
        fermentum efficitur vitae nec sapien. Nulla facilisi. Praesent eu
        consequat magna, a fringilla lacus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ante mi,
        semper vel pulvinar at, pellentesque ut eros. Aenean condimentum
        consequat felis, et tincidunt eros ultricies sed. Nunc vel quam at ante
        pretium ornare sed at odio. Suspendisse consectetur, metus bibendum
        luctus accumsan, nisl augue ultrices mi, in auctor nisi ante vel risus.
        Ut nec aliquet arcu. Praesent hendrerit nunc lobortis eros varius
        dapibus. Pellentesque molestie rhoncus magna sit amet lacinia. Phasellus
        eget feugiat nisi. Donec quam est, fringilla sed lorem feugiat, egestas
        efficitur libero. Cras quis lobortis nunc. Pellentesque vehicula
        bibendum odio fermentum venenatis. Maecenas sit amet diam eget lectus
        fermentum efficitur vitae nec sapien. Nulla facilisi. Praesent eu
        consequat magna, a fringilla lacus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ante mi,
        semper vel pulvinar at, pellentesque ut eros. Aenean condimentum
        consequat felis, et tincidunt eros ultricies sed. Nunc vel quam at ante
        pretium ornare sed at odio. Suspendisse consectetur, metus bibendum
        luctus accumsan, nisl augue ultrices mi, in auctor nisi ante vel risus.
        Ut nec aliquet arcu. Praesent hendrerit nunc lobortis eros varius
        dapibus. Pellentesque molestie rhoncus magna sit amet lacinia. Phasellus
        eget feugiat nisi. Donec quam est, fringilla sed lorem feugiat, egestas
        efficitur libero. Cras quis lobortis nunc. Pellentesque vehicula
        bibendum odio fermentum venenatis. Maecenas sit amet diam eget lectus
        fermentum efficitur vitae nec sapien. Nulla facilisi. Praesent eu
        consequat magna, a fringilla lacus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ante mi,
        semper vel pulvinar at, pellentesque ut eros. Aenean condimentum
        consequat felis, et tincidunt eros ultricies sed. Nunc vel quam at ante
        pretium ornare sed at odio. Suspendisse consectetur, metus bibendum
        luctus accumsan, nisl augue ultrices mi, in auctor nisi ante vel risus.
        Ut nec aliquet arcu. Praesent hendrerit nunc lobortis eros varius
        dapibus. Pellentesque molestie rhoncus magna sit amet lacinia. Phasellus
        eget feugiat nisi. Donec quam est, fringilla sed lorem feugiat, egestas
        efficitur libero. Cras quis lobortis nunc. Pellentesque vehicula
        bibendum odio fermentum venenatis. Maecenas sit amet diam eget lectus
        fermentum efficitur vitae nec sapien. Nulla facilisi. Praesent eu
        consequat magna, a fringilla lacus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ante mi,
        semper vel pulvinar at, pellentesque ut eros. Aenean condimentum
        consequat felis, et tincidunt eros ultricies sed. Nunc vel quam at ante
        pretium ornare sed at odio. Suspendisse consectetur, metus bibendum
        luctus accumsan, nisl augue ultrices mi, in auctor nisi ante vel risus.
        Ut nec aliquet arcu. Praesent hendrerit nunc lobortis eros varius
        dapibus. Pellentesque molestie rhoncus magna sit amet lacinia. Phasellus
        eget feugiat nisi. Donec quam est, fringilla sed lorem feugiat, egestas
        efficitur libero. Cras quis lobortis nunc. Pellentesque vehicula
        bibendum odio fermentum venenatis. Maecenas sit amet diam eget lectus
        fermentum efficitur vitae nec sapien. Nulla facilisi. Praesent eu
        consequat magna, a fringilla lacus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ante mi,
        semper vel pulvinar at, pellentesque ut eros. Aenean condimentum
        consequat felis, et tincidunt eros ultricies sed. Nunc vel quam at ante
        pretium ornare sed at odio. Suspendisse consectetur, metus bibendum
        luctus accumsan, nisl augue ultrices mi, in auctor nisi ante vel risus.
        Ut nec aliquet arcu. Praesent hendrerit nunc lobortis eros varius
        dapibus. Pellentesque molestie rhoncus magna sit amet lacinia. Phasellus
        eget feugiat nisi. Donec quam est, fringilla sed lorem feugiat, egestas
        efficitur libero. Cras quis lobortis nunc. Pellentesque vehicula
        bibendum odio fermentum venenatis. Maecenas sit amet diam eget lectus
        fermentum efficitur vitae nec sapien. Nulla facilisi. Praesent eu
        consequat magna, a fringilla lacus.
      </p>
    </div>
  );
}
