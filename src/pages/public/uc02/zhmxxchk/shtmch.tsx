
/**
 * 社团名称
 */
export default function Shtmch() {
	return <>
		<span className={'title'}>软件工作室</span>
		<style jsx>{`
.title{
font-family: AlibabaPuHuiTi;
font-size: 36px;
font-weight: 500;
line-height: 22px;
letter-spacing: 0em;
	
color: #347BCD;
}
{/* 竖线 */}
.title::before{
content: '';
display: inline-block;
margin-right: 0.5rem;
vertical-align: -40%;

width: 12px;
height: 44px;
border-radius: 5px;
	
background: #347BCD;
}
`}</style>
	</>;
}
