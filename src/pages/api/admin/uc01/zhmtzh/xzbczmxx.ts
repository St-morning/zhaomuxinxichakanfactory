import api from '../../../../../atoms/api';
import smartfetch from '../../../../../atoms/smart-fetch';
import { Message, Result } from './xzbczmxx.api';

export type { Data, Message, Result } from './xzbczmxx.api';

/**
 * 新增保存招募信息
 */
export default async function apiAdminUc01ZhmtzhXzbczmxx(msg: Message) {
	const ret = await smartfetch<Result, Message>(api['/api/admin/uc01/zhmtzh/xzbczmxx'], 'post', msg);
	if(ret.ok === true){
		return ret.data;
	}
	throw new Error(ret.message);
}
