import React,{useState} from 'react';
import { Col, Row,Card } from 'antd';
import { ScanOutlined, TranslationOutlined  } from '@ant-design/icons';
import DetailUI from '../Detail/Detail';

const CardView=({dataList})=>{
    const [clickedItem, setClickedItem] = useState(false);
    const [itemData, setItemData] = useState(dataList[0]);
    console.log('data', dataList);
    const getDetail = (item) =>{
        setClickedItem(true)
        setItemData(item)
        console.log('function called',itemData)
    }
    return(
       <>
        {clickedItem ? <DetailUI data={itemData}/> : <Row>
            {dataList.map((item,index)=>(
            <Col span={6}>
            <Card
                onClick={()=> getDetail(item)}
                style={{
                    width: '95%',
                }}
                cover={
                    <img
                    alt={item.address}
                    src={item.imageUrl}
                    />
                }
                actions={[
                    <p>  <ScanOutlined /> Beds: <b> {item.beds} </b></p>,
                    <p>  <TranslationOutlined /> Baths:<b> {item.bath}</b> </p> ,
                ]}>
            
                <h3 className='card-title'>  {item.title}</h3>
                <p className="card-desc"> {item.address}</p>
                <Row className='specs-row'>
                    <Col span={12}>  <p> Price: <span> <b>${item.price }</b> </span></p> </Col>
                    <Col span={12}>  <p> Commercial:  <span><b>{item.isCommercial}</b></span> </p> </Col>
                    <Col span={24}>  <p> Area Covered: <span> <b>{item.coveredAreaSQFT}</b> </span></p> </Col>
                </Row>
            </Card>
            </Col>
            ))}
        </Row>}
       </>
    )
}

export default CardView