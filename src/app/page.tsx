"use client";
import { Button, Checkbox, Form, FormProps, Input, Radio } from "antd";
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
      <div className="bg-white w-[600px] max-md:w-ful m-2 p-6 max-md:mx-6 max-md:p-2 border border-black text-xs">
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
            wrapperCol={{ span: 16 }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            {data?.map((e: any, i: number) => (
              <div className="text-xs" key={i}>
                <div className={"font-bold text-sm mt-3"}>
                  {e.question} (................ )
                </div>
                <div className="border border-black px-10 py-1 mt-2">
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
                  <Radio.Group size="small">
                    {e.contents.map((details: any, index: number) => (
                      <Radio value={details.id} key={index}>
                        {" "}
                        {details.name}{" "}
                      </Radio>
                    ))}
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
