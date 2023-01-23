#  Daydream Preview

<p align="center">
<img src="https://cdn.discordapp.com/attachments/807077862880444456/1043182854147948584/maid.png" alt="Daydream" width="30%">
</p>

<pre align="center">
심플한 한국어 기반 디스코드 뮤직 봇
</pre>

## v.2.0.1 업데이트
- 반복 기능 사용 시 재생 알림 비활성화

##  🎉 2.0 업데이트
- Node.js 버전 업데이트 (16.x -> 18.x)
- Discord.js 버전 업데이트 (v13 -> v14)
- 슬래쉬 커맨드로 변경 (!재생 -> /재생)
- 코드 파일 분할

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
> <img  src="https://cdn.discordapp.com/attachments/807077862880444456/1064518387520241724/Screenshot_2023-01-16_211351.png"  alt="Node.js Download Page"  width="100%">

---

### 2. Node.js를 설치해주세요.
다음 동의 다음 하면 됩니다.

---

### 3. 설치 위치를 복사해주세요.
> <img  src="https://cdn.discordapp.com/attachments/807077862880444456/1064717181331447808/Screenshot_2023-01-17_102436.png"  alt="Node.js Setup"  width="100%">
> 
> 핑크색 박스 부분을 쭉 드래그하고 문자 전체를 복사해주세요.
> 
> <img  src="https://cdn.discordapp.com/attachments/807077862880444456/1064558803527417956/Screenshot_2023-01-16_235558.png"  alt="Node.js Setup"  width="80%">
> 
> 넘기다 보면 이 옵션이 있는데 체크 안 해도 Daydream을 사용하는데 지장은 없으나
> 다른 봇들도 사용해 볼 예정이거나 봇을 개발해 볼 예정이거나
> 시간적 여유와 매우 널널한 저장 공간의 소유자라면
> 설치 **매우 추천**

---

### 4. 시스템 환경 변수 편집을 검색하세요.
> <img  src="https://cdn.discordapp.com/attachments/807077862880444456/1064527944514551818/2023-01-16_214925.png"  alt="Taskbar Search"  width="40%">
> <img  src="https://cdn.discordapp.com/attachments/807077862880444456/1064528349705277440/2023-01-16_214925_plus.png"  alt="Search environment"  width="100%">
> 
> 와타시의 윈도우 설치 언어가 영어라서 저따구로 나온겁니다.
> 
> 걱정 말고 시스템 환경 변수 편집을 실행하세요.
> 
> 우치노 개발자가 고맨나사이.

---

### 5. 환경 변수를 누르세요.
> <img  src="https://cdn.discordapp.com/attachments/807077862880444456/1064529855217143859/Screenshot_2023-01-16_215943.png"  alt="System Properties"  width="50%">
> 
> 다시 한번 말하지만 와타시의 윈도우 설치 언어가 영어라서 저따구로 나온겁니다.
> 
> 한국어로 환경 변수라고 써져있습니다. 걱정 말고 누르세요.
> 
> 우치노 개발자가 고맨나사이.

---

### 6. Path를 누르고 편집을 누르세요.
> <img  src="https://cdn.discordapp.com/attachments/807077862880444456/1064531313547296879/Screenshot_2023-01-16_220408.png"  alt="Environment variables"  width="100%">
> 
> 다시 한번 말하지만

---

### 7. 새로 만들기를 누르고 복사 했던 값을 붙여넣고 확인을 누르세요.
> <img  src="https://cdn.discordapp.com/attachments/807077862880444456/1064719890826665996/Screenshot_2023-01-17_103517.png"  alt="Edit environment variable"  width="80%">
> 다시 한번

---

### 8. 확인 > 적용 > 확인을 눌러 모든 창을 닫으세요.

---

