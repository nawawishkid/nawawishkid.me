import Head from "next/head";

export default function Home({ works, blogs, contacts }) {
  return (
    <>
      <Head>
        <title>รับทำเว็บไซต์ เว็บแอปพลิเคชั่น | Nawawishkid</title>
      </Head>
      <div>
        <center>
          <div style={{ padding: `1em` }}>
            <div>
              <img
                src=""
                style={{
                  borderRadius: `50%`,
                  backgroundColor: `gray`,
                  width: `120px`,
                  height: `120px`,
                }}
              />
            </div>
            <h1>Nawawish Samerpark</h1>
            <p>รับทำเว็บไซต์ เว็บแอปพลิเคชั่น</p>
          </div>
          <div>
            <section>
              <h2>ติดต่อ</h2>
              <div style={{ display: `flex`, justifyContent: `center` }}>
                {contacts.map(contact => (
                  <div key={contact.uri} style={{ padding: `0.5em` }}>
                    <a href={contact.uri}>{contact.label}</a>
                  </div>
                ))}
              </div>
            </section>
            <section>
              <h2>ผลงาน</h2>
              <div>
                {works.length ? (
                  works.map(work => <pre>{JSON.stringify(work, null, 2)}</pre>)
                ) : (
                  <p>Coming soon...</p>
                )}
              </div>
            </section>
            <section>
              <h2>บทความ</h2>
              <div>
                {blogs.length ? (
                  blogs.map(blog => <pre>{JSON.stringify(blog, null, 2)}</pre>)
                ) : (
                  <p>Coming soon...</p>
                )}
              </div>
            </section>
          </div>
        </center>
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      works: [],
      blogs: [],
      contacts: [
        { uri: `https://twitter.com/nawawishkid`, label: `@nawawishkid` },
        { uri: `tel:+66957572035`, label: `0957572035` },
        { uri: `mailto:hi@nawawishkid.me`, label: `hi@nawawishkid.me` },
      ],
    },
  };
}
