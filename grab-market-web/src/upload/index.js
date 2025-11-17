import {
  Divider,
  Form,
  Input,
  InputNumber,
  Button,
  Upload,
  message,
} from "antd";
import "./index.css";
import FormItem from "antd/es/form/FormItem";
import { useState } from "react";
import { API_URL } from "../config/constants";
import axios from "axios";
import { useHistory } from "react-router-dom";

function UploadPage() {
  const [imageUrl, setImageUrl] = useState(null);
  //↓ ReactHookではuseHistoryを使ってページ遷移を行う
  const history = useHistory();
  const onFinish = (values) => {
    axios
      .post(`${API_URL}/products`, {
        name: values.name,
        description: values.description,
        seller: values.seller,
        price: parseInt(values.price),
        imageUrl: imageUrl,
      })
      .then((result) => {
        console.log(result);
        //↓ 상품 등록이 성공했을 때 메인페이지로 이동
        history.replace("/");
      })
      .catch((error) => {
        console.error(error);
        message.error(`エラーが発生しました。${error.message}`);
      });
  };
  const onChangeImage = (info) => {
    if (info.file.status === "uploading") {
      return;
    }
    if (info.file.status === "done") {
      const response = info.file.response;
      const imageUrl = response.imageUrl;
      setImageUrl(imageUrl);
    }
  };
  return (
    <div id="upload-container">
      <Form name="商品アップロード" onFinish={onFinish}>
        <Form.Item
          name="upload"
          label={<div className="upload-label">商品写真</div>}
        >
          <Upload
            name="image"
            action={`${API_URL}/image`}
            listType="picture"
            showUploadList={false}
            onChange={onChangeImage}
          >
            {imageUrl ? (
              <img id="upload-img" src={`${API_URL}/${imageUrl}`} alt="Uploaded image" />
            ) : (
              <div id="upload-img-placeholder">
                <img src="/images/icons/camera.png" alt="Camera icon" />
                <span>イメージをアップロードしてください。</span>
              </div>
            )}
          </Upload>
        </Form.Item>
        <Divider />
        <Form.Item
          label={<div className="upload-label">販売者名</div>}
          name="seller"
          rules={[{ required: true, message: "販売者名を入力してください。" }]}
        >
          <Input
            className="upload-name"
            size="large"
            placeholder="名前を入力してください。"
          />
        </Form.Item>
        <Divider />
        <Form.Item
          name="name"
          label={<div className="upload-label">商品名</div>}
          rules={[{ required: true, message: "商品名を入力してください。" }]}
        >
          <Input
            className="upload-name"
            size="large"
            placeholder="商品名を入力してください。"
          />
        </Form.Item>
        <Divider />
        <FormItem
          name="price"
          label={<div className="upload-label">商品価格</div>}
          rules={[{ required: true, message: "商品価格を入力してください。" }]}
        >
          <InputNumber defaultValue={0} className="upload-price" size="large" />
        </FormItem>
        <Divider />
        <Form.Item
          name="description"
          label={<div className="upload-label">商品紹介</div>}
          rules={[{ required: true, message: "商品紹介を入力してください。" }]}
        >
          <Input.TextArea
            size="large"
            id="product-description"
            showCount
            maxLength={300}
            placeholder="商品紹介を入力してください。"
          />
        </Form.Item>
        <Form.Item>
          <Button id="submit-button" size="large" htmlType="submit">
            商品登録
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default UploadPage;
