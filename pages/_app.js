// importing bootswatch
import 'bootswatch/dist/solar/bootstrap.min.css';
import 'animate.css/animate.min.css';
import '../global.css';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
