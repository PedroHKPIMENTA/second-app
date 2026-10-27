import { IonCard, IonButton, IonItem, IonInput, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import './Login.css';

const Login: React.FC = () => {



  return (
    <div className='Tela-Login'>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle color='success'>Eclipse</IonCardTitle>

        </IonCardHeader>

        <IonCardContent>
          <IonItem>
            <IonInput type="email" label="Email" labelPlacement="floating" placeholder="Enter text"></IonInput>
          </IonItem>
          <IonItem>
            <IonInput type="password" label="Senha" labelPlacement="floating" placeholder="Enter text"></IonInput>
          </IonItem>
          <IonItem>
            <IonButton fill='clear'>Esqueci senha ou email</IonButton>
          </IonItem>
          <IonItem>
          <IonButton size="default" color='success'>Login</IonButton>
          <IonButton routerLink='/Register' size="default" fill='clear'>Cadastre-se</IonButton>
          </IonItem>
        </IonCardContent>
      </IonCard>
    </div>
  );
};

export default Login;
