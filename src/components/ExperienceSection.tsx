
import React, { useState } from 'react';
import AnimatedText from './AnimatedText';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ExperienceSection = () => {
  const experiences = [
    {
      id: 'Devlogs',
      title: 'Software Developer Intern',
      company: 'Devlogs',
      link: '#',
      period: 'December 2024 - February 2025',
      location: 'Delhi, India',
      description: [
        '"JailMail" is a digital communication platform designed to connect inmates with their families in a secure and user-friendly environment.',
        'Developed a performant and responsive frontend using React and TypeScript, increasing cross-device compatibility by 100%.',
        'Improved component rendering efficiency, reducing UI load time by 45%, resulting in faster user interactions and better user retention.',
        'Collaborated with UI/UX designers to translate over 20+ Figma prototypes into pixel-perfect, responsive UIs using Bootstrap and modern CSS.'
      ]
    }
    // {
    //   id: 'billbox',
    //   title: 'Software Development Intern',
    //   company: 'Billbox AI',
    //   link: 'https://billboxa.ai/',
    //   period: 'Dec. 2024 - June 2025',
    //   location: 'Remote',
    //   description: [
    //     'Built responsive UI with Framer, boosting mobile engagement by 25% and page speed by 30%.',
    //     'Developed cross-platform UI, enhancing user retention by 15% through intuitive navigation and seamless UX.'
    //   ]
    // },
    // {
    //   id: 'goldman',
    //   title: 'Software Engineering Virtual Intern',
    //   company: 'Goldman Sachs',
    //   link: 'https://drive.google.com/file/d/1WHSFPBoj-LLFX_wQf3ZEq-aJ2sGNtAaP/view',
    //   period: 'July 2024 - Aug. 2024',
    //   location: 'Virtual',
    //   description: [
    //     'Implemented cryptographic protocols, reducing system anomalies by 40% and ensuring OWASP compliance.',
    //     'Optimized system architecture, improving security performance by 30% through advanced problem-solving.'
    //   ]
    // },
    // {
    //   id: 'nrg',
    //   title: 'AI Market Research Extern',
    //   company: 'National Research Group',
    //   link: 'https://drive.google.com/file/d/1QuLFh2s7fucTwC0gP0Xl2v8tgRt2nHM-/view',
    //   period: 'July 2024 - Aug. 2024',
    //   location: 'Remote',
    //   description: [
    //     'Identified 10+ key policy influencers, shaping NRG\'s $5M R&D strategy and boosting market insights by 20%.',
    //     'Synthesized research into actionable reports, cutting analysis time by 25% and enabling data-driven decisions.'
    //   ]
    // },
    // {
    //   id: 'gssoc',
    //   title: 'Open Source Contributor',
    //   company: 'GSSoC \'24',
    //   link: '#',
    //   period: 'May 2024 - Aug. 2024',
    //   location: 'Remote',
    //   description: [
    //     'Contributed to 5+ open-source projects using React.js, Node.js, and MongoDB, improving code efficiency by 20%.',
    //     'Resolved 15+ bugs, enhancing front-end features and boosting project usability by 25%.'
    //   ]
    // }
  ];

  const [activeTab, setActiveTab] = useState('nomura');

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-neon-purple/10 rounded-full filter blur-[100px] animate-pulse"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white font-sans">
            <span className="text-neon-blue font-mono mr-2">02.</span> Where I've Worked
          </h2>
          <div className="h-px bg-gradient-to-r from-neon-blue to-transparent flex-grow ml-4"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="nomura" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid md:grid-cols-5 grid-cols-2 gap-2 bg-tech-800/50 p-2 mb-8 rounded-lg">
              {experiences.map((exp) => (
                <TabsTrigger
                  key={exp.id}
                  value={exp.id}
                  className="interactive-element font-sans data-[state=active]:bg-neon-blue/20 data-[state=active]:text-neon-blue cursor-pointer"
                  onClick={() => handleTabClick(exp.id)}
                >
                  {exp.company}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {experiences.map((exp) => (
              <TabsContent key={exp.id} value={exp.id} className="bg-tech-800/20 p-6 rounded-lg border border-border">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold flex flex-wrap items-center gap-2 font-sans">
                      {exp.title} 
                      <span className="text-neon-blue">@</span>
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="interactive-element text-neon-blue hover:underline"
                      >
                        {exp.company}
                      </a>
                    </h3>
                    <p className="text-gray-400 font-mono text-sm">
                      {exp.period} | {exp.location}
                    </p>
                  </div>
                  
                  <ul className="space-y-3">
                    {exp.description.map((point, i) => (
                      <AnimatedText
                        key={i}
                        as="li"
                        text={point}
                        className="flex items-start font-sans"
                        delay={i * 200}
                      >
                        <span className="text-neon-blue inline-block mr-3 mt-1.5">▹</span>
                      </AnimatedText>
                    ))}
                  </ul>
                  
                  <div className="pt-3">
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="interactive-element text-sm text-neon-blue hover:underline inline-flex items-center gap-1 font-sans"
                    >
                      Link
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17L17 7"/>
                        <path d="M7 7h10v10"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
