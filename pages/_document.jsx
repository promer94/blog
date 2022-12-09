import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    const meta = {
      title: "Yixuan's Blog",
      description: 'Some random thoughts',
      image: 'https://blog.yixuanxu.com/images/og.png'
    }
    return (
      <Html lang="en">
        <Head>
          <meta name="robots" content="follow, index" />
          <meta name="description" content={meta.description} />
          <meta property="og:site_name" content={meta.title} />
          <meta property="og:description" content={meta.description} />
          <meta property="og:title" content={meta.title} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="image" content={meta.image} />
          <meta itemProp="image" content={meta.image} />
          <meta name="twitter:image" content={meta.image} />
          <meta property="og:image" content={meta.image} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
