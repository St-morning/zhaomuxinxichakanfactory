import api from '../../../../../atoms/api';
import smartfetch from '../../../../../atoms/smart-fetch';
import { Message, Result } from './bjbc.api';

export type { Data, Message, Result } from './bjbc.api';

/**
 * 编辑保存
 */
export default async function apiAdminUc01ZhmtzhBjbc(msg: Message) {
	const ret = await smartfetch<Result, Message>(api['/api/admin/uc01/zhmtzh/bjbc'], 'post', msg);
	if(ret.ok === true){
		return ret.data;
	}
	throw new Error(ret.message);
}
