import { ArrowUpOutlined } from '@ant-design/icons'
const Kpi = () => {
    return (
        <div className='money_div' >
            <div className="expense kpi">
                <div className="title">
                    <p>Kpi ko'rsatkichi</p>
                    <ArrowUpOutlined />
                </div>
                <p className="money_value kpi">73 <span>ball</span></p>
                <span><span>20% </span>O'tgan oyga nisbatan</span>
            </div>
        </div>
    )
}

export default Kpi