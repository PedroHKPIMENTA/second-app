import { IonCard, IonHeader, IonTitle, IonMenuButton, IonButtons, IonToolbar, IonButton, IonItem, IonInput, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

import './Register.css';

const Register: React.FC = () => {


    return (
        <div className='Tela-Register'>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Register</IonTitle>
                </IonToolbar>
            </IonHeader>




            <IonCard>
                <IonCardHeader>
                    <IonCardTitle color='success'>Cadastro de informações</IonCardTitle>

                </IonCardHeader>

                <IonCardContent>
                    <IonItem>
                        <IonInput type="Text" label="Nome" labelPlacement="floating" placeholder="Insira o seu nome"></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonInput type="email" label="Email" labelPlacement="floating" placeholder="Insira um texto"></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonInput type="password" label="Senha" labelPlacement="floating" placeholder="Insira a sua senha"></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonInput type="password" label="Confirme sua senha" labelPlacement="floating" placeholder="Insira a sua senha"></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonInput type="tel" label="Telefone" labelPlacement="floating" placeholder="Insira o seu telefone"></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonInput type="Number" label="CEL" labelPlacement="floating" placeholder="Insira o seu CEL"></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonInput type="Number" label="CPF" labelPlacement="floating" placeholder="Insira o seu CPF"></IonInput>
                    </IonItem>


                    <IonButton size="default" color='success'>Confirma</IonButton>

                </IonCardContent>
            </IonCard>
        </div>
    );
};

export default Register;
