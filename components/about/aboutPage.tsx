import {
    Box,
    Heading,
    Text,
    Container,
    Paragraph,
    Section,
    Flex,
    Separator

} from "@components/common";
import Link from "next/link";
import Image from 'next/image'
import styles from './about.module.css'
import ischoolPic from 'public/images/Ischool.png'


export function AboutPage() {
    return <Section size="3">
        <Container size="3">
            <Heading size="4" css={{ ta: "center", mb: "$6", fontFamily: '$rowdies', letterSpacing: '1px', color: 'white' }}>
                About ResumeQuest
            </Heading>
            <Heading size="3" css={{ ta: "left", mb: "$3", mt: "$6", fontFamily: '$rowdies', letterSpacing: '1px', color: 'white' }}>
                The Why
            </Heading>
            <Paragraph size="2" css={{ ta: "left", color: 'white', fontWeight: '300', letterSpacing: '1px' }}>
                The current job market has 11 million job openings and ResumeQuest is here to help college kids land their first job.
                We created this site because we found that a lot of college students have limited experience making resumes and if they
                do have a resume they do not always know what to put on it to make them stand out. At the moment, our website only has data
                for two industries however we will be making our product open source to add any and all fields to our platform. <br /><br />
            </Paragraph>
            <Heading size="3" css={{ ta: "left", mb: "$3", mt: "$6", fontFamily: '$rowdies', letterSpacing: '1px', color: 'white' }}>
                Research Insights
            </Heading>
            <Paragraph size="2" css={{ ta: "left", color: 'white', fontWeight: '300', letterSpacing: '1px' }}>
                {'\u2022'} College students have a difficult time making and choosing what to include in their resumes. <br /><br />
                {'\u2022'} 11 million job openings but decreasing number of applications <br /><br />
                {'\u2022'} 63% of recruiters want to receive resumes tailored to the open position but college usually do not tailor their resumes properly.<br /><br />
            </Paragraph>
            {/* <Heading size="3" css={{ ta: "center", mb: "$3",  mt: "$9", fontFamily: '$rowdies', letterSpacing: '1px', color: 'white' }}>
                Stakeholders and Users
            </Heading> */}
            <Heading size="3" css={{ ta: "left", mb: "$3", mt: "$6", fontFamily: '$rowdies', letterSpacing: '1px', color: 'white' }}>
                Current Stakeholders:
            </Heading>
            <Paragraph size="2" css={{ ta: "left", color: 'white', fontWeight: '300', letterSpacing: '1px' }}>
                {'\u2022'} Graduating college students studying UX design <br /><br />
                {'\u2022'} Graduating college students studying computer science <br /><br />
                {'\u2022'} Job Recruiters  <br /><br />
            </Paragraph>

            <Paragraph size="2" css={{ ta: "left", color: 'white', fontWeight: '300', letterSpacing: '1px' }}>
                {'\u2022'} Graduating students in any industry <br /><br />
            </Paragraph>

            <Heading size="3" css={{ ta: "left", mb: "$3", mt: "$6", fontFamily: '$rowdies', letterSpacing: '1px', color: 'white' }}>
                Actions:
            </Heading>
            <Paragraph size="2" css={{ ta: "left", color: 'white', fontWeight: '300', letterSpacing: '1px' }}>
                {'\u2022'} Research: Job market, Resumes, Professionals, Industry Skills <br /><br />
                {'\u2022'} Interviews: Professionals from UX and Software Engineering and graduating college students<br /><br />
                {'\u2022'} Design sprints for the perfect UI <br /><br />
                {'\u2022'} User Testing: Product testing and functionality testing<br /><br />
                {'\u2022'} Web devlopment and creation of database that connects users with skills <br /><br />
            </Paragraph>
            <Heading size="3" css={{ ta: "left", mb: "$3", mt: "$6", fontFamily: '$rowdies', letterSpacing: '1px', color: 'white' }}>
                Our Solution
            </Heading>
            <Paragraph size="2" css={{ ta: "left", color: 'white', fontWeight: '300', letterSpacing: '1px' }}>
                With our product, students will be able to make a standout resume that will help them land a job with their dream companies.
                ResumeQuest also makes the tedious process of updating or making your resume a more fun and efficient process. <br /><br />
            </Paragraph>
        </Container>
        <br /><br /><br />

        <Container css={{ ta: "center", mt: "$6" }}>
            <img className="m_ilogo" src={ischoolPic.src} alt="Ischool logo"></img>
        </Container>
    </Section>
}