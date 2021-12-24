import React, { useState, useEffect,  } from "react";
import { createForm } from "@formily/core";
import { createSchemaField } from "@formily/react";
import {
  Form,
  FormItem,
  FormLayout,
  Input,
  Select,
  Cascader,
  DatePicker,
  Submit,
  FormGrid,
  Upload,
  ArrayItems,
  Editable,
  FormButtonGroup
} from "@formily/antd";
import { action } from "@formily/reactive";
import { Card, Button, Spin, Space } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import './index.css';
import { useLocation } from "react-router-dom";

import { Link , useParams} from "umi";

const form = createForm({
  validateFirst: true
});



const SchemaField = createSchemaField({
  components: {
    FormItem,
    FormGrid,
    FormLayout,
    Input,
    DatePicker,
    Cascader,
    Select,
    ArrayItems,
    Editable
  },
  scope: {
    
  }
});

const schema = {
  type: "object",
  properties: {
    
    gender: {
      type: "string",
      title: "性别",
      enum: [
        {
          label: "男",
          value: 1
        },
        {
          label: "女",
          value: 2
        },
        {
          label: "第三性别",
          value: 3
        }
      ],
      "x-decorator": "FormItem",
      "x-component": "Select"
    }
   
  }
};

const FormDemo = () => {
  const [loading, setLoading] = useState(true);
  const search = useLocation().search;
  const id = new URLSearchParams(search).get("id");
  // const {id} = useParams();
  
  useEffect(() => {
    console.log("id=", id);
    if (!id) {
      form.setInitialValues({
        gender: null,
      });
      form.reset();
    } else {
      let gender = null;
      if (id === "2") {
        gender = 2;
      } else if (id === "3") {
        gender = 3;
      } else if (id === "4") {
        gender = null;
      }
      form.setInitialValues({
        gender: gender,
      });

      form.reset();
      console.log('form set init, values', form.values);
    }
    setLoading(false);
  }, [id]);
  


  return (
    <div >
      <ul>
        <li><Link to="/">首页</Link></li>
          <li>
          <Link to="/form?id=1">Form 1</Link>
          </li>
          <li>
            <Link to="/form?id=2">Form 2</Link>
          </li>
          <li>
            <Link to="/form?id=3">Form 3</Link>
          </li>
          <li>
            <Link to="/form?id=4">Form 4</Link>
          </li>
        </ul>
        <Button onClick={()=>{form.reset(); console.log('form values', form.values);}}>Reset</Button>
        <Form
            form={form}
            labelCol={5}
            wrapperCol={16}
            onAutoSubmit={console.log}
          >
            <SchemaField schema={schema} />
            <FormButtonGroup.FormItem>
              <Submit block size="large">
                提交
              </Submit>
            </FormButtonGroup.FormItem>
          </Form>
        
    </div>
  );

};


export default FormDemo;