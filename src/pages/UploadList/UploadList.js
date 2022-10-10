import React from "react"
import { withTranslation } from "react-i18next"
import { Button, Card, Col, Container, Row } from "reactstrap"
import BreadCrumb from "../../Components/Common/BreadCrumb"

const UploadList = (props) => {
	const T = props.t

	const data = [{
		upload_date_time: "22 Aug 01 16:00:01",
		as_of_date: "2022 Jul",
		uploaded_by: "KSL Admin",
		blockchain_hash: "asjhhlckjdj;qwer433f324",
		link: "",
		ver: "1"
	},{
		upload_date_time: "22 Aug 01 16:00:01",
		as_of_date: "2022 Jul",
		uploaded_by: "KSL Admin",
		blockchain_hash: "asjhhlckjdj;qwer433f324",
		link: "",
		ver: "1"
	},{
		upload_date_time: "22 Aug 01 16:00:01",
		as_of_date: "2022 Jul",
		uploaded_by: "KSL Admin",
		blockchain_hash: "asjhhlckjdj;qwer433f324",
		link: "",
		ver: "1"
	},{
		upload_date_time: "22 Aug 01 16:00:01",
		as_of_date: "2022 Jul",
		uploaded_by: "KSL Admin",
		blockchain_hash: "asjhhlckjdj;qwer433f324",
		link: "",
		ver: "1"
	}]

	return (
		<div className="page-content">
			<Container fluid>
				<BreadCrumb title={T("Submission(s) History")} />
				<Card>
			<table className="table">
				<thead>
					<tr>
						<th scope="col">{T('Submission Date')}</th>
						<th scope="col">{T('Year of Records')}</th>
						<th scope="col">{T('Submitted By')}</th>
						<th scope="col">{T('Hash Value')}</th>
						<th scope="col">{T('View')}</th>
						<th scope="col">{T('Version')}</th>
					</tr>
				</thead>
				<tbody>
					{data.map((d,dIndex) => (
						<tr key={dIndex}>
							<th>{d.upload_date_time}</th>
							<td>{d.as_of_date}</td>
							<td>{d.uploaded_by}</td>
							<td>{d.blockchain_hash}</td>
							<td>
								<Button>
									Link
								</Button>
							</td>
							<td>
								{d.ver}
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

export default withTranslation()(UploadList)
