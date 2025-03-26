import ViewSales from '../../components/sales/ViewSales'
import RecentSale from '../../components/home/RecentSale'
import RecentCredits from '../../components/home/RecentCredits'
import PageMeta from '../../components/common/PageMeta'

export default function Overview() {
	return (
		<>
			<PageMeta title='Electronic Hub' description='' />
			<div className='grid grid-cols-12 gap-4 md:gap-6 mb-5'>
				<div className='col-span-12 space-y-6 xl:col-span-12'>
					<ViewSales />
				</div>
			</div>
			<div className='grid grid-cols-7 gap-10'>
				<div className='col-span-12 lg:col-span-5'>
					<RecentSale />
				</div>
				<div className='col-span-12 lg:col-span-2'>
					<RecentCredits />
				</div>
			</div>
		</>
	)
}
