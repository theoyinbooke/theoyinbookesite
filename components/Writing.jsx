// Writing.jsx - External post embeds

const POSTS = [
  {
    title: 'Small Models, Big Moment: Why 2026 Is the Year Local AI Gets Real',
    description: 'Open-source LLMs are no longer a compromise. They are the opportunity.',
    source: 'Substack',
    url: 'https://substack.com/home/post/p-190062512',
    image: 'https://substackcdn.com/image/fetch/$s_!i5KF!,f_auto,q_auto:best,fl_progressive:steep/https%3A%2F%2Ftheoyinbooke.substack.com%2Ftwitter%2Fsubscribe-card.jpg%3Fv%3D-1290156482%26version%3D9',
  },
  {
    title: 'Run Large Language Models on Your Local Machine - No Coding Experience Required',
    description: 'You do not need a computer science degree to run advanced AI. You just need the right guidance and the willingness to learn.',
    source: 'LinkedIn',
    url: 'https://www.linkedin.com/pulse/run-large-language-models-your-local-machine-coding-oyinbooke-kndmc',
    image: 'https://media.licdn.com/dms/image/v2/D5612AQEKBpeRSWP1Vg/article-cover_image-shrink_720_1280/B56ZWnRybTHQAI-/0/1742268213886?e=2147483647&v=beta&t=RY-iQOmDLr0bFpoKPapiAmEWUQQZY92NVMr_p_f5r28',
  },
  {
    title: 'Run it.',
    description: 'Your first local AI model is 5 minutes away. The only thing between you and it is the decision to open a terminal.',
    source: 'LinkedIn',
    url: 'https://www.linkedin.com/pulse/run-olanrewaju-oyinbooke-yjjac',
    image: 'https://media.licdn.com/dms/image/v2/D5612AQGB8yvRkTqaXQ/article-cover_image-shrink_720_1280/B56Z1VDS7NKcAI-/0/1775248421122?e=2147483647&v=beta&t=kPY4ODA4btaAFUF2rv3g6gMP_8xVpdOYDf3YtRGjUP8',
  },
  {
    title: 'Ollama Was the Start. This Is the Next Step',
    description: 'Your local AI toolkit just got bigger. A practical next step for people learning to run and use AI locally.',
    source: 'LinkedIn',
    url: 'https://www.linkedin.com/pulse/ollama-start-next-step-olanrewaju-oyinbooke-pdhlc',
    image: 'https://media.licdn.com/dms/image/v2/D5612AQGaQlZOK20n9Q/article-cover_image-shrink_720_1280/B56Z1r10soIYAI-/0/1775630765731?e=2147483647&v=beta&t=JWWpMkJ6lUwaw7yOATwkf3DLd7vy869kMVHB7efrTDo',
  },
  {
    title: 'BRINGING THE SKILLS CLOSER',
    description: 'A reflection on access, learning, and bringing professional skills closer to people who need them.',
    source: 'LinkedIn',
    url: 'https://www.linkedin.com/pulse/bringing-skills-closer-oyinbooke-olanrewaju-charles',
    image: 'https://static.licdn.com/scds/common/u/images/email/artdeco/logos/96/linkedin-bug-color.png',
  },
  {
    title: 'Is My Country (Nigeria) Ready for the Fourth Generation of the Industrial Revolution?',
    description: 'Questions about readiness, systems, and the future of work in Nigeria through the lens of industrial transformation.',
    source: 'LinkedIn',
    url: 'https://www.linkedin.com/pulse/my-country-nigeria-ready-fourth-generation-industrial-oyinbooke',
    image: 'https://static.licdn.com/scds/common/u/images/email/artdeco/logos/96/linkedin-bug-color.png',
  },
  {
    title: 'My Journey to Relevance',
    description: 'A personal reflection on uncertainty, growth, and finding direction through learning and persistence.',
    source: 'LinkedIn',
    url: 'https://www.linkedin.com/pulse/my-journey-relevance-oyinbooke-olanrewaju-charles-1',
    image: 'https://media.licdn.com/dms/image/v2/C4E12AQH4-CvxgKcE8Q/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1520178212035?e=2147483647&v=beta&t=mg-o7w1Hvad93UX7n_FYaHcuw9EpiZss6kWvk9-7vDw',
  },
];

function Writing() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <Reveal>
            <span className="mono" style={{ color: 'var(--accent)', display: 'block', marginBottom: '1rem' }}>Writing</span>
            <h1 className="display-lg" style={{ marginBottom: '0.5rem' }}>Posts from around the web</h1>
            <p className="body-lg" style={{ maxWidth: 620, marginBottom: '3rem' }}>
              A directory of essays and articles I publish across Substack, LinkedIn, Medium,
              and other platforms.
            </p>
          </Reveal>

          <div className="post-grid">
            {POSTS.map((post, index) => (
              <Reveal key={post.url} delay={index * 0.06}>
                <PostEmbed post={post} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function PostEmbed({ post }) {
  return (
    <a className="post-embed" href={post.url} target="_blank" rel="noopener">
      <div className="post-thumb" data-source={post.source}>
        {post.image && (
          <img
            src={post.image}
            alt=""
            loading="lazy"
            onError={(event) => {
              event.currentTarget.style.display = 'none';
              event.currentTarget.parentElement.dataset.fallback = 'true';
            }}
          />
        )}
      </div>
      <div className="post-body">
        <div className="post-meta">
          <span>{post.source}</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
        </div>
        <h2>{post.title}</h2>
        <p>{post.description}</p>
      </div>
    </a>
  );
}

Object.assign(window, { Writing });
