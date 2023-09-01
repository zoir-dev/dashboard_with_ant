import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import './style.scss'
import { useState } from 'react'
import { monthlyData } from './data'
import { Tooltip } from 'antd'
const Spending = () => {
    const max_year = 2024
    const [year, setYear] = useState(max_year)

    const barHeight = (value: number) => {
        if (year === max_year) {
            if (value >= 1000) {
                return 90 + (value - 1000) / 125;
            } else {
                return value / 30 + 10
            }
        } else {
            const valuee = Math.ceil(Math.random() * 10000000000 % 15300)
            if (valuee >= 1000) {
                return 90 + (valuee - 1000) / 125;
            } else {
                return valuee / 30 + 10
            }

        }
    }


    const title = (value: number) => {
        value = (value - 90) * 125 + 1000
        let sum
        if (value >= 1000) {
            sum = Math.ceil(value / 100) / 10 + 'k'
        } else {
            sum = value
        }
        return (<p style={{ fontSize: '10px' }}>Expanse <br /><span style={{ fontSize: '14px' }}>{'$' + sum}</span></p>)
    }
    return (
        <div className="scrollDiv">

            <div className="spending">
                <div className="card_title">
                    <p>Spending Statistics</p>
                    <div className="year-changer">
                        <LeftOutlined onClick={() => setYear(year - 1)} />
                        <p>{year}</p>
                        <RightOutlined onClick={() => setYear(year === max_year ? year : year + 1)} />
                    </div>

                </div>
                <div className="bar-graph">
                    <div className="left">

                        <div>
                            <p>$15k</p>
                            <div></div>
                        </div>
                        <div>
                            <p>$10k</p>
                            <div></div>
                        </div>
                        <div>
                            <p>$5k</p>
                            <div></div>
                        </div>
                        <div>
                            <p>$1k</p>
                            <div></div>
                        </div>
                        <div>
                            <p>$500</p>
                            <div></div>
                        </div>
                    </div>
                    <div className="right">
                        {monthlyData.map((m, index) => (
                            <div key={index}>
                                <Tooltip placement='leftTop' title={() => title(barHeight(m.value))}>
                                    <div className='graph' style={{ height: `${barHeight(m.value) * year / max_year}px` }}></div>
                                </Tooltip>
                                <p>{m.month}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Spending