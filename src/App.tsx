import { BrowserRouter as Router, Routes, Route } from "react-router";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import NotFound from "./pages/OtherPage/NotFound";
import UserProfiles from "./pages/UserProfiles";
import Videos from "./pages/UiElements/Videos";
import Images from "./pages/UiElements/Images";
import Alerts from "./pages/UiElements/Alerts";
import Badges from "./pages/UiElements/Badges";
import Avatars from "./pages/UiElements/Avatars";
import Buttons from "./pages/UiElements/Buttons";
import LineChart from "./pages/Charts/LineChart";
import BarChart from "./pages/Charts/BarChart";
import Calendar from "./pages/Calendar";
import BasicTables from "./pages/Tables/BasicTables";
import FormElements from "./pages/Forms/FormElements";
import Overview from "./pages/Sales/Overview";
import ManageInvoices from "./pages/Sales/ManageInvoices";
import ProductSaleQuotation from "./pages/Sales/ProductSaleQuotation";
import Refunds from "./pages/Sales/Refunds";
import SalesSummary from "./pages/Sales/SalesSummary";
import PurchaseOrders from "./pages/Purchase/PurchaseOrders";
import ManageSuppliers from "./pages/Purchase/ManageSuppliers";
import AllWareHouse from "./pages/warehouse/AllWarehouse";
import WareHouse from "./pages/warehouse/WareHouse";
import Blank from "./pages/Blank";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Home from "./pages/Dashboard/Home";

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Dashboard Layout */}
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Home />} />
             {/* Sales Page */}
             <Route path="/overview" element={<Overview />} />
            <Route path="/manage-invoices" element={<ManageInvoices />} />
            <Route path="/product-sale-quotation" element={<ProductSaleQuotation />} />
            <Route path="/refunds" element={<Refunds />} />
            <Route path="/sales-summary" element={<SalesSummary />} />
             {/* Purchase Page */}
             <Route path="/purchase-orders" element={<PurchaseOrders />} />
             <Route path="/manage-suppliers" element={<ManageSuppliers />} />
         {/* Purchase Page */}
         <Route path="/all-warehouse" element={<AllWareHouse />} />
             <Route path="/warehouse" element={<WareHouse />} />
            {/* Others Page */}
            <Route path="/profile" element={<UserProfiles />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/blank" element={<Blank />} />

            {/* Forms */}
            <Route path="/form-elements" element={<FormElements />} />

            {/* Tables */}
            <Route path="/basic-tables" element={<BasicTables />} />

            {/* Ui Elements */}
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/avatars" element={<Avatars />} />
            <Route path="/badge" element={<Badges />} />
            <Route path="/buttons" element={<Buttons />} />
            <Route path="/images" element={<Images />} />
            <Route path="/videos" element={<Videos />} />

            {/* Charts */}
            <Route path="/line-chart" element={<LineChart />} />
            <Route path="/bar-chart" element={<BarChart />} />
          </Route>

          {/* Auth Layout */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
