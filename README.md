<img src="https://github.com/Emin-G/Img/blob/main/Daydream_Pamplet.png?raw=true" alt="DaydreamThumb" width="100%">

#  Daydream Preview
<p align="center">
	<img src="https://github.com/Emin-G/Img/blob/main/maid.png?raw=true"  alt="Daydream"  width="30%">
</p>

<pre align="center">
누구나 쉽게 나만의 뮤직봇을 만들 수 있게 되길 바라는,
심플한 한국어 기반 디스코드 뮤직 봇 프로젝트
</pre>

---

<div align="center">
<img src="https://github.com/Emin-G/Img/blob/main/stellar4.png?raw=true" width="60%">
</div>

<p align="center">
Daydream은 심플하고 직관적인 디자인과
</p>
<p align="center">
뮤직봇을 처음 다루어 보거나 가볍게 사용하는 용도에 최적화되어 있으며
</p>
<p align="center">
누구나 빠르게 명령어를 사용할 수 있는 간단함을 목표로 개발되고 있습니다.
</p>

 - 영상 출처 - 공룡 @rulrudino
 - https://youtu.be/Mh02Uv39mQI
 - https://youtu.be/42e7hyTiKUE
 - **☆☆☆24시간 스트리밍 및 롤모델 삼기 환영 중(아마)☆☆☆**

---

<div align="center">
<a href="https://github.com/Emin-G/StellarLoom">
<img src="https://github.com/Emin-G/Img/blob/main/StellarLoom_Pamplet-min.png?raw=true" alt="StellarLoom" width="45%">
</a>
<a href="https://yupi.arite.studio/">
<img src="https://github.com/Emin-G/Img/blob/main/Yupi_Pamplet.png?raw=true" alt="Yupi" width="45%">
</div>
</a>
<p align="center">
더욱 안정적이고 많은 수의 스트리밍을 감당할 수 있는 뮤직봇이 필요하다면 StellarLoom 프로젝트를 참고해주세요.
</p>
<p align="center">
Daydream, StellarLoom 프로젝트를 체험해보고 싶다면 유피를 서버에 초대해보세요!
</p>

---

## v.2.3.0 업데이트
- 채팅방이 더욱 깔끔해졌어요. (유저가 입력한 메세지 삭제 강화)
- 통화방에 들어가 있지 않았을 때와 같이 예상치 못한 상황에서 메세지를 더 정확히 보내줘요.
- discord.js, @discordjs/voice와 같은 Dependency 버전을 업데이트 했어요.
- unhandledRejection을 잡아 좀 더 안정적인 사용이 가능해졌어요.
- 사소한 버그를 수정했어요.

##  🎉 2.0 업데이트
- Node.js 버전 업데이트 (16.x -> 18.x)
- Discord.js 버전 업데이트 (v13 -> v14)
- 슬래쉬 커맨드로 변경 (!재생 -> /재생)
- 코드 파일 분할

---

