import { data } from "../WorkerCard/data"
import './style.scss'
const WorkersInfo = () => {
    return (
        <div className='workers'>
            <div className="left">
                {data.map(d => (
                    <div className="worker_title">
                        <p>{d.label}:</p>
                        <span>{d.value}</span>
                    </div>
                ))}
            </div>
            <div className="right">
                {data.slice(2).map(d => (
                    <div className="worker_title">
                        <p>{d.label}:</p>
                        <span>{d.value}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WorkersInfo