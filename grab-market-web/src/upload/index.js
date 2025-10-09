import { Divider, Form, Input, InputNumber, Button } from "antd";
import "./index.css";
import FormItem from "antd/es/form/FormItem";

function UploadPage() {
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <div id="upload-container">
      <Form name="商品アップロード" onFinish={onFinish}>
        <Form.Item
          name="upload"
          label={<div className="upload-label">商品写真</div>}
        >
          <div id="upload-img-placeholder">
            <img src="/images/icons/camera.png" />
            <span>イメージをアップロードしてください。</span>
          </div>
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
            問題を登録する
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default UploadPage;
