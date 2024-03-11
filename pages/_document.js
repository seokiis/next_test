import { Html, Head, Main, NextScript } from "next/document";

// html 뼈대
// 서버에서 rendering 할 때만 실행, Client Side에서는 실행되지 않음.
// interactive한 js코드는 동작하지 않음. ex) onClick, onChange, useState, useEffect
// react code 를 넘어서는 부분 처리 ex) lang="ko"
export default function Document() {
  return (
    <Html lang="ko">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
