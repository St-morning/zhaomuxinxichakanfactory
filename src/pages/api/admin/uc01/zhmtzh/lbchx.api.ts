import { PageConfig } from 'next';
import createHandler from '../../../../../atoms/server/handler';
import mmLogger from '../../../../../atoms/server/logger';
import { ShtzhmLbchxParam, ShtzhmLbchxResult } from '../../../controllers/shtzhm';
import ctrls from '../../../ctrls';

const logger = mmLogger('pages/api/admin/uc01/zhmtzh/lbchx.api');

export type Data = ShtzhmLbchxResult;

export type Result = {
	ok: true;
	data: {
		total: number;
		data: Data[];
	};
} | {
	ok: false;
	message: string;
};

export type Message = ShtzhmLbchxParam;

/**
 * 列表查询
 */
const handler = createHandler<Result>();

handler.get(async (req, res) => {
	try {
		logger.debug('msg body:', req.query);
		const msg = req.query as Message;
		const data = await ctrls.shtzhm.lbchx(msg);
		res.status(200).json({
			ok: true,
			data
		});
	} catch (error) {
		logger.error(error);
		logger.trace(error);
		res.status(200).json({ ok: false, message: (error as Error).message });
	}
});

export const config: PageConfig = {};

export default handler;
