import { Heading, Text, Button } from '@chakra-ui/react';

import LogoH from '../../assets/logo.png';
import './style.scss';

const index = () => {
  return (
    <main className='aviso-previo-saude'>
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
        <Heading as='h3'>Título massa da explicação do problema</Heading>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem
          quisquam iure obcaecati, error odio consequuntur dolores sit
          asperiores libero nisi ea provident facere qui odit nesciunt eos, at,
          fugiat deleniti!
        </Text>
        <section className='for-who'></section>
      </article>
    </main>
  );
};

export default index;
