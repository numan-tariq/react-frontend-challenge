import { Card, Row, Col } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { connect, useSelector } from "react-redux";
import { removeData } from "../store/actions/dataAction";

const { Meta } = Card;

const CollectionCard = (props) => {
  const { removeData } = props;
  const { appData } = useSelector((state) => state);

  return (
    <Row>
      {appData.urls &&
        appData.urls.map((url, index) => (
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
              actions={[<DeleteOutlined key="add" onClick={() => removeData(url)} />]}
            >
              <Meta title={props.value} />
            </Card>
          </Col>
        ))}
    </Row>
  );
};

export default connect(null, { removeData })(CollectionCard);
