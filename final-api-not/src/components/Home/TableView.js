import React,{ useRef, useState } from 'react'
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import { Button, Input, Space, Table } from 'antd';
import DetailUI from '../Detail/Detail';


const TableView = ({data}) =>{
    const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const [clickedItem, setClickedItem] = useState(false);
  const [itemData, setItemData] = useState(data[0]);
  const getDetail = (item) =>{
      setClickedItem(true)
      setItemData(item)
      console.log('function called',itemData)
  }

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1677ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });
  
  const columns = [
    {
      title: 'Item #',
      dataIndex: 'key',
      key: 'key',
      width: '10%',
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      width: '30%',
      ...getColumnSearchProps('title'),
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      ...getColumnSearchProps('address'),
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ['descend', 'ascend'],
      width:'30%',
    },
    {
      title: 'Rooms',
      dataIndex: 'beds',
      key: 'beds',
      width: '10%',
      ...getColumnSearchProps('beds'),
    },
    {
      title: 'Baths',
      dataIndex: 'bath',
      key: 'bath',
      width: '10%',
      ...getColumnSearchProps('bath'),
    },
    {
      title: 'Area',
      dataIndex: 'coveredAreaSQFT',
      key: 'coveredAreaSQFT',
      width: '10%',
      ...getColumnSearchProps('coveredAreaSQFT'),
    },
    {
      title: 'Type',
      dataIndex: 'propertyType',
      key: 'propertyType',
      width: '10%',
      ...getColumnSearchProps('propertyType'),
    },
    {
      title: 'Commercial ',
      dataIndex: 'isCommercial',
      key: 'isCommercial',
      width: '2%',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      width: '5%',
      ...getColumnSearchProps('price'),
    },
    
  ];
    return  clickedItem ? <DetailUI data={itemData}/> : <Table columns={columns} dataSource={data} onRow={(r) => ({
      onClick: () => getDetail(r)})} />
}

export default TableView