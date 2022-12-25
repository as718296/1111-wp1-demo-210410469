import { Link, useParams } from 'react-router-dom';

import products from '../data';

const SingleProductPage_69 = () => {
  const { productId } = useParams();
  console.log('productId', productId);
  console.log('prducts', products);

  const product = products.find((item) => item.id === productId);
  console.log('product', product);
  const { image, name } = product;
  return (
    <section className='section product'>
      <img src={image} alt='' />
      <h5>{name}</h5>
      <Link to='/products'>back to prducts</Link>
    </section>
  );
};

export default SingleProductPage_69;
