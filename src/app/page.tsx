"use client";

import {
  Button,
  Checkbox,
  Flex,
  FloatButton,
  Form,
  FormProps,
  Input,
  Radio,
  Segmented,
  Space,
} from "antd";
import { useForm } from "antd/es/form/Form";
import { useEffect, useState } from "react";
import Write from "./component/write/page";
import Listen from "./component/listen/page";

const data = [
  {
    head: "question1",
    question: 1,
    title: "저는 눈이 크고 어깨가 넓은 남자를 좋아해요.",
    answer: 3,
    answerStr: "3. 외모",
    contents: [
      { id: 1, name: "1. 성격" },
      { id: 2, name: "2. 취미" },
      { id: 3, name: "3. 외모" },
      { id: 4, name: "4. 습관" },
    ],
    layout: "col-span-1 text-xs",
  },
  {
    head: "question2",
    question: 2,
    title: "저는 산을 좋아해서 시간이 있으면 등산을 합니다.",
    answer: 1,
    answerStr: "1. 취미",
    contents: [
      { id: 1, name: "1. 취미" },
      { id: 2, name: "2. 장소" },
      { id: 3, name: "3. 신체" },
      { id: 4, name: "4. 모임" },
    ],
    layout: "col-span-1 text-xs",
  },
  {
    head: "question3",
    question: 3,
    title: "지난주에 산 원피스가 조금 커서 작은 거로 바꿨습니다.",
    answer: 1,
    answerStr: "1. 교환",
    contents: [
      { id: 1, name: "1. 교환 " },
      { id: 2, name: "2. 환불" },
      { id: 3, name: "3. 색깔" },
      { id: 4, name: "4. 디자인" },
    ],
    layout: "col-span-2 text-xs",
  },
  {
    head: "question4",
    question: 4,
    title:
      "이번 토요일에 베트남 음식을 만들 거예요. 우리 집에 저녁 먹으러 오세요.",
    answer: 4,
    answerStr: "4. 초대",
    contents: [
      { id: 1, name: "1. 요리 " },
      { id: 2, name: "2. 주말" },
      { id: 3, name: "3. 오후" },
      { id: 4, name: "4. 초대" },
    ],
    layout: "col-span-1 text-xs",
  },
  {
    head: "question5",
    question: 5,
    title:
      "제주도까지 비행기를 타고 갈 수 있습니다. 부산에서 배를 타고도 갈 수 있습니다.",
    answer: 3,
    answerStr: "3. 교통",
    contents: [
      { id: 1, name: "1. 여행" },
      { id: 2, name: "2. 방학" },
      { id: 3, name: "3. 교통" },
      { id: 4, name: "4. 노선" },
    ],
    layout: "col-span-1 text-xs",
  },
  {
    head: "question6",
    question: 6,
    subTitle:
      " * [6∼10] 다음을 읽고 밑줄 친 부분과 의미가 비슷한 것을 고르십시오. (각 3점)",
    title: (
      <div className="flex text-center justify-center w-full">
        여기에 <p className="underline pl-1 pr-1"> 차를 세우면 안 돼</p>.
      </div>
    ),
    answer: 2,
    answerStr: "2. 주차 금지",
    contents: [
      { id: 1, name: "1. 금연" },
      { id: 2, name: "2. 주차 금지" },
      { id: 3, name: "3. 사진 촬영 금지" },
      { id: 4, name: "4. 음식물 반입 금지" },
    ],
    layout: "col-span-2 w-full text-xs",
  },
  {
    head: "question7",
    question: 7,
    title: (
      <div className="flex text-center justify-center w-full">
        시간이 없는데 피자를 <p className="underline pl-1 pr-1">시킬까요?</p>
      </div>
    ),
    answer: 1,
    answerStr: "1. 주문하다",
    contents: [
      { id: 1, name: "1. 주문하다" },
      { id: 2, name: "2. 추천하다" },
      { id: 3, name: "3. 정리하다" },
      { id: 4, name: "4. 소개하다" },
    ],
    layout: "col-span-2 w-full text-xs",
  },
  {
    head: "question8",
    question: 8,
    title: (
      <div className="flex text-center justify-center w-full">
        이번 주 토요일에 어디에서 <p className="underline pl-1 pr-1">만나요?</p>
      </div>
    ),
    answer: 4,
    answerStr: "4. 모여요",
    contents: [
      { id: 1, name: "1. 나가요" },
      { id: 2, name: "2. 좋아요" },
      { id: 3, name: "3. 다녀요" },
      { id: 4, name: "4. 모여요" },
    ],

    layout: "col-span-2 w-full text-xs",
  },
  {
    head: "question9",
    question: 9,
    title: (
      <div className="flex text-center justify-center w-full">
        여기에서 <p className="underline pl-1 pr-1">가까운 곳에는</p> 꽃집이
        없어요.
      </div>
    ),
    answer: 4,
    answerStr: "4. 근처",
    contents: [
      { id: 1, name: "1. 광장" },
      { id: 2, name: "2. 거리" },
      { id: 3, name: "3. 종점" },
      { id: 4, name: "4. 근처" },
    ],
    layout: "col-span-2 w-full text-xs",
  },
  {
    head: "question10",
    question: 10,
    title: (
      <div className="flex text-center justify-center w-full">
        추석에 고향에 가려면 표를 빨리 사{" "}
        <p className="underline pl-1 pr-1">놓아야</p> 돼요.
      </div>
    ),
    answer: 3,
    answerStr: "3. 두어야",
    contents: [
      { id: 1, name: "1. 있어야" },
      { id: 2, name: "2. 주어야" },
      { id: 3, name: "3. 두어야" },
      { id: 4, name: "4. 버려야" },
    ],
    layout: "col-span-2 w-full text-xs",
  },

  // subtitle ========================= =================================================================================================================================================================================================================================
  {
    head: "question11",
    question: 11,
    subTitle:
      " * [11∼15] 다음을 읽고 ( )에 들어갈 내용으로 가장 알맞은 것을 고르십시오. (각 3점)",
    title: (
      <div className="flex text-center justify-center w-full">
        유진 씨는 ( .............. ) 성격이라서 조용히 혼자 있는 것을 좋아해요
      </div>
    ),
    answer: 3,
    answerStr: "3. 내성적인",
    contents: [
      { id: 1, name: "1. 활발한" },
      { id: 2, name: "2. 꼼꼼한" },
      { id: 3, name: "3. 내성적인" },
      { id: 4, name: "4. 남성적인" },
    ],
    layout: "col-span-2 w-full text-xs",
  },
  {
    head: "question12",
    question: 12,
    title: (
      <div className="flex text-center justify-center w-full">
        쉬는 시간에 음악을 ( .............. ) 공부해요.
      </div>
    ),
    answer: 3,
    answerStr: "3. 들으면서",
    contents: [
      { id: 1, name: "1. 들으러" },
      { id: 2, name: "2. 들어서" },
      { id: 3, name: "3. 들으면서" },
      { id: 4, name: "4. 들었지만" },
    ],
    layout: "col-span-2 w-full text-xs",
  },
  {
    head: "question13",
    question: 13,
    title: (
      <div className="flex text-center justify-center w-full">
        저는 다른 나라의 언어나 문화에 ( .............. ) 이/가 많아서 여행을 자주 다닙니다.
      </div>
    ),
    answer: 3,
    answerStr: "3. 관심",
    contents: [
      { id: 1, name: "1. 공부" },
      { id: 2, name: "2. 역사" },
      { id: 3, name: "3. 관심" },
      { id: 4, name: "4. 마음" },
    ],
    layout: "col-span-2 w-full text-xs",
  },
  {
    head: "question14",
    question: 14,
    title: (
      <div className="flex text-center justify-center w-full">
        9시 30분에 수업 시작인데 오늘 아침에 ( .............. ) 일어나서 10시에 학교에 갔어요.
      </div>
    ),
    answer: 1,
    answerStr: "1. 늦게",
    contents: [
      { id: 1, name: "1. 늦게" },
      { id: 2, name: "2. 빨리" },
      { id: 3, name: "3. 많이" },
      { id: 4, name: "4. 조금" },
    ],
    layout: "col-span-2 w-full text-xs",
  },
  {
    head: "question15",
    question: 15,
    title: (
      <div className="flex text-center justify-center w-full">
        오늘 날씨가 너무 추워요. 그래서 목도리를 하고 장갑도 ( .............. )  나갈 거예요.
      </div>
    ),
    answer: 4,
    answerStr: "4. 끼고",
    contents: [
      { id: 1, name: "1. 쓰고" },
      { id: 2, name: "2. 벗고" },
      { id: 3, name: "3. 신고" },
      { id: 4, name: "4. 끼고" },
    ],
    layout: "col-span-2 w-full text-xs",
  },
  {
    head: "question16",
    question: 16,
    subTitle:
      "※ [16∼17] 다음을 읽고 맞지 않는 것을 고르십시오. (각 3점)",
    title: (
      <div className="flex text-justify w-full indent-4">
        건강하게 살기 위해서 몸에 좋은 약이나 특별한 음식을 먹는 사람들이 많습니다. 그러나 제일 좋은 방법은 운동을 하는 것입니다. 여러 가지 운동이 있지만 그중에서 테니스나 축구처럼 여러 사람이 같이하는 운동이 건강에 더 좋습니다. 그리고 집 안에서 하는 것보다 집 밖에서 하는 운동이 더 좋습니다. 
      </div>
    ),
    answer: 1,
    answerStr: "1. 집 밖보다 안에서 하는 운동이 더 좋습니다.",
    contents: [
      { id: 1, name: "1. 집 밖보다 안에서 하는 운동이 더 좋습니다." },
      { id: 2, name: "2. 약을 먹는 것보다 운동하는 것이 더 중요합니다. " },
      { id: 3, name: "3. 사람들은 건강을 위해서 몸에 좋은 약을 먹습니다." },
      { id: 4, name: "4. 여러 사람과 함께 운동하는 것이 건강에 더 좋습니다." },
    ],
    layout: "col-span-4 w-full text-xs",
  },
  {
    head: "question17",
    question: 17,
    title: (
      <div className="flex text-center justify-center w-full">
        추석은 한국의 중요한 명절입니다. 추석은 한 해 농사가 잘 끝난 것을 조상들께 감사하는 날입니다. 추석 아침에는 새로 추수한 곡식과 과일로 차례를 지낸 후 성묘를 하러
        갑니다. 그리고 송편을 만들어서 이웃들과 나눠 먹고 오랜만에 만난 친척들과 이야기하면서 즐거운 시간을 보냅니다. 추석날 밤에는 일 년 중 가장 크고 밝은 보름달을 볼 수
        있는데 사람들은 그 달을 보면서 소원을 빕니다. 
      </div>
    ),
    answer: 2,
    answerStr: "2. 추석날 아침에는 떡국을 만들어 먹습니다.",
    contents: [
      { id: 1, name: "1. 추석에는 조상들께 차례를 지냅니다." },
      { id: 2, name: "2. 추석날 아침에는 떡국을 만들어 먹습니다." },
      { id: 3, name: "3. 추석에는 친척들과 모여서 시간을 보냅니다." },
      { id: 4, name: "4. 추석날 밤에는 보름달을 보면서 소원을 빕니다." },
    ],
    layout: "col-span-4 w-full text-xs",
  },
  {
    head: "question18",
    question: 18,
    subTitle:
    "※ [18∼19] 다음을 순서대로 맞게 배열한 것을 고르십시오. (각 3점)",
    title: (
      <div className="flex flex-col items-start w-full">
        <div> (가) 오늘은 ‘큰사랑 한정식집’을 소개하겠습니다.</div>
        <div> (나) 한국의 전통 음식을 먹고 싶은 사람들에게 이곳을 추천합니다.</div>
        <div> (다) 큰사랑 한정식집은 인사동에 있는데 지하철역에서 좀 멉니다.</div>
        <div> (라) 하지만 한국의 전통적인 분위기를 느낄 수 있어서 인기가 많습니다.</div>
      </div>
    ),
    answer: 2,
    answerStr: "2. (가)-(다)-(라)-(나)",
    contents: [
      { id: 1, name: "1. (가)-(나)-(라)-(다)" },
      { id: 2, name: "2. (가)-(다)-(라)-(나)" },
      { id: 3, name: "3. (나)-(다)-(가)-(라)" },
      { id: 4, name: "4. (나)-(라)-(가)-(다)" },
    ],
    layout: "col-span-2 w-full text-xs",
  },
  {
    head: "question19",
    question: 19,
    title: (
      <div className="flex flex-col items-start w-full">
        <div>(가) 저는 음악 듣는 걸 좋아해요.</div>
        <div>(나) 그래서 시간이 나면 음악을 들어요.</div>
        <div>(다) 같이 가고 싶으면 저에게 전화하세요.</div>
        <div>(라) 이번 주에도 음악을 들으러 음악회에 갈 거예요. </div>
      </div>
    ),
    answer: 1,
    answerStr: "1. (가)-(나)-(라)-(다)",
    contents: [
      { id: 1, name: "1. (가)-(나)-(라)-(다)" },
      { id: 2, name: "2. (가)-(다)-(라)-(나)" },
      { id: 3, name: "3. (나)-(다)-(가)-(라)" },
      { id: 4, name: "4. (나)-(라)-(가)-(다)" },
    ],
    layout: "col-span-2 w-full text-xs",
  },
   // subtitle ========================= =================================================================================================================================================================================================================================
   {
    head: "question20",
    question: 20,
    subTitle:
      "※ [20∼21] 다음을 읽고 ( )에 들어갈 내용으로 가장 알맞은 것을 고르십시오. (각 3점)",
    title: (
      <div className="flex  text-justify w-full indent-4">
        저는 여행을 아주 좋아하고 다른 나라의 언어나 문화에 관심이 많습니다. 이번 가을에 중남미를 (........) 스페인어를 공부하고 있습니다. 스페인어 공부는 재미있지만 발음이 조금 어렵습니다. 그래서 매주 두 시간 정도 스페인어 연습을 도와줄 수 있는 분을 찾고 있습니다. 저는 한국어를 가르쳐 드리겠습니다. 전화 주세요!
      </div>
    ),
    answer: 4,
    answerStr: "4. 여행하려고",
    contents: [
      { id: 1, name: "1. 여행하고" },
      { id: 2, name: "2. 여행하려면" },
      { id: 3, name: "3. 여행하면서" },
      { id: 4, name: "4. 여행하려고" },
    ],
    layout: "col-span-2 w-full text-xs",
  },
  
  {
    head: "question21",
    question: 21,
    title: (
      <div className="flex text-justify w-full indent-4">
        저는 운동하는 것을 아주 좋아합니다. 한국 친구도 만나고 태권도도 배우고 싶어서
        인터넷 동호회‘태사모’에 (......).‘태사모’는 태권도를 사랑하는 사람들의 모임입니다. 그곳에서 만난 친구들과 자주 모여서 태권도를 연습합니다. 태권도도 배우고
        좋은 친구도 만날 수 있어서 아주 좋습니다. 
      </div>
    ),
    answer: 1,
    answerStr: "1. 가입했습니다",
    contents: [
      { id: 1, name: "1. 가입했습니다" },
      { id: 2, name: "2. 입학했습니다" },
      { id: 3, name: "3. 만들었습니다" },
      { id: 4, name: "4. 놀러 갔습니다" },
    ],
    layout: "col-span-2 w-full text-xs",
  },





// subtitle ========================= =================================================================================================================================================================================================================================
{
  head: "question22",
  question: 22,
  subTitle:
    "※ [22∼24] 다음을 읽고 내용이 같은 것을 고르십시오. (각 3점)",
  title: (
    <div className="flex text-justify w-full indent-4">
       저는 내일 친구들과 여의도 공원으로 놀러 갑니다. 그리고 공원에서 점심을 먹을 겁니다. 저는 내일 친구들하고 먹을 음식을 준비해야 합니다. 내일 낮에는 공원에서 놀고
        저녁에는 쇼핑을 하려고 합니다. 다음 주에 여행을 가는데 비행기에서 읽을 책도 사려고 합니다.
    </div>
  ),
  answer: 2,
  answerStr: "2. 내일 먹을 점심을 제가 준비합니다.",
  contents: [
    { id: 1, name: "1. 비행기에서 책을 살 수 있습니다." },
    { id: 2, name: "2. 내일 먹을 점심을 제가 준비합니다. " },
    { id: 3, name: "3. 저녁에 쇼핑하고 책을 읽을 겁니다." },
    { id: 4, name: "4. 이번 주에 여행을 가서 책을 삽니다." },
  ],
  layout: "col-span-4 w-full text-xs",
},
{
  head: "question23",
  question: 23,
  title: (
    <div className="flex text-justify w-full indent-4">
     어제 인터넷에서 티셔츠와 운동화를 주문했는데 오늘 오후에 받았습니다. 티셔츠는
      사이즈도 잘 맞고 디자인도 마음에 들었지만 운동화는 좀 작아서 불편했습니다. 그래서
      큰 사이즈로 바꾸려고 이메일을 보냈습니다. 빨리 새 운동화가 왔으면 좋겠습니다. 
    </div>
  ),
  answer: 4,
  answerStr: "4. 운동화 사이즈가 안 맞아서 바꾸려고 합니다.",
  contents: [
    { id: 1, name: "1. 오늘 산 티셔츠가 마음에 들었습니다." },
    { id: 2, name: "2. 티셔츠가 좀 작아서 컸으면 좋겠습니다." },
    { id: 3, name: "3. 이메일을 보내서 새 운동화를 받았습니다." },
    { id: 4, name: "4. 운동화 사이즈가 안 맞아서 바꾸려고 합니다." },
  ],
  layout: "col-span-4 w-full text-xs",
},
{
  head: "question24",
  question: 24,
  title: (
    <div className="flex text-justify w-full indent-4">
     우리 부모님은 제 생일 때마다 사진을 찍어 주셨습니다. 제가 태어난 날 찍은 것부터
      올해 찍은 사진까지 모두 스무 장의 사진이 있습니다. 사진 옆에는 부모님께서 저에게
      쓰신 글도 볼 수 있습니다. 그 사진들과 글을 보면 부모님의 사랑을 느낄 수 있습니다. 저도 나중에 결혼을 하고 아이를 낳으면 아이에게 그렇게 해 주고 싶습니다. 
    </div>
  ),
  answer: 2,
  answerStr: "2. 이 사람은 매년 생일 때 찍은 사진이 있습니다.",
  contents: [
    { id: 1, name: "1. 이 사람의 부모님은 사진 찍는 일을 합니다." },
    { id: 2, name: "2. 이 사람은 매년 생일 때 찍은 사진이 있습니다." },
    { id: 3, name: "3. 이 사람은 아이의 생일마다 사진을 찍어 줍니다." },
    { id: 4, name: "4. 이 사람은 생일 때마다 부모님께 편지를 씁니다." },
  ],
  layout: "col-span-4 w-full text-xs",
},
{
  head: "question25",
  question: 25,
  subTitle:
    "※ [25∼26] 다음 글에서 <보기>의 글이 들어가기에 가장 알맞은 곳을 고르십시오. (각 3점)",
  title: (
    <div className="flex text-justify w-full indent-5">
     안녕하세요? 저는 백석문화대학교에서 역사를 공부하고 있는 이지훈이라고 합니다.
      ( ㉠ ) 저는 이번 여름에 한 달 동안 중국을 여행할 계획입니다. ( ㉡ ) 전부터
      중국 역사에 관심이 많아서 중국에 한번 가 보고 싶었습니다. ( ㉢ ) 그래서 여름
      방학 전까지 매일 두 시간 중국어를 배우려고 합니다. ( ㉣ ) 저에게 중국어를 가르쳐 주실 분을 찾습니다. Jhy@hanmail.net로 연락해 주세요.
    </div>
  ),
  answer: 3,
  answerStr: "3. ㉢",
  contents: [
    { id: 1, name: "1. ㉠"},
    { id: 2, name: "2. ㉡"},
    { id: 3, name: "3. ㉢"},
    { id: 4, name: "4. ㉣"},
  ],
  contentDetail: <div className="relative text-center w-full border border-black mt-4 px-3 py-4">
      그런데 중국어를 전혀 할 줄 몰라서 걱정입니다.
      <div className="absolute flex justify-center w-full left-0 -top-3 font-bold text-sm">
        <div className="bg-white px-4">보기</div>
      </div>
  </div>,
  layout: "col-span-1 w-full text-xs",
},

{
  head: "question26",
  question: 26, 
  title: (
    <div className="flex text-justify w-full indent-5">
     저는 한국어를 배운 지 1년이 되었습니다. 처음 한국에 왔을 때는 한국어를 전혀 몰랐기 때문에 모르는 곳을 갈 때마다 친구들이 데려다 주었습니다. ( ㉠ ) 하지만 지금은 한국어 실력이 많이 늘어서 저 혼자 여행도 할 수 있게 되었습니다. ( ㉡ ) 그동안 한국에 살면서 많은 추억을 만들었습니다. ( ㉢ ) 명절을 한국 가족들과 보내면서 한국 문화도 더 잘 알 수 있게 되어서 정말 좋았습니다. ( ㉣ ) 고향에 돌아가면 한국에서 보낸 시간들이 많이 그리울 것 같습니다. 
    </div>
  ),
  answer: 3,
  answerStr: "3. ㉢",
  contents: [
    { id: 1, name: "1. ㉠"},
    { id: 2, name: "2. ㉡"},
    { id: 3, name: "3. ㉢"},
    { id: 4, name: "4. ㉣"},
  ],
  contentDetail: <div className="relative text-center w-full border border-black mt-4 px-3 py-4">
      <div className="absolute flex justify-center w-full left-0 -top-3 font-bold text-sm">
        <div className="bg-white px-4">보기</div>
      </div>
      특히 기억에 남는 일은 추석을 한국 친구 집에서 보낸 것입니다.
  </div>,
  layout: "col-span-1 w-full text-xs",

}, 
{
  head: "question27",
  subTitle:
  "※ [27∼28] 다음 글을 읽고 물음에 답하십시오. (각 3점)",
  headTitle: <div className=" flex border border-black px-4 py-2 text-justify w-full indent-5 leading-5 tracking-widest">
        저는 고등학교 다닐 때 ( ㉠ ) 적이 있습니다. 사고 싶은 것이 있어서 돈을 모으려고
      두 달 동안 햄버거 가게에서 일을 했습니다. 아르바이트를 처음 해 봤기 때문에 실수도 많이
      하고 힘들었습니다. 아르바이트를 하면서 힘들게 일하시는 부모님께 감사한 마음을 갖게
      되었습니다. 그리고 그 일을 하기 전까지는 사고 싶은 물건이 있으면 그냥 샀는데
      아르바이트를 한 후부터는 물건을 살 때 꼭 필요한 물건인지 한 번 더 생각해 보게
      되었습니다. 
  </div>,
  question: 27,
  title: (
    <div className="flex text-justify w-full">
     ( ㉠ )에 들어갈 말을 고르십시오. (.............. )
    </div>
  ),
  answer: 3,
  answerStr: "3. 아르바이트를 한",
  contents: [
    { id: 1, name: "1. 실수를 한"},
    { id: 2, name: "2. 돈을 많이 쓴"},
    { id: 3, name: "3. 아르바이트를 한 "},
    { id: 4, name: "4. 부모님께 선물을 한"},
  ],
  layout: "col-span-2 w-full text-xs",
},
{
  head: "question28",
  question: 28,
  title: (
    <div className="flex text-justify w-full">
     이 글의 내용과 같은 것을 고르십시오. (.............. )
    </div>
  ),
  answer: 2,
  answerStr: "2. 아르바이트를 할 때 실수한 경험이 많이 있습니다.",
  contents: [
    { id: 1, name: "1. 이 사람의 부모님은 햄버거 가게를 하십니다."},
    { id: 2, name: "2. 아르바이트를 할 때 실수한 경험이 많이 있습니다."},
    { id: 3, name: "3. 이 일을 하기 전에 아르바이트를 해 본 경험이 있습니다."},
    { id: 4, name: "4. 아르바이트를 한 후에 물건을 살 때 한 번 더 생각합니다."},
  ],
  layout: "col-span-4 w-full text-xs",
}, 
{
  head: "question29",
  question: 29,
  subTitle:
  "※ [29∼30] 다음 글을 읽고 물음에 답하십시오. (각 3점)",
  headTitle: <div className=" flex border border-black px-4 py-2 text-justify w-full indent-5 leading-5 tracking-widest">
        저는 내일 친구들과 놀러 갑니다. ( ㉠ ) 곳은 여의도 공원입니다. 우리는 내일 여의도 공원에서 점심을 먹을 겁니다. 저는 내일 친구들하고 먹을 음식과 마실 것을 준비해야 합니다. 내일 낮에는 공원에서 놀고 저녁에는 쇼핑하려고 합니다. 다음 주에 여행을 가는데 비행기에서 볼 책도 사고 친구에게 줄 선물도 사야 합니다.
  </div>,
  title: (
    <div className="flex text-justify w-full">
      ( ㉠ )에 들어갈 말을 고르십시오.  (.............. )
    </div>
  ),
  answer: 4,
  answerStr: "4. 놀러 갈",
  contents: [
    { id: 1, name: "1. 놀아서"},
    { id: 2, name: "2. 놀려고"},
    { id: 3, name: "3. 놀면서"},
    { id: 4, name: "4. 놀러 갈"},
  ],
  layout: "col-span-2 w-full text-xs",
},
{
  head: "question30",
  question: 30,
  title: (
    <div className="flex text-justify w-full">
      이 글의 내용과 같은 것을 고르십시오. (.............. )
    </div>
  ),
  answer: 2,
  answerStr: "2. 내일 점심은 여의도 공원에서 먹을 겁니다.",
  contents: [
    { id: 1, name: "1. 이번 주에 여행을 갑니다."},
    { id: 2, name: "2. 내일 점심은 여의도 공원에서 먹을 겁니다."},
    { id: 3, name: "3. 오늘 낮에 공원에서 놀고 쇼핑을 하려고 합니다."},
    { id: 4, name: "4. 쇼핑할 때 친구에게 줄 선물로 책을 사야 합니다."},
  ],
  layout: "col-span-4 w-full text-xs",
},
{
  head: "question31",
  question: 31,
  subTitle:
  "※ [31∼33] 다음 글을 읽고 물음에 답하십시오. (31~32번 3점/33번 4점)",
  headTitle: <div className=" flex border border-black px-4 py-2 text-justify w-full indent-5 leading-5 tracking-widest">
          저는 작년 봄에 한국에 왔습니다. 그동안 한국에서 많은 곳에 가 봤는데 특히 부산에 간
          것이 가장 기억에 남습니다. 저는 부산에서 영화제에 갔습니다. 부산에서는 매년 가을에
          일주일 동안 영화제를 하는데 세계 여러 나라에서 감독과 배우들이 많이 옵니다. 거기서
          다른 나라 영화도 많이 보고 유명한 배우들도 만날 수 있어서 참 좋았습니다. 그리고 부산은 바다와 가까워서 생선 요리도 맛있고 구경할 것도 많습니다. 저는 부산에서 생선회를
          처음 먹어 봤는데 정말 맛있었습니다. 시간이 있으면 부산에 또 가고 싶습니다.
  </div>,
  title: (
    <div className="flex text-justify w-full">
      ( ㉠ )에 들어갈 말을 고르십시오.  (.............. )
    </div>
  ),
  answer: 4,
  answerStr: "2. 영화제는 매년 봄과 가을에 두 번 합니다.",
  contents: [
    { id: 1, name: "1. 부산과 영화제"},
    { id: 2, name: "2. 작년 봄의 한국"},
    { id: 3, name: "3. 처음 먹어 본 생선회"},
    { id: 4, name: "4. 가장 기억에 남는 한국 여행"},
  ],
  layout: "col-span-4 w-full text-xs",
},

{
  head: "question32",
  question: 32,
  title: (
    <div className="flex text-justify w-full">
      이 글의 내용과 같은 것을 고르십시오. (.............. )
    </div>
  ),
  answer: 1,
  answerStr: "1. 부산은 구경거리가 많습니다.",
  contents: [
    { id: 1, name: "1. 부산은 구경거리가 많습니다."},
    { id: 2, name: "2. 이 사람은 매년 부산에 갑니다."},
    { id: 3, name: "3. 이 사람은 고향에서 생선회를 먹어 봤습니다."},
    { id: 4, name: "4. 이 사람은 한국에서 부산만 여행해 봤습니다."},
  ],
  layout: "col-span-4 w-full text-xs",
},
{
  head: "question33",
  question: 33,
  title: (
    <div className="flex text-justify w-full">
        부산 영화제에 대한 설명으로 맞지 않는 것을 고르십시오.  (.............. )
    </div>
  ),
  answer: 2,
  answerStr: "2. 영화제는 매년 봄과 가을에 두 번 합니다.",
  contents: [
    { id: 1, name: "1. 영화제는 7일 동안 합니다."},
    { id: 2, name: "2. 영화제는 매년 봄과 가을에 두 번 합니다."},
    { id: 3, name: "3. 영화제에서 여러 나라 영화를 볼 수 있습니다."},
    { id: 4, name: "4. 영화제에서는 유명한 배우들도 만날 수 있습니다."},
  ],
  layout: "col-span-4 w-full text-xs",
},

];


