import React from 'react';
import styles from './index.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import Form from "./form";
import './index.css';
import 'antd/dist/antd.css';
import { Card, Button, Spin, Space } from "antd";

export default function() {
  const search = useLocation().search;
  const id = new URLSearchParams(search).get("id");
  // const {id} = useParams();
  
  return (
    <div className={styles.normal}>
      <ul>
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
    </div>
  );
}
