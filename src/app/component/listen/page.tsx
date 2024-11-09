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
 
export default function Listen() {
 const [blsm , setBls] = useState(false);
 useEffect(()=>{
  setTimeout(()=>{
    setBls(true)
  },1800)
 },[])
  return (
     <>
        <div className="w-full"> 
        {blsm ? 
        <AudioPlayer
          
              autoPlay
              src="/listen/sonsgol.mp3"
              // other props here
            /> : null }
        </div> 
     </>
  );
}
