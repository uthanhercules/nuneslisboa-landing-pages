import WhatsAppLogo from '../../assets/wppLogo.webp';
import './style.scss';

interface IWhasAppButton {
  phoneNumber: string;
}

const index = (props: IWhasAppButton) => {
  const redirectToPhone = (phone: string) => {
    const url = `https://api.whatsapp.com/send?phone=5571${phone}`;

    return window.open(url, '_blank')?.focus();
  };

  return (
    <button
      className='whatsapp-button'
      onClick={() => redirectToPhone(props.phoneNumber)}
    >
      <img src={WhatsAppLogo} alt='Mandar mensagem para nosso WhatsApp' />
    </button>
  );
};

export default index;
