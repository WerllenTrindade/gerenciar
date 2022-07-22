import React from 'react';

import { HighlightComponent } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';


import { Container,
     Header,
     UserInfo,
     UserWrapper,
     IconImage,
     User,
     LogoutButton,
     UserGreeting,
     UserName,
     Icon,
     HighlightCards,
     Transactions,
     Title,
     TransactionList
    } from './styles'

    
export interface DataListProps extends TransactionCardProps {
        id: string;
    }

export function Dashboard (){
    const data: DataListProps[] = [
        {
        id: '1',
        type: 'positive',
        title:"Desenvolvimento de Site",
        amount:"R$ 12.000,00",
        category:{
            name: 'Vendas',
            icon: 'dollar-sign'
        },
        date:"13/04/2020"
    },
    {
        id: '2',
        type:'negative',
        title:"Parceria",
        amount:"R$ 59,00",
        category:{
            name: 'Alimentação',
            icon: 'coffee'
        },
        date:"13/04/2020"
    },
    {
        id: '3',
        type:'negative',
        title:"Aluguel apartamento",
        amount:"R$ 1.200,00",
        category:{
            name: 'Casa',
            icon: 'shopping-bag'
        },
        date:"13/04/2020"
    }
];

    return(
        <Container>
            <Header>
                <UserWrapper>
                <UserInfo>
                    <IconImage source={{ uri:'https://avatars.githubusercontent.com/u/68381058?v=4'}}/>
                    <User>
                        <UserGreeting>Olá,</UserGreeting>
                        <UserName>Werllen</UserName>
                    </User>
                </UserInfo>

                <LogoutButton>
                <Icon name="poweroff"/>
                </LogoutButton>
                </UserWrapper>
            </Header>

            <HighlightCards>
                <HighlightComponent 
                type="up"
                 title={"Entradas"}
                 amount={"17.400,00"} 
                 lastTransaction="Última entrada dia 13 de abril"
                 />

                <HighlightComponent 
                type="down"
                 title={"Saidas"}
                 amount={"1.589,00"} 
                 lastTransaction="Última saída dia 03 de abril"
                 />

                 <HighlightComponent 
                 type="total"
                 title={"Total"}
                 amount={"16.141,00"} 
                 lastTransaction="01 à 16 de abril"
                 />
            </HighlightCards>

            <Transactions>
                <Title>Listagem</Title>

                <TransactionList
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => <TransactionCard data={item} />}

                />
                
            </Transactions>
        </Container>
    )
}