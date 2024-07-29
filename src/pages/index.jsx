import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Headline from "@/components/Headline";
import { useCallback, useEffect, useState } from "react";

export default function Home() {

  const [count, setCount] = useState(1);
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(true);


  const handleClick = useCallback(
    (e) => {
      if (count < 10) {
        setCount((count) => count + 1);
      }
    }, [count])

    const handleDisplay =useCallback((()=>{
      setIsShow((isShow)=>!isShow)
    },[]))

            // if(isShow){
        //   return false;
        // }
        // 三項演算子ver
        // return isShow ? false : true;

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue"
    return () => {
      document.body.style.backgroundColor = "pink"
    }
  }, [])

  const handleChange =useCallback((e) => {
    setText(e.target.value)
   },[])

  return (
    <>

      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div style={{ margin: "0 auto", textAlign: "center" }}>
       {isShow ? ( <h1>{count}</h1>):(null)}
        <button onClick={handleClick}>ボタン</button>
        <button onClick={handleDisplay}>
        {isShow ? "非表示" : "表示"}</button>
        <br />
        <input type="text"
         value={text}
         onChange={handleChange} />
      </div>

      <Main page="index" />
      <Footer />
    </>
  );
}