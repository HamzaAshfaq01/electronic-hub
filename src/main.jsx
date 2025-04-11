import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Amplify } from 'aws-amplify';
import './index.css';
import 'swiper/swiper-bundle.css';
import 'simplebar-react/dist/simplebar.min.css';
import App from './App.jsx';
import { AppWrapper } from './components/common/PageMeta.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';
import { SidebarProvider } from './context/SidebarContext';
import amplifyconfig from './amplifyconfiguration.json';

Amplify.configure(amplifyconfig);

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<ThemeProvider>
			<AppWrapper>
				<SidebarProvider>
					<App />
				</SidebarProvider>
			</AppWrapper>
		</ThemeProvider>
	</StrictMode>
);
