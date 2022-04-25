# 모노레포 + 마이크로 프론트엔드 할 예정

## lerna의 역할
전제척인 모노레포 관리

lerna create 패키지

lerna add 설치할 로컬패키지 --scope=설치될 로컬패키지

lerna run 스크립트

## yarn workspace의 역할
각 패키지의 의존성관리

yarn add package_name -W -> 루트 패키지 설치

yarn workspace package_name add package -> 특정 패키지에 설치

## Router
## UI
## WebSocket

## vite + module-fedration plugin 사용할 듯
`module-federation` 같은 경우 웹팩이 선두주자인거 같은데 그냥 웹팩 쓸까....

아니 vite 플러그인은 `shared` 옵션 몇개는 지원 안하는 듯?? eager 옵션에 대한 코드가 없네....

## Trouble shooting
1. 호스트 컨테이너 빌드시에 `shared`의 `react` 라이브러리 경로를 잘못 찾아감

플러그인 내부를 까보니 호스트이고 버전 명시를 따로 안 해줄 경우 바로 위의 `node_modules`의 `package.json`을 찾아보고 없으면 에러냄

모노레포 구성이라서 `react`는 root의 `node_modules`에 있음. `version` 명시해주니까 잘 찾아가긴 함