### end. cmd를 열고 `node -v` 를 입력해서 설치가 잘 되었는지 확인합니다.
> <img  src="https://cdn.discordapp.com/attachments/807077862880444456/1064527944514551818/2023-01-16_214925.png"  alt="Taskbar Search"  width="40%">
> <img  src="https://cdn.discordapp.com/attachments/807077862880444456/1064534441923444766/2023-01-16_214925_plus_alpha.png"  alt="Search cmd"  width="100%">
> 
> 매우 자주 말하지만 와타시의 윈도우 설치 언어가 영어라서 저따구로 나온겁니다.
> 
> 한국어로는 명령 프롬프트입니다.
> 
> 우치노 개발자가 고맨.
> 
> <img  src="https://cdn.discordapp.com/attachments/807077862880444456/1064718620489425036/Screenshot_2023-01-17_103102.png"  alt="cmd"  width="100%">
> 오류가 나지 않는다면 성공.

## FFmpeg
- https://github.com/BtbN/FFmpeg-Builds/releases

### 1. 위의 사이트에 접속하여 운영체제에 맞는 파일을 다운로드 해주세요.
> <img  src="https://cdn.discordapp.com/attachments/807077862880444456/1064519677902065694/Screenshot_2023-01-16_212012.png"  alt="FFmpeg Download Page"  width="100%">
> 윈도우 기준 핑크색 박스 안의 파일을 클릭하시면 됩니다.

---

### 2. 파일 압축을 풀어주세요.

---

### 3. 폴더의 이름을 ffmpeg로 변경해주세요.
> **!주의!**  |  폴더를 **한 번** 열면 바로 bin, doc과 같은 폴더가 보이도록 해주세요.
>  <img  src="https://cdn.discordapp.com/attachments/807077862880444456/1064521447395053678/image.png"  alt="FFmpeg Folder"  width="20%">
> <img  src="https://cdn.discordapp.com/attachments/807077862880444456/1064522295340716102/Screenshot_2023-01-16_213059.png"  alt="FFmpeg Folder"  width="50%">

---

### 4. 압축을 푼 폴더를 C: 드라이브로 옮기세요.
 - 꼭 C: 드라이브가 아니여도 됩니다. 설치할 폴더에 옮겨주세요.
> <img  src="https://cdn.discordapp.com/attachments/807077862880444456/1064524659426611300/Screenshot_2023-01-16_213730_.png"  alt="FFmpeg Folder"  width="60%">

---

### 5. FFmpeg 폴더 내부의 bin 폴더에 들어가세요.

---

### 6. 폴더 위치를 복사해주세요.
> <img  src="https://cdn.discordapp.com/attachments/807077862880444456/1064525641149583430/Screenshot_2023-01-16_214359.png"  alt="FFmpeg Folder"  width="100%">
> 핑크색 박스 부분을 누르고 복사해주세요.

---

### 7. 시스템 환경 변수 편집을 검색하세요.
> <img  src="https://cdn.discordapp.com/attachments/807077862880444456/1064527944514551818/2023-01-16_214925.png"  alt="Taskbar Search"  width="40%">
> <img  src="https://cdn.discordapp.com/attachments/807077862880444456/1064528349705277440/2023-01-16_214925_plus.png"  alt="Search environment"  width="100%">
> 
> 와타시의 윈도우 설치 언어가 영어라서 저따구로 나온겁니다.
> 
> 걱정 말고 시스템 환경 변수 편집을 실행하세요.
> 
> 우치노 개발자가 고맨나사이.

---

### 8. 환경 변수를 누르세요.
> <img  src="https://cdn.discordapp.com/attachments/807077862880444456/1064529855217143859/Screenshot_2023-01-16_215943.png"  alt="System Properties"  width="50%">
> 
> 다시 한번 말하지만 와타시의 윈도우 설치 언어가 영어라서 저따구로 나온겁니다.
> 
> 한국어로 환경 변수라고 써져있습니다. 걱정 말고 누르세요.
> 
> 우치노 개발자가 고맨나사이.

---

