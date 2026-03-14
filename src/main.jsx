import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import '@/index.css'
import App from '@/App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'react-bootstrap-icons/dist/icons/index.js';
import ErrorBoundary from '@/components/common/ErrorBoundary.jsx';

import store from "@/app/store.js";
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<ErrorBoundary>
			<Provider store={store}>
				<App />
			</Provider>
		</ErrorBoundary>
	 </StrictMode>
);