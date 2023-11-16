import { PageConfig } from 'next';
import createHandler from '../../../../../atoms/server/handler';
import mmLogger from '../../../../../atoms/server/logger';
import { ShtzhmBjbcParam, ShtzhmBjbcResult } from '../../../controllers/shtzhm';
import ctrls from '../../../ctrls';

const logger = mmLogger('pages/api/admin/uc01/zhmtzh/bjbc.api');

export type Data = ShtzhmBjbcResult;

export type Result = {
	ok: true;
	data: Data;
} | {
	ok: false;
	message: string;
};

export type Message = ShtzhmBjbcParam;

/**
 * 编辑保存
 */
const handler = createHandler<Result>();

handler.post(async (req, res) => {
	try {
		logger.debug('msg body:', req.body);
		const msg = req.body as Message;
		const data = await ctrls.shtzhm.bjbc(msg);
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
