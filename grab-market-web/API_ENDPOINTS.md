# AIDE Market API 엔드포인트 문서

> 프론트엔드 개발자를 위한 API 엔드포인트 가이드

**Base URL**: `http://localhost:8081`

---

## 📦 1. 상품 관련 (Products)

### 1.1 전체 상품 목록 (페이지네이션 + 필터)
```http
GET /api/products
```

**Query Parameters:**
- `page` (optional): 페이지 번호 (기본값: 1)
- `limit` (optional): 페이지당 항목 수 (기본값: 10)
- `category` (optional): 카테고리 ID로 필터링
- `sort` (optional): 정렬 옵션
  - `createdAt` (기본값): 최신순
  - `price`: 가격 낮은순
  - `priceDesc`: 가격 높은순
  - `name`: 이름순
- `search` (optional): 검색어 (상품명, 설명에서 검색)

**예시:**
```javascript
// 기본 목록
GET /api/products

// 페이지네이션
GET /api/products?page=2&limit=20

// 카테고리 필터 + 검색
GET /api/products?category=1&search=노트북&sort=price

// 가격순 정렬
GET /api/products?sort=price&limit=5
```

**응답:**
```json
{
  "products": [
    {
      "id": 1,
      "name": "상품명",
      "price": 50000,
      "seller": "판매자",
      "imageUrl": "uploads/image.jpg",
      "soldout": 0,
      "createdAt": "2024-11-16T16:47:59.000Z",
      "category": {
        "id": 1,
        "name": "카테고리명"
      }
    }
  ],
  "pagination": {
    "total": 100,
    "page": 1,
    "limit": 10,
    "totalPages": 10
  }
}
```

---

### 1.2 상품 상세 정보
```http
GET /api/products/:id
```

**Path Parameters:**
- `id`: 상품 ID

**예시:**
```javascript
GET /api/products/1
```

**응답:**
```json
{
  "product": {
    "id": 1,
    "name": "상품명",
    "price": 50000,
    "seller": "판매자",
    "description": "상품 설명",
    "imageUrl": "uploads/image.jpg",
    "soldout": 0,
    "createdAt": "2024-11-16T16:47:59.000Z",
    "updatedAt": "2024-11-16T16:47:59.000Z",
    "category": {
      "id": 1,
      "name": "카테고리명",
      "description": "카테고리 설명"
    },
    "tags": [
      {
        "id": 1,
        "name": "태그명",
        "description": "태그 설명"
      }
    ]
  }
}
```

---

### 1.3 카테고리별 상품 목록
```http
GET /api/products/category/:categoryId
```

**Path Parameters:**
- `categoryId`: 카테고리 ID

**Query Parameters:**
- `subcategory` (optional): 서브카테고리 ID
- `page` (optional): 페이지 번호
- `limit` (optional): 페이지당 항목 수

**예시:**
```javascript
GET /api/products/category/1?page=1&limit=10
GET /api/products/category/1?subcategory=2
```

**응답:**
```json
{
  "products": [...],
  "pagination": {
    "total": 50,
    "page": 1,
    "limit": 10,
    "totalPages": 5
  }
}
```

---

### 1.4 태그별 상품 목록
```http
GET /api/products/by-tag/:tagId
```

**Path Parameters:**
- `tagId`: 태그 ID

**Query Parameters:**
- `page` (optional): 페이지 번호
- `limit` (optional): 페이지당 항목 수

**예시:**
```javascript
GET /api/products/by-tag/1?page=1&limit=10
```

**응답:**
```json
{
  "products": [...],
  "pagination": {
    "total": 30,
    "page": 1,
    "limit": 10,
    "totalPages": 3
  }
}
```

---

### 1.5 상품 생성
```http
POST /api/products
```

**Request Body:**
```json
{
  "name": "상품명",
  "description": "상품 설명",
  "price": 50000,
  "seller": "판매자명",
  "imageUrl": "uploads/image.jpg",
  "categoryId": 1
}
```

**응답:**
```json
{
  "result": {
    "id": 3,
    "name": "상품명",
    "price": 50000,
    ...
  }
}
```

---

### 1.6 상품 구매
```http
POST /api/products/purchase/:id
```

**Path Parameters:**
- `id`: 상품 ID

**응답:**
```json
{
  "result": true
}
```

---

## 📁 2. 카테고리 관련 (Categories)

### 2.1 전체 카테고리 목록
```http
GET /api/categories
```

**응답:**
```json
{
  "categories": [
    {
      "id": 1,
      "name": "카테고리명",
      "description": "카테고리 설명",
      "parentId": null,
      "productCount": 15
    },
    {
      "id": 2,
      "name": "서브카테고리",
      "description": "서브카테고리 설명",
      "parentId": 1,
      "productCount": 5
    }
  ]
}
```

---

### 2.2 서브카테고리 목록
```http
GET /api/categories/:id/subcategories
```

**Path Parameters:**
- `id`: 부모 카테고리 ID

**응답:**
```json
{
  "subcategories": [
    {
      "id": 2,
      "name": "서브카테고리명",
      "description": "설명",
      "parentId": 1,
      "productCount": 5
    }
  ]
}
```

---

### 2.3 카테고리 생성
```http
POST /api/categories
```

**Request Body:**
```json
{
  "name": "카테고리명",
  "description": "카테고리 설명",
  "parentId": null
}
```

**응답:**
```json
{
  "category": {
    "id": 3,
    "name": "카테고리명",
    ...
  }
}
```

---

## 🏷️ 3. 태그 관련 (Tags)

### 3.1 전체 태그 목록
```http
GET /api/tags
```

