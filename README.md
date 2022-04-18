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

## vite + module-fedration plugin 사용할 듯
