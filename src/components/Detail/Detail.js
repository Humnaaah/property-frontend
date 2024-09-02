import React from 'react'
import { Col, Row,Card } from 'antd';
const DetailUI=({data})=>{
    return(
        <Row className='py-5 px-4'>
             <Col className='mx-auto'> 
         <div className="bg-white shadow rounded overflow-hidden"> 
         <div className="px-4 pt-0 pb-4 cover"> 
         <div className="media align-items-end profile-head"> 
         <div className="profile mr-3">
         <img src={data.imageUrl} alt="..." width="130" className="rounded mb-2 img-thumbnail"/>
           </div> <div className="media-body mb-5 text-white"> <h4 className="mt-0 mb-0">{data.title}</h4>
             <p className="small mb-4"> <i className="fas fa-map-marker-alt mr-2"></i>{data.address}</p> 
             </div> </div> 
             </div> 
             <div className="bg-light p-4 d-flex justify-content-end text-center"> 
             <ul className="list-inline mb-0">
                 <li className="list-inline-item">
                     <h4 className="font-weight-bold mb-0 d-block">{data.beds}</h4>
                     <small className="text-muted"> <i className="fas fa-image mr-1"></i>Beds</small> </li> <li className="list-inline-item">
                     <h4 className="font-weight-bold mb-0 d-block">{data.bath}</h4>
                     <small className="text-muted"> <i className="fas fa-image mr-1"></i>Baths</small> </li> </ul> </div> 
                     <div className="px-4 "> <h3 className="mb-0 pl-4 mtt-0">About</h3> <div className="p-4 rounded shadow-sm bg-light"> <p className=" mb-0">Price : <b> {data.price} </b></p> <p className=" mb-0">Property Type: <b>{data.propertyType} </b></p> <p className=" mb-0">Area Covered: <b> {data.coveredAreaSQFT} </b></p> <p className=" mb-0">Commercial Plot: <b> {data.isCommercial} </b> </p> </div> </div> 
                     <div className="py-4 px-4"> <div className="d-flex align-items-center justify-content-between mb-3"> <h3 className="mb-0 pl-4">More photos</h3></div> 
                     <Row> 
                     <Col span={12} className='mb-2 pr-lg-1'><img src={data.imageUrl}/>
                        </Col> 
                        <Col span={12} className='mb-2 pr-lg-1'><img src={data.imageUrl} alt="" className="img-fluid rounded shadow-sm"/>
                        </Col> 
                        <Col span={12} className='pr-lg-1 mb-2'>
                            <img src={data.imageUrl} alt="" className="img-fluid rounded shadow-sm"/>
                            </Col>
                            <Col span={12} className='pr-lg-1 '><img src={data.imageUrl} alt="" className="img-fluid rounded shadow-sm"/>
                            </Col>
                         </Row> 
                         </div> 
                         </div>
                          </Col>
</Row>
    )
}


export default DetailUI