## **목차**
### **설치**
-  [Node.js 설치](#Node.js)
-  [FFmpeg 설치](#FFmpeg)
-  [Daydream 파일 다운로드](#Daydream)
- [Discord 봇 생성, 토큰 설정](#Discord)
-  [유튜브 API 토큰 설정](#Youtube)
-  [모듈 다운로드](#모듈)
- [실행](#실행)

###  **기능**
-  [재생](#재생)
-  [중지](#중지)
-  [스킵](#스킵)
-  [재생목록](#재생목록)
-  [스테이션](#스테이션)
-  [반복](#반복)
-  [볼륨](#볼륨)

##  A-Jik Mot Ham
- 일시정지
- 스테이션 기능 정확도 향상
- 에러 핸들링

콘솔 로그가 ~~존123나~~ 많으므로 마음의 준비를...

# 설치

디스코드 봇이 **처음이라면** 천천히 내리며 따라하시면 됩니다.
디스코드 봇을 **다루어 보셨다면**, 목차보고 알아서 필요한 부분만 보십시오오오오오오오.

**Windows 운영체제를 기준으로 설명합니다.**

## Node.js
- https://nodejs.org/ko/download/

### 1. 위의 사이트에 접속하여 LTS 버전 (v.18.x) 의 Node.js 설치 파일을 다운로드 해주세요.
> <img  src="https://github.com/Emin-G/Img/blob/main/daydream1.png?raw=true"  alt="Node.js Download Page"  width="100%">

---

### 2. Node.js를 설치해주세요.
다음 동의 다음 하면 됩니다.

---

### 3. 설치 위치를 복사해주세요.
> <img  src="https://github.com/Emin-G/Img/blob/main/daydream3-1.png?raw=true"  alt="Node.js Setup"  width="100%">
> 
> 핑크색 박스 부분을 쭉 드래그하고 문자 전체를 복사해주세요.
> 
> <img  src="https://github.com/Emin-G/Img/blob/main/daydream3-2.png?raw=true"  alt="Node.js Setup"  width="80%">
> 
> 넘기다 보면 이 옵션이 있는데 체크 안 해도 Daydream을 사용하는데 지장은 없으나
> 다른 봇들도 사용해 볼 예정이거나 봇을 개발해 볼 예정이거나
> 시간적 여유와 매우 널널한 저장 공간의 소유자라면
> 설치 **매우 추천**

---

### 4. 시스템 환경 변수 편집을 검색하세요.
> <img  src="https://github.com/Emin-G/Img/blob/main/daydream4-1.png?raw=true"  alt="Taskbar Search"  width="40%">
> <img  src="https://github.com/Emin-G/Img/blob/main/daydream4-2.png?raw=true"  alt="Search environment"  width="100%">
> 
> 와타시의 윈도우 설치 언어가 영어라서 저따구로 나온겁니다.
> 
> 걱정 말고 시스템 환경 변수 편집을 실행하세요.
> 
> 우치노 개발자가 고맨나사이.

---

### 5. 환경 변수를 누르세요.
> <img  src="https://github.com/Emin-G/Img/blob/main/daydream5.png?raw=true"  alt="System Properties"  width="50%">
> 
> 다시 한번 말하지만 와타시의 윈도우 설치 언어가 영어라서 저따구로 나온겁니다.
> 
> 한국어로 환경 변수라고 써져있습니다. 걱정 말고 누르세요.
> 
> 우치노 개발자가 고맨나사이.

---

### 6. Path를 누르고 편집을 누르세요.
> <img  src="https://github.com/Emin-G/Img/blob/main/daydream6.png?raw=true"  alt="Environment variables"  width="100%">
> 
> 다시 한번 말하지만

---

### 7. 새로 만들기를 누르고 복사 했던 값을 붙여넣고 확인을 누르세요.
> <img  src="https://github.com/Emin-G/Img/blob/main/daydream7.png?raw=true"  alt="Edit environment variable"  width="80%">
> 다시 한번

---

### 8. 확인 > 적용 > 확인을 눌러 모든 창을 닫으세요.

---

### end. cmd를 열고 `node -v` 를 입력해서 설치가 잘 되었는지 확인합니다.
> <img  src="https://github.com/Emin-G/Img/blob/main/daydreame-1.png?raw=true"  alt="Taskbar Search"  width="40%">
> <img  src="https://github.com/Emin-G/Img/blob/main/daydreame-2.png?raw=true"  alt="Search cmd"  width="100%">
> 
> 매우 자주 말하지만 와타시의 윈도우 설치 언어가 영어라서 저따구로 나온겁니다.
> 
> 한국어로는 명령 프롬프트입니다.
> 
> 우치노 개발자가 고맨.
> 
> <img  src="https://github.com/Emin-G/Img/blob/main/daydreame-3.png?raw=true"  alt="cmd"  width="100%">
> 오류가 나지 않는다면 성공.

## FFmpeg
- https://github.com/BtbN/FFmpeg-Builds/releases

### 1. 위의 사이트에 접속하여 운영체제에 맞는 파일을 다운로드 해주세요.
> <img  src="https://github.com/Emin-G/Img/blob/main/daydreamf1.png?raw=true"  alt="FFmpeg Download Page"  width="100%">
> 윈도우 기준 핑크색 박스 안의 파일을 클릭하시면 됩니다.

---

### 2. 파일 압축을 풀어주세요.

---

### 3. 폴더의 이름을 ffmpeg로 변경해주세요.
> **!주의!**  |  폴더를 **한 번** 열면 바로 bin, doc과 같은 폴더가 보이도록 해주세요.
>  <img  src="https://github.com/Emin-G/Img/blob/main/daydreamf3-1.png?raw=true"  alt="FFmpeg Folder"  width="20%">
> <img  src="https://github.com/Emin-G/Img/blob/main/daydreamf3-2.png?raw=true"  alt="FFmpeg Folder"  width="50%">

---

### 4. 압축을 푼 폴더를 C: 드라이브로 옮기세요.
 - 꼭 C: 드라이브가 아니여도 됩니다. 설치할 폴더에 옮겨주세요.
> <img  src="https://github.com/Emin-G/Img/blob/main/daydreamf4.png?raw=true"  alt="FFmpeg Folder"  width="60%">

---

### 5. FFmpeg 폴더 내부의 bin 폴더에 들어가세요.

---

### 6. 폴더 위치를 복사해주세요.
> <img  src="https://github.com/Emin-G/Img/blob/main/daydreamf6.png?raw=true"  alt="FFmpeg Folder"  width="100%">
> 핑크색 박스 부분을 누르고 복사해주세요.

---

### 7. 시스템 환경 변수 편집을 검색하세요.
> <img  src="https://github.com/Emin-G/Img/blob/main/daydreamf7-1.png?raw=true"  alt="Taskbar Search"  width="40%">
> <img  src="https://github.com/Emin-G/Img/blob/main/daydreamf7-2.png?raw=true"  alt="Search environment"  width="100%">
> 
> 와타시의 윈도우 설치 언어가 영어라서 저따구로 나온겁니다.
> 
> 걱정 말고 시스템 환경 변수 편집을 실행하세요.
> 
> 우치노 개발자가 고맨나사이.

---

### 8. 환경 변수를 누르세요.
> <img  src="https://github.com/Emin-G/Img/blob/main/daydreamf8.png?raw=true"  alt="System Properties"  width="50%">
> 
> 다시 한번 말하지만 와타시의 윈도우 설치 언어가 영어라서 저따구로 나온겁니다.
> 
> 한국어로 환경 변수라고 써져있습니다. 걱정 말고 누르세요.
> 
> 우치노 개발자가 고맨나사이.

---

### 9. Path를 누르고 편집을 누르세요.
> <img  src="https://github.com/Emin-G/Img/blob/main/daydreamf9.png?raw=true"  alt="Environment variables"  width="100%">
> 
> 다시 한번 말하지만

---

### 10. 새로 만들기를 누르고 복사 했던 값을 붙여넣고 확인을 누르세요.
> <img  src="https://github.com/Emin-G/Img/blob/main/daydreamf10.png?raw=true"  alt="Edit environment variable"  width="80%">
> 다시 한번

---

### 11. 확인 > 적용 > 확인을 눌러 모든 창을 닫으세요.

---

### end. cmd를 열고 ffmpeg를 입력해서 설치가 잘 되었는지 확인합니다.
> <img  src="https://github.com/Emin-G/Img/blob/main/daydreamfe-1.png?raw=true"  alt="Taskbar Search"  width="40%">
> <img  src="https://github.com/Emin-G/Img/blob/main/daydreamfe-2.png?raw=true"  alt="Search cmd"  width="100%">
> 
> 매우 자주 말하지만 와타시의 윈도우 설치 언어가 영어라서 저따구로 나온겁니다.
> 
> 한국어로는 명령 프롬프트입니다.
> 
> 우치노 개발자가 고맨.
> 
> <img  src="https://github.com/Emin-G/Img/blob/main/daydreamfe-3.png?raw=true"  alt="cmd"  width="100%">
> 오류가 나지 않는다면 성공.

## Daydream
### 1. 위로 올려 Code > Download ZIP을 누르세요.
> <img  src="https://github.com/Emin-G/Img/blob/main/daydreamd1.png?raw=true"  alt="Discord Developers Center"  width="100%">
> 
> 한국어로는 다르게 표시될 수 있습니다.

---

### 2. 압축을 풀고 바탕화면이든 어디든 소중하게 놔주세요.
> **!중요!**  |  혹시나 설치 후 오류가 난다면 C: 드라이브로 폴더를 옮겨보세요.

## Discord
- https://discord.com/developers/applications

### 1. 위의 사이트에 접속하여 로그인하세요.

---

### 2. New Application을 누르세요.
> <img  src="https://github.com/Emin-G/Img/blob/main/daydreamd2.png?raw=true"  alt="Discord Developers Center"  width="100%">

---

### 3. 프로젝트 이름을 입력하고 Create를 누르세요.
> <img  src="https://github.com/Emin-G/Img/blob/main/daydreamd3.png?raw=true"  alt="Discord Developers Center"  width="70%">

---

### 4. Bot을 누르고 Add Bot을 누르세요.
> <img  src="https://github.com/Emin-G/Img/blob/main/daydreamd4.png?raw=true"  alt="Discord Developers Center"  width="100%">

---

### 5. 뚜잇!
> <img  src="https://github.com/Emin-G/Img/blob/main/daydreamd5.png?raw=true"  alt="Discord Developers Center"  width="60%">

---

### 6. 아래로 내려 MESSAGE CONTENT INTENT를 키고 Save Changes를 누르세요.
> <img  src="https://github.com/Emin-G/Img/blob/main/daydreamd6.png?raw=true"  alt="Discord Developers Center"  width="100%">

---

### 7. Reset Token을 누르세요.
> <img  src="https://github.com/Emin-G/Img/blob/main/daydreamd7.png?raw=true"  alt="Discord Developers Center"  width="100%">

---

### 8. 저스트 뚜잇!
> <img  src="https://github.com/Emin-G/Img/blob/main/daydreamd8.png?raw=true"  alt="Discord Developers Center"  width="100%">

---

### 9. Copy를 누르세요.
> <img  src="https://github.com/Emin-G/Img/blob/main/daydreamd9.png?raw=true"  alt="Discord Developers Center"  width="100%">

---

### 10. 설치했던 Daydream 폴더 안의 .env 파일을 메모장으로 열어주세요.
> <img src="https://github.com/Emin-G/Img/blob/main/daydreamd10-1.png?raw=true"  alt="Discord Developers Center"  width="20%">
> <img src="https://github.com/Emin-G/Img/blob/main/daydreamd10-2.png?raw=true"  alt="Discord Developers Center"  width="50%">
> 
> .env 파일을 따블클릭하고 메모장 > 한번만 클릭
> Visual Studio Code로 여는것도 괜찮습니다. 대환영합니다.

---

### 11. BOT_TOKEN= 옆에 붙여넣어주세요.
> (ex. BOT_TOKEN=NaWET12549bl=ewtIOLEIBTOLEBNRon3e)
> 옆에 저건 그냥 막친거임니다.

---

### 12. Oauth2를 누르고 Copy를 누르세요.
> <img src="https://github.com/Emin-G/Img/blob/main/daydreamd12.png?raw=true"  alt="Discord Developers Center"  width="100%">

---

### 13. CLIENT_ID= 옆에 붙여넣어주세요.
> (ex. CLIENT_ID=123456789)
> 옆에 저건 그냥 막친거임니다.

---

### 14. URL Generator를 누르고 Bot을 체크하세요.
> <img src="https://github.com/Emin-G/Img/blob/main/daydreamd14.png?raw=true"  alt="Discord Developers Center"  width="100%">

---

### 15. 아래와 같이 체크하고 Copy를 누르세요.
> <img src="https://github.com/Emin-G/Img/blob/main/daydreamd15.png?raw=true"  alt="Discord Developers Center"  width="100%">
> 
> 추천하지는 않지만 Administrator (관리자 권한) 을 체크하면 나머지는 체크하지 않아도 됩니다.
> 관리자 권한을 봇에게 주고 싶다면 Administrator (관리자 권한) 만 체크하세요.

---

### 16. 브라우저에서 복사했던 링크를 열고 봇을 서버에 초대하세요.
한 번 발급한 링크는 영구적으로 사용이 가능하니
추후에 다른 서버에도 봇을 추가해야한다면 링크를 어따가 잘 챙겨놓으세요.

## Youtube
유튜브 API 키를 생성해야합니다.
https://han-py.tistory.com/432
위 블로그에 매우 정리가 잘 되어 있습니다. 참고해서 생성하시면 됩니다.
(목차 1과 3만 보고 따라하시면 됩니다.)
하헣ㅎ흐하하헣하하핳ㅎㅎ

API 키가 입력되지 않거나 잘못되면 **검색** 기능만 작동하지 않습니다.

    /재생 아이유 -> 오류

다르게 말하면 API 키 없어도 영상 URL을 복사하여 사용은 가능합니다.

    /재생 https://www.youtube.com/watch?v=0-q1KafFCLU -> OK!

---

### 1. 설치했던 Daydream 폴더 안의 .env 파일을 메모장으로 열어주세요.
> <img src="https://github.com/Emin-G/Img/blob/main/daydreamy1-1.png?raw=true"  alt="Discord Developers Center"  width="20%">
> <img src="https://github.com/Emin-G/Img/blob/main/daydreamy1-2.png?raw=true"  alt="Discord Developers Center"  width="50%">
> 
> .env 파일을 따블클릭하고 메모장 > 한번만 클릭
> Visual Studio Code로 여는것도 괜찮습니다. 대환영합니다.

---

### 2. YOUTUBE_API= 옆에 붙여넣어주세요.
> (ex. YOUTUBE_API=NaWET12549bl=ewtIOLEIBTOLEBNRon3e)
> 옆에 저건 그냥 막친거임니다.

## 모듈
### 1. Daydream 폴더 안에서 cmd를 엽니다.
> <img src="https://github.com/Emin-G/Img/blob/main/daydreamm1.png?raw=true"  alt="Daydream Folder"  width="100%">
> 
> 핑크색 박스 부분을 누르고 cmd 입력 > Enter

---

### 2. 아래 명령어를 입력합니다.
> `npm install`
> 
> <img src="https://github.com/Emin-G/Img/blob/main/daydreamm2.png?raw=true"  alt="Daydream Folder"  width="100%">
> 
> 위와 같이 뜨면 성공

## 실행
### 1. Daydream 폴더 안에서 cmd를 엽니다.
> <img src="https://github.com/Emin-G/Img/blob/main/daydreams1.png?raw=true"  alt="Daydream Folder"  width="100%">
> 
> 핑크색 박스 부분을 누르고 cmd 입력 > Enter

---

### 2. 아래 명령어를 입력합니다.
> `node .`
> 
> <img src="https://github.com/Emin-G/Img/blob/main/daydreams2.png?raw=true"  alt="Daydream Folder"  width="100%">
> 
> 축하합니다! 드디어 끝났습니다!!! 앞으로 봇을 키실 때 이렇게 하시면 됩니다.

## 기능

## 재생
> /재생 [옵션]

 - **옵션**
	 - 검색어
	 - 영상 URL
	 - 재생목록 URL

## 중지
> /중지

## 스킵
> /스킵

> /스킵 [트랙 번호]

 - 트랙 번호는 [/재생목록](#재생목록) 을 참조
 - 스테이션 도중 스킵은 [/스테이션](#스테이션) 을 참조

## 재생목록
> /재생목록

**`트랙 번호`** | 곡 이름

## 스테이션
스테이션은 유튜브 추천 동영상을 기반으로 **비슷한 영상**을 계속 재생합니다.
한 번 재생했던 영상은 스테이션 기능이 꺼지기 전까지 다시 재생하지 않습니다.

반복과 동시에 사용할 수 없습니다.

 - 문제점
	 - 어울리지 않는 영상
	 - ~시간 연속 듣기 와 같은 불필요한 영상
	 - 중복된 컨텐츠를 담은 영상

> /스테이션

> /스테이션 [옵션]

 - **옵션**
	 - 끄기
	 - 켜기
	 - 스킵

`/스테이션 스킵` 으로 스테이션 도중 스킵을 할 수 있습니다.

## 반복
스테이션과 동시에 사용할 수 없습니다.

> /반복

> /반복 [옵션]

 - **옵션**
	 - 끄기
	 - 켜기

## 볼륨
> /볼륨 [0 - 100]

볼륨은 0 ~ 100 까지 설정 가능합니다.
소숫점은 무시됩니다. ~~찡긋><~~

한 번 변경된 볼륨은 모든 노래가 끝나기 전까지 유지 됩니다.

## 셔플
> /셔플

~~셔플합니다.~~
재생목록에 담긴 영상의 재생 순서를 무작위로 섞어요.