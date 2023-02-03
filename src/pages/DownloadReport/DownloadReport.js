import React from "react"
import { useEffect } from "react"
import { withTranslation } from "react-i18next"
import { useDispatch, useSelector } from "react-redux"
import { withRouter } from "react-router-dom"
import { Card } from "reactstrap"
import BreadCrumb from "src/Components/Common/BreadCrumb"
import { getReports } from "src/store/actions"



const DownloadReport = (props) => {
	const T = props.t ? props.t : (v) => v;
	const dispatch = useDispatch();
	const { submissionReports } = useSelector(state => ({
		submissionReports: state.SubmissionForm.submissionReports,
	}));

	useEffect(() => {
		dispatch(getReports());
	}, [])


	return (
		<div className="page-content">
			<BreadCrumb title="ESG Performance Report" />
			<Card>
				<table className="table">
					<thead>
						<tr>
							<th scope="col" >{T('Recording Period')}</th>
							<th scope="col" >{T('Action')}</th>
							<th scope="col">{T('Issue Date')}</th>
							<th scope="col">{T('Status')}</th>
							<th scope="col">{T('Remark')}</th>
						</tr>
					</thead>
					<tbody>
						{submissionReports && submissionReports.length > 0 && submissionReports.map((d, dIndex) => (
							<tr key={dIndex}>
								<th>{d.period}</th>
								<td>{d.file_path ? <a href={d.file_path}>Download</a> : 'N.A'}</td>
								<td>{d.issue_date}</td>
								<td>{d.status}</td>
								<td>{d.remark}</td>
							</tr>
						))}
					</tbody>
				</table>
			</Card>

		</div>
	)
}

export default withRouter((withTranslation()(DownloadReport)))