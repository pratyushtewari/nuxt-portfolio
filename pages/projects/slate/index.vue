<template>
  <div>
    <MainHeader ref="header" />

    <div class="page-content">
      <h1>
        <img class="project-name-logo" src="./img/slate_logo.svg" />
        Slate
      </h1>
      <div class="page" data="page1">
        <h2>EXECUTIVE SUMMARY</h2>
        <h3>
          This report covers the field research process and findings for SLATE’s
          semester-long Capstone project at Carnegie Mellon University’s
          Human-Computer Interaction Institute.
        </h3>
        <br />
        <grid col="3" col-s="1">
          <c span="1">
            <DefinitionBox
              class="sticky-top"
              :data="[
                {
                  title: 'METACOGNITION',
                  definition:
                    'is the cognizance and knowledge of one’s own thinking and thinking processes.'
                },
                {
                  title: 'SELF-REGULATED LEARNING',
                  definition:
                    'is a goal-oriented learning process driven by motivation and metacognitive processes.'
                }
              ]"
            />
          </c>
          <c span="2..." span-s="1">
            <h4>WHO WE ARE</h4>
            <p>
              We are SLATE—a team of two Masters students at Carnegie Mellon
              University’s Human-Computer Interaction Institute, a community
              dedicated to research and education in topics related to computer
              technology and its support of human activity and society. For our
              Capstone project, we were tasked by Vapor, LLC to investigate and
              envision the possibilities for a personal learning companion for
              high school students. We worked closely with two of our peers—Riam
              Chantree and Jamie Crawford—to determine a project scope and
              conduct our field research. Please refer to pages 55 through 57
              for more information about the contributors to this project.
            </p>
            <h4>PROJECT SCOPE</h4>
            <p>
              Our client came to us with the vision of an elaborate personal
              learning companion built on emerging technologies. To make our
              work more manageable, we needed to specify a scope within this
              larger, more ambitious vision. After considering student needs in
              areas such as scheduling and organization, we decided to focus on
              <span class="inline-heading">METACOGNITION</span>
              and
              <span class="inline-heading">SELF-REGULATED LEARNING</span>
              . While there has been extensive research in other areas of
              learning and education, it became apparent through our literature
              review and expert interviews that metacognition is a relatively
              unexplored area with a high potential for impact. Please refer to
              pages 4 through 5 for more detail regarding our area of focus.
            </p>
          </c>
        </grid>
      </div>
      <span class="fading-border"></span>
      <div class="page" data="page2">
        <grid col="3" col-s="1">
          <c span="1" span-s="1">
            <img src="@/assets/img/projects/slate/slate_page3.jpeg" />
          </c>
          <c span="2" span-s="1">
            <h4>RESEARCH PROCESS</h4>
            <p>
              Although we used various methods throughout the research process,
              we gathered the bulk of our data from semi-structured interviews
              with 16 high school students. In an initial round of interviews,
              we aimed to develop a general understanding of each student’s
              approach toward activities and challenges. In the week following
              these interviews, we asked each student to complete a Learning
              Activities Booklet. In these booklets, students were prompted with
              questions about 12 activities, and their answers were used to
              further discussions about habits and learning processes in a
              second round of interviews. Please refer to pages 18 through 21
              for more information on our research methods.
            </p>
            <h4>KEY FINDINGS</h4>
            <p>
              After transcribing each interview, we pulled relevant quotes from
              the transcriptions for use in an affinity diagram. With the
              affinity diagram as our main method of synthesis, we were able to
              group and discover interesting patterns in the data we collected.
              Our key findings revolve around motivation, competition, and the
              use of resources and self-regulated learning strategies. Many of
              these findings lead to insights that could be harnessed in the
              creation of a personal learning companion. Please refer to pages
              22 through 35 for specific findings and supporting evidence.
            </p>
            <h4>VISIONS</h4>
            <p>
              With our research insights in mind, we created three visions of a
              personal learning companion that will target metacognitive
              development in high school students. Our first vision shows how a
              system might help students learn to assess resource credibility,
              our second vision shows how a system might facilitate a student’s
              help-seeking process, and our third vision shows how a system
              might teach students new learning strategies. Please refer to page
              40 through 42 for a storyboard of each vision.
            </p>
          </c>
        </grid>
      </div>
      <span class="fading-border"></span>
      <div class="page" data="page3">
        <h2>OUR CLIENT CHALLENGE</h2>
        <h3>
          To create a personal learning companion that inspires curiosity and
          guides students in their pursuit of learning.
        </h3>
        <br />
        <grid col="3" col-s="1">
          <c span="2" span-s="1">
            <h4>EDUCATION IN AMERICA</h4>
            <p>
              In the existing educational system, high school students often do
              not receive the individual attention and encouragement they need
              in order to meet their own definitions of success. We were tasked
              to address this shortcoming with a personal learning companion
              that will accompany students in their learning pursuits both in
              and out of school.
            </p>
            <h4>OUR CLIENT</h4>
            <p>
              <img
                class="profile"
                src="@/assets/img/projects/slate/katzman.jpg"
              />
              Our client for this project is Vapor, LLC. This company is run by
              Richard Katzman, a successful businessman who led the Katzman
              family business for several decades, bringing its yearly revenue
              from 4 to 500 million US dollars in that time. He has served on
              Princeton Review’s Board of Directors, and is currently the
              Executive Director of Learning Content at Noodle Education.
            </p>
            <p>
              Recognizing that human teachers are a scarce commodity, Katzman is
              determined to leverage emerging technologies in order to bring
              this concept one step closer to reality. He envisions an
              intelligent, customized, and adaptable system that will improve a
              student’s learning process by anticipating their needs and keeping
              them engaged in relevant material. Potential areas of impact that
              have been singled out include the organization and balance of
              academic courses, extracurricular activities, and social events,
              as well as the navigation and utilization of an ever-expanding
              library of online learning content.
            </p>
          </c>
          <c end span="1">
            <img src="@/assets/img/projects/slate/slate_page3-1.jpeg" />
          </c>
        </grid>
      </div>
      <span class="fading-border"></span>
      <div class="page" data="page4">
        <h2>SCHEDULE</h2>
        <grid col="3" col-s="1">
          <c span="1-2" col-s="1">
            <img src="@/assets/img/projects/slate/slate_page4.png" />
          </c>
          <c span="1" col-s="1">
            <p class="sticky-top">
              Research findings and preliminary visions for the project
              prototype were presented in May of 2014, at the end of the spring
              semester.
            </p>
          </c>
        </grid>
      </div>
      <span class="fading-border"></span>
      <div class="page" data="page5">
        <grid col="3" col-s="1">
          <c span="2" span-s="1">
            <h2>THE PROJECT</h2>
            <h3>
              To investigate the metacognitive needs of high school students and
              conceive a system that helps them become independent learners by
              addressing these needs.
            </h3>
            <h4>BACKGROUND</h4>
            <p>
              We are two students in the Masters Program at Carnegie Mellon
              University’s Human-Computer Interaction Institute, and we have
              been investigating the metacognitive needs of high school students
              for our Capstone project. This project is a culmination of
              everything we have learned about human- computer interaction, and
              this book is a report of the research findings and insights we
              gathered over the 2014 spring semester. These findings and
              insights inform our visions for the project moving forward, and
              will be used to support the development of future products.
            </p>
            <h4>PROJECT SCOPE</h4>
            <p>
              Our client’s vision is ambitious and multi-faceted. Recognizing
              that we would not have the time or resources to realize this
              vision in its entirety, we set to work determining an appropriate
              scope within the bigger project. In order to gain a better
              understanding of our problem space, we put together a literature
              review and competitive analysis, both of which are detailed in
              Riam Chantree’s Research Report. We also watched recorded talks,
              spoke with subject matter experts, and conducted guerrilla
              interviews with students from two high-performing private schools.
            </p>
            <br />
            <p>
              Topics we covered in this phase of research include motivation,
              <span class="inline-heading">METACOGNITION</span>
              , scheduling, teens, rapport, and learning technologies. Although
              there appeared to be a need in the space of scheduling and
              organization, we quickly discovered through our competitive
              analysis and guerrilla interviews that the market is actually
              flooded with various organizational tools students have no
              interest in using.
            </p>
          </c>
        </grid>
      </div>
      <span class="fading-border"></span>
      <div class="page" data="page6">
        <grid col="3" col-s="1">
          <c center span="2" span-s="1">
            <img
              style="max-width: 400px"
              src="@/assets/img/projects/slate/slate_page6.jpeg"
            />
            <br />
            <p>
              We learned from our literature review and expert interviews that
              <span class="inline-heading">METACOGNITION</span>
              , on the other hand, is a relatively unexplored area. It can be
              further divided into the areas of
              <span class="inline-heading">METACOGNITIVE KNOWLEDGE</span>
              and
              <span class="inline-heading">METACOGNITIVE REGULATION</span>
              , and the little research that exists suggests a promising
              opportunity for design and a high potential for impact in the
              latter. It was while exploring this idea that we came across a
              list of 10
              <span class="inline-heading">SELF-REGULATED LEARNING</span>
              strategies in a paper by Nandagopal and Ericsson. Adapted from a
              list by Zimmerman and Martinez-Pons in a 1986 paper, these
              strategies became a reference for our research and are detailed on
              the following spread.
            </p>
          </c>
          <c span="1" span-s="1">
            <DefinitionBox
              class="sticky-top"
              :data="[
                {
                  title: 'METACOGNITIVE KNOWLEDGE',
                  definition:
                    'is knowledge about one’s learning abilities and the factors that affect one’s efficiency when learning.'
                },
                {
                  title: 'METACOGNITIVE REGULATION',
                  definition:
                    'refers to a set of skills that helps a student engage in metacognitive processes.'
                }
              ]"
            />
          </c>
        </grid>
      </div>
      <span class="fading-border"></span>
      <div class="page" data="page7">
        <h2>SELF-REGULATED LEARNING STRATEGIES</h2>
        <br />
        <grid col="3" col-s="1">
          <c span="1">
            <p class="sticky-top">
              We referenced this list of 10
              <span class="inline-heading">SELF-REGULATED LEARNING</span>
              strategies in our investigation of high school students’
              metacognitive needs. Originated by Zimmerman and Martinez-Pons,
              each strategy suggests the presence of a student’s agency and
              goals, and refers to a set of actions carried out for the purpose
              of acquiring knowledge or skill.
            </p>
          </c>
          <c span="2" span-s="1">
            <h4>SELF-EVALUATING</h4>
            Self-initiating evaluations of one’s progress and quality of work.
            EX: A student revisits their notes to check if they have completed a
            problem set correctly.
            <h4>ORGANIZING & TRANSFORMING</h4>
            Self-initiating changes in existing instructional material to
            improve learning. EX: A student creates an outline before writing an
            essay.
            <h4>GOAL SETTING & PLANNING</h4>
            Setting goals and planning a sequence of steps in order to achieve
            them. EX: A student aims for an “A” on a test, creates a study plan,
            and starts studying two weeks in advance.
            <h4>SEEKING INFORMATION</h4>
            Self-initiating the search for additional information from books and
            other non-social sources. EX: A student visits the library to gather
            relevant information before writing a research paper.
            <h4>KEEPING RECORDS & MONITORING</h4>
            Self-initiating the record of events, results, or progress while
            learning. EX: A student takes notes during a class lecture and
            creates flash cards of important definitions.
            <h4>ENVIRONMENT RESTRUCTURING</h4>
            Self-initiating the selection or arrangement of a physical workspace
            to improve the learning process. EX: A student turns off the music
            in their room so that it will not distract them.
            <h4>SELF-CONSEQUENCES</h4>
            Conceptualizing rewards or punishments in instances of success or
            failure. EX: A student tells themselves that they can have ice cream
            if they finish a project within the hour.
            <h4>REHEARSING & MEMORIZING</h4>
            Self-initiating the memorization of material through practice or the
            use of mnemonic devices. EX: A student memorizes a history fact for
            an exam by repeatedly writing it down.
            <h4>SEEKING SOCIAL ASSISTANCE</h4>
            Self-initiating the asking for help from peers, teachers, or adults.
            EX: A student asks a friend for help in understanding a mathematical
            formula.
            <h4>REVIEWING RECORDS</h4>
            Self-initiating the review of notes, tests, or textbooks while
            preparing for a test or a class. EX: A student reviews several unit
            assessments in preparation for a final exam.
          </c>
        </grid>
      </div>
      <span class="fading-border"></span>
      <div class="page" data="page8">
        <h2>EXPERT INTERVIEWS</h2>
        Topics we covered in this initial phase of research include motivation,
        metacognition, scheduling, teens, rapport, and learning technologies. In
        addition to giving us a better sense of the problems facing learning and
        education, the subject matter experts we met with were able to shed
        light on some of the solutions currently being used to address these
        problems.
        <br />
        <br />
        <br />
        <grid col="3" col-s="1">
          <c span="1">
            <div class="sticky-top">
              <img
                style="width: 134px"
                src="@/assets/img/projects/slate/faculty/VINCENT_ALEVEN.png"
              />
              <p class="name">
                VINCENT
                <span class="last">ALEVEN</span>
              </p>
              <div class="expert-intro">
                <p>NAMED A TOP AUTHOR IN COMPUTER EDUCATION BY MICROSOFT</p>
                <br />
                <p class="inline-heading">ASSOCIATE PROFESSOR</p>
                <p>CMU HUMAN-COMPUTER INTERACTION INSTITUTE</p>
                <br />
                <p class="inline-heading">RESEARCH AREAS:</p>
                <p>ENABLING TECHNOLOGIES</p>
                <p>LEARNING SCIENCES & TECHNOLOGIES</p>
              </div>
            </div>
          </c>
          <c span="2" span-s="1">
            <h3>
              <ul style="list-style-type: disc">
                <li>
                  Train in a way that encourages metacognitive skills across
                  domains.
                </li>
                <li>
                  Teachable agents hold a lot of promise for training
                  metacognitive skills.
                </li>
                <li>
                  Habit-building is important to maintaining metacognitive
                  skills.
                </li>
              </ul>
            </h3>
            <br />
            <p>
              In his discussion with us, Professor Aleven highlighted some of
              his findings on metacognition and intelligent tutors in the
              context of our research. He pointed out that while it is possible
              to train metacognitive skills, those skills do not appear to
              remain once training has ceased. This transient nature suggests
              that a system able to prolong training effects could potentially
              help students develop lasting metacognitive habits.
            </p>
            <br />
            <p>
              Aleven also suggested possible opportunities in the transfer of
              metacognitive skills across domains. Although the possibility of
              this transfer is consistent with existing literature on learning
              principles, this area that has seen little research due to its
              daunting nature. According to Aleven, showing the use of
              metacognitive skills across domains could reinforce such transfer.
              For example, one of these skills might be self-explanation. Having
              students learn to explain concepts to themselves could help them
              understand their level of learning and how they might improve.
            </p>
            <br />
            <p>
              In addition, Aleven mentioned certain opportunities for design. He
              described teachable agents as one of the greater innovations from
              the learning sciences in the last decade, with projects such as
              Betty’s Brain by Vanderbilt University’s Teachable Agents Group
              incorporating metacognitive training.
            </p>
          </c>
        </grid>

        <br />
        <br />
        <span class="fading-border"></span>
        <grid col="3" col-s="1">
          <c span="1">
            <div class="sticky-top">
              <img
                style="width: 134px"
                src="@/assets/img/projects/slate/faculty/SAMANTHA_FINKELSTEIN.png"
              />
              <p class="name">
                SAMANTHA
                <span class="last">FINKELSTEIN</span>
              </p>
              <div class="expert-intro">
                <p>
                  PHD STUDENT AT CMU’S HUMAN-COMPUTER INTERACTION INSTITUTE
                  RESEARCHING THE EFFECT OF VIRTUAL PEERS IN LEARNING
                </p>
                <br />
                <p class="inline-heading">PHD STUDENT</p>
                <p>CARNEGIE MELLON UNIVERSITY</p>
                <br />
                <p class="inline-heading">RESEARCH AREAS:</p>
                <p>HUMAN-AGENT INTERACTION RAPPORT</p>
              </div>
            </div>
          </c>
          <c span="2" span-s="1">
            <h3>
              <ul style="list-style-type: disc">
                <li>
                  Playful rudeness in the agents helps creating rapport with the
                  student.
                </li>
                <li>
                  Teachable agent leads to greater learning outcomes than
                  teaching agents.
                </li>
                <li>
                  Agents with personalities different than the students grabs
                  their attention.
                </li>
              </ul>
            </h3>
            <br />
            <p>
              Samantha helped us develop a better understanding of virtual peer
              systems. Much of our discussion revolved around teaching agents,
              teachable agents, avatars, authorable agents, and effective
              techniques to build rapport with each.
            </p>
            <br />
            <p>
              We focused in particular on teachable agents, which are virtual
              peers a student must teach how to solve a problem. She suggested
              developing virtual peers with a personality different from the
              student, in order to get students to think differently about the
              same topic.
            </p>
            <br />
            <p>
              In order to build rapport and engagement with the technology,
              Samantha suggested to include an awareness of the student’s
              culture, the use of colloquial terms, and a touch of rudeness in
              responses from the virtual peer. Her work has showed that an
              agent’s overly polite responses to rude inputs from students took
              away from their immersion. While we should be cautious and
              sensitive in our use of these ideas, simulating playfulness may
              increase student engagement.
            </p>
            <br />
            <br />
            <DefinitionBox
              class="sticky-top"
              :data="[
                {
                  title: 'TEACHABLE AGENT',
                  definition:
                    'is an artificial intelligence system in which a student teaches a virtual agent various subjects and the agent learns from the student.'
                },
                {
                  title: 'TEACHING AGENT',
                  definition:
                    'is an artificial intelligence system that mimics the behavior of a teacher.'
                }
              ]"
            />
          </c>
        </grid>

        <br />
        <br />
        <span class="fading-border"></span>
        <grid col="3" col-s="1">
          <c span="1">
            <div class="sticky-top">
              <img
                style="width: 134px"
                src="@/assets/img/projects/slate/faculty/KEN_KOEDINGER.png"
              />
              <p class="name">
                KEN
                <span class="last">KOEDINGER</span>
              </p>
              <div class="expert-intro">
                <p>
                  UNIVERSALLY RECOGNIZED IN INTELLIGENT TUTORING SYSTEMS WITH
                  OVER 20 YEARS OF EXPERIENCE IN THE FIELD
                </p>
                <br />
                <p class="inline-heading">PROFESSOR</p>
                <p>CMU HUMAN-COMPUTER INTERACTION INSTITUTE</p>
                <br />
                <p class="inline-heading">RESEARCH AREAS:</p>
                <p>LEARNING SCIENCES</p>
                <p>EDUCATIONAL TECHNOLOGIES</p>
              </div>
            </div>
          </c>
          <c span="2" span-s="1">
            <h3>
              <ul style="list-style-type: disc">
                <li>The best learning strategies depend on the domain.</li>
                <li>
                  Motivation is a necessary aspect of training in the
                  self-regulated learning strategies.
                </li>
              </ul>
            </h3>
            <br />
            <p>
              While Professor Koedinger discussed many values of metacognitive
              tutoring, he also brought up myths and nuances about metacognition
              that we should bear in mind. For instance, he suggested we
              exercise caution in assuming that successful learning comes from
              or leads to good self-regulation. Although his previous research
              has yielded positive results in using a tutor to change student
              behavior in a domain level skill, it has not been shown that those
              changes in behavior lead to stronger domain learning.
            </p>
            <br />
            <p>
              It may be a similar case for students attempting to develop
              self-regulation strategies. According to Koedinger, those students
              may be no better off simply because they don’t care. While they
              may achieve success in exercising self-regulating strategies when
              prompted to do so, they are unlikely to use them otherwise. This
              suggests that any system we design to help in the development of
              metacog- nitive skills may be best paired with a system that
              builds trust in the value of those skills.
            </p>
            <br />
            <p>
              Furthermore, Koedinger discussed how different domains may benefit
              from different metacognitive strategies. Thus, while teaching
              these skills in a cross-domain system, we should ensure that
              particular strategies are taught in their appropriate contexts.
            </p>
          </c>
        </grid>

        <br />
        <br />
        <span class="fading-border"></span>
        <grid col="3" col-s="1">
          <c span="1">
            <div class="sticky-top">
              <img
                style="width: 134px"
                src="@/assets/img/projects/slate/faculty/BRUCE_MCLAREN.png"
              />
              <p class="name">
                BRUCE
                <span class="last">MCLAREN</span>
              </p>
              <div class="expert-intro">
                <p>
                  NAMED A TOP AUTHOR IN COMPUTERS AND EDUCATION BY MICROSOFT
                </p>
                <br />
                <p class="inline-heading">SENIOR SYSTEMS SCIENTIST</p>
                <p>CARNEGIE MELLON UNIVERSITY</p>
                <br />
                <p class="inline-heading">RESEARCH AREAS:</p>
                <p>LEARNING SCIENCE</p>
                <p>COLLABORATIVE LEARNING</p>
                <p>E-LEARNING PRINCIPLES</p>
                <p>
                  APPLICATION OF AI TO EDUCATIONAL SYSTEMS INTELLIGENT TUTORING
                  SYSTEMS.
                </p>
              </div>
            </div>
          </c>
          <c span="2" span-s="1">
            <h3>
              <ul style="list-style-type: disc">
                <li>
                  Video games can be used to engage students in educational
                  content.
                </li>
                <li>
                  Students need guidance and an organized way to search
                  materials.
                </li>
                <li>
                  Students can be weaned off help to start searching for content
                  on their own.
                </li>
              </ul>
            </h3>
            <br />
            <p>
              Bruce shared his insights on cultivating motivation and getting
              students engaged in learning systems. According to him,
              researchers have been successful in disguising educational content
              in video games for the younger generation of students.
            </p>
            <br />
            <p>
              Keeping the vast collection of online learning content in mind,
              Bruce suggested building a system on top of existing curated
              content to help learners organize their searches. An important
              question we might use to guide us is how to provide the
              appropriate content to students based on their individual
              characteristics. Furthermore, some method of weaning students off
              any guidance and encouraging them to discover content on their own
              may prove highly beneficial.
            </p>
          </c>
        </grid>

        <br />
        <br />
        <span class="fading-border"></span>
        <grid col="3" col-s="1">
          <c span="1">
            <div class="sticky-top">
              <img
                style="width: 134px"
                src="@/assets/img/projects/slate/faculty/AMY_OGAN.png"
              />
              <p class="name">
                AMY
                <span class="last">OGAN</span>
              </p>
              <div class="expert-intro">
                <p>
                  RECENTLY APPOINTED ASSISTANT PROFESSOR WITH A RESEARCH FOCUS
                  IN EDUCATIONAL TECHNOLOGIES
                </p>
                <br />
                <p class="inline-heading">ASSISTANT PROFESSOR</p>
                <p>CMU LANGUAGE TECHNOLOGIES INSTITUTE</p>
                <br />
                <p class="inline-heading">RESEARCH AREAS:</p>
                <p>LEARNING SCIENCES & TECHNOLOGIES</p>
              </div>
            </div>
          </c>
          <c span="2" span-s="1">
            <h3>
              <ul style="list-style-type: disc">
                <li>
                  Labeling students according to performance and achievement can
                  be harmful to the students.
                </li>
                <li>
                  Spaced reminders improves students’ organizational skills.
                </li>
                <li>The system should gain students’ trust.</li>
              </ul>
            </h3>
            <br />
            <p>
              After listening to our brief about the Hobbes Project, Assistant
              Professor Ogan shared concerns about grouping students according
              to performance and/or potential. In particular, she suggested that
              labeling students as low potential could be extremely harmful.
            </p>
            <br />
            <p>
              Ogan also spoke of the ability learning companions have to improve
              students’ organizational skills by providing spaced reminders.
              These could be given when they should be studying, when they
              should be partaking in other activities, or when they should be
              doing tasks for classes in order to avoid a stressful situation
              when a due date approaches. Once students begin to trust the
              system, they may benefit greatly from its recommendations and be
              inclined to use it more frequently.
            </p>
          </c>
        </grid>

        <br />
        <br />
        <span class="fading-border"></span>
        <grid col="3" col-s="1">
          <c span="1">
            <div class="sticky-top">
              <img
                style="width: 134px"
                src="@/assets/img/projects/slate/faculty/CAROLYN_ROSÉ.png"
              />
              <p class="name">
                CAROLYN
                <span class="last">ROSÉ</span>
              </p>
              <div class="expert-intro">
                <p>
                  ELECTED MEMBER OF THE BOARD OF DIRECTORS OF THE INTERNATIONAL
                  SOCIETY OF THE LEARNING SCIENCES
                </p>
                <br />
                <p class="inline-heading">ASSOCIATE PROFESSOR</p>
                <p>CMU LANGUAGE TECHNOLOGIES INSTITUTE</p>
                <br />
                <p class="inline-heading">RESEARCH AREAS:</p>
                <p>LEARNING SCIENCES & TECHNOLOGIES</p>
                <p>SOCIAL COMPUTING</p>
              </div>
            </div>
          </c>
          <c span="2" span-s="1">
            <h3>
              <ul style="list-style-type: disc">
                <li>
                  We could build technology that helps students make discoveries
                  on their own.
                </li>
                <li>
                  Students need to learn how they should find information.
                </li>
              </ul>
            </h3>
            <br />
            <p>
              Professor Rosé discussed the benefits of self-learning in
              students. She has found through her experience and research that
              high school students are easily confused by excessive information,
              and a “system that can teach students to look for and find
              information on their own” will help them become more able
              self-sufficient learners.
            </p>
            <br />
            <p>
              At the same time, Rosé’s research shows that “self-regulated
              learning is unrealistic because students are not motivated to go
              out and do anything extra.” She questioned the validity of
              optional work and suggested that a system designed to help
              students finish their homework might be more exciting. In terms of
              maintaining motivation, she has found that “lots of people
              struggle to keep up and get discouraged and then give up.” This
              limitation presents an opportunity for us to create a system that
              will encourage students to engage in self-regulation and become
              better independent learners.
            </p>
          </c>
        </grid>
      </div>
      <span class="fading-border"></span>
      <div class="todo">
        <p><img style="width: 100%" src="./img/report_ag24.png" /></p>
        <p><img style="width: 100%" src="./img/report_ag25.png" /></p>
        <p><img style="width: 100%" src="./img/report_ag26.png" /></p>
        <p><img style="width: 100%" src="./img/report_ag27.png" /></p>
        <p><img style="width: 100%" src="./img/report_ag28.png" /></p>
        <p><img style="width: 100%" src="./img/report_ag29.png" /></p>
        <p><img style="width: 100%" src="./img/report_ag30.png" /></p>
        <p><img style="width: 100%" src="./img/report_ag31.png" /></p>
        <p><img style="width: 100%" src="./img/report_ag32.png" /></p>
        <p><img style="width: 100%" src="./img/report_ag33.png" /></p>
        <p><img style="width: 100%" src="./img/report_ag34.png" /></p>
        <p><img style="width: 100%" src="./img/report_ag35.png" /></p>
        <p><img style="width: 100%" src="./img/report_ag36.png" /></p>
        <p><img style="width: 100%" src="./img/report_ag37.png" /></p>
        <p><img style="width: 100%" src="./img/report_ag38.png" /></p>
        <p><img style="width: 100%" src="./img/report_ag39.png" /></p>
        <p><img style="width: 100%" src="./img/report_ag40.png" /></p>
        <p><img style="width: 100%" src="./img/report_ag41.png" /></p>
        <p><img style="width: 100%" src="./img/report_ag42.png" /></p>
        <p><img style="width: 100%" src="./img/report_ag43.png" /></p>
        <p><img style="width: 100%" src="./img/report_ag44.png" /></p>
        <p><img style="width: 100%" src="./img/report_ag45.png" /></p>
        <p><img style="width: 100%" src="./img/report_ag46.png" /></p>
        <p><img style="width: 100%" src="./img/report_ag47.png" /></p>
        <p><img style="width: 100%" src="./img/report_ag48.png" /></p>
        <p><img style="width: 100%" src="./img/report_ag49.png" /></p>
        <p><img style="width: 100%" src="./img/report_ag50.png" /></p>
        <p><img style="width: 100%" src="./img/report_ag51.png" /></p>
        <p><img style="width: 100%" src="./img/report_ag52.png" /></p>
        <p><img style="width: 100%" src="./img/report_ag53.png" /></p>
        <p><img style="width: 100%" src="./img/report_ag54.png" /></p>
        <p><img style="width: 100%" src="./img/report_ag55.png" /></p>
        <p><img style="width: 100%" src="./img/report_ag56.png" /></p>
        <p><img style="width: 100%" src="./img/report_ag57.png" /></p>
        <p><img style="width: 100%" src="./img/report_ag58.png" /></p>
        <p><img style="width: 100%" src="./img/report_ag59.png" /></p>
        <p><img style="width: 100%" src="./img/report_ag60.png" /></p>
        <p><img style="width: 100%" src="./img/report_ag61.png" /></p>
        <p><img style="width: 100%" src="./img/report_ag62.png" /></p>
        <p><img style="width: 100%" src="./img/report_ag63.png" /></p>
        <p><img style="width: 100%" src="./img/report_ag64.png" /></p>
        <p><img style="width: 100%" src="./img/report_ag65.png" /></p>
        <p><img style="width: 100%" src="./img/report_ag66.png" /></p>
      </div>
    </div>
  </div>
