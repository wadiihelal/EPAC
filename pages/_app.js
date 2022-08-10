import { AppProps } from 'next/app';
import Navbar from '../src/components/Navbar';
import '../styles/globals.css';
import'../styles/App.css'
import codeabarre from '../src/download.jpeg'
import 'bootstrap/dist/css/bootstrap.min.css';
import {  message  } from 'antd';
import "antd/dist/antd.css" 

const Layout = ({ children }) => <div><Navbar/> {children}</div>;

export default function MyApp({ Component, pageProps }){
	return (
		<Layout>
      
			<Component {...pageProps} />
		</Layout>
	);
}