**응답:**
```json
{
  "tags": [
    {
      "id": 1,
      "name": "태그명",
      "description": "태그 설명",
      "productCount": 10
    }
  ]
}
```

---

### 3.2 태그 생성
```http
POST /api/tags
```

**Request Body:**
```json
{
  "name": "태그명",
  "description": "태그 설명"
}
```

**응답:**
```json
{
  "tag": {
    "id": 2,
    "name": "태그명",
    ...
  }
}
```

---

## 🏆 4. 랭킹 관련 (Rankings)

### 4.1 월간 TOP 5 랭킹
```http
GET /api/rankings/monthly
```

**Query Parameters:**
- `year` (optional): 연도 (기본값: 현재 연도)
- `month` (optional): 월 (기본값: 현재 월)

**예시:**
```javascript
GET /api/rankings/monthly?year=2024&month=11
GET /api/rankings/monthly  // 현재 월
```

**응답:**
```json
{
  "rankings": [
    {
      "rank": 1,
      "product": {
        "id": 1,
        "name": "상품명",
        "price": 50000,
        "seller": "판매자",
        "imageUrl": "uploads/image.jpg"
      }
    },
    {
      "rank": 2,
      "product": {...}
    }
  ]
}
```

---

## 📊 5. 통계 관련 (Stats)

### 5.1 마켓플레이스 전체 통계
```http
GET /api/stats/overview
```

**응답:**
```json
{
  "stats": {
    "totalProducts": 100,
    "totalCategories": 10,
    "totalTags": 20,
    "totalBanners": 5,
    "soldOutProducts": 15,
    "availableProducts": 85,
    "averagePrice": 45000
  }
}
```

---

## 🖼️ 6. 배너 관련 (Banners)

### 6.1 배너 목록
```http
GET /banners
```

**응답:**
```json
{
  "banners": [
    {
      "id": 1,
      "imageUrl": "uploads/banners/banner1.png",
      "link": "/products/1",
      "createdAt": "2024-11-16T16:40:16.000Z"
    }
  ]
}
```

---

### 6.2 배너 생성
```http
POST /banners
```

**Request Body:**
```json
{
  "imageUrl": "uploads/banners/banner1.png",
  "link": "/products/1"
}
```

---

## 🛒 7. 구매 관련 (Purchase)

### 7.1 구매 처리
```http
POST /purchase/:id
```

**Path Parameters:**
- `id`: 상품 ID

---

## 📤 8. 이미지 업로드 (Image)

### 8.1 이미지 업로드
```http
POST /image
```

**Request:**
- Content-Type: `multipart/form-data`
- Field: `image` (파일)

**응답:**
```json
{
  "imageUrl": "uploads/1763279242452.jpeg"
}
```

---

## 🔄 기존 엔드포인트 (하위 호환성)

다음 엔드포인트도 계속 사용 가능합니다:

- `GET /products` → `GET /api/products`와 동일
- `POST /products` → `POST /api/products`와 동일
- `GET /products/:id` → `GET /api/products/:id`와 동일
- `POST /products/purchase/:id` → `POST /api/products/purchase/:id`와 동일

---

## 📝 사용 예시 (JavaScript/React)

### Axios를 사용한 예시

```javascript
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8081';

// 상품 목록 조회
const getProducts = async (page = 1, limit = 10, filters = {}) => {
  const params = new URLSearchParams({
    page,
    limit,
    ...filters
  });
  
  const response = await axios.get(`${API_BASE_URL}/api/products?${params}`);
  return response.data;
};

// 상품 상세 조회
const getProductById = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/api/products/${id}`);
  return response.data.product;
};

// 카테고리 목록 조회
const getCategories = async () => {
  const response = await axios.get(`${API_BASE_URL}/api/categories`);
  return response.data.categories;
};

// 태그 목록 조회
const getTags = async () => {
  const response = await axios.get(`${API_BASE_URL}/api/tags`);
  return response.data.tags;
};

// 랭킹 조회
const getMonthlyRankings = async (year, month) => {
  const response = await axios.get(`${API_BASE_URL}/api/rankings/monthly`, {
    params: { year, month }
  });
  return response.data.rankings;
};

// 통계 조회
const getStats = async () => {
  const response = await axios.get(`${API_BASE_URL}/api/stats/overview`);
  return response.data.stats;
};

// 카테고리별 상품 조회
const getProductsByCategory = async (categoryId, page = 1) => {
  const response = await axios.get(
    `${API_BASE_URL}/api/products/category/${categoryId}`,
    { params: { page, limit: 10 } }
  );
  return response.data;
};

// 태그별 상품 조회
const getProductsByTag = async (tagId, page = 1) => {
  const response = await axios.get(
    `${API_BASE_URL}/api/products/by-tag/${tagId}`,
    { params: { page, limit: 10 } }
  );
  return response.data;
};
```

---

## ⚠️ 에러 응답 형식

모든 에러는 다음 형식으로 반환됩니다:

```json
{
  "error": "에러 메시지"
}
```

**HTTP 상태 코드:**
- `200`: 성공
- `400`: 잘못된 요청
- `404`: 리소스를 찾을 수 없음
- `500`: 서버 오류

---

## 📌 참고사항

1. 모든 날짜는 ISO 8601 형식 (UTC)으로 반환됩니다.
2. 페이지네이션은 1부터 시작합니다.
3. `soldout` 필드는 `0` (판매중) 또는 `1` (품절)입니다.
4. 이미지 업로드는 `multipart/form-data` 형식을 사용합니다.
5. 모든 새 API는 `/api` 접두사를 사용합니다.

