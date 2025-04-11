import { ToastContainer } from 'react-toastify'
import { HelmetProvider, Helmet } from 'react-helmet-async'

const PageMeta = ({ title, description }) => (
	<Helmet>
		<title>{title}</title>
		<meta name='description' content={description} />
	</Helmet>
)

export const AppWrapper = ({ children }) => (
	<HelmetProvider>
		{children}
		<ToastContainer
			position='top-right'
			autoClose={5000}
			hideProgressBar={false}
			newestOnTop={false}
			closeOnClick={false}
			rtl={false}
			pauseOnFocusLoss
			draggable
			pauseOnHover
			theme='dark'
		/>
	</HelmetProvider>
)

export default PageMeta
