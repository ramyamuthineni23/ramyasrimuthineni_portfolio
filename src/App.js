import React from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import Card from "./components/Card";
import Footer from "./components/Footer";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <Header />

      <Section title="Summary">
        <p>Software Engineer with 4+ years of experience developing scalable distributed systems, designing RESTful APIs, and
building full-stack applications. Proficient in Java, Spring Boot, React, SQL/NoSQL databases, and CI/CD pipelines.</p>
      </Section>

      <Section title="Skills">
        <ul>
          <li><strong>Languages:</strong> C, Java, Python, C#, HTML, CSS, JavaScript</li>
          <li><strong>Technologies:</strong> Spring Boot, Hibernate, Microservices, REST APIs, SQL Server, PostgreSQL, MongoDB, Docker, Kubernetes, Git, JIRA, Jenkins, AWS (Lambda, EC2, S3, DynamoDB), ReactJS, NodeJS, Angular, GCP, Azure</li>
          <li><strong>Machine Learning:</strong> Regression, Classification, Data Preprocessing, EDA</li>
        </ul>
      </Section>

      <Section title="Work Experience">
        <Card
          title="Software Engineer – Syniti (Apr 2021 – Jul 2023)"
          items={[
            "Developed and optimized enterprise data migration workflows using Java, React, SQL",
            "Built 10+ RESTful APIs for validation and feedback",
            "Optimized SQL queries, reducing execution time by 20%",
            "Automated validation – 99.5% accuracy"
          ]}
        />
        
        <Card
          title="Software Engineer – Deepen AI (May 2019 – Mar 2021)"
          items={[
            "Applied object detection models to identify vehicles, pedestrians, and road elements",
            "Preprocessed 10K+ images, boosting model training efficiency by 25%",
            "Built backend components using Python, TensorFlow, and OpenCV",
            "Validated 8K+ labeled images with 98% accuracy",
            "Improved object detection accuracy by 12% through precision and recall evaluation",
            "Documented data workflows, reducing onboarding time by 30%"
          ]}
        />

        <Card
          title="SDE Intern – Zoho Corporation (May 2019 – Jul 2019)"
          items={[
            "Developed a full-stack Library Management System using Java, Spring Boot, React, and SQL",
            "Enabled inventory management, lending, and due date tracking",
            "Added file upload support for bulk book data",
            "Used Java multithreading for concurrent parsing and validation, reducing upload time"
          ]}
        />

      </Section>

      <Section title="Projects">
        <Card
          title="Cloud-Based File Processing System"
          subtitle="React, AWS Lambda, DynamoDB"
          items={[
            "Built serverless backend using AWS Lambda & API Gateway",
            "Provisioned infrastructure with AWS CDK (30% overhead reduction)",
            "Created ReactJS frontend for file upload tracking"
          ]}
        />

        <Card
          title="Heart Disease Diagnosis"
          subtitle="Python, Scikit-learn, Pandas, Matplotlib"
          items={[
            "Built classification model using Logistic Regression and Random Forest with 93% accuracy",
            "Preprocessed medical datasets: cleaned missing values and normalized features",
            "Conducted exploratory data analysis to identify key health indicators for feature selection"
          ]}
        />

      </Section>

      <Section title="Education">
        <p><strong>University of South Florida</strong> — Master of Science in Computer Systems Analysis (Aug 2023 – May 2025), CGPA: 3.83/4.0</p>
      </Section>

      <Footer />
    </div>
  );
}

export default App;
