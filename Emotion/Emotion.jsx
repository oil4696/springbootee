/**
 * Emotion(CSS in Js 라이브러리)
 * 1. 라이브러리 설치 -> npm install @emotion/react
 * 2. jsx 태그의 css 속석 활성화 -> 주석으로 @jsxImportSource @react/emotion 
 * 3. css 객체 import => css``문자열로 css 작성
 * 3. 확장프로그램 으로 vscode-styLed-components 설치
 */

 /** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import React from 'react';

const box1 = css`
    width: 100px;
    height: 100px;
    background-color: black;
`;

const box2 = (color) =>css`
    width: 100px;
    height: 100px;
    background-color: ${color};
`;


function Emotion(props) {
    return (
        <div>
            <div css={box1}></div>
            <div css={box2("gray")}></div>
        </div>
    );
}

export default Emotion;