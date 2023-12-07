import { GetServerSideProps, NextPage, PageConfig } from 'next';
import Head from 'next/head';
import Ui from '../../../../components/ui';
import Biaoti from './biaoti';
import Wzhxx from './wzhxx';
import Zhmxxlb from './zhmxxlb';
import ctrls from '../../../api/ctrls';
import { ZhmxxLbchxResult } from '../../../api/controllers/zhmxx';

interface IProps {
	data: ZhmxxLbchxResult[];
}

/**
 * 招募信息查看
 */
const Page: NextPage<IProps> = ({ data }) => {
	return (
		<>
			<Head>
				<title>招募信息查看</title>
			</Head>
			<Ui.Layout.Page>
				<Biaoti />
				<Zhmxxlb data={data} />
				<Wzhxx />
			</Ui.Layout.Page>
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
	const query = context.query as Record<string, string>;
	const data = await ctrls.zhmxx.lbchx({});
	return {
		props: {
			data
		}
	};
};
