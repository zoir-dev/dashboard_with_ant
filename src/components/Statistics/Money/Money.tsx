import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons'
import './style.scss'
const Money = () => {
    return (
        <div className='money_div'>
            <div className="income">
                <div className="title">
                    <p>Total Income</p>
                    <ArrowUpOutlined />
                </div>
                <p className="money_value">$50,530.00 <span>(USD)</span></p>
                <span><span>20% </span>increase compared to last week</span>
            </div>
            <div className="expense">
                <div className="title">
                    <p>Total Expense</p>
                    <ArrowDownOutlined />
                </div>
                <p className="money_value">$19,760.00 <span>(USD)</span></p>
                <span><span>10% </span>decrease compared to last week</span>

            </div>
        </div>
    )
}

export default Money