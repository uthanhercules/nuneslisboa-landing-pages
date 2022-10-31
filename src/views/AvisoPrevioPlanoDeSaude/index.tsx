import { Heading, Text, Button } from '@chakra-ui/react';
import WhatsAppButton from '../../components/WhasAppButton';

import logoVW from '../../assets/logoVW.png';
import './style.scss';

const index = () => {
  return (
    <main className='aviso-previo-saude'>
      <WhatsAppButton phoneNumber='999055588' />
      <article className='hero'>
        <img src={logoVW} alt='Nunes Lisboa Logo' />
        <Heading as='h1' size='xl'>
          Plano de saúde está cobrando valor ilegal dos seus ex-beneficiários
        </Heading>
        <Text as='h2'>
          Valor indevido pode corresponder a até 92% da dívida.
        </Text>
        <Button colorScheme='teal' size='lg'>
          Não quero pagar 92% a mais
        </Button>
      </article>
    </main>
  );
};

export default index;
