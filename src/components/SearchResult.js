import React from "react";
import { Card, Row, Col } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { connect, useSelector } from "react-redux";
import { addData } from "../store/actions/dataAction";

const { Meta } = Card;

const SearchResult = (props) => {

  const { addData } = props;
  const { appData } = useSelector((state) => state);

  console.log(appData.urls);

  const urlData = props.imageURL;

  return (
    <Row>
      {urlData &&
        urlData.map((url, index) => (
          <Col xs={6} sm={6} md={6} lg={6} xl={6}>
            <Card
              key={index}
              style={{ width: 300, margin: 30 }}
              cover={
                <img
                  alt="example"
                  src={url}
                  style={{ height: 250, width: 300 }}
                />
              }
              actions={[
                <PlusOutlined
                  key="add"
                  onClick={() => {
                    addData(url);
                  }}
                />,
              ]}
            >
              <Meta title={props.value} />
            </Card>
          </Col>
        ))}
    </Row>
  );
};

export default connect(null, { addData })(SearchResult);
