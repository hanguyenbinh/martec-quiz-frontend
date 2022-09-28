import React from "react"
import { Button, Card, Col, Container, Row } from "reactstrap"
import BreadCrumb from "../../Components/Common/BreadCrumb"

const UploadList = () => {

	const data = [{
		upload_date_time: "22 Aug 01 16:00:01",
		as_of_date: "2022 Jul",
		uploaded_by: "KSL Admin",
		blockchain_hash: "asjhhlckjdj;qwer433f324",
		link: "",
		ver: "ver 1"
	},{
		upload_date_time: "22 Aug 01 16:00:01",
		as_of_date: "2022 Jul",
		uploaded_by: "KSL Admin",
		blockchain_hash: "asjhhlckjdj;qwer433f324",
		link: "",
		ver: "ver 1"
	},{
		upload_date_time: "22 Aug 01 16:00:01",
		as_of_date: "2022 Jul",
		uploaded_by: "KSL Admin",
		blockchain_hash: "asjhhlckjdj;qwer433f324",
		link: "",
		ver: "ver 1"
	},{
		upload_date_time: "22 Aug 01 16:00:01",
		as_of_date: "2022 Jul",
		uploaded_by: "KSL Admin",
		blockchain_hash: "asjhhlckjdj;qwer433f324",
		link: "",
		ver: "ver 1"
	}]

	return (
		<div className="page-content">
			<Container fluid>
				<BreadCrumb title="Upload history" />
				<Card>
			<table className="table">
				<thead>
					<tr>
						<th scope="col">Upload Date Time</th>
						<th scope="col">As-of Date</th>
						<th scope="col">Uploaded by</th>
						<th scope="col">Blockchain Hash</th>
						<th scope="col">View</th>
						<th scope="col">Version</th>
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

export default UploadList
