import pagesize from '../../../atoms/pagesize';
import mmLogger from '../../../atoms/server/logger';
import uuid from '../../../atoms/server/uuid';
import tbZhmxx, { ITbZhmxx } from '../../../db/01factory/table/tbzhmxx';

const logger = mmLogger('pages/api/controllers/shtzhm');

export type ShtzhmLbchxParam = {
	page: string;
	keyword: string;
};
export type ShtzhmLbchxResult = ITbZhmxx;

export type ShtzhmXzbcParam = Pick<ITbZhmxx, 'bmfsh' | 'bmjzhshj' | 'bmkshshj' | 'zhmgw' | 'zhmrsh'>;
export type ShtzhmXzbcResult = {};

export type ShtzhmBjbcParam = Pick<ITbZhmxx, 'bmfsh' | 'bmjzhshj' | 'bmkshshj' | 'zhmgw' | 'zhmrsh' | 'zhmxxbh'>;
export type ShtzhmBjbcResult = {};

export type ShtzhmShanchuParam = Pick<ITbZhmxx, 'zhmxxbh'>;
export type ShtzhmShanchuResult = {};

/**
 * 社团招募
 */
const shtzhm = {
	/**
	 * 列表查询
	 */
	lbchx(param: ShtzhmLbchxParam) {
		logger.debug(param);
		const { keyword, page } = param;
		return tbZhmxx().list(
			['zhmgw'],
			keyword,
			page,
			pagesize(),
			{},
			(qb) => {
				return qb.orderBy('fbshj', 'desc');
			}
		);
	},
	/**
	 * 新增保存
	 */
	async xzbc(param: ShtzhmXzbcParam) {
		logger.debug(param);
		const { bmfsh, bmjzhshj, bmkshshj, zhmgw, zhmrsh } = param;
		if (!zhmgw) {
			throw new Error('招募岗位为必填项，请重新填写');
		}
		if (!zhmrsh) {
			throw new Error('招募人数为必填项，请重新填写');
		}
		if (!bmfsh) {
			throw new Error('报名方式为必填项，请重新填写');
		}
		if (!bmkshshj) {
			throw new Error('报名开始时间为必填项，请重新填写');
		}
		if (!bmjzhshj) {
			throw new Error('报名截止时间为必填项，请重新填写');
		}
		const now = Date.now();
		if (parseInt(bmkshshj, 10) < now) {
			throw new Error('报名开始时间过早');
		}
		if (parseInt(bmkshshj, 10) >= parseInt(bmjzhshj, 10)) {
			throw new Error('报名时间过短');
		}
		const zhmxxbh = uuid();
		const fbshj = now.toString();
		await tbZhmxx().insert({
			bmfsh,
			bmjzhshj,
			bmkshshj,
			fbshj,
			zhmgw,
			zhmrsh,
			zhmxxbh
		});
		return {} as ShtzhmXzbcResult;
	},
	/**
	 * 编辑保存
	 */
	async bjbc(param: ShtzhmBjbcParam) {
		logger.debug(param);
		const { zhmxxbh, bmfsh, bmjzhshj, bmkshshj, zhmgw, zhmrsh } = param;
		if (!zhmxxbh) {
			throw new Error('招募信息编号不能为空');
		}
		if (!zhmgw) {
			throw new Error('招募岗位为必填项，请重新填写');
		}
		if (!zhmrsh) {
			throw new Error('招募人数为必填项，请重新填写');
		}
		if (!bmfsh) {
			throw new Error('报名方式为必填项，请重新填写');
		}
		if (!bmkshshj) {
			throw new Error('报名开始时间为必填项，请重新填写');
		}
		if (!bmjzhshj) {
			throw new Error('报名截止时间为必填项，请重新填写');
		}
		const now = Date.now();
		if (parseInt(bmkshshj, 10) < now) {
			throw new Error('报名开始时间过早');
		}
		if (parseInt(bmkshshj, 10) >= parseInt(bmjzhshj, 10)) {
			throw new Error('报名时间过短');
		}
		await tbZhmxx().update({
			bmfsh,
			bmjzhshj,
			bmkshshj,
			fbshj: now.toString(),
			zhmgw,
			zhmrsh,
			zhmxxbh
		}, {
			zhmxxbh
		});
		return {} as ShtzhmBjbcResult;
	},
	/**
	 * 删除
	 */
	async shanchu(param: ShtzhmShanchuParam) {
		logger.debug(param);
		const { zhmxxbh } = param;
		if (!zhmxxbh) {
			throw new Error('关键字为空');
		}
		await tbZhmxx().delete({
			zhmxxbh
		});
		return {} as ShtzhmShanchuResult;
	},
};

export default shtzhm;
