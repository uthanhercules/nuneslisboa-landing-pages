import {
  Heading,
  Text,
  Button,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
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
        <Button size='lg'>Não quero pagar 92% a mais</Button>
      </article>
      <article className='more-details'>
        <section className='text-box'>
          <Heading as='h3'>Entenda melhor o que está acontecendo</Heading>
          <Text as='p'>
            Se o beneficiário pediu para cancelar o plano, eles estão cobrando o
            chamado aviso prévio que é o período cobrado pelos planos de saúde
            após o pedido de cancelamento do contrato.
          </Text>
          <Text as='p'>
            Se o beneficiário teve seu plano de saúde cancelado por
            inadimplência, a justificativa é diferente. Após 60 dias de
            inadimplemento, por lei, a operadora de plano de saúde pode
            suspender a cobertura, porém, suspendem antes disso.
          </Text>
          <UnorderedList>
            <ListItem>
              Você pede o cancelamento 🡪 O plano de saúde suspende a cobertura 🡪
              porém a cobrança permanece por mais 60 dias.
            </ListItem>
            <ListItem>
              Você para de pagar 🡪 x dias depois o plano suspende a cobertura 🡪
              porém a cobrança permanece até completar os 60 dias.
            </ListItem>
          </UnorderedList>
        </section>
      </article>
    </main>
  );
};

export default index;
