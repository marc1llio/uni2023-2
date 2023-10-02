import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import BookList from './BookList';

// Livros do Universo de J.R.R. Tolkien
const tolkienBooks = [
  {
    id: 1,
    title: 'O Silmarillion',
    author: 'J.R.R. Tolkien',
    description: 'Primeiro livro da cronologia da Terra - Média.',
    imageUrl: 'https://m.media-amazon.com/images/I/81MoknVer8L._SY425_.jpg',
    amazonLink: 'https://www.amazon.com.br/Silmarillion-J-R-Tolkien/dp/8595084378/ref=sr_1_2?__mk_pt_BR=ÅMÅŽÕÑ&crid=3APGZFL7Z5NN6&keywords=O+silmarillion&qid=1695779687&s=books&sprefix=o+silmarillion%2Cstripbooks%2C235&sr=1-2',
  },
  {
    id: 2,
    title: 'O Hobbit',
    author: 'J.R.R. Tolkien',
    description: 'A história de Bilbo Bolseiro e sua aventura inesperada.',
    imageUrl: 'https://harpercollins.com.br/cdn/shop/products/9788595084742_7743ad6e-0ca5-4b41-82aa-ab50ada78d5e.jpg?v=1692287307&width=350',
    amazonLink: 'https://www.amazon.com.br/Hobbit-pôster-J-R-R-Tolkien/dp/8595084742/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=1695775245&sr=1-1',
  },
  {
    id: 3,
    title: 'O Senhor dos Anéis: A Sociedade do Anel',
    author: 'J.R.R. Tolkien',
    description: 'Primeiro livro da trilogia O Senhor dos Anéis.',
    imageUrl: 'https://harpercollins.com.br/cdn/shop/products/9788595084759_24e73fc3-3728-48c7-92eb-393df060030d.jpg?v=1692287258&width=350',
    amazonLink: 'https://www.amazon.com.br/Senhor-dos-Anéis-Sociedade-Anel/dp/8595084750',
  },
];

// Livros de Star Wars
const starWarsBooks = [
  {
    id: 1,
    title: 'Star Wars: Herdeiro do Império',
    author: 'Timothy Zahn',
    description: 'O primeiro livro da trilogia Thrawn.',
    imageUrl: 'https://m.media-amazon.com/images/I/51YFyzN2gNL._SY445_SX342_.jpg',
    amazonLink: 'https://www.amazon.com.br/Star-Wars-Herdeiro-Trilogia-trilogia/dp/8576571986/ref=sr_1_1?__mk_pt_BR=ÅMÅŽÕÑ&crid=2ZJYV2V6SDH9I&keywords=star+wars+herdeiro+do+império&qid=1695775315&s=books&sprefix=star+wars+herdeito+do+impér%2Cstripbooks%2C264&sr=1-1',
  },
  {
    id: 2,
    title: 'Star Wars: Ascensão da Força Sombria',
    author: 'Timothy Zahn',
    description: 'O segundo livro da trilogia Thrawn.',
    imageUrl: 'https://m.media-amazon.com/images/I/51l5+Zpz1zL._SY445_SX342_.jpg',
    amazonLink: 'https://www.amazon.com.br/Star-Wars-Ascensão-Sombria-trilogia/dp/8576572109/ref=d_pd_sim_sccl_2_1/137-5132017-5113407?pd_rd_w=8tBFn&content-id=amzn1.sym.45c7db3b-eda8-4e45-8990-7b4f7d989e0b&pf_rd_p=45c7db3b-eda8-4e45-8990-7b4f7d989e0b&pf_rd_r=GB2TXC58ACKQQR9WJVPM&pd_rd_wg=RZdaz&pd_rd_r=1777ca21-c3b2-43e7-9a4d-ebf8cbed669f&pd_rd_i=8576572109&psc=1',
  },
  {
    id: 3,
    title: 'Star Wars: O Último Comando',
    author: 'Timothy Zahn',
    description: 'O terceiro livro da trilogia Thrawn.',
    imageUrl: 'https://m.media-amazon.com/images/I/81LdDBDlVvL._SY425_.jpg',
    amazonLink: 'https://www.amazon.com.br/Star-Wars-Último-Comando-trilogia/dp/8576572699/ref=d_pd_sim_sccl_2_1/137-5132017-5113407?pd_rd_w=t4S9j&content-id=amzn1.sym.45c7db3b-eda8-4e45-8990-7b4f7d989e0b&pf_rd_p=45c7db3b-eda8-4e45-8990-7b4f7d989e0b&pf_rd_r=VH6W3M3GKHJT6ES04PRP&pd_rd_wg=QDrA2&pd_rd_r=9814dedd-35f4-4364-bafe-1624729e0ae8&pd_rd_i=8576572699&psc=1',
  },
];

// Livros de Bernard Cornwell
const cornwellBooks = [
  {
    id: 1,
    title: 'O Último Reino',
    author: 'Bernard Cornwell',
    description: 'Primeiro livro da série As Crônicas Saxônicas.',
    imageUrl: 'https://m.media-amazon.com/images/I/91NvvUm7PYL._SY385_.jpg',
    amazonLink: 'https://www.amazon.com.br/último-reino-Vol-1-Crônicas-saxônicas/dp/8501073520/ref=sr_1_1?__mk_pt_BR=ÅMÅŽÕÑ&crid=2ZXW0IRXPWJF3&keywords=As+cronicas+saxonicas&qid=1695775656&s=books&sprefix=as+cronicas+saxonica%2Cstripbooks%2C353&sr=1-1',
  },
  {
    id: 2,
    title: 'O Cavaleiro da Morte',
    author: 'Bernard Cornwell',
    description: 'Segundo livro da série As Crônicas Saxônicas.',
    imageUrl: 'https://m.media-amazon.com/images/I/51QxVdN3mfL._SY445_SX342_.jpg',
    amazonLink: 'https://www.amazon.com.br/cavaleiro-morte-Crônicas-saxônicas-vol-ebook/dp/B00MV6JA2A/ref=sr_1_4?__mk_pt_BR=ÅMÅŽÕÑ&crid=2ZXW0IRXPWJF3&keywords=As+cronicas+saxonicas&qid=1695775656&s=books&sprefix=as+cronicas+saxonica%2Cstripbooks%2C353&sr=1-4',
  },
];

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/books/tolkien">J.R.R Tolkien</Link>
            </li>
            <li>
              <Link to="/books/starwars">Timothy Zahn</Link>
            </li>
            <li>
              <Link to="/books/cornwell">Bernard Cornwell</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books/tolkien" element={<BookList books={tolkienBooks} />} />
          <Route path="/books/starwars" element={<BookList books={starWarsBooks} />} />
          <Route path="/books/cornwell" element={<BookList books={cornwellBooks} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;