#  Daydream Preview

<p align="center">
<img src="https://cdn.discordapp.com/attachments/807077862880444456/1002493944522870864/alice_beta_profile.png" alt="Daydream" width="30%">
</p>

<pre align="center">
심플한 한국어 기반 디스코드 뮤직 봇
</pre>

## 🎉 1.1 업데이트

 - !재생 잘못된 URL 에러 핸들링
 - 유튜브 API 의존도 대폭 감소 (검색을 제외한 모든 기능 유튜브 API 사용하지 않음)
 - 기능 최적화
 - 버전 체크 추가

## **기능**
 - [재생](#재생)
 - [중지](#중지)
 - [스킵](#스킵)
 - [재생목록](#재생목록)
 - [스테이션](#스테이션)
 - [반복](#반복)
 - [볼륨](#볼륨)

## A-Jik Mot Ham

 - 일시정지
 - 스테이션 기능 정확도 향상
 - 에러 핸들링

콘솔 로그가 ~~존123나~~ 많으므로 마음의 준비를...

## 설치

Node.js 16.x 버전 필요

 1. `git clone https://github.com/Emin-G/Daydream-music-bot.git`
 2. `cd Daydream-music-bot/`
 3. `npm install`

사용 전 .env 파일의  BOT_TOKEN=  과  YOUTUBE_API=  를 수정해 주세요.

FFMPEG 설치가 필요합니다.

## 재생
> !재생 [옵션]

 - **옵션**
	 - 검색어
	 - 영상 URL
	 - 재생목록 URL

## 중지
> !중지

## 스킵
> !스킵

> !스킵 [트랙 번호]

 - 트랙 번호는 [!재생목록](#재생목록) 을 참조
 - 스테이션 도중 스킵은 [!스테이션](#스테이션) 을 참조

## 재생목록
> !재생목록

**`트랙 번호`** | 곡 이름

## 스테이션 [불안정]
스테이션은 유튜브 추천 동영상을 기반으로 **비슷한 영상**을 계속 재생합니다.
한 번 재생했던 영상은 스테이션 기능이 꺼지기 전까지 다시 재생하지 않습니다.

반복과 동시에 사용할 수 없습니다.

 - 문제점
	 - 어울리지 않는 영상
	 - ~시간 연속 듣기 와 같은 불필요한 영상
	 - 중복된 컨텐츠를 담은 영상

> !스테이션

> !스테이션 [옵션]

 - **옵션**
	 - 끄기
	 - 켜기
	 - 스킵

`!스테이션 스킵` 으로 스테이션 도중 스킵을 할 수 있습니다.

## 반복
스테이션과 동시에 사용할 수 없습니다.

> !반복

> !반복 [옵션]

 - **옵션**
	 - 끄기
	 - 켜기

## 볼륨
> !볼륨 [0 - 100]

볼륨은 0 ~ 100 까지 설정 가능합니다.
소숫점은 무시됩니다. ~~찡긋><~~

한 번 변경된 볼륨은 모든 노래가 끝나기 전까지 유지 됩니다.
