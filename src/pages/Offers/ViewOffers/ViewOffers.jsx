import React, { useState } from 'react'
import { Container, Row, Col, Input } from 'reactstrap'
import { Offer } from '../../../components/Offer/Offer';
import { offersData } from './OffersData';

export const ViewOffers = () => {
  const [filter, setFilter] = useState('');
  const [filterCompany, setFilterCompany] = useState('');

  const getUnique = (array, comp) => {
    const unique = array
      .map(e => e[comp])
      .map((e, i, final) => final.indexOf(e) === i && i)
      .filter(e => array[e])
      .map(e => array[e]);
    return unique;
  }

  const uniqueCompanies = getUnique(offersData, "company");
  const searchText = (e) => setFilter(e.target.value);
  const handleChangeCompany = (e) => setFilterCompany(e.target.value);

  let dataSearch = offersData.filter(item => {
    return Object.keys(item).some(key =>
      item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
    )
  });

  let filterByCompany = offersData.filter((result) => {
    return result.company == filterCompany;
  });

  return (
    <Container fluid="md" className='mt-4'>
      <h2>Lista de Ofertas</h2>
      <br />
      <div className='card p-4'>
        <h4>Filtros de búsqueda</h4>
        <Row>
          <Col sm="8">
            <Input id='searchInput' className="form-control" type="text" value={filter} onChange={searchText} placeholder="Buscar por nombre, empresa o cargo" />
          </Col>
          <Col sm="4">
            <Input id="filter_name" name="company_name" type="select" onChange={handleChangeCompany}>
              <option key={0} value="default">Filtrar por empresa</option>
              {uniqueCompanies.map(contact =>
                <option key={contact.id} value={contact.company}>{contact.company}</option>
              )}
            </Input>
          </Col>
          {/* <Col sm="3">
          <Input id="filter_name" name="company_name" type="select" onChange={handleChangeProfession}>
            <option key={0} value="default">Filtrar por profesion</option>
            {uniqueProfessions.map(contact =>
              <option key={contact.id} value={contact.profession}>{contact.profession}</option>
            )}
          </Input>
        </Col> */}
        </Row>
        <br />
        {
          dataSearch.map((offer, index) => {
            return (
              <Offer key={index} props={offer} />
            )
          })
        }
        {/* <Offer props={offersData[0]} />
        <Offer props={offersData[1]} /> */}
      </div>
    </Container>
  )
}
