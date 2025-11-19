# AIDE Market API 엔드포인트 문서

> 프론트엔드 개발자를 위한 API 엔드포인트 가이드

**Base URL**: `http://localhost:8081`

> 💡 **프론트엔드 개발 참고**: Base URL은 환경 변수로 관리하는 것을 권장합니다.
> ```javascript
> const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8081';
> ```

---

## 📦 1. 상품 관련 (Products)

### 1.1 전체 상품 목록 (페이지네이션 + 필터)
```http
GET /api/products
```

**Query Parameters:**
- `page` (optional): 페이지 번호 (기본값: 1)
- `limit` (optional): 페이지당 항목 수 (기본값: 20)
- `category` (optional): 카테고리 ID로 필터링
- `sort` (optional): 정렬 옵션
  - `download` (기본값): 다운로드순
  - `rating`: 평점순
  - `price`: 가격 낮은순
  - `priceDesc`: 가격 높은순
- `search` (optional): 검색어 (상품명, 설명에서 검색)

**예시:**
```javascript
// 기본 목록 (다운로드순)
GET /api/products

// 페이지네이션
GET /api/products?page=2&limit=20

// 카테고리 필터 + 검색
GET /api/products?category=1&search=React&sort=rating

// 평점순 정렬
GET /api/products?sort=rating&limit=10
```

**응답:**
```json
{
  "products": [
    {
      "id": 3,
      "name": "CodePix",
      "price": 15000,
      "seller": "佐藤健太",
      "description": "バニラJavaScript開発の専門家...",
      "imageUrl": "uploads/ai/codepix.png",
      "soldout": 0,
      "category_id": 1,
      "sub_category_id": 1,
      "download_count": 1250,
      "view_count": 3400,
      "rating_average": "4.80",
      "rating_count": 85,
      "category_name": "フロントエンド",
      "subcategory_name": "JavaScript",
      "createdAt": "2025-11-18T20:50:57.000Z"
    }
  ],
  "pagination": {
    "total": 70,
    "page": 1,
    "limit": 20,
    "totalPages": 4
  }
}
```

---

### 1.2 상품 상세 정보 (AI 통계 + 태그 + 시너지 포함)
```http
GET /api/products/:id
```

**Path Parameters:**
- `id`: 상품 ID

**예시:**
```javascript
GET /api/products/3
```

**응답:**
```json
{
  "product": {
    "id": 3,
    "name": "CodePix",
    "price": 15000,
    "seller": "佐藤健太",
    "description": "バニラJavaScript開発の専門家...",
    "imageUrl": "uploads/ai/codepix.png",
    "soldout": 0,
    "category_id": 1,
    "sub_category_id": 1,
    "download_count": 1250,
    "view_count": 3400,
    "rating_average": "4.80",
    "rating_count": 85,
    "category_name": "フロントエンド",
    "subcategory_name": "JavaScript",
    "tech_stack": "JavaScript",
    "createdAt": "2025-11-18T20:50:57.000Z",
    "updatedAt": "2025-11-18T20:50:57.000Z"
  },
  "stats": {
    "id": 1,
    "product_id": 3,
    "teamwork": 79,
    "stability": 82,
    "speed": 73,
    "creativity": 70,
    "productivity": 81,
    "maintainability": 97
  },
  "tags": [
    {
      "id": 1,
      "name": "JavaScript",
      "created_at": "2025-11-18T11:37:59.000Z"
    }
  ],
  "synergies": [
    {
      "id": 4,
      "name": "T-Guard",
      "price": 22000,
      "seller": "田中美咲",
      "imageUrl": "uploads/ai/tguard.png",
      "rating_average": "4.90",
      "rating_count": 98,
      "synergy_score": 85,
      "synergy_description": "フロントエンド開発で相性抜群"
    }
  ]
}
```

---

### 1.3 AI 통계 조회 (육각형 차트용)
```http
GET /api/products/:id/stats
```

**Path Parameters:**
- `id`: 상품 ID

**예시:**
```javascript
GET /api/products/3/stats
```

**응답:**
```json
{
  "stats": {
    "id": 1,
    "product_id": 3,
    "teamwork": 79,
    "stability": 82,
    "speed": 73,
    "creativity": 70,
    "productivity": 81,
    "maintainability": 97,
    "created_at": "2025-11-18T11:54:57.000Z"
  }
}
```

---

### 1.4 추천 AI 조회 (시너지)
```http
GET /api/products/:id/synergies
```

**Path Parameters:**
- `id`: 상품 ID

**Query Parameters:**
- `limit` (optional): 최대 개수 (기본값: 5)

**예시:**
```javascript
GET /api/products/3/synergies?limit=5
```

**응답:**
```json
{
  "synergies": [
    {
      "id": 4,
      "name": "T-Guard",
      "price": 22000,
      "seller": "田中美咲",
      "description": "TypeScript型安全開発の専門家...",
      "imageUrl": "uploads/ai/tguard.png",
      "download_count": 1450,
      "view_count": 3800,
      "rating_average": "4.90",
      "rating_count": 98,
      "synergy_score": 85,
      "synergy_description": "フロントエンド開発で相性抜群"
    }
  ]
}
```

