import ui from '../../../../atoms/ui';
import Ui from '../../../../components/ui';
import apiAdminUc01ZhmtzhShanchu, { Data as D1, Message as M1, Result as R1 } from '../../../api/admin/uc01/zhmtzh/shanchu';

/**
 * 删除招募通知
 */
export default function Sczmtz({
	zhmxxbh,
	onChange
}: M1 & {
	onChange(): void;
}) {
	return <>
		<Ui.feedback.Confirm
			onOk={async () => {
				await apiAdminUc01ZhmtzhShanchu({
					zhmxxbh
				});
				ui.Message.success('删除成功');
				onChange();
			}}
			title={<div className={'tishi'}>
				<div>是否确认删除？</div>
			</div>}
		>
			<Ui.Button.Text
				title='删除'
			/>
		</Ui.feedback.Confirm>
		<style jsx>{`
{/* 提示 */}
.tishi{
font-family: MicrosoftYaHei;
font-size: 14px;
font-weight: normal;
line-height: 22px;
text-align: justify; /* 浏览器可能不支持 */
letter-spacing: 0em;
	
/* 文本/Text-5 */
color: #1D2129;
}
`}</style>
	</>;
}
