import { PageConfig } from 'next';
import createHandler from '../../../../../atoms/server/handler';
import mmLogger from '../../../../../atoms/server/logger';
import { ShtzhmXzbcParam, ShtzhmXzbcResult } from '../../../controllers/shtzhm';
import ctrls from '../../../ctrls';

const logger = mmLogger('pages/api/admin/uc01/zhmtzh/xzbczmxx.api');

export type Data = ShtzhmXzbcResult;

export type Result = {
	ok: true;
	data: Data;
} | {
	ok: false;
	message: string;
};

export type Message = ShtzhmXzbcParam;

/**
 * 新增保存招募信息
 */
const handler = createHandler<Result>();

handler.post(async (req, res) => {
	try {
		logger.debug('msg body:', req.body);
		const msg = req.body as Message;
		const data = await ctrls.shtzhm.xzbc(msg);
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
