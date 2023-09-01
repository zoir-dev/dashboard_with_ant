import { UserOutlined } from '@ant-design/icons'
import './style.scss'
const Info = () => {
    return (
        <div className='work_info'>
            <UserOutlined className='user_icon' />
            <div className="infos">
                <div className="info">
                    <p>Ҳудуд:</p>
                    <span>Андижон</span>
                </div>
                <div className="info">
                    <p>Туман (шаҳар):</p>
                    <span>Андижон ш.</span>
                </div>
                <div className="info">
                    <p>Маҳалла:</p>
                    <span>Андижон МФЙ</span>
                </div>
                <div className="info">
                    <p>Лавозими:</p>
                    <span>Инспектор</span>
                </div>
                <div className="info">
                    <p>Унвони:</p>
                    <span>Капитан</span>
                </div>
                <div className="info">
                    <p>Туғилган санаси:</p>
                    <span>12.01.1980</span>
                </div>
                <div className="info">
                    <p>Телефон рақами:</p>
                    <span>+99890 123-45-67</span>
                </div>
                <div className="info">
                    <p>Паспорт серия ва рақами:</p>
                    <span>АА 1234567</span>
                </div>
                <div className="info">
                    <p>Гувоҳнома рақами:</p>
                    <span>1234567</span>
                </div>
            </div>

        </div>
    )
}

export default Info