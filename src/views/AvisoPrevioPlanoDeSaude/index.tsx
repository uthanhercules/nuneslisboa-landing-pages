import { Heading, Text, Button } from '@chakra-ui/react';
import WhatsAppButton from '../../components/WhasAppButton';

import logoVW from '../../assets/logoVW.png';
import portrait from '../../assets/portrait-rafa.png';
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
        <Button className='cto-button' size='lg'>
          Não quero pagar 92% a mais
        </Button>
      </article>
      <article className='more-details'>
        <Heading as='h3'>Entenda melhor o que está acontecendo</Heading>
      </article>
      <article className='specialist'>
        <section className='body-text'>
          <Heading as='h3'>Rafael Lisboa</Heading>
          <Heading as='h4'>
            Especializado em Direito Médico e da Saúde, tem vasta experiência
            quando o assunto é o direito dos beneficiários de planos de saúde.
          </Heading>
          <Text as='p'>
            Defende que casos assim não devem ser tratados como de direito do
            consumidor simples, pois o risco de se trazer prejuízos aos
            beneficiários é muito grande. “Tem relação de consumo, mas se trata
            de uma demanda de direito da saúde”
            <br />
            <br />
            Existem peculiaridades que só o conhecimento específico da área de
            Direito da Saúde é capaz de solucionar o problema sofrido pelo
            cliente.
          </Text>
          <Button className='cto-button' size='lg'>
            Entre em Contato
          </Button>
        </section>
        <img src={portrait} alt='Retrato de Rafael Lisboa' />
      </article>
    </main>
  );
};

export default index;
