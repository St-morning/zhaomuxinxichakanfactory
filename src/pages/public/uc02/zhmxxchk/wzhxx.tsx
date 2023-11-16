import Ui from '../../../../components/ui';

/**
 * 网站信息
 */
export default function Wzhxx() {
	return <>
		<div className={'footer'}>
			<Ui.Layout.CenterPanel
				fill
			>
				<Ui.Layout.Row>
					<Ui.Layout.Column>
						<Ui.Layout.CenterPanel
							fill
						>
							<Ui.Layout.Space size={'large'}>
								<span>学校校址：河南省郑州市航海中路94号(北校区)</span>
								<span>郑州市紫荆山南路666号(南校区)</span>
								<span>河南省济源市济源大道666号（济源校区）</span>
							</Ui.Layout.Space>
						</Ui.Layout.CenterPanel>
					</Ui.Layout.Column>
				</Ui.Layout.Row>
				<Ui.Layout.Row>
					<Ui.Layout.Column>
						<Ui.Layout.CenterPanel
							fill
						>
							<Ui.Layout.Space size={'medium'}>
								<span>豫ICP备05002420号-1</span>
								<span>豫公网安备 41010302002117号</span>
								<span>学校值班电话：(0371)68782596 传真：(0371)68784554 学校招生热线：(0371)88858888</span>
							</Ui.Layout.Space>
						</Ui.Layout.CenterPanel>
					</Ui.Layout.Column>
				</Ui.Layout.Row>
			</Ui.Layout.CenterPanel>
			<style jsx>{`
.footer{
background: #E5EFFC;
width: 100%;
padding: 31px 0;
}
`}</style>
		</div>
	</>;
}
