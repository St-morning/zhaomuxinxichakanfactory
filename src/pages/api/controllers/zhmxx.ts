import mmLogger from '../../../atoms/server/logger';
import tbZhmxx, { ITbZhmxx } from '../../../db/01factory/table/tbzhmxx';

const logger = mmLogger('pages/api/controllers/zhmxx');

export type ZhmxxLbchxParam = {};
export type ZhmxxLbchxResult = ITbZhmxx;

/**
 * 招募信息
 */
const zhmxx = {

	/**
	 * 列表查询
	 */
	async lbchx(param: ZhmxxLbchxParam) {
		logger.debug(param);
		//声明data用来返回数据 查询并排序
		const data = await tbZhmxx().query().orderBy('fbshj', 'desc');
		return data as ZhmxxLbchxResult[];
	},
};

export default zhmxx;
