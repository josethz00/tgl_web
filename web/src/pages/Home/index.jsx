import React, { useEffect, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { connect } from 'react-redux';

import Separator from '../../components/Separator';
import SwitchBetTypeButton from '../../components/SwitchBetTypeButton';
import api from '../../services/api';
import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter';
import { formatCurrency } from '../../utils/formatCurrency';
import { MyBetsContainer, LinksSection, Title, FiltersSection, SmSpan, ButtonsContainer, NewBetLink, RecentBetsContainer, Bet, BetInfo, Numbers, DateAndPriceSpan } from './styles';
import BetTypeTitle from '../../components/BetTypeTitle';
import EmptyCartText from '../../components/EmptyCart';


const Home = ({ cart }) => {

    const [betsData, setBetsData] = useState([]);
    const [currentBetType, setCurrentBetType] = useState('lotofacil');

    function switchBetType (newBetType) {

        if (currentBetType === newBetType) {

            return;

        }

        setCurrentBetType(newBetType);

    }

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

        <MyBetsContainer>
            <LinksSection>
                <Title>
                    Recent games
                </Title>
                <FiltersSection>
                    <SmSpan>
                        Filters
                    </SmSpan>
                    <ButtonsContainer>
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
                    </ButtonsContainer>
                </FiltersSection>
                <NewBetLink to='/create-bet'>
                    New Bet
                    <FiArrowRight color='#B5C401' size={26} style={{ marginLeft: 5 }} />
                </NewBetLink>
            </LinksSection>
            <RecentBetsContainer>
                {cart.filter(item => item.currentBetType === currentBetType)[0] ? cart.filter(item => item.currentBetType === currentBetType).map(product => (

                    <>
                        <Bet key={product.id}>
                            <Separator defaultColor={product.betColor}>

                            </Separator>
                            <BetInfo>
                                <Numbers>
                                    {product.markedNumbers.join(', ')}
                                </Numbers>
                                <DateAndPriceSpan>
                                    {product.date} - ({formatCurrency(product.betValue)})
                                </DateAndPriceSpan>
                                <BetTypeTitle color={product.betColor}>
                                    {capitalizeFirstLetter(product.currentBetType)}
                                </BetTypeTitle>
                            </BetInfo>
                        </Bet>
                    </>

                )): <EmptyCartText>Você não possui nenhuma aposta recente...</EmptyCartText>}
            </RecentBetsContainer>
        </MyBetsContainer>

    
    );

};

const mapStateToProps = state => ({

    cart: state.cart.map(product => ({

        ...product

    }))

});

export default connect(mapStateToProps)(Home);