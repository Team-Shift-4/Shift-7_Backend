## 작업 방식
 
 1. repository에 todo-list 작성 및 이슈코드 정하기
 2. ISSUE_NUM에 맞춰 branch 생성
 3. 개발 완료 후 커밋 및 merge request

\# 1번관련 <br/>
  회사에서는 trello 같은 kanban board형식의 협업 툴에서 to-do list를 관리하는데, <br/>
  임시로 텍스트 파일로 작성;;

## Type List
 |Type| 사용시점|
 |-|-|
 |feat|신규 기능 개발
 |fix|오류 수정|
 |style| 코드 스타일 변경
 |refactor| refactor
 |test| test코드 추가 및 수정
 |remove| 파일 삭제
 |rename| 파일 이름 변경
 |perf| 성능개선
 |chore| 잡다한것들..

## todo-list 작성 방식
```
 TYPE
    ISSUE_NUM | NAME | Context
    ISSUE_NUM | NAME | Context
```

<br/>
예시 
<br/>
<br/>

```
feat
    0001 | 세진 | 깃허브 push 
    0002 | 정인 | 깃허브 인증

fix
    0001 | 준구 | Text editer save error fix
    0002 | 정원 | 깃허브 api response Exception 수정
 .
 .
 .
```

## Branch Strategy

```
TYPE/#ISSUE_NUM
```
ex 
```
feat/#0001
fix/#0010
```
<br/>
[devlopment] branch로 부터 new branch를 만들고 <br/>
작업 완료 후 [devlopment] branch에 merge request


## Commit Message Rule

커밋 메시지는 기본적으로 
```
[Type#ISSUE_NUM] : 작업내용
```

ex 
``` 
    [feat#0001] : Get List of Github File
    [fix#0003] : fix Githup api 404 response
    [feat#0007] : 깃허브 push
```


#

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
