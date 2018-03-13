import React, { PureComponent } from 'react';
import { Form, Button, Icon, Input } from 'antd';
import { connect } from 'dva';

import styles from './login.less';

const FormItem = Form.Item;

@Form.create()
@connect(({login, loading})=>({
    login,
    loading: loading.effects['login/login']
}))
export default class Login extends PureComponent{

    handleSubmit = (e)=>{
        e.preventDefault();
        this.props.form.validateFields((err, values)=>{
            if(!err){
                this.props.dispatch({
                    type: 'login/login',
                    params: values
                })
            }
        });
    }

    render(){
        const { form, loading } = this.props;
        const { getFieldDecorator } = form;

        return(
            <div className={styles.main}>
                <div className={styles.title}>登 录</div>
                <Form onSubmit={this.handleSubmit}>
                    <FormItem>
                        {
                            getFieldDecorator('uname', {
                                rules: [{required: true, message: 'please input uname'}]
                            })(
                                <Input size="large" placeholder='uname' prefix={<Icon type="user" />}/>
                            )
                        }
                    </FormItem>

                    <FormItem>
                        {
                            getFieldDecorator('pwd', {
                                rules: [{required: true, message: "please input password"}]
                            })(
                                <Input size="large" type="password" placeholder="password" prefix={<Icon type="lock" />} />
                            )
                        }
                    </FormItem>

                    <FormItem>
                        <Button htmlType="submit" type="primary" size="large" loading={loading} className={styles.loginbtn}>
                            登 录
                        </Button>
                    </FormItem>
                </Form>
            </div>
        )
    }
}
