import { Input } from "antd";
import FormItem from "antd/es/form/FormItem";

export const AuthInput = ({ name, label, type = "text" }) => {
  return (
    <FormItem
      name={name}
      rules={[{ required: true, message: `Please input ${label}!` }]}
      className="form-item"
    >
      <label htmlFor={name}>{label}</label>
      <Input placeholder={label} id={name} type={type} />
    </FormItem>
  );
};
{
  /* <AuthInput name="IIV" label='IIV' />
                    <AuthInput name="VIIb" label="VIIB boshqarmasi" />
                    <AuthInput name="tuman" label="Tuman IIBo'limi" />
                    <AuthInput name="login" label="Login" />
                    <AuthInput name="password" label="Parol" type='password' /> */
}