</template>

<script>
import DefinitionBox from '~/components/DefinitionBox';
import MainHeader from '~/components/MainHeader';

export default {
  name: 'Slate',
  head() {
    return {
      title:
        'Slate - A personal learning companion that inspires curiosity and guides students in their pursuit of learning.',
      meta: [
        {
          name: 'description',
          content:
            'A personal learning companion that inspires curiosity and guides students in their pursuit of learning.'
        },
        {
          property: 'og:title',
          content:
            'Slate - A personal learning companion that inspires curiosity and guides students in their pursuit of learning.'
        },
        {
          property: 'og:image',
          content: 'https://i.imgur.com/UIMi3NA.png'
        },
        {
          property: 'og:description',
          content:
            'A personal learning companion that inspires curiosity and guides students in their pursuit of learning.'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'http://ptewari.com/projects/slate'
        },
        {
          name: 'twitter:title',
          content:
            'Slate - A personal learning companion that inspires curiosity and guides students in their pursuit of learning.'
        },
        {
          name: 'twitter:description',
          content:
            'A personal learning companion that inspires curiosity and guides students in their pursuit of learning.'
        },
        {
          name: 'twitter:image',
          content: 'https://i.imgur.com/UIMi3NA.png'
        }
      ]
    };
  },
  components: {
    DefinitionBox,
    MainHeader
  }
};
</script>
<style lang="scss" scoped>
h2 {
  font-family: 'gotham_bold';
}
img {
  border-radius: 4px;
}
grid {
  gap: 24px;
}
.profile {
  width: 100px;
  margin: 1rem 1rem 1rem 0;
  float: left;
}
.page {
  padding-bottom: 48px;
  margin-bottom: 48px;
}
.name {
  font-size: 16px;
  font-family: 'gotham_book';
  .last {
    font-size: 16px;
    font-weight: bold;
    font-family: 'gotham_bold';
  }
}
.expert-intro {
  font-size: 12px;
  & > * {
    font-size: 12px;
  }
}
.todo {
  img {
    background-color: #ffffff;
  }
}
</style>
