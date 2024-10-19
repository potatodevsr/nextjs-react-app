import { notFound } from "next/navigation";

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default function ReviewDetail({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) {
  const random = getRandomInt(2);

  if (random === 1) {
    
  }

  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }

  return (
    <>
      <h1>
        Review {params.reviewId} for Product {params.productId}
      </h1>
      <span>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis iusto
        autem eum cumque nemo quis, esse hic harum dolore officia facilis
        aliquid ut eaque quasi exercitationem velit quisquam, repudiandae in.
      </span>
    </>
  );
}
