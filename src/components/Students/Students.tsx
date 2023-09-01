import { useEffect, useState } from 'react'
import { buttons } from './buttons'
import { Button, Input, Table, message } from 'antd'
import './style.scss'
import { DeleteOutlined, EditOutlined, FilterOutlined, PlusOutlined, SearchOutlined } from '@ant-design/icons'
import { dataSource } from './data'
import Filter from './Filter/Filter'

interface propss {
    people?: string,
    columData?: any[],
    dataSourc?: any[],
    rowSelect?: boolean,
    paginate?: boolean
}

const StudentsComponent = ({ people, columData, dataSourc, rowSelect = true, paginate }: propss) => {
    const [type, setType] = useState('all')
    const [data, setData] = useState(dataSourc ? dataSourc : dataSource)
    const [search, setSearch] = useState('')
    const [selectedRows, setSelectedRows] = useState([])
    const [loading, setLoading] = useState(false)
    const [action, setAction] = useState('')
    const [tableParams, setTableParams] = useState({
        pagination: {
            current: 1,
            pageSize: 10,
            total: data.length

        },
    });
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Type',
            dataIndex: 'type',
            key: 'type',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: '',
            dataIndex: 'actions',
            key: 'actions',
            render: (b: any) => (
                <div className='actions'>
                    <Button type='primary' onClick={() => editRow(b)
                    }>
                        <EditOutlined />
                        Edit
                    </Button>
                    <DeleteOutlined color='primary' width={28} onClick={() => deleteRow(b)
                    } />
                </div>
            )
        },
    ];

    const handleRequest = () => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({ data: 'Response data after 2 seconds' });
            }, 1000);
        });
    }

    const editRow = (e: any) => {
        console.log(e);

    }

    const deleteRow = async (e: any) => {
        setLoading(true)
        await handleRequest()
        setData(data.filter((d: any) => d.key !== e.key))
        setLoading(false)
        message.success('Deleted')
        console.log(e)
    }



    const handleTableChange = (
        pagination: any,
    ) => {
        console.log(pagination);

        setTableParams(pagination);
    };

    const rowSelection = {
        onChange: (selectedRows: any) => {
            setSelectedRows(selectedRows)

        },
    };

    const filteredData = () => {

        if (!search) {
            if (type === 'all') return data
            return data.filter(f => f.type === type)
        } else {
            if (type === 'all') return data.filter((item: any) => item.name.toLowerCase().includes(search.toLowerCase()));
            return data.filter(f => f.type === type).filter((f: any) => f.name.toLowerCase().includes(search.toLowerCase()))
        }



    };

    useEffect(() => {
        filteredData()
    }, [type])



    const deleteRows = async () => {
        setLoading(true);

        await handleRequest()
        selectedRows.forEach(rowKey => {
            setData(data => data.filter((d: any) => d.key !== rowKey));
        });
        setSelectedRows([])
        message.success('Deleted')
        setLoading(false);
    };

    const cancel = () => {
        setAction('')
    }

    const badgeCount = (type: string) => {
        if (type === 'all') {
            return data.length
        } else {
            return data.filter(f => f.type === type).length
        }
    }

    return (
        <div className='students_div'>
            {!people && <div className="buttons_div">
                {buttons.map(b => (
                    <Button key={b.type} className={type === b.type ? "active" : ''}
                        onClick={() => setType(b.type)}>
                        {b.name} <span className='badge'>{badgeCount(b.type)}</span>
                    </Button>
                ))}
            </div>}
            <div className="scrollDiv">
                <div className="withFilter" style={{ minWidth: '650px' }}>

                    <div className="table">
                        <div className="head">

                            <div className="title">
                                <div>
                                    <h2>{people ? people : 'Active Students'} </h2>
                                    <p>{dataSource.length} {people ? 'users' : 'students'}</p>
                                </div>
                                <Input suffix={<SearchOutlined />} placeholder='Search by name' value={search}
                                    onChange={(e) => setSearch(e.target.value)} />
                            </div>
                            <div className="action_buttons">
                                {selectedRows.length ?
                                    <Button size='large' style={{ color: 'white' }} onClick={deleteRows}><DeleteOutlined />O'chirish</Button> :
                                    <>
                                        {action ? <Button type='text'
                                            style={{ background: 'transparent', border: 'none' }} onClick={cancel}>
                                            Ortga
                                        </Button> : <>
                                            <Button size='large' onClick={() => setAction(action === 'filter' ? '' : 'filter')}><FilterOutlined />Filter</Button>
                                            <Button type='primary' size='large' onClick={() => setAction(action === 'add' ? '' : 'add')}><PlusOutlined />Qo'shish</Button>
                                        </>}
                                    </>
                                }
                            </div>
                        </div>
                        {
                            rowSelect ?
                                <Table rowSelection={rowSelection} dataSource={filteredData()}
                                    columns={columData ? columData : columns} pagination={!paginate ? paginate : tableParams.pagination}
                                    onChange={handleTableChange} loading={loading} /> :
                                <Table dataSource={filteredData()}
                                    columns={columData ? columData : columns} pagination={!paginate ? paginate : tableParams.pagination}
                                    loading={loading} />
                        }

                    </div>
                    <Filter action={action} setData={setData} handleRequest={handleRequest} />
                </div>
            </div>
        </div>
    )
}

export default StudentsComponent