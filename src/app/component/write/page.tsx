"use client";
import {
  Button, 
  Form,
  FormProps,
  Input, 
} from "antd";
import { useForm } from "antd/es/form/Form";
import { useEffect, useState } from "react";

const data = [
  {
    head: "question1",
    question: 1,
    subTitle: <div className="relative mt-4"> 
      <div className="text-sm"> ※   [1∼6] 다음 문법을 사용해서 대화를 완성하십시오. (각 3점). </div> 
      <div className="text-sm ml-14"> 단, 각 문법은 한 번만 쓰십시오. </div> 
    </div>, 
    answer: 3,
    answerStr: "갈래요",
    contentDetail: <div className="relative text-center w-full border border-black mt-4 px-3 py-4 max-md:px-2 text-xs">
              <div className="flex justify-between w-full px-20 max-md:px-2">
                <div className="flex flex-col gap-2 text-left">
                  <div>-(으)ㄴ 것 같다</div>
                  <div>-(으)ㄹ 래요?</div>
                  <div>-(으)려면</div>
                </div>
                <div className="flex flex-col gap-2 text-left">
                  <div>-(으)ㄴ /는 편이다</div>
                  <div>-아/어 버리다</div>
                  <div>-밖에 </div>
                </div>
              </div>
              <div className="absolute flex justify-center w-full left-0 -top-3 font-bold text-sm">
                <div className="bg-white px-4">보기</div>
              </div>
    </div>,
    contents: <div className="flex border border-black mt-4 text-xs">
        <div className="border-r px-4 border-black flex justify-center items-center">1. </div>
        <div className="flex flex-col gap-3 px-4 py-3">
          <div className="flex justify-center items-center gap-2">
              <div>가: 나나 씨, 오늘 시간 있으면 백화점에 같이... <Input  placeholder="Нөхөж бичнэ үү!" size="small" className="max-md:mt-1 w-40"/>.?</div>
          </div>
          <div>
              나: 미안해요. 오늘은 너무 바빠서 못 가요. 
          </div>
        </div>
    </div>,
    layout: "col-span-1 text-xs",
  }, 
  {
    head: "question2",
    question: 2,
    answer: 3,
    answerStr: "싫어하는 것같아요", 
    contents: <div className="flex border border-black text-xs">
        <div className="border-r px-4 border-black flex justify-center items-center">2. </div>
        <div className="flex flex-col gap-3 px-4 py-3">  
          <div>
              가: 마리코 씨는 운동을 안 해요.
          </div>
          <div className="flex justify-center items-center gap-2">
              <div>나: 운동을 ...</div>
              <Input placeholder="Нөхөж бичнэ үү!" size="small" className="w-40"/>
          </div>
        
        </div>
    </div>,
    layout: "col-span-1 text-xs",
  }, 
  {
    head: "question3",
    question: 3,
    answer: 3,
    answerStr: "안 먹는 편이에요", 
    contents: <div className="flex border border-black text-xs">
        <div className="border-r px-4 border-black flex justify-center items-center">3. </div>
        <div className="flex flex-col gap-3 px-4 py-3">  
          <div>
            가: 보통 아침을 드세요?
          </div>
          <div className="flex justify-center items-center gap-2">
              <div>나: 아니요, 시간이 없어서 잘 ...</div>
              <Input placeholder="Нөхөж бичнэ үү!" size="small" className="w-32"/>
          </div>
        
        </div>
    </div>,
    layout: "col-span-1 text-xs",
  }, 
  {
    head: "question4",
    question: 4,
    answer: 3,
    answerStr: "한 명밖에 없어요", 
    contents: <div className="flex border border-black text-xs">
        <div className="border-r px-4 border-black flex justify-center items-center">4. </div>
        <div className="flex flex-col gap-3 px-4 py-3">  
          <div>
            가: 교실에 학생이 많아요?
          </div>
          <div className="flex justify-center items-center gap-2">
              <div>나: 아니요, ...</div>
              <Input placeholder="Нөхөж бичнэ үү!" size="small" className="w-32"/>
          </div>
        
        </div>
    </div>,
    layout: "col-span-1 text-xs",
  }, 
  {
    head: "question5",
    question: 5,
    answer: 3,
    answerStr: "가려면", 
    contents: <div className="flex border border-black text-xs">
        <div className="border-r px-4 border-black flex justify-center items-center">5. </div>
        <div className="flex flex-col gap-3 px-4 py-3">  
          <div>
            가: 인천 공항에 어떻게 가요?
          </div>
          <div className="flex justify-center items-center gap-2">
              <div>나: 인천 공항에 ... <Input placeholder="Нөхөж бичнэ үү!" size="small" className="mx-1 w-32"/> 학교 앞에서 공항버스를 타세요..</div>
              
          </div>
        
        </div>
    </div>,
    layout: "col-span-1 text-xs",
  }, 
  {
    head: "question6",
    question: 6,
    answer: 3,
    answerStr: "돌아와버렸어요", 
    contents: <div className="flex border border-black text-xs">
        <div className="border-r px-4 border-black flex justify-center items-center">6. </div>
        <div className="flex flex-col gap-3 px-4 py-3">  
          <div>
              가: 왜 이렇게 일찍 집에 왔어요?
          </div>
          <div className="flex flex-col gap-1">
              <div>나: 한 시간을 기다렸는데 친구가 안 와서</div>
              <div>그냥 집에  ... <Input placeholder="Нөхөж бичнэ үү!" size="small" className="mx-1 w-32"/>.</div>
          </div>
        </div>
    </div>,
    layout: "col-span-1 text-xs",
  }, 
  {
    head: "question7",
    question: 7,
    subTitle: <div className="relative mt-4"> 
      <div className="text-sm"> ※ [7∼9] {"<보기>"} 와 같이 틀린 부분을 찾고 바르게 고치십시오. (각 4점) </div> 

    </div>, 
    answer: 3,
    answerStr: "친구 생일이라서 선물을 사야 해요", 
    contentDetail: <div className="relative text-center w-full border border-black mt-4 px-3 py-4 max-md:px-2 mb-2 text-xs">
    <div className="flex justify-between w-full px-20 max-md:px-2">
      <div className="flex flex-col gap-1 w-full">
        <div className="flex justify-center">감기에 <div className="font-bold px-2 underline">걸리려면</div> 약을 먹어야 해요.</div> 
        <div className="flex justify-center">감기에 <div className="font-bold px-2 underline">걸리면</div> 약을 먹어야 해요.</div> 
      </div>
    </div>
    <div className="absolute flex justify-center w-full left-0 -top-3 font-bold text-sm">
      <div className="bg-white px-4">보기</div>
    </div>
    </div>,
    contents: <div className="flex border border-black text-xs">
        <div className="border-r px-4 border-black flex justify-center items-center">7. </div>
        <div className="flex flex-col gap-3 px-4 py-3">  
          <div className="flex">
              내일이 친구 <div className="px-2 underline">생일 때문에</div> 선물을 사야 해요.
          </div>
          <div className="flex flex-col gap-1">
              <div>내일이 ... <Input placeholder="Нөхөж бичнэ үү!" size="small" className="mx-1 w-32"/>.</div>
          </div>
        </div>
    </div>,
    layout: "col-span-1 text-xs",
  }, 
  {
    head: "question8",
    question: 8,
    answer: 3,
    answerStr: "지갑을 잃어버렸는데 오늘 찾았어요", 
    contents: <div className="flex border border-black text-xs">
        <div className="border-r px-4 border-black flex justify-center items-center">8. </div>
        <div className="flex flex-col gap-3 px-4 py-3">  
          <div className="flex">
            어제 학교에서 지갑을 <div className="px-2 underline">잊어버렸는데</div> 오늘 찾았어요.
          </div>
          <div className="flex flex-col gap-1">
              <div>어제 학교에서... <Input placeholder="Нөхөж бичнэ үү!" size="small" className="mx-1 w-32"/>.</div>
          </div>
        </div>
    </div>,
    layout: "col-span-1 text-xs",
  }, 
  {
    head: "question9",
    question: 9,
    answer: 3,
    answerStr: "나랑 같이 저녁을 먹으러 가", 
    contents: <div className="flex border border-black text-xs">
        <div className="border-r px-4 border-black flex justify-center items-center">9. </div>
        <div className="flex flex-col gap-3 px-4 py-3">  
          <div className="flex">
            저랑 같이 저녁을 <div className="px-2 underline">드시러</div> 가.
          </div>
          <div className="flex flex-col gap-1">
              <div><Input placeholder="Нөхөж бичнэ үү!" size="small" className="mx-1 w-32"/></div>
          </div>
        </div>
    </div>,
    layout: "col-span-1 text-xs",
  }, 
  {
    head: "question10",
    question: 10,
    answer: 3,
    answerStr: "저는 샤오민 씨처럼 운돌을 잘했으면 좋겠어요", 
    subTitle: <div className="relative mt-4"> 
      <div className="text-sm"> ※ [10∼12] {"<보기>"} 와 같이 순서에 맞게 문장을 만드십시오. (각 4점). (각 4점) </div> 
    </div>, 
      contentDetail: <div className="relative text-center w-full border border-black mt-4 px-3 py-4 max-md:px-2 mb-2 text-xs">
      <div className="flex justify-between w-full px-20 max-md:px-2">
        <div className="flex flex-col gap-1 w-full">
          <div className="flex justify-center">나는 / 비빔밥 / 불고기를 / 더 / 좋아해요 / 보다</div> 
          <div className="flex justify-center underline">→ 나는 비빔밥보다 불고기를 더 좋아해요 .</div> 
        </div>
      </div>
      <div className="absolute flex justify-center w-full left-0 -top-3 font-bold text-sm">
        <div className="bg-white px-4">보기</div>
      </div>
    </div>,
    contents: <div className="flex border border-black text-xs">
        <div className="border-r px-4 border-black flex justify-center items-center">10. </div>
        <div className="flex flex-col gap-3 px-4 py-3">  
          <div className="flex">
            좋겠어요 / 운동을 / 저는 / 샤오밍 씨 / 잘했으면 / 처럼
          </div>
          <div className="flex flex-col gap-1">
            <div><Input placeholder="Нөхөж бичнэ үү!" size="small" className="w-full"/></div>
          </div>
        </div>
    </div>,
    layout: "col-span-1 text-xs",
  }, 
  {
    head: "question11",
    question: 11,
    answer: 3,
    answerStr: "담배를 많이 피워서 건강이 안 좋아요",  
    contents: <div className="flex border border-black text-xs">
        <div className="border-r px-4 border-black flex justify-center items-center">11. </div>
        <div className="flex flex-col gap-3 px-4 py-3">  
          <div className="flex">
            안 / 건강이 / 담배를 / 좋아요 / 피워서 / 많이
          </div>
          <div className="flex flex-col gap-1">
            <div><Input placeholder="Нөхөж бичнэ үү!" size="small" className="w-full"/></div>
          </div>
        </div>
    </div>,
    layout: "col-span-1 text-xs",
  }, 
  {
    head: "question12",
    question: 12,
    answer: 3,
    answerStr: "이 옷을 좀 더 큰 거로 바꿨으면 좋곘어요",  
    contents: <div className="flex border border-black text-xs">
        <div className="border-r px-4 border-black flex justify-center items-center">12. </div>
        <div className="flex flex-col gap-3 px-4 py-3">  
          <div className="flex">
            이 / 바꿨으면 / 큰 / 좀 더 / 옷을 / 좋겠어요 / 거로
          </div>
          <div className="flex flex-col gap-1">
            <div><Input placeholder="Нөхөж бичнэ үү!" size="small" className="w-full"/></div>
          </div>
        </div>
    </div>,
    layout: "col-span-1 text-xs",
  }, 
  {
    head: "question13",
    question: 13,
    answer: 3,
    answerStr: "혼자하는 것을",  
    subTitle: <div className="relative mt-4"> 
    <div className="text-sm"> ※ [13~14] 다음을 읽고 ( )에 알맞은 말을 쓰십시오. (각 4점)</div> 
  </div>, 
    contents: <div className="flex border border-black text-xs mt-2">
        <div className="border-r px-4 border-black flex justify-center items-center">13. </div>
        <div className="flex flex-col gap-3 px-4 py-3">  
          <div className="leading-6">
            저는 다른 사람들과 같이 여행하는 것보다 ( ..
            <Input placeholder="Нөхөж бичнэ үү!" size="small" className="w-32"/>..
            ) 더 좋아합 니다. 혼자 여행을 하면 여행 일정을 마음대로 계획할 수 있고 생각할 수 있는 시간 이 많아서 좋습니다. 그리고 여행 간 곳에서 새 친구들을 만날 수 있어서 좋습니다.
          </div>
          
        </div>
    </div>,
    layout: "col-span-1 text-xs",
  }, 
  {
    head: "question14",
    question: 14,
    answer: 3,
    answerStr: "가 보기로",   
    contents: <div className="flex border border-black text-xs mt-2">
        <div className="border-r px-4 border-black flex justify-center items-center">14. </div>
        <div className="flex flex-col gap-3 px-4 py-3">  
          <div className="leading-6">
          요즘 입맛이 없어서 밥을 잘 못 먹습니다. 보통 때는 괜찮은데 아침에 일어날 때 조금 어지럽습니다. 부모님이 너무 걱정을 하셔서 내일 부모님과 함께 병원에 한번( ..
            <Input placeholder="Нөхөж бичнэ үү!" size="small" className="w-20"/>..
            ) 했습니다.
          </div>
          
        </div>
    </div>,
    layout: "col-span-1 text-xs",
  }, 
];

