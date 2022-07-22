import React, { useState } from 'react';
import { Keyboard, Modal, TouchableWithoutFeedback, Alert } from 'react-native';
// TouchableWithoutFeedback usado para quando clicar fora do input sair o teclado
import { useForm } from 'react-hook-form';
import { Button } from '../../components/Form/Button';
import { CategorySelectButton } from '../../components/Form/CategorySelectButton';
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton';
import { CategorySelect } from '../CategorySelect';
import {
    Container,
    Header,
    Title,
    Form,
    Fields,
    TransactionType
} from './styles'
import { InputForm } from '../../components/Form/InputForm';
import * as Yup from 'yup'; //definir o schema
import { yupResolver } from '@hookform/resolvers/yup'

interface FormData {
    name: string | any;
    amount: string;
}

const schema = Yup.object().shape({
    name: Yup.string().required('Nome é obrigatório'),
    amount: Yup.number().typeError('Informe um valor númerico')
    .required('O valor é obrigatorio').positive('O valor não pode ser negativo')
});

export function Register(){
    const [transactionType, setTransactionType] = useState('');
    const [categoryModalOpen, setCategoryModalOpen] = useState(false);

    const [category, setCategory] = useState({
        key: 'category',
        name: 'Categoria'
    });

    const {
        formState: { errors},
        control,
        handleSubmit
     } = useForm({//resolver:  VAI FORÇAR QUE O ENVIO DAS INFORMAÇÕES SIGA UM ESQUEMA 
        resolver: yupResolver(schema)
     });

    function handleTransactionTypeSelect(type: 'up' | 'down'){
        setTransactionType(type);
    }

    function handleCloseSelectCategoryModal(){
        setCategoryModalOpen(false)
    }

    function handleOpenSelectCategoryModal(){
        setCategoryModalOpen(true)
    }

    function handleRegister(form : Partial<FormData>){
        if(!transactionType)
        return Alert.alert('Selecione o tipo da transação');

        if(category.key === 'category')
        return Alert.alert('Selecione a categoria');

        const data = {
            name: form.name,
            amount: form.amount,
            transactionType,
            category: category.key
        }

        console.log(data)
    }

    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Container>
                <Header>
                    <Title>Cadastro</Title>
                </Header>
                <Form>
                <Fields>
                    <InputForm 
                    name="name"
                    control={control}
                    placeholder="Nome"
                    autoCapitalize="sentences" //deixa primeira lavra maiusculo
                    autoCorrect={false} //o autoCapitalize ele também corrige as palavras, isso pode atrapalhar
                    error={errors.name && errors.name.message}
                    />

                    <InputForm 
                    name="amount"
                    control={control}
                    placeholder="Preço"
                    keyboardType="numeric" //abre o teclado já no numero
                    error={errors.amount && errors.amount.message}
                    />

                    <TransactionType>
                        <TransactionTypeButton
                        isActive={transactionType === 'up'}
                        type="up"
                        title="Income"
                        onPress={() => handleTransactionTypeSelect('up')}
                        />
                        <TransactionTypeButton
                        isActive={transactionType === 'down'}
                        type="down"
                        title="Outcome"
                        onPress={() => handleTransactionTypeSelect('down')}
                        />
                    </TransactionType>

                    <CategorySelectButton
                    title={category.name}
                    onPress={handleOpenSelectCategoryModal}
                    />
                </Fields>
                
                <Button 
                title="Enviar"
                onPress={handleSubmit(handleRegister)}
                />
                </Form>

                <Modal visible={categoryModalOpen}>
                    <CategorySelect
                    category={category}
                    setCategory={setCategory}
                    closeSelectCategory={handleCloseSelectCategoryModal}
                    />
                </Modal>
            </Container>
        </TouchableWithoutFeedback>
    )
}