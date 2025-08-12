import React from "react";
import { Form, Select } from "antd";
import { FieldsProps } from "./app-form";
import { BaseOptionType, DefaultOptionType } from "antd/es/cascader";

export default function AppSelect({
  children,
  label,
  name,
  type,
  rules,
 // defaultValue,
  options,
  ...props
}) {
  return (
    
    <Form.Item name={name} label={label} rules={rules} >
      <Select
        showSearch
        options={options}
        // style={{ width: 200 }}
        // placeholder="Search to Select"
         optionFilterProp="children"
        filterOption={(input, option) => (option?.label ?? "").includes(input)}
        filterSort={(optionA, optionB) =>
          (optionA?.label ?? "")
            .toLowerCase()
            .localeCompare((optionB?.label ?? "").toLowerCase())
        } >
          
        
        </Select>
        
      
    </Form.Item>
  );
}