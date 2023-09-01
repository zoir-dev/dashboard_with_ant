import { Button, Form, Image } from 'antd'
import logo from '../../assets/logo.png'
import './style.scss'
import Input from 'antd/es/input/Input'
import { CloseOutlined } from '@ant-design/icons'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Auth = ({ type }) => {


    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {

        if (localStorage.getItem('login')) {
            navigate('/')
        }
    }, [navigate])


    const [form] = Form.useForm<{ IIV: string, VIIB: string, tuman: string, login: string, password: string }>();
    const VIIB = Form.useWatch('VIIB', form);
    const IVV = Form.useWatch('IVV', form)
    const tuman = Form.useWatch('tuman', form)
    const login = Form.useWatch('login', form)
    const parol = Form.useWatch('parol', form)

    const handleRequest = async () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const data = "Data fetched successfully";
                resolve(data);
            }, 2000);
        });
    }
    const onFinish = async (values: string) => {
        setLoading(true)
        localStorage.setItem('login', values.login)
        await handleRequest()
        console.log('Received values of form: ', values);
        form.resetFields()
        setLoading(false)
        navigate('/')
    };

    const handleClick = (fieldName: string) => {
        form.setFieldValue(fieldName, '')
    };

    return (
        <div className="auth">
            <div className="left">
                <Image src={logo} alt='logo' loading='lazy' preview={false} />
                <p>Lorem ipsum dolor sit amet consectetur.
                    Pretium aliquet ac molestie lacus.
                    Faucibus arcu aliquam nullam nunc dictumst.
                </p>
            </div>
            <div className="right">
                <div className="right_title">
                    <h2>Tizimga kirish </h2>
                    <Image src={logo} alt='logo' loading='lazy' />
                </div>
                <Form
                    name="normal_login"
                    className="login-form"
                    onFinish={onFinish}
                    scrollToFirstError
                    layout='vertical'
                    requiredMark={false}
                    form={form}

                >
                    {type === 'sign' &&
                        <>
                            <Form.Item
                                name='IVV'
                                rules={[{ required: true, message: 'IVV majburiy!' }]}
                                className='form-item'
                                label="IVV"
                            >
                                <Input placeholder="IVV " suffix={IVV ? <CloseOutlined onClick={() => handleClick('IVV')} /> : ' '} />
                            </Form.Item>
                            <Form.Item
                                name="VIIB"
                                rules={[{ required: true, message: 'VIIB majburiy!' }]}
                                className='form-item'
                                label="VIIB"
                            >
                                <Input placeholder="VIIB boshqarmasi" suffix={VIIB ?
                                    <CloseOutlined onClick={() => handleClick('VIIB')} /> : ' '} />
                            </Form.Item>
                            <Form.Item
                                name='tuman'
                                rules={[{ required: true, message: "Tuman IIBo'limi majburiy!" }]}
                                className='form-item'
                                label="Tuman Bo'limi"
                            >
                                <Input placeholder="Tuman IIBo'limi" suffix={tuman ? <CloseOutlined onClick={() => handleClick('tuman')} /> : ' '} />
                            </Form.Item>
                        </>
                    }
                    <Form.Item
                        name='login'
                        rules={[{ required: true, message: 'Login majburiy' }]}
                        className='form-item'
                        label='Login'
                    >
                        <Input placeholder="Login" suffix={login ? <CloseOutlined onClick={() => handleClick('login')} /> : ' '} />
                    </Form.Item>

                    <Form.Item
                        name='parol'
                        rules={[{
                            required: true, message: 'Parol majburiy!'
                        }, {
                            min: 5, message: 'Minimal qiymat 5!'
                        }]}
                        className='form-item'
                        label='Parol'
                    >
                        <Input
                            type="password"
                            placeholder="Parol"
                            suffix={parol ? <CloseOutlined onClick={() => handleClick('parol')} /> : ' '}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" size='large' block loading={loading}>
                            Kirish
                        </Button>
                        Or <Link to={type === 'sign' ? '/signIn' : '/signUp'}>{type === 'sign' ? 'login now!' : 'register now!'}</Link>
                    </Form.Item>
                </Form>
            </div>
        </div >
    )
}

export default Auth