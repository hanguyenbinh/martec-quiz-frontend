import React from "react"
import PropTypes from "prop-types"

import {
	Card,
	CardBody,
	CardHeader,
	CardTitle,
	Col,
	Row,
	Table
} from "reactstrap"


function DataTable(props) {
	const {
		columns = [],
		data = [],
		days,
		handleFilterChanged
	} = props



	return (
		<Card>
			<CardHeader>
				<CardTitle className="mb-0">Coins History</CardTitle>
			</CardHeader>
			<CardBody className="border-bottom">
				<Row>
					<Col>Filter:</Col>
					<Col><button className={"btn btn-secondary " + (days === 0 ? ' wf-bold text-decoration-underline' : '')} onClick={() => handleFilterChanged(0)}>Today only</button></Col>
					<Col><button className={"btn btn-secondary " + (days === 1 ? ' wf-bold text-decoration-underline' : '')} onClick={() => handleFilterChanged(1)}>Last 3 days</button></Col>
					<Col><button className={"btn btn-secondary " + (days === 2 ? ' wf-bold text-decoration-underline' : '')} onClick={() => handleFilterChanged(2)}>Last 7 days</button></Col>
					<Col><button className={"btn btn-secondary " + (days === 3 ? ' wf-bold text-decoration-underline' : '')} onClick={() => handleFilterChanged(3)}>Even olders</button></Col>
				</Row>
			</CardBody>
			<Table className="mb-0" striped hover>
				<thead>
					<tr>
						{columns.map((column) => (
							<th key={column.id}>{column.label}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{data.map((d, dIndex) => (
						<tr key={dIndex}>
							{columns.map((column) => (
								<td key={column.id}>
									{column.renderCell &&
										column.renderCell({
											index: dIndex,
											id: column.id,
											data: d,
											column
										})}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</Table>
		</Card>
	)
}

DataTable.propTypes = {
	apiRef: PropTypes.shape({
		current: PropTypes.any
	}),
	columns: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string,
			label: PropTypes.string,
			renderCell: PropTypes.func
		})
	),
	loading: PropTypes.bool,
	data: PropTypes.array,
	totalRecords: PropTypes.number,
	beforeTableNode: PropTypes.elementType,
	initialState: PropTypes.shape({
		page: PropTypes.number,
		pageSize: PropTypes.number,
		pageOptions: PropTypes.arrayOf(PropTypes.number),
		query: PropTypes.object
	}),
}

export default DataTable
