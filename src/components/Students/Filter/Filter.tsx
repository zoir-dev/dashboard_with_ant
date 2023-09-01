
import { Button, Form, Input, Select, message } from 'antd'
import './style.scss'
import { useState } from 'react'
const Filter = ({ action, values, setData, handleRequest }) => {
  console.log(values);

  const [loading, setLoading] = useState(false)

  const [form] = Form.useForm<{ key: number, name: string, email: string, type: string, description: string }>();

  const onFinish = async (e) => {
    if (action === 'add') {
      setLoading(true)
      await handleRequest()
      setData(prev => [...prev, e])
      message.success('Added')
      form.resetFields()
      setLoading(false)
    }
    else {
      console.log(e);
    }
  }
  return (
    <div className={action !== '' ? 'filter_div' : 'hide filter_div'}>
      <p> Active Students</p >
      <Form name="normal_login"
        className="login-form"
        onFinish={onFinish}
        scrollToFirstError
        form={form}
        layout='vertical'
        initialValues={{ key: values?.key || Date.now(), name: values?.name, email: values?.email, type: values?.type, description: values?.description }}
        requiredMark={false}>
        <Form.Item
          name='name'
          rules={[{ required: true, message: 'Name majburiy' }]}
          className='form-item'
          label='Name'
        >
          <Input placeholder="Name" />
        </Form.Item>

        <Form.Item
          name='email'
          rules={[{
            required: true, message: 'Email majburiy!'
          }]}
          className='form-item'
          label='Email'
        >
          <Input
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          name='type'
          rules={[{
            required: true, message: 'Type majburiy!'
          }]}
          className='form-item'
          label='Type'
        >
          <Select placeholder="Type"
            options={[{ value: 'legends', label: 'Legends' }, { value: 'veryLegends', label: 'Very Legends' }]} />
        </Form.Item>
        <Form.Item
          name='description'
          rules={[{
            required: true, message: 'Description majburiy!'
          }]}
          className='form-item'
          label='Description'
        >
          <Input name='description' placeholder='Description' />
        </Form.Item>
        <Form.Item>
          {action === 'add' ?
            <Button type="primary" htmlType="submit" size='large' block loading={loading}>
              Qo'shish
            </Button>
            :
            <div style={{ display: 'flex', gap: '20px' }}>
              <Button className='outlined' size='large' block loading={loading} onClick={() => form.resetFields()}>
                Filter Clear
              </Button>
              <Button type="primary" htmlType='submit' size='large' block loading={loading}>
                Filter
              </Button>
            </div>
          }
        </Form.Item>
      </Form>
    </div >
  )
}

export default Filter