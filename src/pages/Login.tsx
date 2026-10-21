import { IonCard, IonButton, IonItem, IonInput, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Login.css';

const Login: React.FC = () => {

  const { name = '' } = useParams<{ name: string; }>();

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
          <IonButton size="default" fill='clear'>Cadastre-se</IonButton>
          </IonItem>
        </IonCardContent>
      </IonCard>
    </div>
  );
};

export default Login;
