import { UserOutlined } from '@ant-design/icons'
import './style.scss'
import { data } from './data'
const WorkerCard = () => {

    return (
        <div className='worker_cards'>{data.map(w => (
            <div className="worker_card">
                <UserOutlined />
                <div><p>{w.value}</p>
                    <span>{w.label}</span></div>
            </div>
        ))}</div>
    )
}

export default WorkerCard