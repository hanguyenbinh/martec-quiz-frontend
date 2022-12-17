import { useFormikContext } from "formik"
import React from "react"
import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"

import {
  Button,
  Card,
  CardBody,
  Container,


} from "reactstrap"

import BreadCrumb from "src/Components/Common/BreadCrumb"

function DefaultSubmissionUploadForm() {
  const history = useHistory();


  const { isSubmitting, values, errors, setFieldValue, handleChange, handleBlur, touched, submitForm } = useFormikContext()

  const fileUploadRef = React.useRef()

  console.log('DefaultSubmissionUploadForm', isSubmitting)

  // const { error } = useSelector(state => ({
  //   error: state.Prizes.error
  // }));

  const handleFileUploadChange = (e) => {
    const file = e.target.files[0]
    console.log(file)
    fileUploadRef.current.value = ""
    if (!file) return
    setFieldValue('jsonFile', file)
  }

  return (
    <div className="page-content">
      <Container fluid>
        <BreadCrumb title="Upload Defaut Submissions" />
        <Card className="mb-0">
          <CardBody>
            <div>
              <Button
                className="mb-2"
                onClick={() => fileUploadRef.current.click()}
              >
                Select json file
                <input
                  ref={fileUploadRef}
                  type="file"
                  style={{ display: "none" }}
                  onChange={handleFileUploadChange}
                  accept=".json"
                />
              </Button>
            </div>

            <Button onClick={submitForm} className="me-2">Upload</Button>
          </CardBody>
        </Card>
      </Container>
    </div>
  )
}
export default DefaultSubmissionUploadForm;