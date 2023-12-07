import dt2str from '../../../../atoms/dt/dt2str';
import { ZhmxxLbchxResult } from '../../../api/controllers/zhmxx';
import Bdx from './bdx';

/**
 * 列表项
 */
export default function Lbx({ data }: { data: ZhmxxLbchxResult }) {
	return <>
		<div className={'kapian'}>
			<div className={'neirong'}>
				<Bdx label='招募岗位' value={data.zhmgw} />
				<Bdx label='招募人数' value={`${data.zhmrsh}人`} />
				<Bdx label='报名方式' value={data.bmfsh} />
				<Bdx label='开始时间' value={dt2str(data.bmkshshj, 'datetime')} />
				<Bdx label='截止时间' value={dt2str(data.bmjzhshj, 'datetime')} />
			</div>
		</div>
		<style jsx>{`
{/* 内容 */}
.neirong{
padding: 1rem;
font-family: MicrosoftYaHeiUILight;
font-size: 20px;
font-weight: normal;
line-height: 22px;
letter-spacing: 0em;
	
color: #FFFFFF;

margin: 0rem;
}
{/* 卡片 */}
.kapian{
width: 437px;
border-radius: 20px;
	
background: linear-gradient(180deg, #4484AC 0%, rgba(0,62,120,0.85) 97%);
	
box-shadow: 6px 5px 4px 0px rgba(0, 0, 0, 0.25);

margin: 3rem 3rem;
}
`}</style>
	</>;
}
