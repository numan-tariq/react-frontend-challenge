import { useSelector } from "react-redux";
import { Card, Row, Col } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { removeData } from "../../store/actions/dataAction";

const { Meta } = Card;

const CollectionCard = (props) => {
  const { removeData } = props;
  const { appData } = useSelector((state) => state);

  return (
    <Row>
      {appData.urls &&
        JSON.parse(localStorage.getItem("BreedCollection")).map(
          (url, index) => (
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
                  <DeleteOutlined
                    key="add"
                    onClick={() => {
                      removeData(url);
                      localStorage.setItem(
                        "BreedCollection",
                        JSON.stringify(
                          JSON.parse(
                            localStorage.getItem("BreedCollection")
                          ).filter((url2) => url != url2)
                        )
                      );
                    }}
                  />,
                ]}
              >
                <Meta title={props.value} />
              </Card>
            </Col>
          )
        )}
    </Row>
  );
};

export default connect(null, { removeData })(CollectionCard);
