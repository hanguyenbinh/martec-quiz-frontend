import { useFormikContext } from "formik"
import React from "react"
import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"

import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  FormGroup,
  Input,
  Label,
  Row,

} from "reactstrap"

import BreadCrumb from "src/Components/Common/BreadCrumb"
import EsgTooltip from "src/Components/Common/EsgTooltip"

import classes from "./prize.module.scss"

function EditPrizeForm() {
  const history = useHistory();


  const { isSubmitting, values, errors, setFieldValue, handleChange, handleBlur, touched, submitForm } = useFormikContext()

  const bannerFileRef = React.useRef()

  const { error } = useSelector(state => ({
    error: state.Prizes.error
  }));

  const handleBannerChange = (prize) => {
    const file = prize.target.files[0]
    bannerFileRef.current.value = ""
    if (!file) return
    setFieldValue("banner_file", file)
    setFieldValue('image_path', URL.createObjectURL(file))
  }

  return (
    <div className="page-content">
      <Container fluid>
        <BreadCrumb title="Dashboards" />

        <Row className="mb-4">
          <Col sm={12} md={4}>
            <Card className="mb-0">
              <CardBody>
                <div className={`${classes.banner} mb-3`}>
                  <img src={values.image_path} className={classes.bannerImg} alt="" />
                </div>
                <div className="d-flex justify-content-center">
                  <Button
                    className="mb-2"
                    onClick={() => bannerFileRef.current.click()}
                  >
                    <input
                      ref={bannerFileRef}
                      type="file"
                      style={{ display: "none" }}
                      onChange={handleBannerChange}
                      accept="image/*"
                    />
                    {'Replace (Image size < 2MB)'}
                  </Button>
                </div>


                <h6>Redemption Code</h6>
                <div className={`${classes.banner} mb-3`}>
                  <img src={values.qr_code_path} className={classes.bannerImg} alt="" />
                </div>
                <div className="d-flex justify-content-center">
                  <div style={{ lineHeight: 1.5, verticalAlign: 'middle', padding: '0.5rem 0.9rem' }}>
                    {/* <div className="btn"> */}
                    <EsgTooltip tooltipText='Please download and print out this QR code, and present to user who requests the prize redemption' name='prize-qrcode-download'>
                    </EsgTooltip>
                  </div>

                  <a className="btn btn-secondary" href={values.qr_code_path}>
                    Download
                  </a></div>
              </CardBody>
            </Card>
          </Col>
          <Col sm={12} md={8}>
            <Card className="mb-0">
              <CardBody>
                <FormGroup>
                  <Label>Item name</Label>
                  <Input
                    name="prize_name"
                    className="form-control"
                    placeholder="Item name"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.prize_name || ""}
                    invalid={
                      touched.prize_name && errors.prize_name ? true : false
                    }
                  />
                </FormGroup>

                <FormGroup>
                  <Label>Item name (chinese)</Label>
                  <Input
                    name="prize_name_chi"
                    className="form-control"
                    placeholder="Item name (chinese)"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.prize_name_chi || ""}
                    invalid={
                      touched.prize_name_chi && errors.prize_name_chi ? true : false
                    }
                  />
                </FormGroup>
                <FormGroup>
                  <Label>No. of items available for redemption</Label>
                  <Input
                    name="in_stock_qty"
                    className="form-control"
                    placeholder="No. of items available for redemption"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.in_stock_qty || ""}
                    invalid={
                      touched.in_stock_qty && errors.in_stock_qty ? true : false
                    }
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Description</Label>
                  <Input
                    name="prize_desc"
                    className="form-control"
                    placeholder="Description"
                    type="textarea"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.prize_desc || ""}
                    invalid={
                      touched.prize_desc && errors.prize_desc ? true : false
                    }
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Description (chinese)</Label>
                  <Input
                    name="prize_desc_chi"
                    className="form-control"
                    placeholder="Description (chinese)"
                    type="textarea"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.prize_desc_chi || ""}
                    invalid={
                      touched.prize_desc_chi && errors.prize_desc_chi ? true : false
                    }
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Rule</Label>
                  <Input
                    name="redeem_rule"
                    className="form-control"
                    placeholder="Rule"
                    type="textarea"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.redeem_rule || ""}
                    invalid={
                      touched.redeem_rule && errors.redeem_rule ? true : false
                    }
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Rule (chinese)</Label>
                  <Input
                    name="redeem_rule_chi"
                    className="form-control"
                    placeholder="Rule (chinese)"
                    type="textarea"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.redeem_rule_chi || ""}
                    invalid={
                      touched.redeem_rule_chi && errors.redeem_rule_chi ? true : false
                    }
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Required Coins</Label>
                  <div className="d-flex align-items-center">
                    <Input
                      name="redeem_points"
                      className="me-2"
                      placeholder="Required Coins"
                      type="number"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.redeem_points || ""}
                      invalid={
                        touched.redeem_points && errors.redeem_points ? true : false
                      }
                    />

                    <p className="mb-0">coins</p>
                  </div>
                </FormGroup>

                <FormGroup>
                  <Label>Valid from</Label>
                  <div className="d-flex align-items-center">
                    <Input
                      name="start_date"
                      className="me-2"
                      type="date"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.start_date || ""}
                      invalid={
                        touched.start_date && errors.start_date ? true : false
                      }
                    />
                    <p className="mb-0 me-2">to</p>
                    <Input
                      name="expired_date"
                      className="me-2"
                      type="date"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.expired_date || ""}
                      invalid={
                        touched.expired_date && errors.expired_date ? true : false
                      }
                    />
                  </div>
                </FormGroup>

                <FormGroup check
                  inline>
                  <Label check>Redeemed for once</Label>
                  <Input
                    name="redeem_once_ind"
                    className="me-2"
                    type="checkbox"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.redeem_once_ind || false}
                    checked={values.redeem_once_ind}
                    invalid={
                      touched.redeem_once_ind && errors.redeem_once_ind ? true : false
                    }
                  />
                </FormGroup>

                <FormGroup>
                  <Label>Status</Label>
                  <FormGroup check>
                    <Input
                      name="status"
                      type="radio"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={1}
                      checked={values.status == 1}
                      invalid={
                        touched.status && errors.status ? true : false
                      }
                    />
                    <Label check>Active</Label>
                  </FormGroup>
                  <FormGroup check>
                    <Input
                      name="status"
                      type="radio"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={0}
                      checked={values.status == 0}
                      invalid={
                        touched.status && errors.status ? true : false
                      }
                    />
                    <Label check>Inactive <EsgTooltip tooltipText='This option controls whether the prize is visible to user(s) in the mobile app' name='prize-inactive' ></EsgTooltip></Label>
                  </FormGroup>
                </FormGroup>
              </CardBody>
            </Card>

            <div className="d-flex align-items-center justify-content-end mt-3">
              <Button disabled={isSubmitting && error === false} onClick={isSubmitting ? () => { } : submitForm} className="me-2">Save</Button>
              <Button onClick={
                () => history.push('/prizes')
              }>Close</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
export default EditPrizeForm;