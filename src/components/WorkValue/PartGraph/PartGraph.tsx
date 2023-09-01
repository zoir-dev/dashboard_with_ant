import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { Tooltip } from 'antd'
import { partData } from './data'

interface partProps {
    className?: string
}
const PartGraph = ({ className }: partProps) => {

    const max_year = 2024
    const [year, setYear] = useState(max_year)

    const barHeight = (value: number) => {
        if (year === max_year) {
            if (value >= 1000) {
                return 90 + (value - 1000) / 80;
            } else {
                return value / 30 + 10
            }
        } else {
            const valuee = Math.ceil(Math.random() * 10000000000 % 15300)
            if (valuee >= 1000) {
                return 90 + (valuee - 1000) / 80;
            } else {
                return valuee / 30 + 10
            }

        }
    }


    const title = (value: number) => {
        value = (value - 90) * 400 + 1000
        let sum
        if (value >= 1000) {
            sum = Math.ceil(value / 100) / 10 + 'k'
        } else {
            sum = value
        }
        return (<p style={{ fontSize: '10px' }}><span style={{ fontSize: '14px' }}>{sum}</span></p>)
    }
    return (
        <div className="scrollDiv">

            <div className={`spending ${className}`}>
                <div className="card_title">
                    <p>Иш натижалари самарадорлиги (чорак кесимида)</p>
                    <div className="year-changer">
                        <LeftOutlined onClick={() => setYear(year - 1)} />
                        <p>{year}</p>
                        <RightOutlined onClick={() => setYear(year === max_year ? year : year + 1)} />
                    </div>

                </div>
                <div className="bar-graph work_graph">
                    <div className="left">
                        <div>
                            <p>70</p>
                            <div></div>
                        </div>
                        <div>
                            <p>60</p>
                            <div></div>
                        </div>
                        <div>
                            <p>50</p>
                            <div></div>
                        </div>
                        <div>
                            <p>40</p>
                            <div></div>
                        </div>
                        <div>
                            <p>30</p>
                            <div></div>
                        </div>
                        <div>
                            <p>20</p>
                            <div></div>
                        </div>
                        <div>
                            <p>10</p>
                            <div></div>
                        </div>
                        <div>
                            <p>0</p>
                            <div></div>
                        </div>
                    </div>
                    <div className="right">
                        {partData.map((m, index) => (
                            <div key={index}>
                                <div className='part_graph_graphs'>
                                    {m.values.map(v => (
                                        <Tooltip placement='leftTop' title={() => title(barHeight(v))}>
                                            <div className='graph' style={{ height: `${barHeight(v) * year / max_year}px` }}></div>
                                        </Tooltip>
                                    ))}
                                </div>
                                <p style={{ whiteSpace: 'nowrap' }}>{m.month}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PartGraph