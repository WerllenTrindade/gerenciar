import React from 'react';
import { FlatList } from 'react-native';
import { categories } from '../../../Utils/categories';
import { Button } from '../../components/Form/Button'
import {
    Container,
    Header,
    Title,
    Category,
    Icon,
    Name,
    Separator,
    Footer
} from './styles'

interface Category {
    key: string;
    name: string;
}

interface Props {
    category: Category;
    setCategory: (category: Category) => void;
    closeSelectCategory: () => void;
}

export function CategorySelect({
    category,
    setCategory,
    closeSelectCategory
}: Props){

    function handleCatgorySelect(category :Category){
        setCategory(category);
    }

    return(
        <Container>
           <Header>
               <Title>Categoria</Title>
           </Header>

           <FlatList
           data={categories}
           style={{flex: 1, width: '100%'}}
           keyExtractor={(item) => item.key}
           renderItem={({item}) => (
               <Category
               onPress={() => handleCatgorySelect(item)}
               isActive={category.key === item.key}
               >
                   <Icon name={item.icon}/>
                   <Name>{item.name}</Name>
               </Category>
           )}
           ItemSeparatorComponent={() => <Separator />}
           />

           <Footer>
              <Button 
              onPress={closeSelectCategory}
              title="Selecionar"/>
           </Footer>
        </Container>
    )
}