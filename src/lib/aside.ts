export interface Aside {
    id: string;
    title: string;
    content1: string;
    content2: string;
    content3: string;
    date: string;
    day:string,
    image1: string;
    image2: string,
    image3: string;
    button:string;
   
  }
  
  export const asides: Aside[] = [
    {
      id: '1',
      title: 'Bitcoin Endgame The ‘Virus Is Spreading’—Bitcoin Suddenly Braced For A ‘Major’ 2025 Price Move',
      content1: 'Bitcoin is the first decentralized cryptocurrency. Based on a free-market ideology, bitcoin was invented in 2008 by Satoshi Nakamoto, an unknown person. Use of bitcoin as a currency began in 2009, with the release of its open-source implementation. In 2021, El Salvador adopted it as legal tender',
      content2:'The ‘Virus Is Spreading’—Bitcoin Suddenly Braced For A ‘Major’ 2025 Price Move Bitcoin uses peer-to-peer technology to operate with no central authority or banks; managing transactions and the issuing of bitcoins is carried out collectively by the network. Bitcoin is open-source; its design is public, nobody owns or controls Bitcoin and everyone can take part. Through many of its unique properties, Bitcoin allows exciting uses that could not be covered by any previous payment system.',
      content3:'Bitcoins  Wall Street adoption this year has been led by the world largestasset manager BlackRock after its successful campaign to bring bitcoin ETFs to the U.S. last year, with the funds making their debut in January.U.S. spot bitcoin ETFs broke $100 billion in net assets for the first time in November, according to data from Bloomberg Intelligence, while BlackRock iShares Bitcoin Trust (IBIT) now has around $60 billion in assets under management, becoming one of the fastest growing ETFs ever Bitcoin uses peer-to-peer technology to operate with no central authority or banks; managing transactions and the issuing of bitcoins is carried out collectively by the network. Bitcoin is open-source; its design is public, nobody owns or controls Bitcoin and everyone can take part. Through many of its unique properties, Bitcoin allows exciting uses that could not be covered by any previous payment system..',
      
      day:'Sunday',
      date: '14-12-2024',
      image1: '/bit.png',
      image2: '/bit3.jpeg',
      image3:'/bit5.jpeg',
      button: 'Research',
     
   

    },
   
   
  
  ];
  
//   export function getPostById(id: string): Post | undefined {
//     return posts.find(post => post.id === id);
//   }
  
//   export function formatDate(date: string): string {
//     return new Date(date).toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric',
//     });
//   }
  
  