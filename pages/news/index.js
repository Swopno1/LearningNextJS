import Link from 'next/link';

function NewsArticleList({ articles }) {
  return (
    <>
      <h1>News Article List</h1>
      {
        articles.map(article => {
          return (
            <div key={article.id}>
              <h2>
                <Link href={`/news/${article.id}`}>
                  <a>{article.id}. {article.title}</a>
                </Link>
              </h2>
            </div>
          )
        })
      }
    </>
  )
}

export default NewsArticleList;

export async function getServerSideProps() {
  const response = await fetch('http://localhost:4000/news');
  const data = await response.json();

  return {
    props: {
      articles: data,
    }
  }
}