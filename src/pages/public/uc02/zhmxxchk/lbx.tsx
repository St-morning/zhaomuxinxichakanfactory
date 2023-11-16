import dt2str from '../../../../atoms/dt/dt2str';
import Bdx from './bdx';

/**
 * 列表项
 */
export default function Lbx() {
	return <>
		<div className={'kapian'}>
			<div className={'neirong'}>
				<Bdx label='招募岗位' value='社团活动志愿者' />
				<Bdx label='招募人数' value='5人' />
				<Bdx label='报名方式' value='社团活动室现场报名' />
				<Bdx label='开始时间' value={dt2str('2022-08-18 8:00:00', 'datetime')} />
				<Bdx label='截止时间' value={dt2str('2022-08-20 18:00:00', 'datetime')} />
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
