import "./about.css"
import Images from "../../Images/avatar1.jpeg"
const About = () => {
  return (
    <div>
      <section>
        <div className="avatar-header">
          <img className= "avatar" src={Images}/>
          <h1>{"Hi, I'm Nadya Alicia Hermez"}</h1>
        </div>   
        
        <div>
                  <p>{"Hello there! My name is Alicia (\"Ali\"), and I live on the sunny coast of California."}</p>
          <p>{"A Glimpse into My World, I thrive on adventure and creativity, constantly seeking new experiences that broaden my horizons."} 
          + {"As a seasoned professional with a diverse background in the financial and real estate industries. With a career spanning over 30 years, she began her journey in the financial industry, excelling in managing investments, loans, and insurance for her clients. Her expertise and dedication led her to transition into the field of residential appraisals, where she has been an esteemed state-certified appraiser in California."}</p>
           <p>{"Throughout her career, Alicia has made significant contributions to the real estate industry. She served as a board member of the Real Estate Appraiser Association (REAA), where she actively contributed to the development and advancement of the profession. Additionally, she is a proud member of the National Association of Appraisers (NAA), aligning herself with a reputable organization committed to excellence in the field."}</p>
          <p>{"With her combined expertise in finance, real estate, coding, and web development, Alicia offers a unique perspective to her work. She leverages her technical skills to create engaging online platforms, optimize user experiences, and effectively communicate information in the digital realm."}</p>
          <p>{"Let's Connect! If you're as fascinated by life's adventures and creative pursuits as I am, let's connect and share stories. I'm always open to new friendships and exciting collaborations!"}</p>
        </div>
      </section>
    </div>
  )
}

export default About