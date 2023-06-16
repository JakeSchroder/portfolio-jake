import HomePage from "./page/HomePage";
import { Analytics } from '@vercel/analytics';

function App() {
  return (
      <>
        <HomePage></HomePage>
        <Analytics/>
      </>
    );
}

export default App;
