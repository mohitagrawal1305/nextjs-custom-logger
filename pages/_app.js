import logger from '../helpers/logger';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  logger( 'My App' )
  return <Component {...pageProps} />
}

MyApp.getInitialProps = async (ctx) => {
 
  const isLogsEnabled = ctx?.router?.query?.debug || '';
	global.isLogsEnabled = isLogsEnabled === 'true';
  return {};
}


export default MyApp
