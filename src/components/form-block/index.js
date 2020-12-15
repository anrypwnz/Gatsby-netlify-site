import React from 'react';
import { Form, Input, Button } from 'antd';

import s from './form.module.css';

export default function FormBlock() {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className={s.wrap}>
      <h2 className={s.title}>Оставьте заявку и мы с вами свяжемся</h2>

      <Form
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        size={'large'}
      >
        <Form.Item

          name="username"
          rules={[
            {
              required: true,
              message: 'Введите ваше имя',
            },
          ]}
        >
          <Input placeholder="Ваше имя" className={s.input}/>
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Введите ваш телефон',
            },
          ]}
        >
          <Input placeholder="Ваш номер телефона" className={s.input}/>
        </Form.Item>

        <Form.Item
          name="comment"
        >
          <Input placeholder="Комментарий" className={s.input}/>
        </Form.Item>


        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className={s.submit}
            block>
            Submit
          </Button>
        </Form.Item>

      </Form>
    </div>

  );
}