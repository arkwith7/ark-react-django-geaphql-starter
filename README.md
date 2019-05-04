# 아크위드 React, Python Django-Graphene Starter Template

React, Django, GraphQL(Graphene) 및 Ant Design을 사용한 Fullstact개발을 위한 간단한 템플리트입니다. 백엔드는 GraphQL API로 연결되고, 프런트엔드는 사용자 인터페이스를 React와 Ant Design을 이용해서 구현하였습니다.

## 설치환경 및 실행방법

### 설치환경
리눅스 우분투16.04에서 Python 3.5, Node v10.15.3, npm 6.4.1, yarn v1.15.2, git 2.7.4에서 테스트 되었습니다. 

### 설치방법
먼저 자신의 개발 환경이 위 설치 환경과 호환이 가능한 경우, github에서 소스를 아래와 같이 내려 받는다
```
$ git clone https://github.com/arkwith7/ark-react-django-geaphql-starter.git
```
#### 백엔드 설치방법
그런다음 내려받은 소스 디렉토리로 이동하여 Python 가상환경을 virtualenv를 이용하여 만들고 가상환경에서 어플리케이션 실행을 위한 패키지를 설치하고 실행한다.
```
$ cd ark-react-django-geaphql-starter/ 
$ cd backend/
```
virtualenv가 설치되어 있지 않을 경우, 다음과 같이 설치,
```
$ pip install virtualenv 
```
Python 가상환경을 만들고 실행하여 거기다 필요한 패키지를 설치한다.
```
$ virtualenv  env --python=python3.5
$ source env/bin/activate
(env) $ pip install -r requirements.txt
```
백엔드 Python Django, GraphQL(Graphene)이 API서버로 구성되기 위해 데이타베이스 생성 및 슈퍼관리자를 생성한다
```
(env) $  python manage.py makemigrations
(env) $  python manage.py migrate
(env) $  $ python manage.py createsuperuser
Username:
```
백엔드 마지막으로 서버를 실행한다.
```
(env) $  python manage.py runserver

Performing system checks...

System check identified no issues (0 silenced).
May 02, 2018 - 06:52:45
Django version 1.11.14, using settings 'cookbook.settings'
Starting development server at http://127.0.0.1:8000/
Quit the server with CONTROL-C.
```

#### 프런트엔드 설치방법
백엔드 서버를 실행하고 터미널 창을 하나 더 열어서 github로부터 클론받은 디렉터리로 이동하여 다음과 같이 프런트엔드 디렉토리로 이동한다.
```
$ cd frontend/
```
그런다음 React App이 실행 되기 위한 패키지를 설치 합니다.
```
$ npm install
```
설치가 끝나면 다음 명령으로 프런트엔드 서버를 실행합니다.
```
$ npm start

Compiled successfully!

You can now view frontend in the browser.

  Local:            http://localhost:3000/
  On Your Network:  http://999.999.1.11:3000/

Note that the development build is not optimized.
To create a production build, use yarn build.
```
이상과 같이 실행되며 기본 브라우져로 설정된 브라우져에서 자동으로 실행되며 첫 화면이 나타나게 됩니다.

#### 관련 기슬 참조 링크

* 백엔드 서버의 기능 개발에 활용하는 [Python Django](https://docs.djangoproject.com/en/2.0/intro/tutorial01/).
* Restfull API와 다른 서버 API를 개발 하기위한 [GraphQL](https://www.howtographql.com/basics/0-introduction/).
* Python으로 백엔드 API서버 개발에 GraphQL이용 GraphQL API를 구축하기위한 프레임 워크인 [Graphene-Django](https://docs.graphene-python.org/projects/django/en/latest/).
* 프런트엔드의 다양한 사용자 화면 개발을 위한 [React](https://reactjs.org/tutorial/tutorial.html)와 [Ant Design documentation](https://ant.design/docs/react/introduce). 
