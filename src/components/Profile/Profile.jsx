import React from 'react'
import { Link } from 'react-router-dom'
import { Education } from '../Education/Education'

export const Profile = () => {
  return (
    <>
      <section >
        <div className="container py-5">
          <div className="row">
            <div className="col">
              <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item"><Link to="/">Inicio</Link></li>
                  <li className="breadcrumb-item"><Link to="/students">Estudiantes</Link></li>
                  <li className="breadcrumb-item active" aria-current="page">Mi perfil</li>
                </ol>
              </nav>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4">
              <div className="card mb-4">
                <div className="card-body text-center">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                    className="rounded-circle img-fluid" style={{width: 150}} />
                  <h5 className="my-3">John Smith</h5>
                  <p className="text-muted mb-1">Ingenieria de Sistemas</p>
                  <p className="text-muted mb-4">Promedio: <strong>4.8</strong> </p>
                </div>
              </div>
              <div className="card mb-4 mb-lg-0">
                <div className="card-body p-0">
                  <ul className="list-group list-group-flush rounded-3">
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      
                      
                      
                      {/* <button className="btn btn-outline-danger mb-0" >Cargar HV</button> */}
                      <div classNameName="m-auto">
                        <label for="formFileSm" className='form-label'><i className="p-1 fa-solid fa-cloud-arrow-up" style={{color: "#333333", fontSize: 20}}></i> <span>Cargar Hoja de Vida</span> </label>
                        <input id="formFileSm" type="file" accept="application/pdf" className='form-control'/>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="card mb-4">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Nombre Completo</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">Johnatan Smith</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Correo Electrónico</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">example@example.com</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Número de Celular</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">(097) 234-5678</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Dirección de residencia</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">Bay Area, San Francisco, CA</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="row">
                <div className="col-md-12">
                  <div className="card mb-4 mb-md-0">
                    <div className="card-body">
                      <p className="mb-4"><span style={{color: "#C20C19", fontSize: 20}} className="font-italic me-1">Educación Continuada</span>
                      </p>
                      <Education/>
                    </div>
                  </div>
                </div>
                {/* <div className="col-md-6">
                  <div className="card mb-4 mb-md-0">
                    <div className="card-body">
                      <p className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status
                      </p>
                      <p className="mb-1" >Web Design</p>
                      <div className="progress rounded" >
                        <div className="progress-bar" role="progressbar" aria-valuenow="80"
                          aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <p className="mt-4 mb-1" >Website Markup</p>
                      <div className="progress rounded">
                        <div className="progress-bar" role="progressbar" aria-valuenow="72"
                          aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <p className="mt-4 mb-1" >One Page</p>
                      <div className="progress rounded" >
                        <div className="progress-bar" role="progressbar"  aria-valuenow="89"
                          aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <p className="mt-4 mb-1" >Mobile Template</p>
                      <div className="progress rounded">
                        <div className="progress-bar" role="progressbar"  aria-valuenow="55"
                          aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <p className="mt-4 mb-1">Backend API</p>
                      <div className="progress rounded mb-2" >
                        <div className="progress-bar" role="progressbar"  aria-valuenow="66"
                          aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
