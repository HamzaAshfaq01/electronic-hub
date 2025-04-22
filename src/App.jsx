import { BrowserRouter as Router, Routes, Route } from 'react-router';
import SignIn from './pages/AuthPages/SignIn';
import SignUp from './pages/AuthPages/SignUp';
import NotFound from './pages/OtherPage/NotFound';
import UserProfiles from './pages/UserProfiles';
import Calendar from './pages/Calendar';
import Overview from './pages/Sales/Overview';
import ManageInvoices from './pages/Sales/ManageInvoices';
import ProductSaleQuotation from './pages/Sales/ProductSaleQuotation';
import Refunds from './pages/Sales/Refunds';
import SalesSummary from './pages/Sales/SalesSummary';
import PurchaseOrders from './pages/Purchase/PurchaseOrders';
import ManageSuppliers from './pages/Purchase/ManageSuppliers';
import SupplierProducts from './pages/Purchase/SupplierProducts';
import AllWareHouse from './pages/warehouse/AllWarehouse';
import WareHouse from './pages/warehouse/WareHouse';
import Blank from './pages/Blank';
import AppLayout from './layout/AppLayout';
import { ScrollToTop } from './components/common/ScrollToTop';
import Home from './pages/Dashboard/Home';
import AllInstallments from './pages/Installments/AllInstallments';
import Expenses from './pages/Accounting/Expenses';
import AllClient from './pages/Client/AllClient';

export default function App() {
	return (
		<>
			<Router>
				<ScrollToTop />
				<Routes>
					{/* Dashboard Layout */}
					<Route element={<AppLayout />}>
						<Route index path='/' element={<Home />} />
						{/* Sales Page */}
						<Route path='/overview' element={<Overview />} />
						<Route path='/manage-invoices' element={<ManageInvoices />} />
						<Route path='/product-sale-quotation' element={<ProductSaleQuotation />} />
						<Route path='/refunds' element={<Refunds />} />
						<Route path='/sales-summary' element={<SalesSummary />} />
						{/* Purchase Page */}
						<Route path='/purchase-orders' element={<PurchaseOrders />} />
						<Route path='/manage-suppliers' element={<ManageSuppliers />} />
						<Route path='/manage-suppliers/:supplier' element={<SupplierProducts />} />
						{/* Purchase Page */}
						<Route path='/all-warehouse' element={<AllWareHouse />} />
						<Route path='/warehouse' element={<AllWareHouse />} />
						<Route path='/warehouse/:warehouseId' element={<WareHouse />} />
						{/* Installments Page */}
						<Route path='/all-installments' element={<AllInstallments />} />
						{/* Accounting Page */}
						<Route path='/expenses' element={<Expenses />} />
						{/* Client Page */}
						<Route path='/all-client' element={<AllClient />} />
						{/* Others Page */}
						<Route path='/profile' element={<UserProfiles />} />
						<Route path='/calendar' element={<Calendar />} />
						<Route path='/blank' element={<Blank />} />
					</Route>

					{/* Auth Layout */}
					<Route path='/signin' element={<SignIn />} />
					<Route path='/signup' element={<SignUp />} />

					{/* Fallback Route */}
					<Route path='*' element={<NotFound />} />
				</Routes>
			</Router>
		</>
	);
}
