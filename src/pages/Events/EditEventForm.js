
import { useFormikContext } from "formik"
import React from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, } from "react-router-dom"

import { dailyCheckinLimits, nextCheckinTimes } from './constant'

import classes from "./CreateEvent.module.scss"

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
import { getOrganisationType } from "src/helpers/api_helper"
import { useState } from "react"
import { getCompactTemplates, getUserTemplate, removeCurrentTemplate } from "src/store/actions"
import { isEmpty } from "lodash"

function EditEventForm(props) {
  const isEdit = props.isEdit
  const dispactch = useDispatch();

  const history = useHistory();
  const { eventNatures, compactTemplates, currentTemplate, error } = useSelector(state => ({
    eventNatures: state.Events.eventNatures,
    compactTemplates: state.Events.compactTemplates,
    currentTemplate: state.Events.currentTemplate,
    error: state.Events.error
  }));

  const { isSubmitting, values, errors, setFieldValue, handleChange, handleBlur, touched, submitForm } = useFormikContext()
  const [orgType, setOrgType] = useState('company')
  const [selectedTemplate, setSelectedTemplate] = useState()

  const bannerFileRef = React.useRef()

  const handleBannerChange = (event) => {
    const file = event.target.files[0]
    bannerFileRef.current.value = ""
    if (!file) return
    setFieldValue("banner_file", file)
    setFieldValue('image_path', URL.createObjectURL(file))
  }

  useEffect(() => {
    const organisationType = getOrganisationType();
    dispactch(getCompactTemplates())
    setOrgType(organisationType)
  }, [])


  useEffect(() => {
    if (currentTemplate) {
      setFieldValue('event_template_id', currentTemplate.event_template_id);
      setFieldValue('image_path', currentTemplate.image_path);
      setFieldValue('event_name', currentTemplate.event_name);
      setFieldValue('event_name_chi', currentTemplate.event_name_chi);
      setFieldValue('event_long_desc', currentTemplate.event_long_desc);
      setFieldValue('event_long_desc_chi', currentTemplate.event_long_desc_chi);
      setFieldValue('event_desc', currentTemplate.event_desc);
      setFieldValue('event_desc_chi', currentTemplate.event_desc_chi);
      setFieldValue('event_nature_id', currentTemplate.event_nature_id);
      setFieldValue('start_date', currentTemplate.start_date);
      setFieldValue('end_date', currentTemplate.end_date);
      setFieldValue('top_most_ind', currentTemplate.top_most_ind);
      setFieldValue('point_award', currentTemplate.point_award);
      setFieldValue('exp_earnded', currentTemplate.exp_earnded || 0);
      setFieldValue('max_daily_check_in', currentTemplate.max_daily_check_in || 0);
      setFieldValue('max_total_check_in', currentTemplate.max_total_check_in);
      setFieldValue('check_in_interval', currentTemplate.check_in_interval);
    }
  }, [eventNatures, orgType, compactTemplates, currentTemplate])

  const onSelectTemplate = (template) => {
    console.log(template);
    setSelectedTemplate(template)
    if (!isEmpty(template)) dispactch(getUserTemplate(template))
    else dispactch(removeCurrentTemplate())
  }
  return (
    <div className="page-content">
      <Container fluid>
        <BreadCrumb title="Edit Event" />

        <Row className="mb-4">
          <Col sm={12} md={8}>
            <Card className="mb-0">
              <CardBody>
                <FormGroup>
                  <Label>Event Templates</Label>
                  <Input
                    name="event_template_id"
                    className="form-control"
                    placeholder="Event Templates"
                    type="select"
                    onChange={(e) => {
                      console.log(e)
                      onSelectTemplate(e.target.value)
                    }}
                    disabled={isEdit === true}
                    onBlur={handleBlur}
                    value={values.event_template_id || ''}
                    invalid={false}
                  >
                    <option value={''}>---------</option>
                    {
                      compactTemplates.map((item, key) => <option key={key} value={item.event_template_id}>{item.template_name}</option>)
                    }
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label>Event name</Label>
                  <Input
                    name="event_name"
                    className="form-control"
                    placeholder="Event name"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.event_name}
                    disabled={currentTemplate ? true : false}
                    invalid={
                      touched.event_name && errors.event_name ? true : false
                    }
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Event name (chinese)</Label>
                  <Input
                    name="event_name_chi"
                    className="form-control"
                    placeholder="Event name (chiness)"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.event_name_chi}
                    disabled={currentTemplate ? true : false}
                    invalid={
                      touched.event_name_chi && errors.event_name_chi ? true : false
                    }
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Description</Label>
                  <Input
                    name="event_desc"
                    className="form-control"
                    placeholder="Description"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.event_desc}
                    disabled={currentTemplate ? true : false}
                    invalid={
                      touched.event_desc && errors.event_desc ? true : false
                    }
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Description (chinese)</Label>
                  <Input
                    name="event_desc_chi"
                    className="form-control"
                    placeholder="Description (chinese)"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.event_desc_chi}
                    disabled={currentTemplate ? true : false}
                    invalid={
                      touched.event_desc_chi && errors.event_desc_chi ? true : false
                    }
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Event Nature</Label>
                  <Input
                    name="event_nature_id"
                    className="form-control"
                    placeholder="Event Nature"
                    type="select"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.event_nature_id ? values.event_nature_id : ''}
                    invalid={
                      touched.event_nature_id && errors.event_nature_id ? true : false
                    }
                  >
                    <option value={''}>---------</option>
                    {
                      eventNatures.map((item, key) => <option key={key} value={item.event_nature_id}>{item.nature_name}</option>)
                    }
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label>Long Description</Label>
                  <Input
                    name="event_long_desc"
                    className="form-control"
                    placeholder="Description"
                    type="textarea"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.event_long_desc}
                    disabled={currentTemplate ? true : false}
                    invalid={
                      touched.event_long_desc && errors.event_long_desc ? true : false
                    }
                  />
                </FormGroup>

                <FormGroup>
                  <Label>Long Description (chinese)</Label>
                  <Input
                    name="event_long_desc_chi"
                    className="form-control"
                    placeholder="Description"
                    type="textarea"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.event_long_desc_chi}
                    disabled={currentTemplate ? true : false}
                    invalid={
                      touched.event_long_desc_chi && errors.event_long_desc_chi ? true : false
                    }
                  />
                </FormGroup>
              </CardBody>
            </Card>
          </Col>
          <Col sm={12} md={4}>
            <Card className="mb-0">
              <CardBody>
                <h6>Banner Image</h6>

                <div className={`${classes.banner} mb-3`}>
                  <img src={values.image_path} className={classes.bannerImg} alt="" />
                </div>
                <div className="d-flex justify-content-center">
                  <Button onClick={() => bannerFileRef.current.click()} disabled={currentTemplate ? true : false}
                  >
                    <input
                      ref={bannerFileRef}
                      type="file"
                      style={{ display: "none" }}
                      onChange={handleBannerChange}
                      accept="image/*"
                    />
                    {'Upload (Image size < 2MB)'}
                  </Button>
                </div>

              </CardBody>
            </Card>
          </Col>
        </Row>

        <div className="d-flex align-items-center justify-content-between mb-4">
          <div className="d-flex align-items-center">
            <h6 className="mb-0 me-2">Start Date:</h6>
            <Input
              name="start_date"
              className="me-2"
              type="date"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.start_date}
              invalid={
                touched.start_date && errors.start_date ? true : false
              }
              style={{ width: 160 }}
            />
            <h6 className="mb-0 me-2">End Date:</h6>
            <Input
              name="end_date"
              className="me-2"
              type="date"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.end_date}
              invalid={
                touched.end_date && errors.end_date ? true : false
              }
              style={{ width: 160 }}
            />
          </div>
          <FormGroup check>
            <Input type="checkbox" />
            <Input
              name="top_most_ind"
              type="checkbox"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.top_most_ind || false}
            />
            {" "}
            <Label check>Appear as the top most event</Label>
          </FormGroup>
        </div>

        <Card>
          <CardBody>
            <h5>Game Setting</h5>
            <Row>
              <Col sm={12} md={8}>
                <h6>Template Name</h6>
                <p>Scan and Go</p>

                <FormGroup>
                  <Label>Coins Earned per Check-In</Label>
                  <Row>
                    <Col sm>
                      <Input
                        name="point_award"
                        className="me-2"
                        placeholder="Coins Earned per Check-In"
                        type="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.point_award}
                        disabled={orgType === 'company'}
                        invalid={
                          touched.point_award && errors.point_award ? true : false
                        }
                      />
                    </Col>
                    <Col sm='auto'>
                      <div className={classes.w120}>coins</div>

                    </Col>
                  </Row>
                </FormGroup>

                <FormGroup>
                  <Label>Total Check-In Limit</Label>
                  <span className="ms-2 text-nowrap">(Remark: -1 = unlimited)</span>
                  <Row>
                    <Col sm>
                      <Input
                        name="max_total_check_in"
                        className="me-2"
                        placeholder="Total Check-In Limit"
                        type="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.max_total_check_in}
                        invalid={
                          touched.max_total_check_in && errors.max_total_check_in ? true : false
                        }
                      />
                    </Col>
                    <Col sm='auto'>
                      <div className={classes.w120}> <div className="d-flex flex-column">
                        <span className="mb-0">times</span>
                      </div></div>
                    </Col>
                  </Row>

                </FormGroup>

                <FormGroup>
                  <Label>Daily User Check-In Limit</Label>
                  <Row>
                    <Col sm>
                      <Input
                        name="max_daily_check_in"
                        className="me-2"
                        type="select"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.max_daily_check_in}

                      >
                        {
                          dailyCheckinLimits.map((item, key) => {
                            if (item === '-1' || item === -1) {
                              return <option key={key} value={item}>unlimited</option>
                            }
                            return <option key={key} value={item}>{item}</option>
                          })
                        }
                      </Input>
                    </Col>
                    <Col sm='auto'>
                      <div className={classes.w120}> times</div>
                    </Col>
                  </Row>
                </FormGroup>

                <FormGroup>
                  <Label>User's Next Check-In At</Label>
                  <Row>
                    <Col sm>
                      <Input
                        name="check_in_interval"
                        className="me-2"
                        type="select"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.check_in_interval}

                      >
                        {
                          nextCheckinTimes.map((item, key) => {
                            return <option key={key} value={item.value}>{item.label}</option>
                          })
                        }
                      </Input>
                    </Col>
                    <Col sm='auto'>
                      <div className={classes.w120}>hours later</div>
                    </Col>
                  </Row>
                </FormGroup>
              </Col>
              {isEdit ? (<Col sm={12} md={4}>
                <h6>QR Code</h6>
                <div className={`${classes.banner} mb-3`}>
                  <img src={values.qr_code_path} className={classes.bannerImg} alt="" />
                </div>
                <div className="d-flex justify-content-center">
                  <div style={{ lineHeight: 1.5, verticalAlign: 'middle', padding: '0.5rem 0.9rem' }}>
                    <EsgTooltip tooltipText='Please download and print out this QR code, and display at the venue for user(s) to scan to earn the coins' name='event-qrcode-download'></EsgTooltip>
                  </div>
                  <a className="btn btn-secondary" href={values.qr_code_path}> Download</a></div>

              </Col>) : null}
            </Row>

          </CardBody>
        </Card>
        <div className="d-flex align-items-center justify-content-end">
          <Button disabled={isSubmitting && error === false} onClick={submitForm} className="me-2">Save</Button>
          <Button onClick={
            () => history.push('/events')
          }>Close</Button>
        </div>
      </Container>
    </div >
  )
}

export default EditEventForm