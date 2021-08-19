import Link from 'next/link';

function PageNotFound() {
  return (
    <>
      <Link href='/'>
        <a>Back to Home</a>
      </Link>
      <h1>404 Page with all the custom styling necessary</h1>
    </>
  )
}

export default PageNotFound;