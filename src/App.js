import React from 'react';
import styled from 'styled-components/native';
import User from './components/User';
import UserContext, { UserProvider } from './contexts/User';
import Input from './components/Input';


const Container = styled.View`
    flex: 1;
    background-color: #ffffff;
    justify-content: center;
    align-items: center;
`;

const App = () => {
    return(
        <UserProvider>
            <Container>
                <User />
                <Input />
            </Container>
        </UserProvider>
        )
};

export default App;


/* App 컴포넌트를 Provider 컴포넌트로 감쌌기 때문에 
User 컴포넌트에서 사용된 Consumer는 더이상 Context의 기본값을 사용하지않고 
상위 컴포넌트인 Provider가 전달하는 데이터를 사용하도록 변경되었습니다. 
때문에 UserContext.Provider value = {.....} 과 같은 형식으로 작성 해야합니다.*/