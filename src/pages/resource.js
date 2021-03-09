import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Resource = () => (
  <Layout>
    <SEO title="Resource" />
    <h1 className="headResource">"Helpful Resources"</h1>
    <hr />
    <p>This app was designed to bring awareness to the Anxiety Disorders at large. Having a family who personally deals with such symptoms, I never understood how difficult of an anxiety attack can hurt. I hope this helps anyone who is searching, may be suffering, or wanting any relief out of a stressful environment. Please seek medical personal if you are in a crisis. Resources are provided below.</p>
    <hr />
    <div className="resource">
      <h3>If you or know of anyone who may be in need of help, resources and staff agencies are always available. Do Not Hesitate to reach out.</h3>
        <ul>
          <li><a href="https://www.nami.org/About-Mental-Illness/Mental-Health-Conditions/Anxiety-Disorders" target="_blank" rel="noreferrer" className="resourceLinks">NAMI</a> is a National Alliance Mental Illness company that provides a full list of Symptoms and Types of Anxiety Disorders. There are many a types of Anxiety Disorders, while each can influenting an individual in many forms. NAMI goes into depth on how to treat it and who to contact, if you feel you or know someone who may be suffering from a certain Anxiety Disorder. NAMI helplines are available.The direct number is <a href="tel">800-950-6264</a> M-F 10am -8pm ET or if in a crisis, text "NAMI" to <a href="tel">741741</a> for 24/7 confidential, free crisis counseling.
          </li>
          <li><a href="https://www.everydayhealth.com/anxiety/guide/resources/" target="_blank" rel="noreferrer" className="resourceLinks">EverydayHealth</a> is a helpful newsletter which provides insights on different mental illnesses. They provide a wide range of topics to choose from, including Anxiety Disorders. "Anxiety Resources" by "Joseph Bennington-Castro" has provided a detailed list on multiple organizations available to the public. Castro goes into depth on a list of medications that are commonly used to treat anxiety. "Anxiety Resources" will be a great newsletter to find more information on the topic you are looking for.
          </li>
          <li><a href="https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/managing-stress-anxiety.html" target="_blank" rel="noreferrer" className="resourceLinks">CDC</a> is a well renowned operating component of the Department of Health and Human Services. They have given a full pledge on fighting the COVID-19 pandemic. So many lives are dealing with the pandemic in variety of ways, which leads to extreme amounts of stress. Acknowledging the stress at hand is a natural to cope with stress. The CDC has provided coping methods as well as crisis resources and phone numbers. <a href="tel">1-800-273-TALK</a> for the "National Suicide Prevention Lifeline."
          </li>
          <li><a href="https://www.aacap.org/AACAP/Families_and_Youth/Resource_Centers/Anxiety_Disorder_Resource_Center/Home.aspx" target="_blank" rel="noreferrer" className="resourceLinks">AACAP</a> as well known as American Academy of Child and Adolescent Psychiatry dives in how our youths go thru the same difficult stress adults have to deal with. This guide provides treatment resources as well as books and information on when to provide for help. They also have links to other helpful apps as well!
          </li>
          <li><a href="https://childmind.org/topics/concerns/anxiety/" target="_blank" rel="noreferrer" className="resourceLinks">Childmind</a> goes over the topics of anxiety and what necessary steps should be taken. As stated before, there are many varieties of anxiety which can be even more complicated in children. Noticing these signs upfront are relative to a child's development.
          </li>
        </ul>
    </div>
    <hr />
      <p className="resourceHardQuote">"If you correct your mind, the rest of your life will fall into place."<br />-Lao Tzu</p>
    <StaticImage
    src={`../images/mountain-lake.jpg`} alt="Mountain and Lake"
    />
    <Link to="/" className="linkHome">Breathe</Link>
  </Layout>
)

export default Resource