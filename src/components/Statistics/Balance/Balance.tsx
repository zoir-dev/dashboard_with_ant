
import { Button } from 'antd'
import './style.scss'
const Balance = () => {
    return (
        <div className='balance_div'>
            <div className='title'>
                <p>Your balance</p>
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 10.4167C3.9 10.4167 3 11.3542 3 12.5001C3 13.6459 3.9 14.5834 5 14.5834C6.1 14.5834 7 13.6459 7 12.5001C7 11.3542 6.1 10.4167 5 10.4167Z" stroke="#1C1E23" stroke-width="1.5" />
                    <path d="M19 10.4167C17.9 10.4167 17 11.3542 17 12.5001C17 13.6459 17.9 14.5834 19 14.5834C20.1 14.5834 21 13.6459 21 12.5001C21 11.3542 20.1 10.4167 19 10.4167Z" stroke="#1C1E23" stroke-width="1.5" />
                    <path d="M12 10.4167C10.9 10.4167 10 11.3542 10 12.5001C10 13.6459 10.9 14.5834 12 14.5834C13.1 14.5834 14 13.6459 14 12.5001C14 11.3542 13.1 10.4167 12 10.4167Z" stroke="#1C1E23" stroke-width="1.5" />
                </svg>
            </div>
            <p className="money_value">$19,760.00 <span>(USD)</span></p>
            <span>From Jan 01, 2022 to Jan 31, 2022</span>
            <div className="buttons">
                <Button type='primary' >
                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.10413 13.1771C9.10413 14.1066 9.82289 14.8541 10.7046 14.8541H12.5062C13.2729 14.8541 13.8958 14.2025 13.8958 13.3879C13.8958 12.5158 13.5125 12.1996 12.9471 11.9983L10.0625 10.9921C9.49704 10.7908 9.11372 10.4841 9.11372 9.60248C9.11372 8.79748 9.73662 8.13623 10.5033 8.13623H12.305C13.1866 8.13623 13.9054 8.88373 13.9054 9.81331" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M11.5 7.1875V15.8125" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M21.0833 11.5001C21.0833 16.7901 16.79 21.0834 11.5 21.0834C6.20996 21.0834 1.91663 16.7901 1.91663 11.5001C1.91663 6.21008 6.20996 1.91675 11.5 1.91675" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M16.2916 2.875V6.70833H20.125" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M21.0833 1.91675L16.2916 6.70841" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    Top Up
                </Button>
                <Button type='primary' ghost >
                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.10413 13.1771C9.10413 14.1066 9.82289 14.8541 10.7046 14.8541H12.5062C13.2729 14.8541 13.8958 14.2025 13.8958 13.3879C13.8958 12.5158 13.5125 12.1996 12.9471 11.9983L10.0625 10.9921C9.49704 10.7908 9.11372 10.4841 9.11372 9.60248C9.11372 8.79748 9.73662 8.13623 10.5033 8.13623H12.305C13.1866 8.13623 13.9054 8.88373 13.9054 9.81331" stroke="#1C1E23" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M11.5 7.1875V15.8125" stroke="#1C1E23" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M21.0833 11.5001C21.0833 16.7901 16.79 21.0834 11.5 21.0834C6.20996 21.0834 1.91663 16.7901 1.91663 11.5001C1.91663 6.21008 6.20996 1.91675 11.5 1.91675" stroke="#1C1E23" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M21.0833 5.75008V1.91675H17.25" stroke="#1C1E23" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M16.2916 6.70841L21.0833 1.91675" stroke="#1C1E23" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    Transfer
                </Button>
            </div>
        </div>
    )
}

export default Balance