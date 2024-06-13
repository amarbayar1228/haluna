import {
  Button,
  Checkbox,
  Flex,
  Form,
  FormProps,
  Input,
  Radio,
  Segmented,
  Space,
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
    contentDetail: <div className="relative text-center w-full border border-black mt-4 px-3 py-4">
              <div className="flex justify-between w-full px-20">
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
    contents: <div className="flex border border-black mt-4 ">
        <div className="border-r px-4 border-black flex justify-center items-center">1. </div>
        <div className="flex flex-col gap-3 px-4 py-3"> 
          <div className="flex justify-center gap-2">
              <div>가: 나나 씨, 오늘 시간 있으면 백화점에 같이 </div>
              <Input placeholder="Нөхөж бичнэ үү!" size="small" className="w-40"/>
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
    answerStr: "싫어하는 것같요", 
    contents: <div className="flex border border-black">
        <div className="border-r px-4 border-black flex justify-center items-center">2. </div>
        <div className="flex flex-col gap-3 px-4 py-3">  
          <div>
              나: 미안해요. 오늘은 너무 바빠서 못 가요. 
          </div>
          <div className="flex justify-center gap-2">
              <div>나: 운동을 </div>
              <Input placeholder="Нөхөж бичнэ үү!" size="small" className="w-40"/>
          </div>
        
        </div>
    </div>,
    layout: "col-span-1 text-xs",
  }, 
];

export default function Write() {
  const [resultData, setResultData] = useState();
  const [errorCount, seterrorCount] = useState(0);
  const [segmentedValue, setSegmentedValue] = useState("Унших");
  const [form] = useForm();
  type FieldType = {
    question?: number;
    password?: string;
    remember?: string;
  };
  useEffect(() => {}, [errorCount]);

  const onFinish: FormProps<any>["onFinish"] = (values) => {

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