export default function Home() {
  const [resultData, setResultData] = useState();
  const [errorCount, seterrorCount] = useState(0);
  const [segmentedValue, setSegmentedValue] = useState("Унших");
  const [error, setError] = useState<string | undefined>();
  const [form] = useForm();
  type FieldType = {
    question?: number;
    password?: string;
    remember?: string;
  };
  useEffect(() => {}, [errorCount]);

  const onFinish: FormProps<any>["onFinish"] = (values) => {
    setError(undefined);
    seterrorCount(0);
    setResultData(values);
    var errorResultNumber: number = 0;
    
    data.forEach((element, i) => {
          if (element.head === Object.entries(values)[i]?.[0]) {
            if (element.answer !== Object.entries(values)[i][1]) {
                if(element.head !== "question1228"){
                  errorResultNumber++;
                }
            }
          }
  
    });
    seterrorCount(errorResultNumber);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    setError("Бүх талбарыг заавал бөглөнө үү!");
  };
  return (
    <div className="flex justify-center w-full mt-6">
      <div className="bg-white w-[600px] max-md:w-ful m-2 p-6 max-md:mx-6 max-md:p-2 border border-black text-xs mb-20">
        <Segmented<string>
            className="mb-3"
            options={['Унших', 'Бичих', 'Сонсох']}
            onChange={(value) => {
                setSegmentedValue(value);
            }}
        />

       {segmentedValue === "Унших" ? 
      <>
         <div className="w-full border border-black">
          <div className="flex-col justify-between gap-5 w-full">
            <div className="flex justify-between gap-5 w-full px-12 py-3 font-bold max-md:px-2">
              <div>2024학년도 한국어 능력평가</div>
              <div>고사 일자 2024년 월 일</div>
            </div>
            <div className="text-center font-bold pb-3">읽기</div>
            <div className="flex justify-between bg-gray-300 w-full font-bold">
              <div className="text-center w-full border border-black">벡잠</div>
              <div className="text-center w-full border border-black">이름</div>
            </div>
            <div className="flex justify-between  w-full">
              <div className="text-center w-full border border-black py-2">
                32문제*3점+1문제*4점=100점
              </div>
              <div className="text-center w-full border border-black"></div>
            </div>
          </div>
        </div> 
        <div className="text-xs"> 
          {resultData ? (
            <div className="flex items-center justify-end w-full mt-2 gap-4">
              <div className="text-red-500">Алдсан тоо: {errorCount}</div>
              <div className="text-green-500">
                Зөв хариулсан: {33 - errorCount}
              </div>

              <Button
                type="primary"
                size="small"
                onClick={() => (
                  form.resetFields(), setResultData(undefined), seterrorCount(0)
                )}
              >
                Шинээр эхлэх
              </Button>
            </div>
          ) : null}
          <Form
            form={form}
            name="basic"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            {data?.map((e: any, i: number) => (
              <div className="text-xs w-full pb-2" key={i}>
                <div
                  className={
                    e.subTitle
                      ? "font-bold text-sm pt-4 border-t-8 border-gray-400"
                      : "font-bold text-sm "
                  }
                >
                  {e.subTitle ? e.subTitle : ""}
                </div>
                {e.headTitle ? e.headTitle : null}

                {e.question ?
                <div className={"font-bold text-sm mt-3"}>
                  {e.question} (................ )
                </div> 
                : null }
                <div className="text-center border border-black px-4 py-1 mt-2 leading-5 tracking-widest">
                  {e.title}
                </div>
                {e.contentDetail ? e.contentDetail : null}

                <Form.Item<any>
                  label=""
                  name={e.head}
                  rules={[
                    {
                      required: true,
                      message: "Заавал бөглөнө үү!",
                    },
                  ]}
                  className="mt-2 max-md:mx-0 mx-6"
                >
                  <Radio.Group
                    size="small"
                    value={1}
                    className="w-full"
                    style={{ width: "100%" }}
                  >
                    <div className="grid grid-cols-4 w-full gap-2">
                      {e.contents?.map((details: any, index: number) => (
                        <Radio
                          value={details.id}
                          key={index}
                          className={e.layout}
                        >
                          {" "}
                          {details.name}{" "}
                        </Radio>
                      ))}
                    </div>
                  </Radio.Group>
                </Form.Item> 
                <div className="-mt-4"> 
                  {resultData ? (
                    e.head == Object.entries(resultData)[i]?.[0] ? (
                      e.answer === Object.entries(resultData)[i]?.[1] ? (
                        ""
                      ) : (
                        <div className="text-red-500">
                          {e.head === "question1228" ? "" :  "Зөв хариулт: " + e.answerStr }
                        </div>
                      )
                    ) : (
                       ""
                    )
                  ) : (
                    ""
                  )}
                </div>
              </div>
            ))}
  
            {resultData ? (
              <div className="flex items-center justify-end w-full mt-2 gap-4 mb-4">
                <div className="text-red-500">Алдсан тоо: {errorCount}</div>
                <div className="text-green-500">
                  Зөв хариулсан: {33 - errorCount}
                </div>
                <Button
                  type="primary"
                  size="small"
                  onClick={() => (
                    form.resetFields(),
                    setResultData(undefined),
                    seterrorCount(0)
                  )}
                >
                  Шинээр эхлэх
                </Button>
              </div>
            ) : null}
            {error ? <div className="text-red-500 font-bold text-center mb-2">{error}</div> : null}
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Шалгалтаа дуусгах
              </Button>
            </Form.Item>
          </Form>
        </div>
      </> 
      : segmentedValue === "Бичих" ? <Write /> : <div> <Listen /></div>
      }
      </div>
      <FloatButton.BackTop />
    </div>
  );
}
