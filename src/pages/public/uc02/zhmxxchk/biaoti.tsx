import res from '../../../../atoms/res';
import Ui from '../../../../components/ui';

/**
 * 标题
 */
export default function Biaoti() {
	return <>
		<div className={'background'}>
			<Ui.Layout.Row>
				<Ui.Layout.Column offset={1}>
					<img src={res['/images/school.png']} />
				</Ui.Layout.Column>
			</Ui.Layout.Row>
		</div>
		<style jsx>{`
		.background{
		width: 100%;
		background: #347BCD;
		}
		`}</style>
	</>;
}
