import { useState } from 'react';
import Ui from '../../../../components/ui';
import apiAdminUc01ZhmtzhBjbc, { Data as D1, Message as M1, Result as R1 } from '../../../api/admin/uc01/zhmtzh/bjbc';

/**
 * 编辑招募通知
 */
export default function Bjzhmtzh({
	initData,
	onChange
}: {
	initData: M1;
	onChange(): void;
}) {
	const [data, setdata] = useState(initData);
	return <>
		<Ui.Button.Edit
			dlgTitle='社团成员招募-编辑'
			onCancel={() => {
				setdata(initData);
			}}
			onOK={async () => {
				const { zhmxxbh, bmfsh, bmjzhshj, bmkshshj, zhmgw, zhmrsh } = data;
				if (!zhmxxbh) {
					throw new Error('招募信息编号不能为空');
				}
				if (!zhmgw) {
					throw new Error('招募岗位为必填项，请重新填写');
				}
				if (!zhmrsh) {
					throw new Error('招募人数为必填项，请重新填写');
				}
				if (!bmfsh) {
					throw new Error('报名方式为必填项，请重新填写');
				}
				if (!bmkshshj) {
					throw new Error('报名开始时间为必填项，请重新填写');
				}
				if (!bmjzhshj) {
					throw new Error('报名截止时间为必填项，请重新填写');
				}
				const now = Date.now();
				if (parseInt(bmkshshj, 10) < now) {
					throw new Error('报名开始时间过早');
				}
				if (parseInt(bmkshshj, 10) >= parseInt(bmjzhshj, 10)) {
					throw new Error('报名时间过短');
				}
				await apiAdminUc01ZhmtzhBjbc(data);
				onChange();
			}}
		>
			<Ui.Form.Group title='社团招募信息'>
				<Ui.Form.Row>
					<Ui.Form.Column span={12}>
						<Ui.Form.Item.Input
							label='招募岗位'
							required
							value={data.zhmgw}
							onChange={(val) => {
								setdata({
									...data,
									zhmgw: val
								});
							}}
						/>
					</Ui.Form.Column>
					<Ui.Form.Column span={12}>
						<Ui.Form.Item.InputNumber
							label='招募人数'
							required
							min={1}
							value={data.zhmrsh}
							onChange={(val) => {
								setdata({
									...data,
									zhmrsh: val
								});
							}}
						/>
					</Ui.Form.Column>
				</Ui.Form.Row>
				<Ui.Form.Row>
					<Ui.Form.Column>
						<Ui.Form.Item.Input
							labelSpan={4}
							label='报名方式'
							required
							value={data.bmfsh}
							onChange={(val) => {
								setdata({
									...data,
									bmfsh: val
								});
							}}
						/>
					</Ui.Form.Column>
				</Ui.Form.Row>
				<Ui.Form.Row>
					<Ui.Form.Column>
						<Ui.Form.Item.DatePicker.Range
							labelSpan={4}
							label='报名起止时间'
							required
							showTime
							value={[data.bmkshshj, data.bmjzhshj]}
							onChange={([val1, val2]) => {
								setdata({
									...data,
									bmkshshj: val1,
									bmjzhshj: val2,
								});
							}}
						/>
					</Ui.Form.Column>
				</Ui.Form.Row>
			</Ui.Form.Group>
		</Ui.Button.Edit>
	</>;
}
