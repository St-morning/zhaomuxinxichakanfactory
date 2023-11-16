import Ui from '../../../../components/ui';

/**
 * 表单项
 */
export default function Bdx({
	label,
	value
}: {
	label: string;
	value: string;
}) {
	return <>
		<Ui.Form.Item.Text
			separator=''
			label={<span className={'wenzi'}>{label}:</span>}
			value={<span className={'wenzi'}>{value}</span>}
		/>
		<style jsx>{`
{/* 文字 */}
.wenzi{
font-family: MicrosoftYaHeiUILight;
font-size: 20px;
font-weight: normal;
line-height: 22px;
color: #FFFFFF;
}
`}</style>
	</>;
}
