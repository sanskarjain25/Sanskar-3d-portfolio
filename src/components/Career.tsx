import "./styles/Career.css";

const workExperience = [
  {
    role: "Associate Software Engineer",
    company: "Osmosys Software Solutions",
    timeline: "2024 - NOW",
    description:
      "Built invoice APIs and UI workflows, integrated AI chatbot functionality used by 500+ daily users, and delivered 15+ responsive Angular pages that improved UX and reduced support tickets.",
  },
  {
    role: "Web Development Intern",
    company: "TechBairn",
    timeline: "2023",
    description:
      "Improved a full-stack client application using HTML, CSS, TypeScript, and Bootstrap, contributing to a smoother onboarding flow with 100+ users enrolled in a quarter.",
  },
];

const education = [
  {
    role: "B.E. Computer Science",
    company: "KIIT University",
    timeline: "2020-24",
    description:
      "Graduated with GPA 9.20. Core coursework included Data Structures and Algorithms, Operating Systems, and Databases.",
  },
  {
    role: "Intermediate (CBSE)",
    company: "Atomic Energy Central School No. 4",
    timeline: "2018-19",
    description:
      "Physics, Mathematics, and Computer Science with 81.6%.",
  },
  {
    role: "Class X (CBSE)",
    company: "Atomic Energy Central School No. 4",
    timeline: "2016-17",
    description: "Completed secondary education with CGPA 10.",
  },
];

const achievements = [
  {
    title: "Quarterly Excellence Award",
    org: "Osmosys Software Solutions",
    detail:
      "Recognized for outstanding contributions to the Temporary Housing Directory (THD) project in Apr-Jun 2025.",
  },
  {
    title: "Letter of Recommendation",
    org: "KIIT University",
    detail:
      "Received a Letter of Recommendation from KIIT University for exceptional work on the KIIT University Society website, resulting in a 60% increase in user engagement and a 40% boost in event registrations.",
  },
];

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My journey <span>&</span>
          <br /> experience
        </h2>
        <div className="career-columns">
          <div className="career-block">
            <h3 className="career-block-title">Work Experience</h3>
            <div className="career-track">
              <div className="career-timeline">
                <div className="career-dot"></div>
              </div>
              <div className="career-info">
                {workExperience.map((item, index) => (
                  <div className="career-info-box" key={`work-${index}`}>
                    <div className="career-info-in">
                      <div className="career-role">
                        <h4>{item.role}</h4>
                        <h5>{item.company}</h5>
                      </div>
                      <h3>{item.timeline}</h3>
                    </div>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="career-block">
            <h3 className="career-block-title">Education</h3>
            <div className="career-track">
              <div className="career-timeline">
                <div className="career-dot"></div>
              </div>
              <div className="career-info">
                {education.map((item, index) => (
                  <div className="career-info-box" key={`edu-${index}`}>
                    <div className="career-info-in">
                      <div className="career-role">
                        <h4>{item.role}</h4>
                        <h5>{item.company}</h5>
                      </div>
                      <h3>{item.timeline}</h3>
                    </div>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="career-achievements">
          <h3 className="career-block-title">Achievements</h3>
          <div className="career-achievement-list">
            {achievements.map((item, index) => (
              <div className="career-achievement-card" key={`achievement-${index}`}>
                <div className="career-role">
                  <h4>{item.title}</h4>
                  <h5>{item.org}</h5>
                </div>
                <p>{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
