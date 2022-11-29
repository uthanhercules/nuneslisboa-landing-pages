import { Heading, Text, Button } from '@chakra-ui/react';
import WhatsAppButton from '../../components/WhasAppButton';

import logoVW from '../../assets/logoVW.png';
import portrait from '../../assets/portrait-rafa.png';
import logoW from '../../assets/logoW.png';
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
      <article className='step-by-step'>
        <section className='step'>
          <Heading as='h5'>1</Heading>
          <Text as='p'>Entre em contato conosco e envie sua dúvida.</Text>
        </section>
        <section className='step'>
          <Heading as='h5'>2</Heading>
          <Text as='p'>
            Analisaremos se você tem direito ou não à redução ou exclusão da
            dívida.
          </Text>
        </section>
        <section className='step'>
          <Heading as='h5'>3</Heading>
          <Text as='p'>
            Envio de contrato, procuração e documentos. Tudo online, sem que
            você precise sair de casa
          </Text>
        </section>
        <section className='step'>
          <Heading as='h5'>4</Heading>
          <Text as='p'>
            Início do serviço com a aplicação da estratégia que mais se adequa
            ao seu caso
          </Text>
        </section>
        <section className='step'>
          <Heading as='h5'>5</Heading>
          <Text as='p'>
            Entendendo o interesse do cliente em saber como está o seu caso,
            durante a tramitação do processo, enviaremos relatórios periódicos
            para que você saiba exatamente o que está acontecendo e quais serão
            os próximos passos
          </Text>
        </section>
        <section className='step'>
          <Heading as='h5'>6</Heading>
          <Text as='p'>
            Fim do processo. Fim do nosso serviço, com extrema gratidão pela
            confiança.
          </Text>
        </section>
      </article>
      <footer>
        <section className='left-info'>
          <img src={logoW} alt='Logo Nunes Lisboa' />
        </section>
        <section className='contact'>
          <div className='item'>
            <i className='fa-sharp fa-solid fa-location-dot'></i>
            <Text as='p'>
              CEO Salvador Shopping, Torre Nova Iorque - sala 2504 a 2510 -
              Caminho das Árvores, Salvador - BA, 41820-021
            </Text>
          </div>
          <div className='item'>
            <i className='fa-sharp fa-solid fa-phone-volume'></i>
            <Text as='p'>71 9 9905-5588</Text>
          </div>
          <div className='item'>
            <i className='fa-solid fa-envelope'></i>
            <Text as='p'>comercial@nuneselisboa.adv.br</Text>
          </div>
          <div className='social-media'>
            <a
              href='https://www.instagram.com/nuneselisboa/'
              target='_blank'
              rel='noreferrer'
            >
              <i className='fa-brands fa-instagram'></i>
            </a>
            <a
              href='https://www.linkedin.com/company/nunes-e-lisboa?trk=public_profile_experience-item_profile-section-card_subtitle-click&originalSubdomain=br'
              target='_blank'
              rel='noreferrer'
            >
              <i className='fa-brands fa-linkedin'></i>
            </a>
            <a
              href='https://m.facebook.com/profile.php?id=100069774515490&_rdr'
              target='_blank'
              rel='noreferrer'
            >
              <i className='fa-brands fa-square-facebook'></i>
            </a>
          </div>
        </section>
      </footer>
    </main>
  );
};

export default index;
