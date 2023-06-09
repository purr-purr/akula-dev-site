import { useState } from 'react';

import CatalogListItem from '@modules/catalog/components/CatalogListItem';
import Pagination from '@modules/common/components/Pagination';

import DATA from '@data/data.json';

import s from './CatalogList.module.scss';

import { ICatalogItemData } from '@modules/common/types';

const CatalogList = () => {
	const [paginationSortedData, setPaginationSortedData] = useState<
		ICatalogItemData[]
	>([]);

	const handlePaginationSorting = (value: ICatalogItemData[]) => {
		setPaginationSortedData(value);
	};

	return (
		<>
			<ul className={s.container}>
				{paginationSortedData.map((item: ICatalogItemData) => (
					<CatalogListItem key={item._id} props={item} />
				))}
			</ul>
			<Pagination data={DATA} onPaginationSorting={handlePaginationSorting} />
		</>
	);
};

export default CatalogList;
