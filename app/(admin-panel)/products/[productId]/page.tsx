export default function ProductById({
  params,
}: {
  params: { productId: string };
}) {
  return (
    <>
      <h1>Details About Product! {params.productId}</h1>
      <span>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis iusto
        autem eum cumque nemo quis, esse hic harum dolore officia facilis
        aliquid ut eaque quasi exercitationem velit quisquam, repudiandae in.
      </span>
    </>
  );
}