---

### 1.5 카테고리별 대표 상품 조회 (메인 페이지용)
```http
GET /api/products/featured/category/:categoryId
```

**Path Parameters:**
- `categoryId`: 카테고리 ID

**Query Parameters:**
- `limit` (optional): 반환할 상품 개수 (기본값: 4)

**예시:**
```javascript
// 기본: 4개 상품
GET /api/products/featured/category/1

// 6개 상품
GET /api/products/featured/category/1?limit=6
```

**응답:**
```json
{
  "products": [
    {
      "id": 3,
      "name": "CodePix",
      "price": 15000,
      "seller": "佐藤健太",
      "imageUrl": "uploads/ai/codepix.png",
      "soldout": 0,
      "download_count": 1250,
      "view_count": 3400,
      "rating_average": "4.80",
      "rating_count": 85,
      "category_name": "フロントエンド",
      "subcategory_name": "JavaScript"
    }
  ]
}
```

> 💡 **프론트엔드 개발 참고**: 특정 카테고리의 대표 상품만 필요할 때 이 엔드포인트를 사용하면 됩니다. 다운로드 수와 평점이 높은 순으로 정렬됩니다.

---

### 1.6 카테고리별 상품 목록
```http
GET /api/products/category/:categoryId
```

**Path Parameters:**
- `categoryId`: 카테고리 ID

**Query Parameters:**
- `subcategory` (optional): 서브카테고리 ID
- `page` (optional): 페이지 번호 (기본값: 1)
- `limit` (optional): 페이지당 항목 수 (기본값: 20)
- `sort` (optional): 정렬 옵션

**예시:**
```javascript
GET /api/products/category/1?page=1&limit=10&sort=download
GET /api/products/category/1?subcategory=2
```

**응답:**
```json
{
  "products": [
    {
      "id": 3,
      "name": "CodePix",
      "subcategory_name": "JavaScript",
      ...
    }
  ],
  "pagination": {
    "total": 10,
    "page": 1,
    "limit": 10,
    "totalPages": 1
  }
}
```

---

### 1.7 태그별 상품 목록
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

### 1.8 상품 생성
```http
POST /api/products
```

**Request Body:**
```json
{
  "name": "NewAI",
  "description": "AI説明",
  "price": 50000,
  "seller": "販売者名",
  "imageUrl": "uploads/ai/newai.png",
  "category_id": 1,
  "sub_category_id": 1
}
```

**응답:**
```json
{
  "result": {
    "id": 73,
    "name": "NewAI",
    "price": 50000,
    ...
  }
}
```

---

### 1.9 상품 구매
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
      "name": "frontend",
      "name_ja": "フロントエンド",
      "description": "ユーザーインターフェース開発AI",
      "product_count": 10,
      "created_at": "2025-11-18T11:37:59.000Z"
    }
  ]
}
```

---

### 2.2 메인 페이지용: 카테고리 목록과 각 카테고리의 대표 상품
```http
GET /api/categories/with-products
```

**Query Parameters:**
- `productsLimit` (optional): 각 카테고리별 대표 상품 개수 (기본값: 4)

**예시:**
```javascript
// 기본: 각 카테고리당 4개 상품
GET /api/categories/with-products

