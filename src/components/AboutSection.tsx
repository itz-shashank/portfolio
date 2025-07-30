
import React, { useState, useEffect, useRef } from 'react';
import AnimatedText from './AnimatedText';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-grid-pattern opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-grid-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start gap-10">
          <div className="md:w-3/5">
            <div className="flex items-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-white font-sans">
                <span className="text-neon-blue font-mono mr-2">01.</span> About Me
              </h2>
              <div className="h-px bg-gradient-to-r from-neon-blue to-transparent flex-grow ml-4"></div>
            </div>
            
            <AnimatedText
              text="Hello! I'm Shashank Dwivedi, a Computer Science student at GL Bajaj Institute with a passion for building exceptional web applications and solving complex problems."
              className="mb-4 text-lg font-sans"
              highlight={true}
              highlightWords={["Computer Science", "web applications"]}
              delay={300}
            />
            
            <AnimatedText 
              text="I enjoy creating technology that solves real-world problems. My experience ranges from developing responsive frontends to implementing secure backends. I'm constantly exploring new technologies and methodologies to improve my skills."
              className="mb-4 font-sans"
              highlight={true}
              highlightWords={["real-world problems", "new technologies"]}
              delay={500}
            />
            
            <AnimatedText 
              text="Currently, I'm focused on building accessible, human-centered products while pursuing my Bachelor's degree. My goal is to combine technical expertise with creative problem-solving to create impactful solutions."
              className="mb-4 font-sans"
              highlight={true}
              highlightWords={["technical expertise"]}
              delay={700}
            />
            
            <AnimatedText
              text="Beyond coding, I'm actively involved in hackathons, and technical competitions where I've achieved very high learnings."
              className="font-sans"
              highlight={false}
              delay={900}
            />
            
            <div className="mt-6 reveal" style={{ transitionDelay: '1100ms' }}>
              <h3 className="text-lg font-mono text-neon-blue mb-3">Education</h3>
              <div className="p-4 bg-tech-800/50 border border-border rounded-lg neon-border card-hover">
                <h4 className="font-bold font-sans">GL Bajaj Institute Of Technology And Management</h4>
                <p className="text-muted-foreground font-sans">Bachelor of Technology in Computer Science and Engineering</p>
                <div className="flex justify-between mt-2 font-sans">
                  <span className="text-neon-green">8 CGPA</span>
                  <span className="text-gray-400">Nov. 2022 – May 2026</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/5 mt-10 md:mt-20">
            <div className={`relative mx-auto w-64 h-64 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              {/* Profile image with tech-themed overlay */}
              <div className="absolute inset-0 bg-tech-700/30 rounded-lg"></div>
              
              <div className="absolute inset-4 border-2 border-neon-blue rounded-lg transform rotate-6 opacity-40"></div>
              
              <div className="absolute inset-0 bg-tech-800 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-tech-900 to-tech-700 flex items-center justify-center">
                  {/* Replace with actual image if available */}
                  <span className="text-6xl font-bold text-gradient font-sans">SD</span>
                </div>
                
                {/* Tech pattern overlay */}
                <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
                
                {/* Code snippet overlay */}
                <pre className="absolute bottom-4 left-4 text-[0.6rem] text-neon-blue opacity-50 font-mono">
                  <code>
                    {`const developer = {
  name: "Shashank",
  skills: ["React", "Node"],
  passion: "Building web apps"
};`}
                  </code>
                </pre>
              </div>
              
              {/* Corner decorations */}
              <div className="absolute -top-2 -right-2 w-6 h-6 rounded-br-lg border-r-2 border-b-2 border-neon-purple"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 rounded-tr-lg border-t-2 border-r-2 border-neon-green"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
