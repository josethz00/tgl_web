import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { MainContainer } from './styles';
import Footer from '../../components/Footer';
import SwitchBetTypeButton from '../../components/SwitchBetTypeButton';
import api from '../../services/api';
import Ball from '../../components/Ball';
import { isInArray } from '../../utils/isInArray';
import { getRandomInteger } from '../../utils/getRandomInteger';
import { bindActionCreators } from 'redux';
import { formatCurrency } from '../../utils/formatCurrency';
import * as CartActions from '../../store/modules/cart/actions';
import { FiTrash2 } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { generateRandomId } from '../../utils/generateRandomId';
import EmptyCartText from '../../components/EmptyCart';
import Separator from '../../components/Separator';
import { currencyToFloat } from '../../utils/currencyToFloat';


const CreateBet = ({ cart, total, addToCartSuccess, removeFromCart, clearCart }) => {

    const [betsData, setBetsData] = useState([]);
    const [betNumbersArray, setBetNumbersArray] = useState([1, 2, 3, 4, 5, 6 , 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]);
    const [currentBetType, setCurrentBetType] = useState('');
    const [markedNumbers, setMarkedNumbers] = useState([]);

    const backgroundColorPossibilities = {

        'Lotofácil': {

            activeBg: '#7F3992',
            hoverBg: '#712e84'

        },
        'Quina': {

            activeBg: '#F79C31',
            hoverBg: '#df8d2e'

        },
        'Mega-Sena': {

            activeBg: '#27C383',
            hoverBg: '#13b772'

        },
        'Raspadinha': {

            activeBg: '#5271ff',
            hoverBg: '#4160ee'

        }

    };

    function fillBetNumbers (betType) {

        if (!betsData) {

            return;

        }

        const filteredBetsData = betsData.filter((obj) => obj.type === betType);

        let index = 0;
        const tmpBetNumbersArray = [];

        while (tmpBetNumbersArray.length < filteredBetsData[0].range) {

            tmpBetNumbersArray.push(index+1);
            index++;

        }

        setBetNumbersArray(tmpBetNumbersArray);

        return;

    }

    function maxBetAmount () {

        return betsData.filter((obj) => (obj.type) === currentBetType)[0]['max-number'];

    }

    function handleBetNumberClick (value) {

        if (markedNumbers.length >= maxBetAmount()
        
            &&

            !isInArray(value, markedNumbers)
        
        ) {

            return;

        }

        if (isInArray(value, markedNumbers)) {

            setMarkedNumbers((markedNumber) => markedNumber.filter(number => number !== value))
            return;

        }

        setMarkedNumbers([...markedNumbers, value ]);
        return;

    }

    function switchBetType (newBetType) {

        if (currentBetType === newBetType) {

            return;

        }

        setCurrentBetType(newBetType);
        clearGame();
        fillBetNumbers(newBetType);

    }

    function clearGame () {

        setMarkedNumbers([]);
        return;

    }

    function completeGame () {

        let randomBets = [];

        while (randomBets.length < maxBetAmount() - markedNumbers.length) {

            const randomNumber = getRandomInteger(1, betsData.filter((obj) => (obj.type) === currentBetType)[0].range)

            if (!isInArray(randomNumber, randomBets)) {
             
                randomBets.push(randomNumber);

            }

        }

        randomBets.push(...markedNumbers);
        setMarkedNumbers(randomBets);

        return;

    }

    function handleSuccess () {

        if (cart[0] && currencyToFloat(total) >= 30) {
            
            toast.success('Compra efetuada com sucesso!');
            clearCart();

        }
        else {

            toast.error('Valor mínimo de 30 reais!')

        }

        return;

    }

    const handleAddProduct = product => {

        clearGame();
        return product.markedNumbers.length === maxBetAmount() ? addToCartSuccess(product) : null;

    };

    useEffect(() => {

        async function loadBetsData () {

            const { data } = await api.get('/bets');
            setBetsData(data.types);
            setCurrentBetType(data.types[0].type);
            return;

        }

        loadBetsData();

    }, []);
    
    return (

        <MainContainer>
            <div className="bet">
                <div>
                    <p>NEW BET</p>
                    <p data-js="bet-type">FOR {currentBetType}</p>
                </div>
                <div>
                    <p>Choose a game</p>
                    <div>
                        {betsData.map((data, index) => (

                            <SwitchBetTypeButton
                                key={index}
                                isSelected={currentBetType === data.type} 
                                backgroundColor={data.color} 
                                color='#fff' 
                                defaultColor={data.color}
                                onClick={() => {

                                    switchBetType(data.type);

                                }}
                            >
                                {data.type}
                            </SwitchBetTypeButton>

                        ))}
                    </div>
                </div>
                <div>
                    <p>Fill your bet</p>
                    <p>Fill your bet Mark as many numbers as you want up to a maximum of 50. Win by hitting 15, 16, 17, 18, 19, 20 or none of the 20 numbers drawn.</p>
                </div>
                <div data-js="bet-grid">
                    {betNumbersArray.map(item => (
                
                        <Ball 
                            onClick={() => handleBetNumberClick(item)} 
                            isMarked={isInArray(item, markedNumbers)}
                            backgroundColor={backgroundColorPossibilities[currentBetType]} 
                            key={item}
                        >
                            {item}
                        </Ball>

                    ))}
                </div>
                <div>
                    <div>
                        <button onClick={completeGame}>
                            Complete game
                        </button>
                        <button onClick={clearGame}>
                            Clear game
                        </button>
                    </div>
                    <button onClick={() => handleAddProduct({ 
                        betValue: betsData.filter((obj) => (obj.type) === currentBetType)[0].price, 
                        currentBetType,
                        markedNumbers,
                        date: new Date().toLocaleDateString('pt-br'),
                        betColor: backgroundColorPossibilities[currentBetType].activeBg,
                        id: generateRandomId()
                    })}>
                        <i data-feather="shopping-cart"></i>
                        <p>
                            Add to cart
                        </p>
                    </button>
                </div>
            </div>
            <div className="cart">
                <span>
                    CART
                </span>
                <div className="bet-selections">
                    {cart[0] ? cart.map((product) => (

                        <>
                            <div className="bet-content" key={product.id}>
                                <FiTrash2 color="#888888" size={24} style={{ cursor: 'pointer' }} onClick={() => removeFromCart(product.id)} />
                                <Separator defaultColor={product.betColor} />
                                <div className="bet-info">
                                    <span>
                                        {product.markedNumbers.join(', ')}
                                    </span>
                                    <div>
                                        <span>
                                            {product.currentBetType}
                                        </span>
                                        <span>
                                            {formatCurrency(product.betValue)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </>

                    )): <EmptyCartText>Seu carrinho está vazio...</EmptyCartText>}
                </div>
                <div>
                    <span>CART</span>
                    <span style={{ marginLeft: 6 }}>TOTAL:</span>
                    <span data-js="total-value">{total}</span>
                </div>
                <div onClick={handleSuccess}>
                    <span>
                        Save
                    </span>
                    <i data-feather="arrow-right"></i>
                </div>
            </div>
            <Footer>
                Copyright 2021 Luby Software
            </Footer>
        </MainContainer>
    
    );

}

const mapStateToProps = state => ({

    cart: state.cart.map(product => ({

        ...product

    })),
    total: formatCurrency(state.cart.reduce((total, product) => {

        return total +  product.betValue;

    }, 0))

});

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CreateBet);