import Link from "next/link";

export default function ProductList() {
  const productId = 100;
  return (
    <>
      <h1>Welcome ProductList!</h1>
      <Link href="/">Home Page</Link>
      <ul>
        <li>
          <Link href="products/1" replace>
            Product 1
          </Link>
        </li>
        <li>
          <Link href="products/2" replace>
            Product 2
          </Link>
        </li>
        <li>
          <Link href="products/3" replace>
            Product 3
          </Link>
        </li>
        <li>
          <Link replace href={`products/${productId}`}>
            Product {productId}
          </Link>
        </li>
      </ul>
    </>
  );
}
