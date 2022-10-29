import {
  Heading,
  Text,
  Button,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
import WhatsAppButton from '../../components/WhasAppButton';

import LogoH from '../../assets/logo.png';
import './style.scss';

const index = () => {
  return (
    <main className='aviso-previo-saude'>
      <WhatsAppButton phoneNumber='999055588' />
      <article className='hero'>
        <img src={LogoH} alt='Nunes Lisboa Logo' />
        <Heading as='h1' size='xl'>
          Título massa sobre o aviso prévio
        </Heading>
        <Text as='h2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, sint
          quam officiis quis, quaerat veniam enim sed, blanditiis delectus
          placeat rem nisi animi repudiandae earum? Impedit fugit id culpa illo.
        </Text>
        <Button colorScheme='teal' size='lg'>
          QUERO PAGAAAR
        </Button>
      </article>
      <article className='what-we-solve'>
        <section className='text-topic'>
          <Heading as='h3'>Título da explicação do problema</Heading>
          <Text as='p'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem
            quisquam iure obcaecati, error odio consequuntur dolores sit
            asperiores libero nisi ea provident facere qui odit nesciunt eos,
            at, fugiat deleniti!
          </Text>
        </section>
        <section className='for-who'>
          <div className='left-section'>
            <Heading as='h4'>Público 1</Heading>
            <Text as='p'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe ad
              quis dolorem repudiandae. Porro expedita suscipit assumenda
              voluptatum adipisci magni ullam commodi iusto fugiat accusantium
              quibusdam, similique corrupti dicta non?
            </Text>
            <UnorderedList>
              <ListItem>Primeiro Tópico</ListItem>
              <ListItem>Segundo Tópico</ListItem>
              <ListItem>Terceiro Tópico</ListItem>
              <ListItem>Quarto Tópico</ListItem>
              <ListItem>Quinto Tópico</ListItem>
            </UnorderedList>
          </div>
          <div className='right-section'>
            <Heading as='h4'>Público 2</Heading>
            <Text as='p'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe ad
              quis dolorem repudiandae. Porro expedita suscipit assumenda
              voluptatum adipisci magni ullam commodi iusto fugiat accusantium
              quibusdam, similique corrupti dicta non?
            </Text>
            <UnorderedList>
              <ListItem>Primeiro Tópico</ListItem>
              <ListItem>Segundo Tópico</ListItem>
              <ListItem>Terceiro Tópico</ListItem>
              <ListItem>Quarto Tópico</ListItem>
              <ListItem>Quinto Tópico</ListItem>
            </UnorderedList>
          </div>
        </section>
      </article>
    </main>
  );
};

export default index;
