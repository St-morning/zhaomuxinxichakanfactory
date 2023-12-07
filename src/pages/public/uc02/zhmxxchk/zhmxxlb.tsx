import res from '../../../../atoms/res';
import Ui from '../../../../components/ui';
import { ZhmxxLbchxResult } from '../../../api/controllers/zhmxx';
import Lbx from './lbx';
import Shtmch from './shtmch';

/**
 * 招募信息列表
 */

export default function Zhmxxlb({ data }: { data: ZhmxxLbchxResult[] }) {
	return <div className={'beijing'} >


		<div className={'zhmxx'}>黄河科技学院社团招募信息</div>

		<Ui.Layout.Space size={'large'}>
			<span className={'xiaoxun'}>厚德博学</span>
			<span className={'xiaoxun'}>砺志图强</span>
		</Ui.Layout.Space>
		<div className={'liebiao'}>
			<Shtmch />
			<div className={'lbnr'}>
				{data.map((item) => {
					return <Lbx key={item.zhmxxbh} data={item} />;
				})}

			</div>
		</div>


		<style jsx>{`
{/* 列表内容 */}
.lbnr{

display: flex;
flex-direction: row;
flex-wrap: wrap;
padding: 1rem;
}
{/* 列表 */}
.liebiao{
opacity: 0.8;
width: 1167px;
height: 100%;
border-radius: 5px;
padding: 1.5rem;
background: #F4F8FC;
box-shadow: 6px 5px 4px 0px rgba(0, 0, 0, 0.25);
overflow-y: auto;
display: flex;
flex-direction: column;
flex-grow: 1;

}
{/* 校训 */}
.xiaoxun{
font-family: MicrosoftYaHeiUI-Bold;
font-size: 48px;
font-weight: normal;
letter-spacing: 0em;
	
color: #FFFFFF;
flex-grow: 0;
}
{/* 招募信息 */}
.zhmxx{
font-family: MicrosoftYaHeiUI-Bold;
font-size: 64px;
font-weight: normal;
text-align: center;
letter-spacing: 0em;
	
color: #FFFFFF;
flex-grow: 0;
}
{/* 背景 */}
.beijing{
position: relative;
background: linear-gradient(180deg, #B2C8E6 0%, #347BCD 52%);
width: 100%;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
background-image: url(${res['/images/beijing.png']});


}


`}</style>


	</div>;
}
