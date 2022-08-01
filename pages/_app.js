import { AppProps } from 'next/app';
import Navbar from '../src/components/Navbar';
import '../styles/globals.css';
import'../styles/App.css'
import codeabarre from '../src/download.jpeg'
import 'bootstrap/dist/css/bootstrap.min.css';
import TabsetExample from './test';
import SideNavbar from '../components/SideNavbar'

const Layout = ({ children }) => <div><SideNavbar/> {children}</div>;

export default function MyApp({ Component, pageProps }){
	return (
		<Layout>
      
			<Component {...pageProps} />
		</Layout>
	);
}