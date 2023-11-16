import api from '../../../../../atoms/api';
import smartfetch from '../../../../../atoms/smart-fetch';
import { Message, Result } from './shanchu.api';

export type { Data, Message, Result } from './shanchu.api';

/**
 * 删除
 */
export default async function apiAdminUc01ZhmtzhShanchu(msg: Message) {
	const ret = await smartfetch<Result, Message>(api['/api/admin/uc01/zhmtzh/shanchu'], 'delete', msg);
	if(ret.ok === true){
		return ret.data;
	}
	throw new Error(ret.message);
}
