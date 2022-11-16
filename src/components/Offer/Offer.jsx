import React from 'react'
import { Col, Row } from 'reactstrap';
import { CDBModal } from 'cdbreact';
import { ModalViewOffer } from './ModalViewOffer';
import { useState } from 'react';

export const Offer = ({ props }) => {
  const { company, jobTitle, description, tasks, city, salary } = props;
  const [showModal, setShowModal] = useState(true);

  const changeModalState = () => setShowModal(!showModal)

  return (
    <div className="card m-4">
      <CDBModal isOpen={showModal} toggle={changeModalState} centered fade>
        <ModalViewOffer props={props} />
      </CDBModal>

      <div className="card-header">
        <div className='d-flex align-items-center'>
          <div className='col-10'>
            <h4>{company}</h4>
          </div>
          <div className="col-2"><button className="btn btn-outline-primary" data-toggle="modal" data-target="#exampleModalLong">Ver más</button></div>
        </div>
        {/* <Row>
          <Col>
            <h4>{company}</h4>
          </Col>
          <Col>
            <a href="#" className="btn btn-outline-danger">Ver más</a>
          </Col>
        </Row> */}

      </div>
      <div className="card-body">
        <h5 className="card-title">{jobTitle}</h5>
        <hr />
        <Row>
          <Col>
            <p>Descripción:</p>
            <p className='card-text'>{description}</p>
          </Col>
          <Col>
            <p>Tareas:</p>
            <p className='card-text'>{tasks}</p>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <p>Ciudad:</p>
            <p className='card-text'>{city}</p>
          </Col>
          <Col>
            <p>Salario:</p>
            <p className='card-text'>$ {salary}</p>
          </Col>
        </Row>
      </div>
    </div>
  )
}
