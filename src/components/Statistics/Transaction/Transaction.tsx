import { DatePicker, Table } from 'antd'
import './style.scss'
import { useState } from 'react'
import type { ColumnsType, TableProps } from 'antd/es/table';
import first from '../../../assets/1.png'
import second from '../../../assets/2.png'
import third from '../../../assets/3.png'
import complete from '../../../assets/complete.png'
import pending from '../../../assets/pending.png'
import hold from '../../../assets/hold.png'
const Transaction = () => {
    const [time, setTime] = useState()

    interface DataType {
        key: React.Key;
        transaction: { name: string, img: string };
        date: string;
        amount: string;
        status: { name: string, img: string };
    }

    const columns: ColumnsType<DataType> = [
        {
            title: 'Transactions',
            dataIndex: 'transaction',
            render: (t) => (
                <div className='transaction_row'>
                    <img src={t.img} alt="" />
                    <> {t.name}</>
                </div>
            ),
        },
        {
            title: 'Date',
            dataIndex: 'date',
            sorter: {
                compare: (a, b) => a.date - b.date,
                multiple: 3,
            },
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
            sorter: {
                compare: (a, b) => a.amount - b.amount,
                multiple: 2,
            },
        },
        {
            title: 'Status',
            dataIndex: 'status',
            sorter: {
                compare: (a, b) => a.status - b.status,
                multiple: 1,
            },
            render: (s) => (
                <div className='transaction_row'>
                    <img src={s.img} alt="" />
                    <> {s.name}</>
                </div>
            ),
        },
    ];

    const data: DataType[] = [
        {
            key: '1',
            transaction: { name: 'Bank Transfer', img: first },
            date: 'Jan 01,2022',
            amount: '$2,000.00',
            status: { name: 'Completed', img: complete },
        },
        {
            key: '2',
            transaction: { name: 'PaypalAccoun', img: second },
            date: 'Jan 04,2022',
            amount: '$2,000.00',
            status: { name: 'Pending', img: pending },
        },
        {
            key: '3',
            transaction: { name: 'Bank Transfer', img: third },
            date: 'Jan 06,2022',
            amount: '$2,000.00',
            status: { name: 'On HOld', img: pending },
        },
    ];
    const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };
    return (
        <div className="scrollDiv">
            <div className="transaction">
                <div className="title">
                    <p>Transaction History</p>
                    <DatePicker.RangePicker value={time} onChange={(e) => setTime(e)
                    } picker='date' />
                </div>
                <Table columns={columns} dataSource={data} onChange={onChange} pagination={false} />
            </div>
        </div>
    )
}

export default Transaction