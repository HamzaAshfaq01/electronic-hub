import { BrowserRouter as Router, Routes, Route } from 'react-router';
import SignIn from './pages/AuthPages/SignIn';
import SignUp from './pages/AuthPages/SignUp';
import NotFound from './pages/OtherPage/NotFound';
import UserProfiles from './pages/UserProfiles';
import Qoutation from './pages/Qoutation';
// import Overview from './pages/Sales/Overview';
// import ManageInvoices from './pages/Sales/ManageInvoices';
// import ProductSaleQuotation from './pages/Sales/ProductSaleQuotation';
// import Refunds from './pages/Sales/Refunds';
// import PurchaseOrders from './pages/Purchase/PurchaseOrders';
// import ManageSuppliers from './pages/Purchase/ManageSuppliers';
// import SupplierProducts from './pages/Purchase/SupplierProducts';
import SalesSummary from './pages/Sales/SalesSummary';
import Products from './pages/Products';
// import Blank from './pages/Blank';
import AllWareHouse from './pages/warehouse/AllWarehouse';
import WareHouse from './pages/warehouse/WareHouse';
import AppLayout from './layout/AppLayout';
import { ScrollToTop } from './components/common/ScrollToTop';
import Home from './pages/Dashboard/Home';
import AllInstallments from './pages/Installments/AllInstallments';
import Expenses from './pages/Accounting/Expenses';
import AllClient from './pages/Client/AllClient';
import AllSuppliers from './pages/Suppliers/AllSuppliers';

export default function App() {
	return (
		<>
			<Router>
				<ScrollToTop />
				<Routes>
					{/* Dashboard Layout */}
					<Route element={<AppLayout />}>
						{/* <Route index path='/' element={<Home />} /> */}
						{/* <Route path='/overview' element={<Overview />} /> */}
						{/* <Route path='/manage-invoices' element={<ManageInvoices />} /> */}
						{/* <Route path='/product-sale-quotation' element={<ProductSaleQuotation />} /> */}
						{/*<Route path='/refunds' element={<Refunds />} /> */}
						<Route path='/sales-summary' element={<SalesSummary />} />
						{/* <Route path='/purchase-orders' element={<PurchaseOrders />} /> */}
						{/* <Route path='/manage-suppliers' element={<ManageSuppliers />} /> */}
						{/* <Route path='/manage-suppliers/:supplier' element={<SupplierProducts />} /> */}
						{/* <Route path='/all-warehouse' element={<AllWareHouse />} /> */}
						<Route path='/all-installments' element={<AllInstallments />} />
						<Route path='/warehouse' element={<AllWareHouse />} />
						<Route path='/warehouse/:warehouseId' element={<WareHouse />} />
						<Route path='/expenses' element={<Expenses />} />
						<Route path='/all-suppliers' element={<AllSuppliers />} />
						<Route path='/all-client' element={<AllClient />} />
						<Route path='/all-products' element={<Products />} />
						<Route path='/profile' element={<UserProfiles />} />
						<Route path='/qoutations' element={<Qoutation />} />
						{/* <Route path='/blank' element={<Blank />} /> */}
					</Route>

					<Route path='/signin' element={<SignIn />} />
					<Route path='/signup' element={<SignUp />} />

					<Route path='*' element={<NotFound />} />
				</Routes>
			</Router>
		</>
	);
}
