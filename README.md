# 📗&nbsp;&nbsp;원티드 프리온보딩 4번째 과제 - 메신저 구현

<br />

## 🖥&nbsp;&nbsp;배포 주소

👉 [배포링크 바로가기](https://react18-swit-messenger.netlify.app)

<br />

## 👩&nbsp;&nbsp;팀원소개 및 담당업무

|                                       이가윤                                       |                                       신혜리                                       |                                       한재성                                       |                                       이선재                                       |
| :---------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------: |
| <img src="https://avatars.githubusercontent.com/u/67543454?v=4" width=100 alt="_"/> | <img src="https://avatars.githubusercontent.com/u/72786354?v=4" width=100 alt="_"/> | <img src="https://avatars.githubusercontent.com/u/57760806?v=4" width=100 alt="_"/> | <img src="https://avatars.githubusercontent.com/u/63578094?v=4" width=100 alt="_"/> |
|                 상품리스트 페이지, 슬라이드바, 고객센터 페이지 구현                 |                            홈페이지, 브랜드 페이지 구현                            |                                          -                                          |                                상품 상세 페이지 구현                                |
|                          [Github](https://github.com/Gayun00)                          |                         [Github](https://github.com/rachel490)                         |                        [Github](https://github.com/Han-D-Peter)                        |                         [Github](https://github.com/Sunjae95)                         |

<br />

## 🎮&nbsp;&nbsp;사용한 기술 스택

- Typescript
- Styled-component
- Next.js

<br />

## 🎮&nbsp;&nbsp;구현 사항

- 홈 페이지
- 브랜드 페이지
- 상품 리스트
- 상품 상세
  - 옵션 리스팅
  - 옵션 선택 후 구매버튼 활성화
- 왼쪽 메뉴
  - 고객 센터 페이지

|                                                    유저네임 입력/ 대화창 메시지 표시                                                    |                                                            메시지 입력                                                            |
| :-------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------: |
| ![유저네임 입력](https://user-images.githubusercontent.com/67543454/153703690-4c7c17bd-6410-42bd-b57f-8bdfb765e7c0.gif) | ![메시지 입력2](https://user-images.githubusercontent.com/67543454/153703737-8c5e015a-2591-474b-8975-75316ef6cbe3.gif) |
|                                                               메시지 답장                                                               |                                                            메시지 삭제                                                            |
|          ![답장2](https://user-images.githubusercontent.com/67543454/153703769-6bd0a6ea-2d4b-4807-bca7-059bb8721fd7.gif)          |         ![삭제](https://user-images.githubusercontent.com/67543454/153703043-5ac94011-239c-46ed-879e-7f94c0afd2e1.gif)         |

<br />

## 🧗‍&nbsp;&nbsp;프로젝트 과정 소개

### 개별 업무 분담

#### 이선재

- 상품 상세페이지

  - '옵션 선택하기' 버튼 클릭 시 드롭다운 메뉴 노출
  - 리스팅된 옵션 선택시 구매하기 버튼 활성화
  - 선택한 옵션 표시
- 공통 컴포넌트: 단일 상품 컴포넌트

#### 신혜리

- 홈 페이지

  - 홈페이지 캐러셀 구현
  - 카테고리 영역 클릭시 브랜드 페이지로 이동
- 브랜드 페이지

  - 선택한 카테고리에 해당하는 브랜드 노출
  - 브랜드 페이지 내 카테고리 슬라이드 영역 구현
  - 오늘의 땡처리콘 영역 구현

#### 이가윤

- 상품 목록페이지
  - 선택한 브랜드의 상품 목록 노출
- 고객 센터 페이지
  - 항목별 자주 묻는 질문 리스트 표시
  - 아코디언 형 FAQ 목록 구현
- 좌측 사이드바(마이페이지)
  - 메뉴 햄버거 버튼 클릭 시 노출
- 공통 컴포넌트: 헤더
  - 페이지 뒤로가기 기능 구현

<br />

### 협업 툴

- Notion: 칸반보드, 회의록
- Slack: 기본 메신저
- Discord, Vsc Liveshare: 실시간 페어프로그래밍 / 코드 리뷰

|                                                                                 회의록, 결정 사항 문서화                                                                                 |                                                                        개별 칸반보드로 진행상황 공유                                                                        |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| `<img width="574" alt="스크린샷 2022-02-12 오후 12 28 30" src="https://user-images.githubusercontent.com/67543454/153687915-9e6bf271-4e58-4e07-82b7-9a1d68e1bd3f.png">` | `<img width="500" alt="Screen Shot 2022-02-13 at 1 03 31 AM" src="https://user-images.githubusercontent.com/72786354/153718645-ecaba95a-fc5d-4706-b701-05679429637d.png">` |

<br />

### Git 커밋 컨벤션

> Option: 내용(상세 내용)

- Feat - 새로운 기능 추가
- Fix - 버그 수정
- Docs - 제품 코드 수정 없음
- Style - 코드 형식, 정렬, 주석 등의 변경
- Refactor - 코드 리팩토링
- Test - 테스트 코드 추가
- Chore - 환경설정, 빌드 업무, 패키지 매니저 설정등..

<br />

### Rebase를 사용한 커밋내역 관리

- 한 브랜치에서 PR 제출 시 커밋 내역은 한 개로 관리
- 한 개의 커밋 메시지는 작업 내용을 포괄하도록 작성`<img width="574" alt="스크린샷 2022-02-12 오후 12 28 30" src="https://user-images.githubusercontent.com/67543454/153695025-9902f44a-c657-4d57-b2bc-ceae70b09033.png">`

션 `<br />`

## 📘 기타 사항

### 디렉토리 구조

```jsx

├── App.tsx
├── components
│   ├── ChatList
│   │   ├── ChatBubble
│   │   │   ├── index.tsx
│   │   │   └── styled.ts
│   │   ├── ChatBubbleContent
│   │   ├── ChatReplyBubble   
│   │   ├── index.tsx
│   │   └── styled.ts
│   ├── ChatRoom
│   ├── InputMessage 
│   ├── InputName  
│   ├── RemoveMessageModal
│   └── shared
│       ├── Modal
│       ├── ModalPortal
│       └── index.tsx
├── index.tsx
├── react-app-env.d.ts
├── store
│   ├── messenger.ts
│   ├── store.ts
│   └── types.ts
├── styles
│   ├── defaultTheme.ts
│   ├── globalStyle.ts
│   └── styled.d.ts
└── utils
    ├── constants.ts
    ├── mockData.ts
    └── utils.ts
```

<br />


`<br />`

## ⚙&nbsp;&nbsp;프로젝트 설치 및 시작

### 프로젝트 클론

> $ git clone []()

### 패키지 설치

> $ npm install

### 서버 실행

> $ npm start
