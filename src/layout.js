import Welcome from './welcome.js';
import Head from './head.js';

export default function App() {
    return (
      <div>
        <Welcome name="Sara" />
        <Welcome name="John" />
        <Welcome name="Alex" />
        <Head/>
      </div>
    );
  }

