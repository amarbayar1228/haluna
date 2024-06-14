"use client";
import {
  Button,
  Checkbox,
  Flex,
  FloatButton,
  Form,
  FormProps,
  Image,
  Input,
  Radio,
  Segmented,
  Space,
} from "antd";
import { useForm } from "antd/es/form/Form";
import { useEffect, useState } from "react";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { CommentOutlined, CustomerServiceOutlined } from '@ant-design/icons';

const data = [
  {
    head: "question1",
    question: 1,
    subtitle: <div className="font-bold mt-2">※ [1~4] 다음을 듣고 {"<보기>"}와 같이 물음에 맞는 대답을 고르십시오.</div>,
    title: <div className="font-bold">1. (3점)</div>,
    answer: 2,
    answerStr: "2. 저는 히엔이라고 해요.",
    contentDetail: <div className="relative w-full border border-black mt-4 px-3 py-4 max-md:px-2 mb-2 text-xs">
      <div className="absolute flex justify-center w-full left-0 -top-3 font-bold text-sm">
        <div className="bg-white px-4">보기</div>
      </div>
      <div>
        <div>가: 물이에요?</div>
        <div>나: ________________________</div>
      </div>
      <div className="grid gap-2 grid-cols-4 mt-2">
          <div className="flex items-center col-span-2">
            <div className="flex items-center justify-center text-xs rounded-full w-4 h-4 bg-black text-white mr-1">1</div>
            <div> 네, 물이에요.</div>
          </div>
          <div className="flex items-center col-span-2">
            <div className="flex items-center justify-center text-xs rounded-full w-4 h-4 border-2 mr-1">2</div>
            <div> 네, 물이 아니에요.</div>
          </div>
          <div className="flex items-center col-span-2">
            <div className="flex items-center justify-center text-xs rounded-full w-4 h-4 border-2 mr-1">2</div>
            <div> 아니요, 물이 좋아요.</div>
          </div>
          <div className="flex items-center col-span-2">
            <div className="flex items-center justify-center text-xs rounded-full w-4 h-4 border-2 mr-1">2</div>
            <div> 아니요, 물이 맛있어요.</div>
          </div>
      </div>
  </div>,
    contents: [
      { id: 1, name: "1. 저는 학생이에요." },
      { id: 2, name: "2. 저는 히엔이라고 해요." },
      { id: 3, name: "3. 저는 학생이 아니에요." },
      { id: 4, name: "4. 저는 스티븐이라고 해요." },
    ],
    layout: "col-span-2 text-xs",
  }, 
  {
    head: "question2",
    question: 2,
    title: <div className="font-bold">2. (3점)</div>,
    answer: 1,
    answerStr: "1. 아주 재미있었어요.", 
    contents: [
      { id: 1, name: "1. 아주 재미있었어요." },
      { id: 2, name: "2. 자주 영화를 봤어요." },
      { id: 3, name: "3. 재미있는 영화를 봐요." },
      { id: 4, name: "4. 영화 보는 것을 좋아해요." },
    ],
    layout: "col-span-2 text-[11px]",
  }, 
  {
    head: "question3",
    question: 3,
    title: <div className="font-bold">3. (3점)</div>,
    answer: 4,
    answerStr: "4. 일주일 동안 여행했어요.", 
    contents: [
      { id: 1, name: "1. 여행해 봤어요." },
      { id: 2, name: "2. 제주도에 갔다 왔어요." },
      { id: 3, name: "3. 며칠인지 모르겠어요." },
      { id: 4, name: "4. 일주일 동안 여행했어요." },
    ],
    layout: "col-span-2 text-[11px]",
  }, 
  {
    head: "question4",
    question: 4,
    title: <div className="font-bold">4. (3점)</div>,
    answer: 4,
    answerStr: "4. 공부하는 것 같아요.", 
    contents: [
      { id: 1, name: "1. 자면 돼요." },
      { id: 2, name: "2. 혼자 공부할까요?" },
      { id: 3, name: "3. 아직 못 했어요." },
      { id: 4, name: "4. 공부하는 것 같아요." },
    ],
    layout: "col-span-2 text-[11px]",
  }, 
  {
    head: "question5",
    question: 5,
    subtitle: <div className="font-bold mt-2">※ [5~8] 여기는 어디입니까? {"<보기>"}와 같이 알맞은 것을 고르십시오.</div>,
    title: <div className="font-bold">5. (3점)</div>,
    answer: 3,
    answerStr: "3. 시장",
    contentDetail: <div className="relative w-full border border-black mt-4 px-3 py-4 max-md:px-2 mb-2 text-xs">
      <div className="absolute flex justify-center w-full left-0 -top-3 font-bold text-sm">
        <div className="bg-white px-4">보기</div>
      </div>
      <div>
        <div>가: 어디가 아프세요?</div>
        <div>나: 배가 아파요.</div>
      </div>
      <div className="grid gap-2 grid-cols-4 mt-2">
          <div className="flex items-center col-span-2">
            <div className="flex items-center justify-center text-xs rounded-full w-4 h-4 bg-black text-white mr-1">1</div>
            <div> 병원</div>
          </div>
          <div className="flex items-center col-span-2">
            <div className="flex items-center justify-center text-xs rounded-full w-4 h-4 border-2 mr-1">2</div>
            <div> 학교</div>
          </div>
          <div className="flex items-center col-span-2">
            <div className="flex items-center justify-center text-xs rounded-full w-4 h-4 border-2 mr-1">2</div>
            <div> 시장</div>
          </div>
          <div className="flex items-center col-span-2">
            <div className="flex items-center justify-center text-xs rounded-full w-4 h-4 border-2 mr-1">2</div>
            <div> 백화점</div>
          </div>
      </div>
  </div>,
    contents: [
      { id: 1, name: "1. 역" },
      { id: 2, name: "2. 공항" },
      { id: 3, name: "3. 여행사" },
      { id: 4, name: "4. 운동장" },
    ],
    layout: "max-md:col-span-2 col-span-1  text-xs",
  }, 
  {
    head: "question6",
    question: 6,
    title: <div className="font-bold">6. (3점)</div>,
    answer: 2,
    answerStr: "2. 우체국", 
    contents: [
      { id: 1, name: "1. 도서관" },
      { id: 2, name: "2. 우체국" },
      { id: 3, name: "3. 정류장" },
      { id: 4, name: "4. 미술관" },
    ],
    layout: "max-md:col-span-2 col-span-1 text-xs",
  }, 
  {
    head: "question7",
    question: 7,
    title: <div className="font-bold">7. (3점)</div>,
    answer: 1,
    answerStr: "1. 택시", 
    contents: [
      { id: 1, name: "1. 택시" },
      { id: 2, name: "2. 호텔" },
      { id: 3, name: "3. 회사" },
      { id: 4, name: "4. 빵집" },
    ],
    layout: "max-md:col-span-2 col-span-1 text-xs",
  }, 
  {
    head: "question8",
    question: 8,
    title: <div className="font-bold">8. (3점)</div>,
    answer: 2,
    answerStr: "2. 은행", 
    contents: [
      { id: 1, name: "1. 꽃집" },
      { id: 2, name: "2. 은행" },
      { id: 3, name: "3. 약국" },
      { id: 4, name: "4. 극장" },
    ],
    layout: "max-md:col-span-2 col-span-1 text-xs",
  }, 
  {
    head: "question9",
    question: 9,
    subtitle: <div className="font-bold mt-2">※ [9~12] 다음은 무엇에 대해 말하고 있습니까? {"<보기>"}와 같이 알맞은 것을 고르십시오.</div>,
    title: <div className="font-bold">9. (3점)</div>,
    answer: 3,
    answerStr: "3. 환전",
    contentDetail: <div className="relative w-full border border-black mt-4 px-3 py-4 max-md:px-2 mb-2 text-xs">
      <div className="absolute flex justify-center w-full left-0 -top-3 font-bold text-sm">
        <div className="bg-white px-4">보기</div>
      </div>
      <div>
        <div>가: 누구예요?</div>
        <div>나: 이 사람은 형이고, 이 사람은 동생이에요.</div>
      </div>
      <div className="grid gap-2 grid-cols-4 mt-2">
          <div className="flex items-center col-span-2">
            <div className="flex items-center justify-center text-xs rounded-full w-4 h-4 bg-black text-white mr-1">1</div>
            <div> 가족</div>
          </div>
          <div className="flex items-center col-span-2">
            <div className="flex items-center justify-center text-xs rounded-full w-4 h-4 border-2 mr-1">2</div>
            <div> 친구</div>
          </div>
          <div className="flex items-center col-span-2">
            <div className="flex items-center justify-center text-xs rounded-full w-4 h-4 border-2 mr-1">3</div>
            <div> 선생님</div>
          </div>
          <div className="flex items-center col-span-2">
            <div className="flex items-center justify-center text-xs rounded-full w-4 h-4 border-2 mr-1">4</div>
            <div> 부모님</div>
          </div>
      </div>
  </div>,
    contents: [
      { id: 1, name: "1. 교환" },
      { id: 2, name: "2. 예약" },
      { id: 3, name: "3. 환전" },
      { id: 4, name: "4. 환불" },
    ],
    layout: "max-md:col-span-2 col-span-1  text-xs",
  }, 
  {
    head: "question10",
    question: 10,
    title: <div className="font-bold">10. (3점)</div>,
    answer: 2,
    answerStr: "2. 교통편", 
    contents: [
      { id: 1, name: "1. 일정" },
      { id: 2, name: "2. 교통편" },
      { id: 3, name: "3. 항공료" },
      { id: 4, name: "4. 숙박비" },
    ],
    layout: "max-md:col-span-2 col-span-1 text-xs",
  }, 
  {
    head: "question11",
    question: 11,
    title: <div className="font-bold">11. (3점)</div>,
    answer: 3,
    answerStr: "3. 외모", 
    contents: [
      { id: 1, name: "1. 성격" },
      { id: 2, name: "2. 습관" },
      { id: 3, name: "3. 외모" },
      { id: 4, name: "4. 취미" },
    ],
    layout: "max-md:col-span-2 col-span-1 text-xs",
  }, 
  {
    head: "question12",
    question: 12,
    title: <div className="font-bold">12. (3점)</div>,
    answer: 1,
    answerStr: "1. 경험", 
    contents: [
      { id: 1, name: "1. 경험" },
      { id: 2, name: "2. 계절" },
      { id: 3, name: "3. 쇼핑" },
      { id: 4, name: "4. 운동" },
    ],
    layout: "max-md:col-span-2 col-span-1 text-xs",
  }, 
  
  {
    head: "question13",
    question: 13,
    subtitle: <div className="font-bold mt-2">※ [13~16] 다음 대화를 듣고 알맞은 그림을 고르십시오.</div>,
    title: <div className="font-bold mt-2">13. (3점)</div>,
    answer: 3,
    answerStr: "3", 
    contents: [
      { id: 1, image: "/image/pic13-1.png" },
      { id: 2, image: "/image/pic13-2.png" },
      { id: 3, image: "/image/pic13-3.png" },
      { id: 4, image: "/image/pic13-4.png" },
    ],
    layout: "col-span-2  text-xs",
  },  
  {
    head: "question14",
    question: 14,
    title: <div className="font-bold mt-2">14. (3점)</div>,
    answer: 4,
    answerStr: "4", 
    contents: [
      { id: 1, image: "/image/pic14-1.png" },
      { id: 2, image: "/image/pic14-2.png" },
      { id: 3, image: "/image/pic14-3.png" },
      { id: 4, image: "/image/pic14-4.png" },
    ],
    layout: "col-span-2  text-xs",
  },  
  {
    head: "question15",
    question: 15,
    title: <div className="font-bold mt-2">15. (3점)</div>,
    answer: 1,
    answerStr: "1.", 
    contents: [
      { id: 1, image: "/image/pic15-1.png" },
      { id: 2, image: "/image/pic15-2.png" },
      { id: 3, image: "/image/pic15-3.png" },
      { id: 4, image: "/image/pic15-4.png" },
    ],
    layout: "col-span-2  text-xs",
  },  
  {
    head: "question16",
    question: 16,
    title: <div className="font-bold mt-2">16. (3점)</div>,
    answer: 3,
    answerStr: "3", 
    contents: [
      { id: 1, image: "/image/pic16-1.png" },
      { id: 2, image: "/image/pic16-2.png" },
      { id: 3, image: "/image/pic16-3.png" },
      { id: 4, image: "/image/pic16-4.png" },
    ],
    layout: "col-span-2  text-xs",
  },  
  {
    head: "question17",
    question: 17,
    subtitle: <div className="font-bold mt-2">※ [17~21] 다음을 듣고 {"<보기>"}와 같이 대화 내용과 같은 것을 고르십시오.</div>,
    title: <div className="font-bold">17. (3점)</div>,
    answer: 4,
    answerStr: "4. 여자의 친구가 인터뷰를 합니다.",
    contentDetail: <div className="relative w-full border border-black mt-4 px-3 py-4 max-md:px-2 mb-2 text-xs">
      <div className="absolute flex justify-center w-full left-0 -top-3 font-bold text-sm">
        <div className="bg-white px-4">보기</div>
      </div>
      <div>
        <div>남자: 편지를 써요?</div>
        <div>여자: 네. 동생한테 편지를 써요.</div>
      </div>
      <div className="grid gap-2 grid-cols-4 mt-2">
          <div className="flex items-center col-span-2">
          <div className="flex items-center justify-center text-xs rounded-full w-4 h-4 border-2 mr-1">1</div>
            <div> 남자는 동생입니다</div>
          </div>
          <div className="flex items-center col-span-2">
            <div className="flex items-center justify-center text-xs rounded-full w-4 h-4 border-2 mr-1">2</div>
            <div> 여자는 편지를 읽습니다.</div>
          </div>
          <div className="flex items-center col-span-2">
            <div className="flex items-center justify-center text-xs rounded-full w-4 h-4 border-2 mr-1">3</div>
            <div> 남자는 편지를 씁니다.</div>
          </div>
          <div className="flex items-center col-span-2">
          <div className="flex items-center justify-center text-xs rounded-full w-4 h-4 bg-black text-white mr-1">4</div>
            <div>여자는 동생이 있습니다.</div>
          </div>
      </div>
  </div>,
    contents: [
      { id: 1, name: "1. 여자는 배우입니다." },
      { id: 2, name: "2. 남자는 방송국에서 일합니다." },
      { id: 3, name: "3. 남자는 내일 방송국에 갑니다." },
      { id: 4, name: "4. 여자의 친구가 인터뷰를 합니다." },
    ],
    layout: "max-md:col-span-4 col-span-4  text-xs",
  }, 
  {
    head: "question18",
    question: 18,
    title: <div className="font-bold">18. (3점)</div>,
    answer: 1,
    answerStr: "1. 매주 목요일에 퀴즈쇼가 있습니다.", 
    contents: [
      { id: 1, name: "1. 매주 목요일에 퀴즈쇼가 있습니다." },
      { id: 2, name: "2. 퀴즈쇼는 한국인들도 참가할 수 있습니다." },
      { id: 3, name: "3. 한국 문화와 한국 생활은 문제가 많습니다." },
      { id: 4, name: "4. 홈페이지 게시판에 신청을 하면 안 됩니다." },
    ],
    layout: "col-span-4 text-xs",
  }, 
  {
    head: "question19",
    question: 19,
    title: <div className="font-bold">19. (3점)</div>,
    answer: 4,
    answerStr: "4. 남자는 불고기피자를 별로 안 좋아합니다.", 
    contents: [
      { id: 1, name: "1. 여자는 불고기를 좋아합니다." },
      { id: 2, name: "2. 두 사람은 피자를 먹는 중입니다." },
      { id: 3, name: "3. 두 사람은 지금 바쁘지 않습니다." },
      { id: 4, name: "4. 남자는 불고기피자를 별로 안 좋아합니다." },
    ],
    layout: "col-span-4 text-xs",
  }, 
  {
    head: "question20",
    question: 20,
    title: <div className="font-bold">20. (3점)</div>,
    answer: 2,
    answerStr: "2. 민수는 아침마다 수영을 합니다.", 
    contents: [
      { id: 1, name: "1. 민수는 요즘 계속 피곤합니다." },
      { id: 2, name: "2. 민수는 아침마다 수영을 합니다." },
      { id: 3, name: "3. 아키라는 회사 근처에서 지호를 만났습니다." },
      { id: 4, name: "4. 아키라는 지호를 만나면 스트레스가 풀립니다." },
    ],
    layout: "col-span-4 text-xs",
  }, 
  {
    head: "question21",
    question: 21,
    subtitle: <div className="font-bold mt-2">※ [21~22] 다음을 듣고 물음에 답하십시오.</div>,
    title: <div className="font-bold mt-2">21. 남자가 어떤 이야기를 하고 있는지 고르십시오. (4점)</div>,
    answer: 4,
    answerStr: "4. 소개",  
    contents: [
      { id: 1, name: "1. 안내" },
      { id: 2, name: "2. 광고" },
      { id: 3, name: "3. 초대" },
      { id: 4, name: "4. 소개" },
    ],
    layout: "max-md:col-span-4 col-span-4  text-xs",
  }, 
  {
    head: "question22",
    question: 22,
    title: <div className="font-bold mt-2">22. 들은 내용과 같은 것을 고르십시오. (4점)</div>,
    answer: 2,
    answerStr: "2. 여자의 이상형은 활발한 사람입니다.",  
    contents: [
      { id: 1, name: "1. 여자는 학생입니다." },
      { id: 2, name: "2. 여자의 이상형은 활발한 사람입니다." },
      { id: 3, name: "3. 남자는 말을 재미있게 하는 학생입니다." },
      { id: 4, name: "4. 남자는 성격이 조용한 한국 친구가 있습니다." },
    ],
    layout: "max-md:col-span-4 col-span-4  text-xs",
  }, 
  {
    head: "question23",
    question: 23,
    subtitle: <div className="font-bold mt-2">※ [23~24] 다음을 듣고 물음에 답하십시오.</div>,
    title: <div className="font-bold mt-2">23. 여자가 집을 구하려는 이유를 고르십시오. (4점)</div>,
    answer: 4,
    answerStr: "4. 지금 사는 집이 학교에서 너무 멀어서",  
    contents: [
      { id: 1, name: "1. 지금 사는 집의 시설이 안 좋아서" },
      { id: 2, name: "2. 지금 사는 집의 방이 너무 좁아서" },
      { id: 3, name: "3. 지금 사는 집이 오래된 원룸이라서" },
      { id: 4, name: "4. 지금 사는 집이 학교에서 너무 멀어서" },
    ],
    layout: "max-md:col-span-4 col-span-4  text-xs",
  }, 
  {
    head: "question24",
    question: 24,
    title: <div className="font-bold mt-2">24. 들은 내용과 같은 것을 고르십시오. (4점)</div>,
    answer: 1,
    answerStr: "1. 여자는 학교 근처로 이사하고 싶습니다.",  
    contents: [
      { id: 1, name: "1. 여자는 학교 근처로 이사하고 싶습니다." },
      { id: 2, name: "2. 여자와 남자는 원룸에 함께 살고 있습니다." },
      { id: 3, name: "3. 남자는 시설이 잘되어 있는 원룸을 구했습니다." },
      { id: 4, name: "4. 남자는 수업 후에 학교 근처에 있는 부동산에 갑니다." },
    ],
    layout: "max-md:col-span-4 col-span-4  text-xs",
  },
 {
    head: "question25",
    question: 25,
    subtitle: <div className="font-bold mt-2">※ [25~26] 다음을 듣고 물음에 답하십시오.</div>,
    title: <div className="font-bold mt-2">25. 두 사람이 무엇에 대해 이야기를 하고 있는지 고르십시오. (4점)</div>,
    answer: 2,
    answerStr: "2. ‘소리사랑’ 기타 동호회",  
    contents: [
      { id: 1, name: "1. 강남역 주말 모임 시간" },
      { id: 2, name: "2. ‘소리사랑’ 기타 동호회" },
      { id: 3, name: "3. 일요일에 가면 좋은 모임 " },
      { id: 4, name: "4. 좋은 친구들을 만나는 방법" },
    ],
    layout: "max-md:col-span-4 col-span-4  text-xs",
  }, 
  {
    head: "question26",
    question: 26,
    title: <div className="font-bold mt-2">26. 들은 내용과 같은 것을 고르십시오. (4점)</div>,
    answer: 1,
    answerStr: "1. 남자는 이번 일요일에 기타 동호회에 갑니다.",  
    contents: [
      { id: 1, name: "1. 남자는 이번 일요일에 기타 동호회에 갑니다." },
      { id: 2, name: "2. 남자와 여자는 강남역 앞에서 처음 만났습니다." },
      { id: 3, name: "3. 여자는 한 달에 만 원씩 남자에게 돈을 줍니다." },
      { id: 4, name: "4. 남자와 여자는 이번 일요일에 같이 영화를 볼 것입니다." },
    ],
    layout: "max-md:col-span-4 col-span-4  text-xs",
  },
  {
    head: "question27",
    question: 27,
    subtitle: <div className="font-bold mt-2">※ [27~28] 다음을 듣고 물음에 답하십시오.</div>,
    title: <div className="font-bold mt-2">27. 두 사람이 무엇에 대해 이야기를 하고 있는지 고르십시오. (4점)</div>,
    answer: 4,
    answerStr: "4. 외국인을 위한 사물놀이 수업",  
    contents: [
      { id: 1, name: "1. 국립국악원의 무료 수업" },
      { id: 2, name: "2. 한국인을 위한 국악 수업" },
      { id: 3, name: "3. 국립국악원의 추천 프로그램 " },
      { id: 4, name: "4. 외국인을 위한 사물놀이 수업" },
    ],
    layout: "max-md:col-span-4 col-span-4  text-xs",
  }, 
  {
    head: "question28",
    question: 28,
    title: <div className="font-bold mt-2">28. 들은 내용과 같은 것을 고르십시오. (4점)</div>,
    answer: 2,
    answerStr: "2. 외국인을 위한 수업은 토요일에만 있습니다.",  
    contents: [
      { id: 1, name: "1. 전화로만 수업을 신청할 수 있습니다." },
      { id: 2, name: "2. 외국인을 위한 수업은 토요일에만 있습니다." },
      { id: 3, name: "3. 여자는 문의할 게 있어서 국립국악원에 갔습니다." },
      { id: 4, name: "4. 수업을 들을 때 필요한 것은 돈을 내고 사야 합니다." },
    ],
    layout: "max-md:col-span-4 col-span-4  text-xs",
  },
  {
    head: "question29",
    question: 29,
    subtitle: <div className="font-bold mt-2">※ [29~30] 다음을 듣고 물음에 답하십시오.</div>,
    title: <div className="font-bold mt-2">29. 남자는 누구입니까?(4점)</div>,
    answer: 3,
    answerStr: "3. 지하철 유실물 센터 직원",  
    contents: [
      { id: 1, name: "1. 가방 가게 직원" },
      { id: 2, name: "2. 출입국관리사무소 직원" },
      { id: 3, name: "3. 지하철 유실물 센터 직원 " },
      { id: 4, name: "4. 백화점 분실물 보관소 직원" },
    ],
    layout: "max-md:col-span-4 col-span-4  text-xs",
  }, 
  {
    head: "question30",
    question: 30,
    title: <div className="font-bold mt-2">30. 들은 내용과 같은 것을 고르십시오. (4점)</div>,
    answer: 1,
    answerStr: "1. 여자는 오늘 아침에 가방을 잃어버렸습니다.",  
    contents: [
      { id: 1, name: "1. 여자는 오늘 아침에 가방을 잃어버렸습니다." },
      { id: 2, name: "2. 가방은 하얀색이고 까만색 인형이 달려 있습니다. " },
      { id: 3, name: "3. 가방 안에는 책 두 권하고 핸드폰이 들어 있습니다. " },
      { id: 4, name: "4. 남자는 여자의 가방을 찾아서 여자에게 주었습니다." },
    ],
    layout: "max-md:col-span-4 col-span-4  text-xs",
  },




  
  
  

  




  
  
  

  
  
  
  
  
  
  


];

