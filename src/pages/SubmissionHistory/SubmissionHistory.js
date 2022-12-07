import { getSubmissionForms } from "../../store/actions"
import React from "react"
import { useEffect } from "react"
import { withTranslation } from "react-i18next"
import { useDispatch, useSelector } from "react-redux"
import { Button, Card, CardBody, CardHeader, Col, Container, Label, Row } from "reactstrap"
import BreadCrumb from "../../Components/Common/BreadCrumb"
import * as moment from 'moment';
import { alertService } from "../../services"
import SubmissionGroups from "src/data/submissionGroups"

const SubmissionHistory = (props) => {
	const T = props.t
	const dispatch = useDispatch();

	const yearData = {
		'2022': '2022.04-2023.03',
		'2021': '2021.04-2022.03',
		'2020': '2020.04-2021.03',
		'2019': '2019.04-2020.03',
		'2018': '2018.04-2019.03',
		'2017': '2017.04-2018.03',
		'2016': '2016.04-2017.03',
		'2015': '2015.04-2016.03',
	}

	useEffect(() => {
		const email = localStorage.getItem("email");
		dispatch(getSubmissionForms(email, props.history))
	}, [])
	const { submissionForms } = useSelector(state => ({
		submissionForms: state.SubmissionForm.submissionForms,
	}));
	const handleViewSubmission = async (i) => {
		const data = submissionForms[i];
		console.log('handleViewSubmission', data)
		const { isConfirmed } = await alertService.fireDialog({
			showConfirmButton: false,
			title: "Submission detail",
			size: "xl",
			content: (
				<div className="text-center">
					{SubmissionGroups(T).map((submissionForm, index) => (
						<Card key={`submision_forms_detail_${index}`}>
							<CardHeader className="align-items-center d-flex">
								<h4 className="card-title mb-0 flex-grow-1">{submissionForm.title}</h4>
							</CardHeader>
							<CardBody>
								{
									submissionForm.fields.map((field, _index) => (
										<Row key={`submission_form_detail_${index}${_index}`} className={`mb-3 mt-3 line-${_index % 2}`}>
											<Col>
												<div className="view-submission-label">{field.label}</div>
											</Col>
											<Col className={"view-submission-value " + (data[field.name] && data[field.name].length > 20 ? 'text-left' : '')}>
												{data[field.name] === true ? 'Yes' : data[field.name] === false ? 'No' : data[field.name]}
											</Col>
										</Row>
									))
								}
							</CardBody>
						</Card>
					))}
				</div>
			),

			cancelButtonProps: {
				show: true,
				text: "Close"
			},
			confirmButtonProps: {
				show: false
			}
		})
	}
	const handleExport = () => {

	}

	return (
		<div className="page-content">
			<Container fluid>
				<BreadCrumb title={T("Submission(s) History")} />
				{/* <div className="d-flex justify-content-end mb-3"><Button onClick={() => {
					handleExport()
				}
				}>{T('Export...')}</Button></div> */}
				<Card>
					<table className="table">
						<thead>
							<tr>
								<th scope="col">{T('Submission Date')}</th>
								<th scope="col">{T('Recording Period')}</th>
								<th scope="col">{T('Submitted By')}</th>
								<th scope="col">{T('Hash Value')}</th>
								<th scope="col">{T('View')}</th>
								<th scope="col">{T('Version')}</th>
							</tr>
						</thead>
						<tbody>
							{submissionForms && submissionForms.map((d, dIndex) => (
								<tr key={dIndex}>
									<th>{moment(d.createdAt).format('YYYY-MM-DD')}</th>
									<td>{d.yearOfRecord}</td>
									<td>{d.email}</td>
									<td>{d.hashValue}</td>
									<td>
										<Button onClick={() => handleViewSubmission(dIndex)}>
											Link
										</Button>
									</td>
									<td>
										{d.version}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</Card>
			</Container>
		</div>
	)
}

export default withTranslation()(SubmissionHistory)
