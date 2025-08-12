import { FC, PropsWithChildren } from "react";
import { Button, Form, Row, Col, Card, Space } from "antd";
import AppTextbox, { TextboxProps } from "./app-textbox";
import AppSwitch, { SwitchProps } from "./app-switch";
// import { useUser } from "../../common/root-context";
import AppSelect, { AppSelectProps } from "./app-select";
import AppUpload, { AppUploadProps } from "./app-upload";
//import { useUser } from "../../common/root-context";

export default function AppForm({ masterData, submitText, ...props }) {
  const [form] = Form.useForm();
  //const user = useUser();
  const onFinish = (values) => {
    props.onSubmit(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={props.defaultData}
      //   onValuesChange={onRequiredTypeChange}
      //   requiredMark={requiredMark}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      {props.sections?.map((sec) => (
        // <Space size={12}>
        <Card
          title={sec.title}
          bordered={true}
          style={{ marginTop: "8px", display: sec.hidden ? "none" : undefined }}
        >
          <Row gutter={[16, 16]}>
            {sec.fields?.map((field) =>
              renderField(field, props.defaultData || {}, {
                //user,
                masterData,
              })
            )}
          </Row>
        </Card>
        // </Space>
      ))}
      <Row gutter={[16, 16]}>
        {props.fields?.map((field) =>
          // renderField(field, props.defaultData || {}, { user, masterData })
          renderField(field, props.defaultData || {}, { masterData })
        )}
      </Row>
      <Form.Item
        style={{
          display: "flex",
          justifyContent: "flex-end",
          paddingTop: "8px",
        }}
      >
        <Button type="primary" htmlType="submit">
          {submitText || "Submit"}
        </Button>
      </Form.Item>
      {/* <Row>
      </Row> */}
    </Form>
  );
}
function renderField({...field }, defaultData, { user, masterData }) {
  /* if (hidden && hidden(defaultData, { user }) ) {
    return;
  } */
  if (field.type === FieldTypes.text || field.type === FieldTypes.datetimelocal) {
    return (
      <FieldWrapper key={field.name}>
        <AppTextbox
          {...field}
          //defaultValue={defaultData[field.name]}
        />
      </FieldWrapper>
    );
  }
  if (field.type === FieldTypes.switch) {
    return (
      <FieldWrapper key={field.name}>
        <AppSwitch
          {...field}
          //defaultChecked={defaultData[field.name]}
        />
      </FieldWrapper>
    );
  }
  if (field.type === FieldTypes.select) {
    
    return (
      <FieldWrapper key={field.name}>
        <AppSelect
          {...field}
          //defaultValue={defaultData[field.name]}
          options={
            field.options
          }
        />
      </FieldWrapper>
    );
  }
  if (field.type === FieldTypes.upload) {
    const fieldProps = field;
    return (
      <FieldWrapper key={field.name}>
        <AppUpload {...fieldProps} />
      </FieldWrapper>
    );
  }
  return <></>;
}

const FieldWrapper = (props) => {
  return (
    <Col sm={24} md={12} lg={6}>
      {props.children}
    </Col>
  );
};

export const FieldTypes = {
  text: "text",
  switch: "switch",
  select: "select",
  upload: "upload",
  datetimelocal: "datetime-local",
};