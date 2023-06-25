import React from 'react'

const Cards = () => {

    let htmlText = "";
    function allButton() {
      htmlText = generateCards();
      ("#flex-grid").html(" ");
      return ("#flex-grid").html(htmlText);
    }

    let CardsArr = [
    {
      id: "1",
      title: "Fresh Graduate or IT...",
      thumbnail:
        "https://edyoda.s3.amazonaws.com/media/blog-images/7_reasons_to_learn_Python_u3lFION.jpg",
      description:
        "We have had an insight into Artificial Intelligence. Well, one of its subfields is machine learning and this introduction will help you get a fair idea of what this machine learning.",
      author: "Edyoda",
      date: "23 Aug 2019",
      filterContent: "Techology and Tools"
    },
    {
      id: "2",
      title: "Introducing you all to EdYoda...",
      thumbnail:
        "https://edyoda.s3.amazonaws.com/media/blog-images/edyoda_WxvDSK1.jpg",
      description:
        "We’re rapidly moving towards a day and age where almost everything can be controlled by machines and one of the most revolutionary moves has been th..",
      author: "Edyoda",
      date: " 08 july 2019",
      filterContent: "Techology and Tools"
    },
    {
      id: "3",
      title: "From identity crisis to the Success Story - The...",
      thumbnail:
        "https://edyoda.s3.amazonaws.com/media/blog-images/devops-edYoda-blog-small.jpg",
      description:
        "Big data is the phrase that is used to define large structured and unstructured volumes of data that has the potential to be mined for information and used in machine.",
      author: "Edyoda",
      date: " 23 july 2019",
      filterContent: "DevOps"
    },
    {
      id: "4",
      title: "Typical day of Data Scientist - An insider story!",
      thumbnail:
        "https://edyoda.s3.amazonaws.com/media/blog-images/Data_Scientist_1920_1280_DsZBGZu.jpg",
      description:
        "DevOps is a term derived after combining development and operation for a common purpose- driving the development of operational processes. ",
      author: "Edyoda",
      date: " 23 Aug 2019",
      filterContent: "Artificial Intelligence"
    },
    {
      id: "5",
      title: "Amazon Web Services (AWS) Cloud Day...",
      thumbnail:
        "https://edyoda.s3.amazonaws.com/media/blog-images/edyoda_blog_aws_cloudday_17may2018_Bangalore_small_ByulIE.jpg",
      description:
        "In today’s dynamic world, developing a rapid application with a smooth user interface that can adapt to specific features is the main business requirement.",
      author: "Edyoda",
      date: " 28 Sep 2019",
      filterContent: "Cloud Computing"
    },
    {
      id: "6",
      title: "edYoda Meetup #01 : A Date wit...",
      thumbnail:
        "https://edyoda.s3.amazonaws.com/media/blog-images/cloud-meetup-edyoda-large_xJDPPZO.jpg",
      description:
        "I recently had the opportunity to lead the initiative to organize the first Cloud meetup for edYoda. Here, I...",
      author: "Ashish Pandey",
      date: " 05 Jul 2019",
      filterContent: "Cloud Computing"
    },
    {
      id: "7",
      title: "Breaking the Myths around Cybersecurity",
      thumbnail:
        "https://edyoda.s3.amazonaws.com/media/blog-images/pitanjal-industry-4-image-1.jpg",
      description:
        "Cybersecurity plays an integral role in the process of good business models. But even cybersecurity programs built with good intentions can fall short in.",
      author: "Edyoda",
      date: " 26 Aug 2019",
      filterContent: "Others"
    },
    {
      id: "8",
      title: "Industry 4.0 - The Prospects...",
      thumbnail:
        "https://edyoda.s3.amazonaws.com/media/blog-images/pitanjal-industry-4-image-1.jpg",
      description:
        "Did you ever dream a world where computers are connected and will communicate with on...",
      author: "Pitanjal Dutta",
      date: " 05 Jul 2019",
      filterContent: "Techology and Tools"
    },
    {
      id: "9",
      title: "Why do Database...",
      thumbnail:
        "https://edyoda.s3.amazonaws.com/media/blog-images/Copy_of_aptitude_1920_1280_LVmu25g.png",
      description:
        "Wondering why Database Management Systems like MySQL, NOSQL, MSSQL, Oracle SQL, MongoDB form...",
      author: "Pitanjal Dutta",
      date: " 05 Jul 2019",
      filterContent: "Techology and Tools"
    },
    {
      id: "10",
      title: "Master your General...",
      thumbnail:
        "https://edyoda.s3.amazonaws.com/media/blog-images/aptitude-small.jpg",
      description:
        "Simply put, web scraping is one of the tools developers use to gather and source information from the internet. Some websites and platforms offer application..",
      author: "Pitanjal Dutta",
      date: " 05 Jul 2019",
      filterContent: "Get a Job"
    },
    {
      id: "11",
      title: "Ace your Soft Skills - Tips to...",
      thumbnail:
        "https://edyoda.s3.amazonaws.com/media/blog-images/ace-soft-skills-small.jpg",
      description:
        "Soft skills are seen to be as important as your technical skill set. When an organisation is hiring, soft skills is...",
      author: "Pitanjal Dutta ",
      date: " 05 Jul 2019",
      filterContent: "Get a Job"
    },
    {
      id: "12",
      title: "Getting started with Artificial...",
      thumbnail:
        "https://edyoda.s3.amazonaws.com/media/blog-images/learn-artificial-intelligence.jpeg",
      description:
        "We’re rapidly moving towards a day and age where almost everything can be controlled by machin...",
      author: "EdYoda",
      date: " 08 Jul 2019",
      filterContent: "Artificial Intelligence"
    }
  ];

  const generateCards = CardsArr.map((item) => {
    return (
      <div className="box">
        <img className="Image" src={item.thumbnail} />
        <div className="card-title">{item.title}</div>
        <div className="Author">
          <span>{item.author}</span>
          <p className="card-date"> | {item.date} </p>
        </div>
        <div className="Para">{item.description}</div>
      </div>
    );
  });

  return (
    <>
      <div id="topbar">
        <header>
          <nav>
            <div id="nv">
              <div className="ed">EDYODA</div>
              <span className="st">stories</span>
            </div>
            <div className="in">
              <h4 id="ex">Explore categories</h4>
              <span>
                <img
                  id="drops"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAGCAYAAAD37n+BAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHhJREFUeNpiYGBguAPE/f///2fAh0FqgPguiBEDxC+BeDUQM2NRyAyVewlWCxW0B+L7QHwAiHmRFPNCxUBy9mAxJElVIL4MxBeBWB6KL0LFVOHq0KwXAuJDQHwPikFsIWQ1jFCFcMDIyMgGpFZAuRFA+V/I8gABBgD8EGd4shdx5wAAAABJRU5ErkJggg=="
                />{" "}
              </span>
            </div>
            <p id="pg">
              Edyoda is a free learning and knowledge
              <br />
              sharing platform for techies
            </p>
            <div id="nav-bar">
              <button className="button">Go To Main Website</button>
            </div>
          </nav>
        </header>
      </div>
      <div className="cards-wrapper">
        <div className="tr">Latest posts</div>
        <div className="filtxt">
          <img
            id="fil"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAbFBMVEUAAAA1gME1gME1f8A1gME1gMExd7Q0f8AxeLYzfb00fr80f8Aze7oze7o1gMA0fr4zfLwzfb0zfb0yerg0fb00f8AzfLszfLwzfr40f780f8Azfb00f8A0f8AzfLwzfr81gME0fr4zfLs1gMEkRxAZAAAAI3RSTlMAHOP9f/oT1RAO281OROfhFaSUSkCwnpmOcTfFim9YB/AmGRclE4kAAAF9SURBVGje7dfrboJAEAXgA7jLXRAExRu2vP87No1NJjYpexm3SZv5/vgD9QB7mCwQQggh/rI2YtCwUpUxw7mGhTZdWMoWZlHMC4kjmL0Xv3Al8zHhZCQTbOid159/fRwyWIlK+p2rQcPSvnBLoa+mJ1jrG7+bVdRwcLsvHpoeLuaLepxh4nAd9xvc5F1ityx0Juoyw5EeXZely2DAL/JOw8M+NafQ4TKCl7pxeED28FRtrctbw9uk1u4YHdhW8Jd39LislXcCRzZalEt1OVj0YF76MQPTyVjkQYOtprlvmO4cfbysoOnOc6UiG6Y7Q36kIn8v7xWvkh1+mPvqmIPBtIExb0385z5/ups3MM+2b3ixi3nXy7eREAmREAmREAmRkPWQsw4Xkiz05hMqJEkoI0wIZTQVEC7k8VH0CGDztB5pDRKkXfTWHjJkOMGAX+Fdi0CowqMGCROiDpQRKkR1GcLZ0PtbODf1OUquOULKpzQ+VwitjTIIIYQQ/9wHYyfu5wm8dM0AAAAASUVORK5CYII="
          />
          Filter by Category
        </div>
        <div id="category">
          <input
            className="active"
            onClick="<allButton/>"
            type="button"
            value="All"
          />
          <input
            className="nbtn"
            id="ai-btn"
            type="button"
            value="Artificial Intelligence"
          />
          <input
            className="nbtn"
            id="cloud-btn"
            type="button"
            value="Cloud Computing"
          />
          <input className="nbtn" id="dev-btn" type="button" value="DevOps" />
          <input
            className="nbtn"
            id="prog-btn"
            type="button"
            value="Programming languages"
          />
          <input
            className="nbtn"
            id="mob-btn"
            type="button"
            value="Mobile Application Developement"
          />
          <input
            className="nbtn"
            id="tech-btn"
            type="button"
            value="Technology and Tools"
          />
          <br />
          <input
            className="nbtn"
            id="job-btn"
            type="button"
            value="Get a Job in a Tech Company"
          />
          <br />
          <input
            className="nbtn"
            id="others-btn"
            type="button"
            value="Others"
          />
          <br />
          <br />
        </div>

        <div id="flex-grid">{generateCards}</div>
      </div>
      <footer>
        <div className="Footer__Footer__2T3w3">
          <div className="Footer__Row__2Koch">
            <div className="Footer__Column__1mRXM">
              <h3 className="Footer__ColumnHeading__sK9kQ">EDYODA</h3>
              <a href="/about">About Us</a>
              <a href="/contact-us">Contact Us</a>
              <a href="/terms">Terms of Use</a>
              <a href="/privacy">Privacy Policy</a>
            </div>
            <div className="Footer__Column__1mRXM">
              <h3 className="Footer__ColumnHeading__sK9kQ">RESOURCES</h3>
              <a href="/courses/all">Courses</a>
              <a href="/videos/all">Learning Videos</a>
              <a href="/channel/all">Educators</a>
              <a href="/stories">EdYoda Stories</a>
              <a href="https://university.edyoda.com/" rel="noopener">
                University
              </a>
            </div>

            <div className="Footer__Column__1mRXM">
              <h3 className="Footer__ColumnHeading__sK9kQ">FOR ENTERPRISES</h3>
              <a
                href="https://www.zekelabs.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Train Your Employees
              </a>
              <h3 className="Footer__ColumnHeading__sK9kQ">QUICK LINKS</h3>
              <a href="/learn-and-earn">Learn and Earn</a>
              <a href="/become-learning-enabler">Become a Learning-Enabler</a>
              <a href="/learning-enabler-tips">Tips for Learning-Enabler</a>
              <a href="/requestnewtopic">Request New Topic</a>
            </div>
            <div className="Footer__Column__1mRXM Footer__SocialLinksContainer__2kpSA">
              <h3 className="Footer__ColumnHeading__sK9kQ">CONNECT</h3>
              <div className="Footer__Column__1mRXM">
                <a className="Footer__AddressText__1CPUN">
                  2nd Floor #188, Survey No. - 123/1, <br />
                  Incubes Building Next to McDonalds,
                  <br />
                  ITPL Main Rd, Br /ookefield,
                  <br />
                  Bengaluru, Karnataka-560037,
                  <br />
                  India
                </a>
                <a
                  href="mailto:hello@edyoda.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://www.edyoda.com/static/media/email-white.e7d51381.svg"
                    alt="EdYoda Email Icon"
                    className="Footer__ContactIcon__2TTbB"
                  />
                  hello@edyoda.com
                </a>
                <div className="Footer__SocialLinks__174hs">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.google.com/maps/place/zekeLabs/@12.9671441,77.7143744,17z/data=!3m1!4b1!4m5!3m4!1s0x3bae12256340d8a7:0xc9c6dfb48a7eeadd!8m2!3d12.9671441!4d77.7165631"
                  >
                    <img
                      src="https://www.edyoda.com/static/media/location-pin.de95721a.svg"
                      alt="Google maps location icon"
                      className="Footer__SocialIcon__2m5Mx"
                    />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://twitter.com/EdYodaHQ"
                  >
                    <img
                      src="https://www.edyoda.com/static/media/twitter-white-icon.ea27ab22.svg"
                      alt="EdYoda Twitter Icon"
                      className="Footer__SocialIcon__2m5Mx"
                    />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://en-gb.facebook.com/edYoda.here/"
                  >
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAqCAYAAAC+5wuXAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAMlJREFUeNpi/P//PwMewAzEPkDsBcRWQKwIxNxYVYIMwoG1gPjCfyIBCw6XqAPxQSAWYSASMGERYwTiBaQYgssgWyC2YCARYDMolIEMgM0gc3IMwhbYSgT0XATiTiB+AsTf4AGLJR39AmJWPAZpAvENjBjCYtB/Ai4CJdJ/xIQRIfCP2MBmoFas4QPf8MWaCwkG/celHhTY/6ngs/fUCqMX1DLoGbUMej6MvcYCLRGJzWsfgVhgUGWRUYNGDRo1aNSgUYNIBgABBgDTamTg3XAChAAAAABJRU5ErkJggg=="
                      alt="EdYoda Facebook Icon"
                      className="Footer__facebookIcon__193xx Footer__SocialIcon__2m5Mx"
                    />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/company/edyoda/?originalSubdomain=in"
                  >
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACE1BMVEUAAAD//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f3//f0AAACS7nrlAAAAr3RSTlMAARIiEydtsub757RvKUO+wEIauRXp4zb68i0q7+AWAs+oX/4z4bM3+Q2FVb+R2LDxzvXV3b3EpJJxRyMH8NN7VgrJTP3zd4JaTtoUifTiamucBiU7UVsyGwwdL0BKIQtUjsj435dQJGAOaXkxEJ2D97w8sURn/GK7gZumBLp6Qbjlt262tQPGOJ6KhqDRD+oZra+WkK6HzKwomaua9o2qgJ+pOcPkp9KlfaNwoqER3P6g3gAAAAFiS0dEAIgFHUgAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiCwQRLRRI/vG6AAADvElEQVR42u3a+TsUYQAH8HfLteQuqWRJISo3hRK2U22HDhRJCB1CETolXZJSoUv3Xe+/WPJsz66d9zvzjnnfeR6735/fd76fPWfmnZcQX1xjWbDQz2JWuX9AYJCVUmoNDlkUKr8+LJy6JiJSbn2Ue/10ohfLfPlLqGdilkrrj4ylSlm2XFL/ijiqnJXxUvptCZSVRCmAVcx+mrRaQr9lDRtAkyUAUkA/TV0rHpCGADRdPGAdBKwXD9gAARniAZkQkCUekA0BOeIBuRCQJx6QDwEF4gEbIWCTeEAhBBSJBxRvBv1bxPcTUgIAW2UASoOY/WVyrpDL7Yz+bbIuibYr99vLJfUTsiNJoT97p7R+QnZ5/hR2y3r/Z1KxZ69bvWNfsdT+v4nfn+w8LzkOpB+UXf8vxZWHDh8pPFplSrkvvvjii5BU1xw7XptSd8KM7qj6kw2n/p9YG8uampn3uadb2Jl1Sihkj3RbVWtty/I8vcdGnDmrCGgB14Tn3IeCG1mXm8i688y7rYbIuQHCNQBK2y+AA9KOlLkA8tQBnQ6qki5/kYBm+PJnknlRN6BDDXCpW72fUmuPXsBlFUCvlvrppFlEAGx9Wvsp7b+iC3AVAq5p76e0XRcgGgE6NX3+ztiv6wHcAAC/GJ5+Sm9WGAvoCuHrpzRQB2CAPTKOcucWP2CQvwUks5UbcNtQgHMByjxA4xAvgPuLppJ6XkCywYA7ZgPoXU5AoNGAe5yALm2HdQze7wl4MPxQfWQuJyBDQ3tC7YhzeGjvI7XRo0YDgntsrhPiH6uMr+cDPFHrH6smsxKAJzzlAzxT6e8jnnkOZ4zzAVTe0IkhBYAFfnO7qw0ERCiv7FVa0aQwLsAEfDGTRDkv0Kw2LsBLdKhXjH5ShGaVGAZ4HcUCEPSP9IYLMAWGjjH7yVsw7R0X4D0YCp4yfwDTurgAiWDoKBtQBaZ9NArwid1PhuzseTlcgM/skV8AgLCfStFgLkA/e2Q+Aoyz56UaBRhAAPRvzAX4yh4JNxo0GQUo0An4ZhTgu07Aj3kD+Gk24JfZgGEfwGyA6d8B038Fpv8PmA7Qey4wDKD3bGgYAFwPyAGASzI5AHBR6iUAcGMiBzBlNgDcnMoBgPUBOQCwQuIlALBKJgcA1gnlADLMBoCbTDkAsFzvJQDwxEQOADy0kgMAj+3kAMCTUzkA8OzYSwBo/4AUANxBIQOA95BIAKht4xEOUN3INO8BGjaziQWEmw3QtqGRFzAyyY7N/UA17JFwS/5vUEG8Pn8AAeaBBm01AhgAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMTEtMDRUMTc6NDU6MjArMDE6MDDpm7GmAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTExLTA0VDE3OjQ1OjIwKzAxOjAwmMYJGgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII="
                      alt="EdYoda LinkedIn Icon"
                      className="Footer__SocialIcon__2m5Mx"
                    />
                  </a>
                </div>
                <a>
                  © 2020 <br />
                  zekeLabs Technologies Private Limited
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}



export default Cards