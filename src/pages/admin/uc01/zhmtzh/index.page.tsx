import { GetServerSideProps, NextPage, PageConfig } from 'next';
import Router from 'next/router';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import dt2str from '../../../../atoms/dt/dt2str';
import res from '../../../../atoms/res';
import Ui from '../../../../components/ui';
import Bjzhmtzh from './bjzhmtzh';
import Xzzhmtzh from './xzzhmtzh';
import Sczmtz from './sczmtz';
import apiAdminUc01ZhmtzhLbchx, { Data as D1, Message as M1, Result as R1 } from '../../../api/admin/uc01/zhmtzh/lbchx';
import pagesize from '../../../../atoms/pagesize';

interface IProps {
	initQuery: M1;
}

/**
 * 招募通知
 */
const Page: NextPage<IProps> = ({ initQuery }) => {
	const [query, setquery] = useState(initQuery);
	const [data, setdata] = useState([] as D1[]);
	const [total, settotal] = useState(0);
	useEffect(() => {
		void (async () => {
			const data = await apiAdminUc01ZhmtzhLbchx(query);
			setdata(data.data);
			settotal(data.total);
		})();
	}, [query]);
	useEffect(() => {
		void (async () => {
			await Router.replace({
				query
			});
		})();
	}, [query]);

	return (
		<>
			<Head>
				<title>招募通知</title>
			</Head>
			<Ui.MainContainer
				title='招募通知'
				subTitle={<Xzzhmtzh
					onChange={() => {
						setquery({
							...query,
							page: '1'
						});
					}}
				/>}
				icon={res['/images/zhmtzh.svg']}
				search={{
					onSearch(value) {
						setquery({
							...query,
							keyword: value
						});
					},
				}}
			>
				<Ui.Table
					data={data}
					keyField='zhmxxbh'
					columns={[{
						dataIndex: 'zhmgw',
						title: '招募岗位/主要内容'
					}, {
						dataIndex: 'fbshj',
						title: '通知发布时间',
						render(col, item, index) {
							return dt2str(col, 'datetime');
						},
					}, {
						dataIndex: 'bmkshshj',
						title: '报名起始时间',
						render(col, item, index) {
							return dt2str(col, 'datetime');
						},
					}, {
						dataIndex: 'bmjzhshj',
						title: '报名截止时间',
						render(col, item, index) {
							return dt2str(col, 'datetime');
						},
					}, {
						dataIndex: 'zhmxxbh',
						title: '操作',
						render(col, item, index) {
							return <Ui.Table.ButtonGroup>
								<Bjzhmtzh
									initData={item}
									onChange={() => {
										setquery({
											...query
										});
									}}
								/>
								<Sczmtz
									zhmxxbh={item.zhmxxbh}
									onChange={() => {
										setquery({
											...query,
											page: '1'
										});
									}}
								/>
							</Ui.Table.ButtonGroup>;
						},
					}]}
					pagination={{
						current: parseInt(query.page),
						total,
						pageSize: pagesize(),
						onChange(pageNumber, pageSize) {
							setquery({
								...query,
								page: pageNumber.toString()
							});
						},
					}}
				/>
			</Ui.MainContainer>
		</>
	);
};

export const config: PageConfig = {
	amp: false
};

export default Page;

// pre-render this page on each request
// eslint-disable-next-line require-await, @typescript-eslint/require-await
export const getServerSideProps: GetServerSideProps<IProps> = async (context) => {
	const query = context.query as M1;
	return {
		props: {
			initQuery: {
				page: '1',
				keyword: '',
				...query
			}
		}
	};
};
