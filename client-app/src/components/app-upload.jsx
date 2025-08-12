import React, { useState } from "react";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Form, Input, message, Upload } from "antd";
import { FieldsProps } from "./app-form";
import { useForm } from "antd/es/form/Form";
// import { ApiBaseUrl, BaseUrl } from "../../common/hooks/use-fetch";

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};

const beforeUpload = (file) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt4M = file.size / 1024 / 1024 < 4;
  if (!isLt4M) {
    message.error("Image must smaller than 4MB!");
  }
  return isJpgOrPng && isLt4M;
};

const AppUpload = (props) => {
  const form = Form.useFormInstance();
  const val = form.getFieldValue(props.name);
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      const name = props.name;
      const token = info.file.response[0];
      form.setFieldsValue({ [name]: token.Path }); //.setFieldsValue({ [name]: token });
      // Get this url from response in real world.
      // getBase64(info.file.originFileObj as RcFile, (url) => {
      // });
      setLoading(false);
      setImageUrl(token.Path);
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  return (
    <>
      <Upload
        name="files"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        // action={`${ApiBaseUrl}/upload`}
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {imageUrl ? (
          <img
            // src={BaseUrl + imageUrl}
            alt="avatar"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        ) : (
          uploadButton
        )}
      </Upload>
      <Form.Item name={props.name} hidden>
        <Input />
      </Form.Item>
    </>
  );
};

export default AppUpload;