### 9. Path를 누르고 편집을 누르세요.
> <img  src="https://cdn.discordapp.com/attachments/807077862880444456/1064531313547296879/Screenshot_2023-01-16_220408.png"  alt="Environment variables"  width="100%">
> 
> 다시 한번 말하지만

---

### 10. 새로 만들기를 누르고 복사 했던 값을 붙여넣고 확인을 누르세요.
> <img  src="https://cdn.discordapp.com/attachments/807077862880444456/1064532231026126869/Screenshot_2023-01-16_220925.png"  alt="Edit environment variable"  width="80%">
> 다시 한번

---

### 11. 확인 > 적용 > 확인을 눌러 모든 창을 닫으세요.

---

### end. cmd를 열고 ffmpeg를 입력해서 설치가 잘 되었는지 확인합니다.
> <img  src="https://cdn.discordapp.com/attachments/807077862880444456/1064527944514551818/2023-01-16_214925.png"  alt="Taskbar Search"  width="40%">
> <img  src="https://cdn.discordapp.com/attachments/807077862880444456/1064534441923444766/2023-01-16_214925_plus_alpha.png"  alt="Search cmd"  width="100%">
> 
> 매우 자주 말하지만 와타시의 윈도우 설치 언어가 영어라서 저따구로 나온겁니다.
> 
> 한국어로는 명령 프롬프트입니다.
> 
> 우치노 개발자가 고맨.
> 
> <img  src="https://cdn.discordapp.com/attachments/807077862880444456/1064535275973398528/Screenshot_2023-01-16_222155.png"  alt="cmd"  width="100%">
> 오류가 나지 않는다면 성공.

## Daydream
### 1. 위로 올려 Code > Download ZIP을 누르세요.
> <img  src="https://cdn.discordapp.com/attachments/807077862880444456/1064543519735300136/Screenshot_2023-01-16_225444.png"  alt="Discord Developers Center"  width="100%">
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
> <img  src="https://cdn.discordapp.com/attachments/807077862880444456/1064537183723212971/Screenshot_2023-01-16_222918.png"  alt="Discord Developers Center"  width="100%">

---

### 3. 프로젝트 이름을 입력하고 Create를 누르세요.
> <img  src="https://cdn.discordapp.com/attachments/807077862880444456/1064538645282963537/Screenshot_2023-01-16_223254.png"  alt="Discord Developers Center"  width="70%">

---

### 4. Bot을 누르고 Add Bot을 누르세요.
> <img  src="https://cdn.discordapp.com/attachments/807077862880444456/1064539646463324300/Screenshot_2023-01-16_223936.png"  alt="Discord Developers Center"  width="100%">

---

### 5. 뚜잇!
> <img  src="https://cdn.discordapp.com/attachments/807077862880444456/1064540140866916444/Screenshot_2023-01-16_224205.png"  alt="Discord Developers Center"  width="60%">

---

### 6. 아래로 내려 MESSAGE CONTENT INTENT를 키고 Save Changes를 누르세요.
> <img  src="https://cdn.discordapp.com/attachments/807077862880444456/1064565089396600862/Screenshot_2023-01-17_002055.png"  alt="Discord Developers Center"  width="100%">

---

### 7. Reset Token을 누르세요.
> <img  src="https://cdn.discordapp.com/attachments/807077862880444456/1064540872269635626/Screenshot_2023-01-16_224409.png"  alt="Discord Developers Center"  width="100%">

---

### 8. 저스트 뚜잇!
> <img  src="https://cdn.discordapp.com/attachments/807077862880444456/1064541267649888307/Screenshot_2023-01-16_224624.png"  alt="Discord Developers Center"  width="100%">

---

### 9. Copy를 누르세요.
> <img  src="https://cdn.discordapp.com/attachments/807077862880444456/1064542707214712912/Screenshot_2023-01-16_225116.png"  alt="Discord Developers Center"  width="100%">

---

