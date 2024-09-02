import React,{useState, useEffect} from 'react';
import { TableOutlined, AppstoreOutlined} from '@ant-design/icons';
import { Button,Tooltip } from 'antd';
import TableView from './TableView';
import CardView from './CardView';
import DetailUI from '../Detail/Detail';

const Home =()=>{
    const [listView, setListView] = useState(false);

    const onChangeView = (prevState) => {
        console.log("The current state is", prevState)
        setListView(prevState => !prevState);
        console.log("The new state is", listView)
    }
    const data = [
        {
          key: '1',
          imageUrl: 'https://imgs.search.brave.com/mA6MSMMHoxE3l9J5VJAmb3ihy2bEYTulZlWjjQvXl5g/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNy8w/NC8xMC8yMi8yOC9y/ZXNpZGVuY2UtMjIx/OTk3Ml82NDAuanBn',
          title: '1 Kanal House for sale',
          address: 'DHA Phase 6, Lahore',
          beds: 5,
          bath: 6,
          coveredAreaSQFT: '2350 sqft',
          propertyType: 'house',
          isCommercial: 'Yes',
          price: 65000000
        },
        {
          key: '2',
          imageUrl: 'https://imgs.search.brave.com/WhIQcWFfSnd2GUC-0FezYuzk2VIMNDhjl2F383qkqo8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/NTgwMzYxMTctMTVk/ODJhOTBiOWIxP2l4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TVRoOGZI/SmxZV3dsTWpCbGMz/UmhkR1Y4Wlc1OE1I/eDhNSHg4ZkRBPSZ3/PTEwMDAmcT04MA.jpeg',
          title: '2 Kanal Office for sale',
          address: 'Bahria Town, Islamabad',
          beds: 8,
          bath: 10,
          coveredAreaSQFT: '4000 sqft',
          propertyType: 'office',
          isCommercial: 'No',
          price: 80000000
        }
      ];

    return(
        <>
        <div className='filters'>
            <Tooltip placement="top" title="Switch to Table View">
            <Button
                icon={<TableOutlined />}
                description="Table View"
                shape="square"
                onClick={()=>onChangeView(listView)}
                className={`${listView == false ? 'filterBtns btnSelected' : 'filterBtns'}`}
            />
            </Tooltip>
            <Tooltip placement="top" title="Switch to List View">
            <Button
                icon={<AppstoreOutlined />}
                description="Card View"
                shape="square"
                onClick={()=>onChangeView(listView)}
                className={`${listView == true ? 'filterBtns btnSelected' : 'filterBtns'}`}
            />
            </Tooltip>
        </div>
        <div className='listing-container'>
            {listView ? <CardView dataList={data}/> : <TableView data={data}/>}
         {/* <DetailUI/> */}
        </div>
        </>
    )
}
export default Home