import ViewSales from "../../components/sales/ViewSales";
import TotalSales from "../../components/sales/TotalSales";
import PageMeta from "../../components/common/PageMeta";

export default function Overview() {
  return (
    <>
      <PageMeta title="Electronic Hub" description="" />
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 space-y-6 xl:col-span-12">
          <ViewSales />
        </div>
        <div className="col-span-12 xl:col-span-12">
          <TotalSales />
        </div>
      </div>
    </>
  );
}