export default function Listen() {
  const [resultData, setResultData] = useState();
  const [errorCount, seterrorCount] = useState(0);
  const [segmentedValue, setSegmentedValue] = useState("Унших");
  const [error, setError] = useState<string | undefined>();
  const [open, setOpen] = useState(true);

  const [form] = useForm();
  type FieldType = {
    question?: number;
    password?: string;
    remember?: string;
  };
  useEffect(() => {}, [errorCount]);

  const onFinish: FormProps<any>["onFinish"] = (values) => {
    setError(undefined)
    seterrorCount(0);
    setResultData(values);
    var errorResultNumber: number = 0;
    
    data.forEach((element, i) => {
          if (element.head === Object.entries(values)[i]?.[0]) {
            if (element.answer !== Object.entries(values)[i][1]) {
                  errorResultNumber++;
            }
          }
  
    });
    seterrorCount(errorResultNumber);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
    setError("Бүх талбарыг бөглөнө үү!")
  };
  return (
     <>
        <div className="w-full">
          <div className="flex-col border border-black justify-between gap-5 w-full">
          
            <div className="flex justify-between gap-5 w-full px-12 py-3 font-bold max-md:px-2">
              <div>2024학년도 한국어 능력평가</div>
              <div>고사 일자 2024년 월 일</div>
            </div>
            <div className="text-center font-bold pb-3">듣기</div>
            <div className="flex justify-between bg-gray-300 w-full font-bold">
              <div className="text-center w-full border border-black">벡잠</div>
              <div className="text-center w-full border border-black">이름</div>
            </div>
            <div className="flex justify-between  w-full">
              <div className="text-center w-full border border-black py-2">
                20문제*3점+10문제*4점=100점
              </div>
              <div className="text-center w-full border border-black"></div>
            </div>
          </div>
          <div>
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
                {e.subtitle ? e.subtitle : ""} 
                {e.headTitle ? e.headTitle : null} 
                {e.contentDetail ? e.contentDetail : null}
                {e.title}
                <Form.Item<any>
                  label=""
                  name={e.head}
                  rules={[
                    {
                      required: true,
                      message: "Заавал бөглөнө үү!",
                    },
                  ]}
                  className="mt-2 mx-2"
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
                          {details.name ? details.name : 
                            <Image alt="exam" src={details.image}/>
                          }

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
          <FloatButton.Group
            onClick={() => setOpen(!open)}
            trigger="click"
            open={open}
            type="primary"
            style={{ left: 10, top: 100 }}
            icon={<CustomerServiceOutlined />}
          >
            <div className="w-64"> 
            <AudioPlayer
              autoPlay
              src="/listen/sonsgol.mp3"
              // other props here
            />
            </div>
            
          </FloatButton.Group>
        </div> 
     </>
  );
}
