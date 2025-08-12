import { Input, Form } from "antd";
import { FieldsProps } from "./app-form";

export default function AppTextbox({
  children,
  label,
  name,
  type,
  rules,
  hidden,
  ...props
}) {
  return (
    <Form.Item name={name}  label={label} rules={rules}>
      <Input {...props} disabled={hidden} type={type} maxLength={100} />
    </Form.Item>
  );
}
