"use client";
import {
  Button,
  Checkbox,
  Flex,
  Form,
  FormProps,
  Input,
  Radio,
  Space,
} from "antd";
import { useForm } from "antd/es/form/Form";
import { useEffect, useState } from "react";

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
    layout: "col-span-1",
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
    layout: "col-span-1",
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
    layout: "col-span-1",
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
    layout: "col-span-1",
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
    layout: "col-span-1",
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
    layout: "col-span-2 w-full",
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
    layout: "col-span-2 w-full",
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

    layout: "col-span-2 w-full",
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
    layout: "col-span-2 w-full",
  },
  {
    head: "question10",
    question: 10,
    title: (
      <div className="flex text-center justify-center w-full">
        추석에 고향에 가려면 표를 빨리 사{" "}
        <p className="underline pl-1 pr-1">놓아야</p> 꽃집이 돼요.
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
    layout: "col-span-2 w-full",
  },
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
    layout: "col-span-2 w-full",
  },
];

export default function Home() {
  const [resultData, setResultData] = useState();
  const [errorCount, seterrorCount] = useState(0);
  const [form] = useForm();
  type FieldType = {
    question?: number;
    password?: string;
    remember?: string;
  };
  useEffect(() => {}, [errorCount]);
  const onFinish: FormProps<any>["onFinish"] = (values) => {
    seterrorCount(0);
    setResultData(values);
    var errorResultNumber: number = 0;
    data.forEach((element, i) => {
      if (element.head === Object.entries(values)[i][0]) {
        if (element.answer !== Object.entries(values)[i][1]) {
          errorResultNumber++;
        }
      }
    });
    console.log("errorResultNumber: ", errorResultNumber);
    seterrorCount(errorResultNumber);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="flex justify-center w-full mt-6">
      <div className="bg-white w-[600px] max-md:w-ful m-2 p-6 max-md:mx-6 max-md:p-2 border border-black text-xs mb-20">
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
                Зөв хариулсан: {34 - errorCount}
              </div>
              <div>Нийт: 34 </div>
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
                <div className={"font-bold text-sm mt-3"}>
                  {e.question} (................ )
                </div>
                <div className="text-center border border-black px-10 py-1 mt-2">
                  {e.title}
                </div>

                <Form.Item<any>
                  label=""
                  name={e.head}
                  rules={[
                    {
                      required: true,
                      message: "Заавал бөглөнө үү!",
                    },
                  ]}
                  className="mt-2"
                >
                  <Radio.Group
                    size="small"
                    className="w-full"
                    style={{ width: "100%" }}
                  >
                    <div className="grid grid-cols-4 w-full">
                      {e.contents.map((details: any, index: number) => (
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
                    e.head === Object.entries(resultData)[i][0] ? (
                      e.answer === Object.entries(resultData)[i][1] ? (
                        ""
                      ) : (
                        <div className="text-red-500">
                          Зөв хариулт: {e.answerStr}
                        </div>
                      )
                    ) : (
                      "aldaa taarahq bn "
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
                  Зөв хариулсан: {34 - errorCount}
                </div>
                <div>Нийт: 34 </div>
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
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Шалгалтаа дуусгах
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
