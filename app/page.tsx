import Link from "next/link";
import { notFound } from "next/navigation";
const Page = (props: { searchParams: { test?: string } }) => {
  // This would happen if you were searching for something in your db and it was not found
  if (props.searchParams.test) {
    notFound();
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        padding: "20px 0px 0px 0px",
      }}
    >
      <h1>This page demonstrates the issue.</h1>
      <p>
        Expected: click on the link below, 404 appears, go back and this page
        shows.
      </p>
      <p>Actual: link is clicked and 404 appears, go back and 404 remains </p>
      <Link href={{ href: "/", query: { test: "true" } }}>
        click to demonstrate
      </Link>
    </div>
  );
};

export default Page;
