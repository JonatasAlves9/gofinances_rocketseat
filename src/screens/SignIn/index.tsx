import React, { useContext, useEffect, useState } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { ActivityIndicator, Alert, Platform } from 'react-native';

import AppleSvg from '../../assets/apple.svg';
import GoogleSvg from '../../assets/google.svg';
import LogoSvg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';
import { SignInSocialButton } from '../../components/SignInSocialButton';
import { useTheme } from 'styled-components'

import {
    Container,
    Header,
    TitleWrapper,
    Title,
    SignInTitle,
    Footer,
    FooterWrapper
} from './styles'

export function SignIn() {
    const { signInWithGoogle, signInWithApple } = useAuth();
    const [isLoading, setIsLoading] = useState(false);

    const theme = useTheme();

    async function handleSignInWithGoogle() {
        try {
            setIsLoading(true);
            return await signInWithGoogle();
        } catch (error) {
            console.log(error);
            Alert.alert('Erro', 'Ocorreu um erro ao fazer login');
            setIsLoading(false);
        }
    }

    async function handleSignInWithApple() {
        setIsLoading(true);
        try {
            return await signInWithApple();
        } catch (error) {
            console.log(error);
            Alert.alert('Erro', 'Ocorreu um erro ao fazer login');
            setIsLoading(false);
        }
    }

    return (
        <Container>
            <Header>
                <TitleWrapper>
                    <LogoSvg
                        width={RFValue(120)}
                        height={RFValue(68)}
                    />
                    <Title>
                        Controle suas {'\n'}
                        finanças de forma {'\n'}
                        muito simples
                    </Title>
                </TitleWrapper>
                <SignInTitle>
                    Faça seu login com {'\n'}
                    uma das contas abaixo
                </SignInTitle>
            </Header>

            <Footer>
                <FooterWrapper>
                    <SignInSocialButton onPress={handleSignInWithGoogle} title='Entrar com google' svg={GoogleSvg} />
                    {Platform.OS === 'ios' && (
                        <SignInSocialButton onPress={handleSignInWithApple} title='Entrar com apple' svg={AppleSvg} />
                    )}

                </FooterWrapper>
                {
                    isLoading && <ActivityIndicator color={theme.colors.shape} size="large" style={{
                        marginTop: 18
                    }} />
                }
            </Footer>
        </Container>
    );
}