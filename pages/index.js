import Head from 'next/head'

import { fetchEntries } from '@utils/contentfulPosts'

import Header from '@components/Header'
import Footer from '@components/Footer'
import Post from '@components/Post'

const Home = ({ posts }) => {
  return (
    <div className="container">
      <Head>
        <title>mcclowes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <div className="posts">
          {posts.map((post, i) => {
            return <Post key={i} {...post} />
          })}
        </div>
      </main>

      <Footer />

      <style jsx>{`
        .container {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .posts {
          display: flex;
          flex-direction: column;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
            Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

export default Home

export const getStaticProps = async () => {
  const res = await fetchEntries()

  // normalize
  const posts = await res.map((post) => {
    return post.fields
  })

  return {
    props: {
      posts,
    },
  }
}
