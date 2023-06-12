import { runDown } from "@/app/constant";
import styles, {layout} from "@/app/style";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== runDown.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className={`${styles.flexStart}flex-1 flex flex-col ml-12 mr-12`}>
      <h4 className="font-poppins font-semibold text-black text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-black text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Section2 = () => (
  <section id="features" className={`${styles.flexStart2} mt-[100px]`}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        The FRAC <br className="sm:block hidden" /> Curriculum
      </h2>
      <p className={`${styles.paragraph} max-w-[600px] mt-5 mb-5`}>
        The FRAC curriculum is designed to ensure every FRAC Certified Person
        has the ability to identify and handle financial risks in the company.
        The FRAC curriculum is developed based on science and professional
        practical intensive experience so that it is applicable and effective.
        The FRAC curriculum is regularly reviewed to ensure its suitability for
        industry needs.
      </p>
      <p className={`${styles.paragraph} max-w-[600px] mt-5`}>
        To ensure the quality of the FRAC Certified Person, IFMI developed the
        certification scheme and FRAC Curriculum as a single short course and
        certification exam using Global certification standards. Training
        becomes a prerequisite to be able to become a FRAC candidate so as to
        ensure the standardized knowledge and competence of each FRAC candidate.
      </p>
      <p className={`${styles.paragraph} max-w-[600px] mt-5`}>
        The training will be conducted by IFMI Training Partner for 2 full days,
        or if conducted after working hours program, as a four-day program.
        After the training, participants will have to take an exam with 100
        questions to be completed within 2.5 hours. Participants must achieve a
        score of 60 to pass the exam. The exam is conducted online.
      </p>
      <p className={`${styles.paragraph} max-w-[600px] mt-5`}>
        If a participant does not pass the exam, he/she can retake the exam and
        pay the retest fee. There is no limit to the number of times one can
        retake the exam. To enhance the credibility of the program, the program
        is aimed at accreditation. The program is offered as a training and exam
        package. IFMI also requires recertification to ensure the continuity of
        competence of each FRAC Certified Person.
      </p>
      <h2 className={`${styles.heading3} mt-[20px]`}>
        About FRAC's Certification
      </h2>
      <p className={`${styles.paragraph} max-w-[600px] mt-5`}>
        FRAC is a certiﬁcation program that awards the FRAC professional degree
        to risk professionals and managers who have expertise in handling
        ﬁnancial risk in corporations. Unlike banks, which are highly regulated,
        financial risk management in corporations is not well developed and the
        curriculum is not standardized.
      </p>
      <p className={`${styles.paragraph} max-w-[600px] mt-5`}>
        This curriculum is designed to explore the financial risks that exist in
        most companies. Participants will also learn to measure and deal with
        corporate financial risks.
      </p>
      <p className={`${styles.paragraph} max-w-[600px] mt-5`}>
      </p>

    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {runDown.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Section2;
