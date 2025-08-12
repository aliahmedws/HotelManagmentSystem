import { Form, Switch } from "antd";
import { FieldsProps } from "./app-form";
import { SwitchChangeEventHandler } from "antd/es/switch";

export default function AppSwitch({
  children,
  label,
  name,
  type,
  rules,
  hidden,
  // onChange,
  ...props
}) {
  return (
    <Form.Item name={name} label={label} rules={rules} valuePropName="checked">
      <Switch {...props} />
    </Form.Item>
  );
}