import React, { Component, useState } from 'react'
import axios from "axios";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import dataLocation from '../../../utils/dataLocation/dataLocation.json'

//Reactstrap
import {
  Button,
  FormGroup,
  FormText,
  Label,
  Input,
  Col,
  Container,
  Form,
  Row,
} from "reactstrap";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const defaultFormData = {
  nit: "",
  company_name: "",
  //logo_file: "",
  sector: "",
  employers_number: "",
  webpage: "",
  country: "",
  department: "",
  city: "",
  //rut_file: "",
  email: "",
  //agreement_file: "",
  // agreement: false,
  password: "",
  validatedPassword: ""
}

export const SignupCompanies = () => {
  const [formData, setFormData] = useState([defaultFormData]);
  const navigate = useNavigate();

  const registerCompany = async () => {

    const company = {
      nit: formData.nit,
      company_name: formData.company_name,
      //logo_file: formData.logo_file,
      sector: formData.sector,
      employers_number: formData.employers_number,
      webpage: formData.webpage,
      country: formData.country,
      department: formData.department,
      city: formData.city,
      //rut_file: formData.rut_file,
      email: formData.email,
      //agreement_file: formData.agreement_file
      password: formData.password
    }

    const token = sessionStorage.getItem('token')
    try {
      const answer = await axios.post('companies/create', company)
      const message = answer.data.message

      Swal.fire(
        'Bien hecho!',
        'La empresa se ha creado exitosamente!',
        'success'
      );
      setFormData(defaultFormData);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();
    registerCompany();
  }

  const handleChange = (e) => {
    const value = e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value
    });
  }

  useEffect(() => {
    console.log(formData);
  })

  return (
    <Container fluid="md">
      <h2 className='mt-4'>Registro Nueva Empresa</h2>
      <div className='card p-4 mb-4'>
        <Form className="mt-4">
          <FormGroup id='form-company' row className="mb-3">
            <Col sm="3">
              <Label for="nit">* Nit</Label>
              <Input
                id="nit"
                name="nit"
                placeholder="Ingresa el NIT"
                type="number"
                value={formData.nit}
                onChange={handleChange}
              />
            </Col>
            <Col sm="6">
              <Label for="company_name">* Empresa</Label>
              <Input
                id="company_name"
                name="company_name"
                placeholder="Ingrese el nombre de empresa"
                type="text"
                value={formData.company_name}
                onChange={handleChange}
              />
            </Col>
          </FormGroup>

          <FormGroup row className="mb-3">
            <Col sm="12">
              <Label for="email">Email</Label>
              <Input
                id="email"
                name="email"
                placeholder="correoejemplo@empresa.com"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Col>
          </FormGroup>

          <FormGroup row className="mb-3">
            <Col sm="6">
              <Label for="sector">Sector</Label>
              <Input id="sector" name="sector" type="select" value={formData.sector} onChange={handleChange}>
                <option key={0} value={0}>Seleccione un sector</option>
                <option key={1} value="Administrativo">Administrativo</option>
                <option key={2} value="Agropecuario">Agropecuario</option>
                <option key={3} value="Agronomo">Agrónomo</option>
                <option key={4} value="Comunicación">Comunicación</option>
                <option key={5} value="Construcción">Construcción</option>
                <option key={6} value="Contabilidad y economía">Contabilidad y economía</option>
                <option key={7} value="Hotelero">Hotelero</option>
                <option key={8} value="Industrial">Industrial</option>
                <option key={9} value="Legislativo">Legislativo</option>
                <option key={10} value="Marketing">Marketing</option>
                <option key={11} value="Moda y textil">Moda y textil</option>
                <option key={12} value="Tecnología y desarrollo">Tecnología y desarrollo</option>
                <option key={13} value="Turismo">Turismo</option>
              </Input>
            </Col>
            <Col sm="6">
              <Label for="size_select">Numero de empleados</Label>
              <Input id="employers_number" name="employers_number" type="select" value={formData.employers_number} onChange={handleChange}>
                <option>Seleccione un rango</option>
                <option key={0} value={0}>1 a 10</option>
                <option key={1} value={1}>11 a 50</option>
                <option key={2} value={2}>51 a 250</option>
                <option key={3} value={3}>Más de 250</option>
              </Input>
            </Col>
          </FormGroup>

          <FormGroup row className="mb-3">
            <Col sm="12">
              <Label for="webpage">Página web</Label>
              <Input
                id="webpage"
                name="webpage"
                placeholder="https://www.pagina.com"
                type="email"
                value={formData.webpage}
                onChange={handleChange}
              />
            </Col>
          </FormGroup>

          <FormGroup row className="mb-3">
            <Col sm="4">
              <Label for="country_select">* País</Label>
              <Input id="country" name="country" type="select" value={formData.country} onChange={handleChange}>
                <option key={0} value="">Seleccione un país</option>
                <option key={1} value="Colombia">Colombia</option>
              </Input>
            </Col>
            <Col sm="4">
              <Label for="department_select">* Departamento</Label>
              <Input
                id="department"
                name="department"
                type="select"
                value={formData.department}
                onChange={handleChange}
              >
                <option key={0} value="">Seleccione un departamento</option>
                {dataLocation.map(item => {
                  return <option key={item.id + 1} value={item.departamento}>{item.departamento}</option>
                })}
              </Input>
            </Col>
            <Col sm="4">
              <Label for="city_select">* Ciudad</Label>
              <Input id="city" name="city" type="select" value={formData.city} onChange={handleChange}>
                <option key={0} value="">Seleccione una ciudad</option>
                {formData.department ?
                  dataLocation.find(d => d.departamento === formData.department)
                    .ciudades.map((ciudad, idx) => {
                      return <option key={idx} value={ciudad}>{ciudad}</option>
                    })
                  : null
                }
              </Input>
            </Col>
          </FormGroup>

          <FormGroup row className="mb-4">
            <Col sm="4">
              <Label for="password">* Contraseña</Label>
              <Input id="password" name="password" type="password" value={formData.password} onChange={handleChange} />
            </Col>
            <Col sm="4">
              <Label for="validatedPassword">* Confirmar Contraseña</Label>
              <Input id="validatedPassword" name="validatedPassword" type="password" value={formData.validatedPassword} onChange={handleChange} />
            </Col>
          </FormGroup>

          <Row className="mb-2 justify-content-center">
            <Col sm="8">
              <Button
                style={{ background: "#C20C19" }}
                block
                onClick={onSubmit}
              >
                Registrar
              </Button>
            </Col>
          </Row>
        </Form>
      </div>

    </Container>
  )
}
