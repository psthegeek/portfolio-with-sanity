import {createClient} from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'xcr7khwa',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: 'skaWUjoK0O7vEi41DH1u8g9cXZKY7LBQvsyHz7InHaacCvIFdeUXJ5K8EfvKGQScjY1ZQBcNrYZaEfu17msOYBDfkj22mpYoXC5LynPLYuZlLQyNNQWxDY4XvMmUTUmwBkW1xCbhQN5CfLqkA910axExaO7ioQEq9XC04bajpubbQ4BYEnDQ',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);