export default function Write() {
  const [resultData, setResultData] = useState();
  const [errorCount, seterrorCount] = useState(0);
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
    console.log("values ", values);
    seterrorCount(0);
    setResultData(values);
    var errorResultNumber: number = 0;
    
    data.forEach((element, i) => {
          if (element.head === Object.entries(values)[i]?.[0]) {
            if (element.answerStr !== Object.entries(values)[i][1]) {
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
    setError("Бүх талбарыг заавал бөглөнө үү!");
  };
  return (
     <div> 
        <div className="w-full border border-black">
          <div className="flex-col justify-between gap-5 w-full">
            <div className="flex justify-between gap-5 w-full px-12 py-3 font-bold max-md:px-2">
              <div>2024학년도 한국어 능력평가</div>
              <div>고사 일자 2024년 월 일</div>
            </div>
            <div className="text-center font-bold pb-3">쓰기</div>
            <div className="flex justify-between bg-gray-300 w-full font-bold">
              <div className="text-center w-full border border-black">벡잠</div>
              <div className="text-center w-full border border-black">이름</div>
            </div>
            <div className="flex justify-between  w-full">
              <div className="text-center w-full border border-black py-2">
                6문제*3점+8문제*4점+1문제*50=100점
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
                Зөв хариулсан: {14 - errorCount}
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
                <div className="font-bold !text-3xl">
                  {e.subTitle ? e.subTitle : null}
                </div>

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
                >
                  {e.contents}
                </Form.Item> 

                <div className="-mt-4"> 
                  {resultData ? (
                    e.head == Object.entries(resultData)[i]?.[0] ? (
                      e.answerStr === Object.entries(resultData)[i]?.[1] ? (
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
                  Зөв хариулсан: {14 - errorCount}
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
     </div>
  );
}
