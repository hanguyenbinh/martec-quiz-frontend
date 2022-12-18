import { deleteSubmission, getSubmissionForms } from "../../store/actions"
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
	const renderSubmissionItem = (item, data) => {
		if (item.type === 'checkboxes') {
			const lines = data[item.name].split('<ITEM>');
			return <Col className={"view-submission-value text-end flex-column"}>
				{item.options.map((option, key) => {
					if (data[item.name].indexOf(option.value) < 0)
						return null;
					if (option.comment) {
						return <div key={key} className={'w-100 gap-1 text-end'}>{option.value}: {data[option.comment]}</div>
					}
					return <div key={key} className={'w-100 gap-1 text-end'}>{option.value}</div>
				})}
			</Col>
		}

		return <Col className={"view-submission-value " + (data[item.name] && data[item.name].length > 20 ? 'text-end' : '')}>
			{data[item.name] === true ? 'Yes' : data[item.name] === false ? 'No' : data[item.name]}
		</Col>

	}
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
							<CardHeader className="align-items-center d-flex card-title mb-0 flex-grow-1">
								{submissionForm.title}
							</CardHeader>
							<CardBody>
								{
									submissionForm.fields.map((field, _index) => (
										<Row key={`submission_form_detail_${index}${_index}`} className={`mb-3 mt-3 line-${_index % 2}`}>
											<Col>
												<div className="view-submission-label">{field.label}</div>
											</Col>
											{renderSubmissionItem(field, data)}
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
	const handleEditDraft = (id) => {
		props.history.push('/submit-data/' + id)
	}

	const handleRemoveDraft = (id) => {
		if (window.confirm(`Do you want to delete this draft submission with Id: ${id}?`)) {
			dispatch(deleteSubmission(id))
		}

	}

	useEffect(() => {
		console.log('submissionForms changed', submissionForms)

	}, [submissionForms])

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
										{d.isDraft ? (
											<>
												<Button onClick={() => handleEditDraft(d.id)}>
													Continue
												</Button>
												<Button onClick={() => handleRemoveDraft(d.id)}>
													Delete
												</Button>
											</>
										) :
											(
												<Button onClick={() => handleViewSubmission(dIndex)}>
													Link
												</Button>
											)}

									</td>
									<td>
										{d.isDraft ? 'draft' : d.version}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</Card>
			</Container>
		</div >
	)
}

export default withTranslation()(SubmissionHistory)