// 각 카테고리당 6개 상품
GET /api/categories/with-products?productsLimit=6
```

**응답:**
```json
{
  "categories": [
    {
      "id": 1,
      "name": "frontend",
      "name_ja": "フロントエンド",
      "description": "ユーザーインターフェース開発AI",
      "product_count": 10,
      "created_at": "2025-11-18T11:37:59.000Z",
      "featured_products": [
        {
          "id": 3,
          "name": "CodePix",
          "price": 15000,
          "seller": "佐藤健太",
          "imageUrl": "uploads/ai/codepix.png",
          "soldout": 0,
          "download_count": 1250,
          "view_count": 3400,
          "rating_average": "4.80",
          "rating_count": 85,
          "category_name": "フロントエンド",
          "subcategory_name": "JavaScript"
        }
      ]
    }
  ]
}
```

> 💡 **프론트엔드 개발 참고**: 메인 페이지의 카테고리 표에 각 카테고리의 대표 상품을 표시할 때 이 엔드포인트를 사용하면 됩니다.

---

### 2.3 서브카테고리 목록
```http
GET /api/categories/:id/subcategories
```

**Path Parameters:**
- `id`: 카테고리 ID

**응답:**
```json
{
  "subcategories": [
    {
      "id": 1,
      "category_id": 1,
      "name": "JavaScript",
      "tech_stack": "JavaScript",
      "product_count": 1,
      "created_at": "2025-11-18T11:37:59.000Z"
    }
  ]
}
```

---

### 2.4 카테고리 생성
```http
POST /api/categories
```

**Request Body:**
```json
{
  "name": "new_category",
  "name_ja": "新カテゴリ",
  "description": "説明"
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
      "name": "JavaScript",
      "product_count": 1,
      "created_at": "2025-11-18T11:37:59.000Z"
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
  "name": "新タグ"
}
```

---

## 🏆 4. 랭킹 관련 (Rankings)

### 4.1 월간 TOP 5 랭킹
```http
GET /api/rankings/monthly
```

**Query Parameters:**
- `year` (optional): 연도 (기본값: 2025)
- `month` (optional): 월 (기본값: 11)

**예시:**
```javascript
GET /api/rankings/monthly?year=2025&month=11
GET /api/rankings/monthly  // 기본값: 2025년 11월
```

**응답:**
```json
{
  "rankings": [
    {
      "id": 23,
      "name": "Artelia",
      "price": 30000,
      "seller": "橋本光",
      "imageUrl": "uploads/ai/artelia.png",
      "rank_position": 1,
      "score": "1355.00",
      "category_name": "イメージ生成",
      "download_count": 1850,
      "rating_average": "4.90",
      "rating_count": 125
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
    "totalProducts": 70,
    "totalCategories": 7,
    "totalSubCategories": 70,
    "totalTags": 70,
    "totalDownloads": 87850,
    "totalViews": 226300,
    "averageRating": 4.75,
    "totalAIStats": 70,
    "totalSynergies": 101,
    "topCategory": {
      "id": 1,
      "name": "フロントエンド",
      "product_count": 10
    }
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
      "href": "/products/1",
      "createdAt": "2025-11-16T07:40:16.000Z",
      "updatedAt": "2025-11-16T07:40:16.000Z"
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
  "href": "/products/1"
}
```

---

## 📤 7. 이미지 업로드 (Image)

### 7.1 이미지 업로드
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

## 📝 사용 예시 (JavaScript/React)

### API 설정 파일

```javascript
// src/config/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8081';

export const marketplaceAPI = {
  // 상품 관련
  getProducts: (params) => 
    axios.get(`${API_BASE_URL}/api/products`, { params }),
  
  getProductDetail: (id) => 
    axios.get(`${API_BASE_URL}/api/products/${id}`),
  
  getProductStats: (id) =>
    axios.get(`${API_BASE_URL}/api/products/${id}/stats`),
  
  getProductSynergies: (id, limit = 5) =>
    axios.get(`${API_BASE_URL}/api/products/${id}/synergies`, { 
      params: { limit } 
    }),
  
  getProductsByCategory: (categoryId, params) =>
    axios.get(`${API_BASE_URL}/api/products/category/${categoryId}`, { params }),
  
  getProductsByTag: (tagId, params) =>
    axios.get(`${API_BASE_URL}/api/products/by-tag/${tagId}`, { params }),
  
  // 카테고리 관련
  getCategories: () => 
    axios.get(`${API_BASE_URL}/api/categories`),
  
  getCategoriesWithProducts: (productsLimit = 4) =>
    axios.get(`${API_BASE_URL}/api/categories/with-products`, {
      params: { productsLimit }
    }),
  
  getSubcategories: (categoryId) =>
    axios.get(`${API_BASE_URL}/api/categories/${categoryId}/subcategories`),
  
  // 카테고리별 대표 상품
  getFeaturedProductsByCategory: (categoryId, limit = 4) =>
    axios.get(`${API_BASE_URL}/api/products/featured/category/${categoryId}`, {
      params: { limit }
    }),
  
  // 랭킹 관련
  getMonthlyRankings: (year = 2025, month = 11) =>
    axios.get(`${API_BASE_URL}/api/rankings/monthly`, { 
      params: { year, month } 
    }),
  
  // 통계 관련
  getStats: () =>
    axios.get(`${API_BASE_URL}/api/stats/overview`),
  
  // 태그 관련
  getTags: () => 
    axios.get(`${API_BASE_URL}/api/tags`),
  
  // 배너 관련
  getBanners: () =>
    axios.get(`${API_BASE_URL}/banners`)
};
```

### React 컴포넌트 사용 예시

```javascript
import { useState, useEffect } from 'react';
import { marketplaceAPI } from '../config/api';

const MarketplacePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await marketplaceAPI.getProducts({
          page: 1,
          limit: 20,
          sort: 'download'
        });
        setProducts(response.data.products);
      } catch (error) {
        console.error('상품 로드 실패:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchProducts();
  }, []);

  // ...
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
6. AI 통계 데이터는 50~100 사이의 값을 가집니다.
7. 시너지 점수는 80~95 사이의 값을 가집니다.
8. 기본 정렬은 다운로드순(`download`)입니다.

---

## 🔄 하위 호환성

다음 기존 엔드포인트도 계속 사용 가능합니다:

- `GET /products` → `GET /api/products`와 동일
- `POST /products` → `POST /api/products`와 동일
- `GET /products/:id` → `GET /api/products/:id`와 동일
- `POST /products/purchase/:id` → `POST /api/products/purchase/:id`와 동일