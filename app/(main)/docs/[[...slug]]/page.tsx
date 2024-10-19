export default function Docs({
  params,
}: {
  params: {
    slug: string[];
  };
}) {
  if (params.slug?.length === 2) {
    return (
      <h1>
        Viewing Docs for feature {params.slug[0]} and concept {params.slug[1]}
      </h1>
    );
  } else if (params.slug?.length === 1) {
    return <h1>Viewing Docs fir feature {params.slug[0]}</h1>;
  }
  return <h1>Docs home page</h1>;
}
// catch all segments
// try url http://localhost:3000/docs/rounting and http://localhost:3000/docs/rounting/catch-all-segments
