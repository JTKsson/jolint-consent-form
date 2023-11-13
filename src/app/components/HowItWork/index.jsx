'use client'
import Styles from './howItWork.module.css'

const HowItWorksContent = [
  {
    title: 'Data Extraction',
    content:
      "Jolint pulls out interaction info from common work tools like email, but without touching any personal details. Imagine it like seeing where conversations happen without knowing who said what. This way, Jolint gets a bird's-eye view of how people connect at work while keeping everyone's privacy intact.",
    image: '/Group 2080.svg',
  },
  {
    title: 'Anonymization',
    content:
      "Jolint gives everyone an anonymized ID, replacing real names and emails to keep things private. So, even when looking at how people interact, there's no way to tell who's who, ensuring everyone's privacy while still understanding the big picture of connections at work.",
    image: '/Group 2130.svg',
  },
  {
    title: 'Data Processing',
    content:
      'Data is transformed into a network representation where each employee is a node and interactions form connections. Each person becomes a point on the web, and the lines between them show conversations. This setup helps Jolint see how well everyone is connected, without knowing any personal details.',
    image: '/Group 2128.svg',
  },
  {
    title: 'AI  Analysis',
    content:
      'AI and machine learning analyze data to pinpoint drivers of inclusion and belonging. They seek patterns to address questions such as new hire integration speed or how to elevate inclusion scores by addressing organizational weak points. The analysis also delves into social capital variations based on gender, role, and hire timing.',
    image: '/Group 2129.svg',
  },
  {
    title: 'Insights Interface',
    content:
      "Insights from the data analysis are showcased in an intuitive interface, offering aggregated-level insights for easier understanding and action. It highlights key drivers of inclusion and recommends activities tailored to your company's specific challenges, aiding in informed decision-making.",
    image: '/Group 2131.svg',
  },
]
const HowItWorks = () => {
  return (
    <div id="how-it-works" className={Styles.contentBox}>
      <h1 className={Styles.mainTitle}>How it works</h1>
      <div className={Styles.timeline}>
        {HowItWorksContent.map((item, index) => (
          <div className={Styles.timelineItem} key={item.title}>
            <section className={Styles.contentCard}>
              <img className={Styles.image} src={item.image} alt={item.title} />
              <div className={Styles.cardContent}>
                <h2 className={Styles.cardTitle}>{item.title}</h2>
                <p className={Styles.contentText}>{item.content}</p>
              </div>
              {index < 4 && (
                <div className={Styles.eclipseMobile}></div>
              )}
            </section>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HowItWorks;