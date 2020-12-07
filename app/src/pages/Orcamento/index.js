import React, { useState } from 'react';
import { Alert } from 'react-native';

import { ScrollView } from 'react-native-gesture-handler'
import { Container, TitleInput, InputForm, BtnSubmitForm, TxtSubmitForm, TitleRequired } from './styles'

export default function Orcamento() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [whatsApp, setWhatsApp] = useState('');
    const [msg, setMsg] = useState('');

    const cadOrcamento = async () => {
        Alert.alert('', 'Enviar para API' + name)
        console.log(name);
    }

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <Container>

                <TitleInput>* Nome</TitleInput>
                <InputForm
                    placeholder="Nome Completo"
                    value={name}
                    onchaneText={text => setName(text)}
                />

                <TitleInput>* Email</TitleInput>
                <InputForm
                    placeholder="Seu melhor e-mail"
                    value={email}
                    onchaneText={text => setEmail(text)}
                />

                <TitleInput>* Telefone</TitleInput>
                <InputForm
                    value={phone}
                    onchaneText={text => setPhone(text)}
                    placeholder="(XX) XXXX-XXXX"
                />

                <TitleInput>* WhatsApp</TitleInput>
                <InputForm
                    value={whatsApp}
                    onchaneText={text => setWhatsApp(text)}
                    placeholder="(XX) XXXX-XXXX"
                />

                <TitleInput>* Conteúdo</TitleInput>
                <InputForm
                    value={msg}
                    onchaneText={text => setMsg(text)}
                    placeholder="Fale um pouco do seu projeto"
                />
                <TitleRequired>* Campo Obrigatório</TitleRequired>

                <BtnSubmitForm onPress={cadOrcamento}>
                    <TxtSubmitForm>
                        Enviar
                </TxtSubmitForm>
                </BtnSubmitForm>

            </Container>
        </ScrollView>
    );
}