### 10. 설치했던 Daydream 폴더 안의 .env 파일을 메모장으로 열어주세요.
> <img src="https://cdn.discordapp.com/attachments/807077862880444456/1064546247190511686/image.png"  alt="Discord Developers Center"  width="20%">
> <img src="https://cdn.discordapp.com/attachments/807077862880444456/1064545854603657267/2023-01-16_214925_plus_alpha_beta.png"  alt="Discord Developers Center"  width="50%">
> 
> .env 파일을 따블클릭하고 메모장 > 한번만 클릭
> Visual Studio Code로 여는것도 괜찮습니다. 대환영합니다.

---

### 11. BOT_TOKEN= 옆에 붙여넣어주세요.
> (ex. BOT_TOKEN=NaWET12549bl=ewtIOLEIBTOLEBNRon3e)
> 옆에 저건 그냥 막친거임니다.

---

### 12. Oauth2를 누르고 Copy를 누르세요.
> <img src="https://cdn.discordapp.com/attachments/807077862880444456/1064550390701498458/Screenshot_2023-01-16_232149.png"  alt="Discord Developers Center"  width="100%">

---

### 13. CLIENT_ID= 옆에 붙여넣어주세요.
> (ex. CLIENT_ID=123456789)
> 옆에 저건 그냥 막친거임니다.

---

### 14. URL Generator를 누르고 Bot을 체크하세요.
> <img src="https://cdn.discordapp.com/attachments/807077862880444456/1064551452594417714/Screenshot_2023-01-16_232642.png"  alt="Discord Developers Center"  width="100%">

---

### 15. 아래와 같이 체크하고 Copy를 누르세요.
> <img src="https://cdn.discordapp.com/attachments/807077862880444456/1064552830830116955/Screenshot_2023-01-16_233035.png"  alt="Discord Developers Center"  width="100%">
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
> <img src="https://cdn.discordapp.com/attachments/807077862880444456/1064546247190511686/image.png"  alt="Discord Developers Center"  width="20%">
> <img src="https://cdn.discordapp.com/attachments/807077862880444456/1064545854603657267/2023-01-16_214925_plus_alpha_beta.png"  alt="Discord Developers Center"  width="50%">
> 
> .env 파일을 따블클릭하고 메모장 > 한번만 클릭
> Visual Studio Code로 여는것도 괜찮습니다. 대환영합니다.

---

### 2. YOUTUBE_API= 옆에 붙여넣어주세요.
> (ex. YOUTUBE_API=NaWET12549bl=ewtIOLEIBTOLEBNRon3e)
> 옆에 저건 그냥 막친거임니다.

## 모듈
### 1. Daydream 폴더 안에서 cmd를 엽니다.
> <img src="https://cdn.discordapp.com/attachments/807077862880444456/1064555080596078602/2023-01-16_214925_plus_alpha_beta_gamma.png"  alt="Daydream Folder"  width="100%">
> 
> 핑크색 박스 부분을 누르고 cmd 입력 > Enter

---

### 2. 아래 명령어를 입력합니다.
> `npm install`
> 
> <img src="https://cdn.discordapp.com/attachments/807077862880444456/1064557032310587474/Screenshot_2023-01-16_234755.png"  alt="Daydream Folder"  width="100%">
> 
> 위와 같이 뜨면 성공

## 실행
### 1. Daydream 폴더 안에서 cmd를 엽니다.
> <img src="https://cdn.discordapp.com/attachments/807077862880444456/1064555080596078602/2023-01-16_214925_plus_alpha_beta_gamma.png"  alt="Daydream Folder"  width="100%">
> 
> 핑크색 박스 부분을 누르고 cmd 입력 > Enter

---

### 2. 아래 명령어를 입력합니다.
> `node .`
> 
> <img src="https://cdn.discordapp.com/attachments/807077862880444456/1064558055099990216/Screenshot_2023-01-16_235242.png"  alt="Daydream Folder"  width="100%">
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