import styled from 'styled-components';

export const MainContainer = styled.main`
    
    display: grid;
    grid-template-columns: auto 678px 350px auto;
    grid-template-rows: 20px auto 50px 80px;
    grid-template-areas: '. . . .'
                        '. bet cart .'
                        '. . . .'
                        'footer footer footer footer';
    gap: 35px;
        

    & > .bet {
        
        grid-area: bet;
        
    }

    & > .cart {
        
        background-color: #fff;
        border-radius: 10px;
        max-height: 600px;
        border: 1px solid #E2E2E2;
        grid-area: cart;
        display: flex;
        flex-direction: column;
        align-items: center;
        
    }

    & > .cart > span {
        
        text-transform: uppercase;
        color: #707070;
        font-style: italic;
        font-size: 24px;
        font-weight: 700;
        align-self: start;
        margin-top: 32px;
        margin-left: 18px;
        margin-bottom: 35px;
        
    }

    & > .cart > .bet-selections {
        
        display: flex;
        flex-direction: column;
        color: #868686;
        overflow-y: scroll;
        height: 200px;
        align-items: center;
        margin-bottom: 40px;
        padding: 15px 0px 10px 0px;
        align-items: center;
        
    }

    & > .cart > .bet-selections::-webkit-scrollbar-thumb {
        
        border-radius: 12px;
        background-color: #E2E2E2;
        
    }

    & > .cart > .bet-selections::-webkit-scrollbar {
        
        width: 5px;
        
    }

    & > .cart > .bet-selections > .bet-content {
        
        display: flex;
        align-items: center;
        
    }

    & > .cart > .bet-selections > .bet-content > .separator-lotofacil {
        
        width: 4px;
        height: 86px;
        background-color: #7F3992;
        border-radius: 100px 0px 0px 100px;
        margin: 0px 14px;
        
    }

    & > .cart > .bet-selections > .bet-content > .separator-megasena {
        
        width: 4px;
        height: 86px;
        background-color: #01AC66;
        border-radius: 100px 0px 0px 100px;
        margin: 0px 14px;
        
    }

    & > .cart > .bet-selections > .bet-content > .separator-quina {
        
        width: 4px;
        height: 86px;
        background-color: #F79C31;
        border-radius: 100px 0px 0px 100px;
        margin: 0px 14px;
        
    }

    & > .cart > .bet-selections > .bet-content > .bet-info {
        
        display: flex;
        flex-direction: column;
        
    }

    & > .cart > .bet-selections > .bet-content > .bet-info > span:first-of-type {
        
        font-style: italic;
        font-weight: 500;
        font-size: 13px;
        width: 230px;
        
    }

    & > .cart > .bet-selections > .bet-content > .bet-info > div {
        
        display: flex;
        align-items: center;
        margin-top: 9px;
        
    }

    & > .cart > div:nth-child(3) {
        
        text-transform: uppercase;
        color: #707070;
        align-self: start;
        font-size: 24px;
        margin-top: 15px;
        margin-left: 18px;
        margin-bottom: 35px;
        
    }

    & > .cart > div:nth-child(3) > span:first-of-type {
        
        font-weight: 700;
        font-style: italic;
        margin-right: 5px;
        
    }

    & > .cart > div:nth-child(4) {
        
        background-color: #e2e2e2;
        width: 100%;
        height: 100%;
        border-radius: 0px 0px 10px 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 35px;
        color: #27C383;
        font-style: italic;
        font-weight: 500;
        cursor: pointer;
        border-top: 1px solid rgb(208, 208, 208);
        transition: 0.3s background linear;
        
    }

    & > .cart > div:nth-child(4):hover {
        
        background-color: #dfdfdf;
        
    }

    & > .cart > div:nth-child(4) span {
        
        margin-right: 14px;
        
    }

    & > .cart > .bet-selections > .bet-content > .bet-info > div > span:first-of-type {
        
        font-size: 16px;
        font-weight: 500;
        font-style: italic;
        margin-right: 14px; 
        
    }

    & > .cart > .bet-selections > .bet-content > .bet-info > div > span:nth-child(2) {
        
        font-size: 16px;
        
    }

    & > footer {
        
        background-color: #f7f7f7;
        grid-area: footer;
        border-top: 2.5px solid #ebebeb;
        color: #707070;
        
    }

    & > .bet > div:first-of-type {
        
        display: flex;
        align-items: center;
        text-transform: uppercase;
        font-size: 24px;
        font-weight: 300;
        font-style: italic;
        color: #707070;
        
    }

    & > .bet > div:first-of-type > p:first-of-type {
        
        margin-right: 9px;
        font-weight: 700;
        
    }

    & > .bet > div:nth-child(2) {
        
        display: flex;
        font-size: 17px;
        font-weight: 500;
        font-style: italic;
        color: #868686;
        flex-direction: column;
        
    }

    & > .bet > div:nth-child(2) > p {
        
        margin-bottom: 20px;
        
    } 

    & > .bet > div:nth-child(3) {
        
        margin-top: 28px;
        
    }

    & > .bet > div:nth-child(3) > p:first-of-type {
        
        font-size: 17px;
        color: #868686;
        font-weight: 500;
        font-style: italic;
        margin-bottom: 10px;
        
    }

    & > .bet > div:nth-child(3) > p + p {
        
        font-size: 17px;
        color: #868686;
        font-weight: 300;
        font-style: italic;
        margin: 0;
        
    }

    div[data-js=bet-grid] {
        
        display: grid;
        grid-template-columns: repeat(9, 65px);
        gap: 10px;
        color: #fff;
        margin-top: 30px;
        
    }

    .selected-megasena {
        
        background-color: #27C383;
        transition: .3s background linear;
        width: 55px; 
        height: 55px; 
        border-radius: 50%; 
        display: flex; 
        justify-content: center; 
        align-items: center; 
        font-size: 20px; 
        font-weight: 500; 
        cursor: pointer; 
        transition: .2s linear;
        
    }

    .selected-megasena:hover {
        
        background-color: #13b772;
        
    }

    .selected-lotofacil {
        
        background-color: #7F3992;
        transition: .3s background linear;
        width: 55px; 
        height: 55px; 
        border-radius: 50%; 
        display: flex; 
        justify-content: center; 
        align-items: center; 
        font-size: 20px; 
        font-weight: 500; 
        cursor: pointer; 
        transition: .2s linear;
        
    }

    .selected-lotofacil:hover {
        
        background-color: #712e84;
        
    }

    .selected-quina {
        
        background-color: #F79C31;
        transition: .3s background linear;
        width: 55px; 
        height: 55px; 
        border-radius: 50%; 
        display: flex; 
        justify-content: center; 
        align-items: center; 
        font-size: 20px; 
        font-weight: 500; 
        cursor: pointer; 
        transition: .2s linear;
        
    }

    .selected-quina:hover {
        
        background-color: #df8d2e;
        
    }

    & > .bet > div:nth-child(5) {
        
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 35px;
        
    }

    & > .bet > div:nth-child(5) button {
        
        width: 135px;
        height: 52px;
        border: 1px solid #27C383;
        border-radius: 10px;
        font-size: 13px;
        cursor: pointer;
        color: #27C383;
        font-weight: 500;
        transition: .3s linear;
        
    }

    & > .bet > div:nth-child(5) button:hover {
        
        background-color: rgb(234, 230, 230);
        
    }

    & > .bet > div:nth-child(5) button:first-of-type {
        
        margin-right: 20px;
        
    }

    & > .bet > div:nth-child(5) > button {
        
        background-color: #27C383;
        border: 1px solid #27C383;
        color: #fff;
        font-weight: 700;
        transition: .3s linear;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 210px;
        
    }

    & > .bet > div:nth-child(5) > button:hover {
        
        background-color: #13b772;
        
    }

    & > .bet > div:nth-child(5) > button > p {
        
        margin-left: 10px;
        
    }

`;