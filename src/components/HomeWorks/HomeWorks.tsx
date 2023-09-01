import { Button, Table } from 'antd'
import './style.scss'
import { ProjectOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { data } from './data'
import Filter from './Filter'
const HomeWorksComponent = () => {
    const [hide, setHide] = useState<boolean>(false)
    const buttons = [{ key: 'firstW', label: '1-Vazifa' },
    { key: 'secondW', label: "2-Vazifa" }, { key: 'thirdW', label: '3-Vazifa' },
    { key: 'fourthW', label: "4-Vazifa" }]
    const columns = [
        {
            title: 'IFO',
            dataIndex: 'ifo',
            key: 'ifo',
        },
        {
            title: 'Хизматга чиққан кун / Патруллик йўналишида хизмат олиб борилган кун',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: '1.1',
            dataIndex: '1.1',
            key: '1.1',
        },
        {
            title: '1.2',
            dataIndex: '1.2',
            key: '1.2',
        },
        {
            title: '1.2.1',
            dataIndex: '1.2.1',
            key: '1.2.1',
        },
        {
            title: '1.3',
            dataIndex: '1.3',
            key: '1.3',
        },
        {
            title: '1.4',
            dataIndex: '1.4',
            key: '1.4',
        },
        {
            title: '1.5',
            dataIndex: '1.5',
            key: '1.5',
        },
    ];
    const [type, setType] = useState(buttons[0].key)

    const filteredData = () => {
        return data
    }
    const badgeCount = (type: string) => {
        if (type === 'all') {
            return data.length
        } else {
            return data.filter((f: any) => f.type === type).length
        }
    }
    return (
        <div className='students_div hworks'>
            <div className="title">
                <p>
                    Mijoz sahifasi
                </p>
                <Button type='primary' onClick={() => setHide(!hide)}><ProjectOutlined />Vazifalar</Button>
            </div>
            <div className="buttons_div">
                {buttons.map(b => (
                    <Button key={b.key} className={type === b.key ? "active" : ''}
                        onClick={() => setType(b.key)}>
                        {b.label} <span className='badge'>{badgeCount(b.key)}</span>
                    </Button>
                ))}
            </div>
            <div className="scrollDiv">
                <div className="withFilter">
                    <div className="table">

                        <Table dataSource={filteredData()}
                            pagination={false}
                            columns={columns} />
                    </div>
                    <Filter hide={hide} />
                </div>
            </div >
        </div>
    )
}

export default HomeWorksComponent