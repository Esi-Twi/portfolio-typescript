import React, { useState, useEffect } from 'react';
import { Code } from 'lucide-react'


interface TimelineItem {
  title: string;
  period: string;
  subtitle: string;
  skills: string[];
  icon: React.ReactNode;
  position: 'left' | 'right';
}

const PortfolioWebsite: React.FC = () => {
  // const [activeSkill, setActiveSkill] = useState<keyof typeof skills>("frontend");
  const [activeSkill, setActiveSkill] = useState('frontend');
  const [activeFilter, setActiveFilter] = useState('all');
  const [popup, setPopup] = useState<{ open: boolean; item?: any }>({ open: false });
  const [modal, setModal] = useState<number | null>(null);
  const [sidebar, setSidebar] = useState(false);
  const [section, setSection] = useState('home');
  const [testimonial, setTestimonial] = useState(0);
  const [focus, setFocus] = useState<{ [k: string]: boolean }>({});

  const skills = {
    frontend: [{ n: 'HTML', p: 90 }, { n: 'CSS', p: 90 }, { n: 'Javascript', p: 85 }, { n: 'React', p: 90 }],
    backend: [{ n: 'NodeJS', p: 90 }, { n: 'ExpressJS', p: 80 }],
    database: [{ n: 'MongoDB', p: 80 }]
  };

  const works = [
    // { id: 1, cat: 'web', img: 'https://i.postimg.cc/43Th5VXJ/work-1.png', title: 'Web Design' },
    // { id: 2, cat: 'app', img: 'https://i.postimg.cc/sXLjnC5p/work-2.png', title: 'App Design' },
    // { id: 3, cat: 'design', img: 'https://i.postimg.cc/QNB1jXYZ/work-3.png', title: 'Brand Design' },
    // { id: 4, cat: 'app', img: 'https://i.postimg.cc/s2DGqyG8/work-4.png', title: 'App Design' },
    { id: 5, cat: 'web', img: 'https://i.postimg.cc/TYVyPhrF/work-5.png', title: 'Brand Design' },
    { id: 6, cat: 'design', img: 'https://i.postimg.cc/wMdqKcbv/work-6.png', title: 'Web Design' }
  ];

  const testimonials = [
    { desc: 'Working with Miriam was an absolute pleasure from start to finish...', date: 'March 30, 2025', name: 'Chen Xiuying', role: 'Marketing Director', img: 'https://i.postimg.cc/MTr9j4Yn/client1.jpg' },
    { desc: 'Miriam truly understood our business needs through her modern design...', date: 'January 18, 2025', name: 'Joshua Middletown', role: 'Sales Director', img: 'https://i.postimg.cc/wvV7f8rB/client2.jpg' },
    { desc: 'I was blown away by the website Miriam created for my business...', date: 'November 29, 2024', name: 'Melanie Stone', role: 'Business Owner', img: 'https://i.postimg.cc/pdP9DL0S/client3.jpg' }
  ];

  const services = [
    { icon: 'web-grid', title: 'Web<br>Designer', items: ['UI Development', 'Web Page Development', 'Interactive UX/UI', 'Brand Positioning', 'Product Mockups'] },
    { icon: 'arrow', title: 'UI/UX<br>Designer', items: ['Usability Testing', 'User Research', 'Interaction Design', 'Responsive Design', 'Style Guides'] },
    { icon: 'edit', title: 'Branding<br>Designer', items: ['Competitive Analysis', 'Accessibility Design', 'Project Management', 'Design Iteration', 'User Research'] }
  ];

  const filtered = activeFilter === 'all' ? works : works.filter(w => w.cat === activeFilter);

  useEffect(() => {
    const timer = setInterval(() => setTestimonial(p => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.pageYOffset;
      sections.forEach(s => {
        const height = s.clientHeight;
        const top = (s as HTMLElement).offsetTop - 50;
        const id = s.getAttribute('id');
        if (scrollY > top && scrollY <= top + height && id) setSection(id);
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setSidebar(false);
  };


  const timelineData: TimelineItem[] = [
    {
      title: 'Frontend Developer',
      period: 'Jun 2025 - Aug 2025',
      subtitle: 'SkaiMount Inc.',
      skills: [
        'Responsible for building user interfaces for various projects',
        'Responsible for using axios to communicate with API’s',
        'Some technologies I used during this internship includes ReactJs, NodeJs and MySQL.',
        'Expertise in Zustand for efficient state management.',
      ],
      icon: <Code className="w-6 h-6" />,
      position: 'left'
    },
    {
      title: 'Frontend Developer',
      period: 'Apr 2025 - May 2025',
      subtitle: 'ThinkTech Digital',
      skills: [
        ' Built UI and ensured they were responsive.',
        ' Collaborated with other frontend developers and backend developers to build responsive and functional web solutions',
      ],
      icon: <Code className="w-6 h-6" />,
      position: 'right'
    }
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        :root{--skin:#ea580c;--skin-solid:#667eea;--title:rgba(255,255,255,0.95);--text:black;--body:white;--glass:rgba(255,255,255,0.1);--glass-border:rgba(255,255,255,0.2);--shadow:rgba(0,0,0,0.3);--font:'Trebuchet MS',sans-serif}
;--glass:rgba(255,255,255,0.1);--glass-border:rgba(255,255,255,0.2);--shadow:rgba(0,0,0,0.3);--font:'Trebuchet MS',sans-serif}
        *{margin:0;padding:0;box-sizing:border-box}
        body{font-family:var(--font);background:var(--body);color:var(--text);min-height:100vh;overflow-x:hidden}
        body::before{content:'';position:fixed;top:0;left:0;width:100%;height:100%;background:radial-gradient(circle at 20% 50%, rgba(120,119,198,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,119,198,0.3) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(120,219,255,0.3) 0%, transparent 50%);pointer-events:none;z-index:-1}
        .container{max-width:1200px;margin:0 auto;padding:0 1rem}.grid{display:grid}.flex{display:flex}
        .glass{background:var(--glass);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border:1px solid var(--glass-border);box-shadow:0 8px 32px var(--shadow)}
        .glass-card{background:rgba(255,255,255,0.05);backdrop-filter:blur(15px);-webkit-backdrop-filter:blur(15px);border:1px solid rgba(255,255,255,0.1);border-radius:20px;box-shadow:0 15px 35px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.2);transition:all 0.4s cubic-bezier(0.23,1,0.320,1)}
        .glass-card:hover{transform:translateY(-10px) scale(1.02);box-shadow:0 25px 50px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.3)}
        .btn{display:inline-flex;align-items:center;gap:.5rem;background:#ea580c;color:var(--title);padding:.75rem 1.4rem;border:none;border-radius:50px;cursor:pointer;transition:all 0.3s ease;position:relative;overflow:hidden;font-weight:500;text-decoration:none}
        .btn::before{content:'';position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);transition:left 0.5s}
        .btn:hover::before{left:100%}
        .btn:hover{transform:translateY(-3px);box-shadow:0 10px 25px rgba(102,126,234,0.4)}
        .section{padding:6rem 0 2rem;position:relative}.title{text-align:center;font-size:2.5rem;margin-bottom:3rem;color:black;font-weight:600;text-shadow:0 4px 8px rgba(0,0,0,0.3)}
        .sidebar{position:fixed;width:100px;height:100vh;background: black;backdrop-filter:blur(25px); color:!important white;-webkit-backdrop-filter:blur(25px);border-right:1px solid rgba(255,255,255,0.1);z-index:999;transition:.3s ease;box-shadow:5px 0 25px rgba(0,0,0,0.1)}
        .nav-logo{position:absolute;top:1.8rem;left:50%;transform:translateX(-50%);width:50px;height:50px;background:var(--skin);border-radius:50%;display:flex;align-items:center;justify-content:center;color:var(--title);font-weight:700;font-size:1.2rem;box-shadow:0 8px 25px rgba(102,126,234,0.4);animation:pulse 2s infinite}
        @keyframes pulse{0%,100%{transform:translateX(-50%) scale(1)}50%{transform:translateX(-50%) scale(1.05)}}
        .nav-menu{position:fixed;transform:rotate(-90deg) translateX(-100%);transform-origin:left top;width:100vh;top:50px}
        .nav-list{display:flex;flex-direction:row-reverse;margin:0 auto; margin-right:-90px;list-style:none;justify-content:center}
        .nav-link{color:white;text-decoration:none;padding:0 1.5rem;height:80px;line-height:80px;transition:all 0.3s ease;position:relative;font-weight:500}
        .nav-link::before{content:'';position:absolute;bottom:1.8rem;left:50%;width:0;height:2px;background:var(--skin-solid);transition:width 0.3s ease;transform:translateX(-50%)}
        .nav-link:hover,.nav-link.active{color:var(--skin);text-shadow:0 0 10px rgba(255,255,255,0.5)}
        .nav-link:hover::before,.nav-link.active::before{width:20px}
        .nav-toggle{position:fixed;top:2rem;right:1.5rem;width:50px;height:45px;background:var(--glass);backdrop-filter:blur(15px);color:var(--title);border:1px solid var(--glass-border);border-radius:15px;cursor:pointer;z-index:1000;display:none;align-items:center;justify-content:center;transition:all 0.3s ease}
        .nav-toggle:hover{transform:scale(1.1);box-shadow:0 5px 15px rgba(0,0,0,0.2)}
        .main{margin-left:100px;min-height:100vh;position:relative}
        .home{background: url('../../assets/me.jpg') center/cover;height:100vh;display:flex;align-items:center;position:relative;overflow:hidden;background-size: cover;}
        .home::before{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background:radial-gradient(circle at center, rgba(102,126,234,0.1) 0%, transparent 70%);pointer-events:none}
        .home-data{max-width:600px;padding:3rem;background:rgba(0,0,0,0.45);backdrop-filter:blur(20px);border-radius:30px;border:1px solid rgba(0,0,0,0.1);box-shadow:0 20px 40px rgba(0,0,0,0.2);animation:fadeInUp 1s ease;margin:2rem}
        @keyframes fadeInUp{from{opacity:0;transform:translateY(50px)}to{opacity:1;transform:translateY(0)}}
        .home-title{font-size:2.6rem;white-space:nowrap;margin-bottom:.5rem;font-weight:700;background:linear-gradient(135deg, #667eea, #764ba2, #f093fb);background-size:200% 200%;-webkit-background-clip:text;-webkit-text-fill-color:transparent;animation:gradientShift 3s ease-in-out infinite}
        @keyframes gradientShift{0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}
        .home-subtitle{font-size:1.6rem;margin-bottom:0rem;color:white;font-weight:500}
        .home-desc{margin-bottom:2rem;line-height:1.2;font-size:1.1rem;color:rgb(123, 122, 122)}
        .about{padding:8rem 0}.about-container{grid-template-columns:1fr 1fr;gap:5rem;align-items:center}
        .about-img{width:100%;border-radius:25px;box-shadow:0 20px 40px rgba(0,0,0,0.2);transition:transform 0.3s ease}
        .about-img:hover{transform:scale(1.05) rotate(2deg)}
        .about-info{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;margin:0.1rem 0}
        .about-box{padding:2rem;border-radius:20px;text-align:center;transition:all 0.3s ease;position:relative;overflow:hidden}
        .about-box::before{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(135deg, rgba(102,126,234,0.1), rgba(118,75,162,0.1));border-radius:20px;transition:opacity 0.3s ease;opacity:0}
        .about-box:hover::before{opacity:1}
        .about-icon{font-size:2.5rem;color:var(--skin-solid);margin-bottom:1rem;transition:transform 0.3s ease}
        .about-box:hover .about-icon{transform:scale(1.2) rotate(10deg)}
        .skills-container{grid-template-columns:1fr 1fr;gap:4rem;align-items:start}
        .skills-header{display:flex;align-items:center;padding:1.5rem;border-radius:20px;cursor:pointer;margin-bottom:1.5rem;transition:all 0.3s ease;position:relative;overflow:hidden}
        .skills-header::before{content:'';position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);transition:left 0.5s}
        .skills-header:hover::before{left:100%}
        .skills-header.active{background:#ea580c;transform:translateX(10px);box-shadow:0 10px 25px rgba(102,126,234,0.3)}
        .skills-icon{font-size:2.5rem;color:var(--skin);margin-right:1.5rem;transition:all 0.3s ease}
        .skills-header.active .skills-icon{color:white;transform:rotate(360deg)}
        .skills-content{display:${activeSkill === 'frontend' ? 'block' : 'none'};animation:slideIn 0.5s ease}
        @keyframes slideIn{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
        .skills-data{margin-bottom:0.1rem;padding:1rem;border-radius:15px;transition:all 0.3s ease}
        .skills-data:hover{background:rgba(255,255,255,0.05);transform:translateX(10px)}
        .skills-titles{display:flex;justify-content:space-between;margin-bottom:0.1rem;font-weight:600}
        .skills-bar{height:8px;background:rgba(255,255,255,0.1);border-radius:10px;overflow:hidden;position:relative}
        .skills-bar::before{content:'';position:absolute;top:0;left:0;height:100%;width:100%;background:linear-gradient(90deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));animation:shimmer 2s infinite}
        @keyframes shimmer{0%{transform:translateX(-100%)}100%{transform:translateX(100%)}}
        .skills-per{height:100%;background:var(--skin);transition:width 1s ease;border-radius:10px;position:relative;overflow:hidden}
        .skills-per::after{content:'';position:absolute;top:0;left:0;height:100%;width:30px;background:linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);animation:slide 2s infinite}
        @keyframes slide{0%{transform:translateX(-30px)}100%{transform:translateX(200px)}}
        .work-filters{display:flex;justify-content:center;gap:1rem;margin-bottom:3rem;flex-wrap:wrap}
        .work-item{padding:1rem 2rem;border:none;border-radius:25px;color:var(--text);cursor:pointer;transition:all 0.3s ease;font-weight:500;position:relative;overflow:hidden}
        .work-item::before{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(255,255,255,0.05);border-radius:25px;opacity:0;transition:opacity 0.3s ease}
        .work-item:hover::before{opacity:1}
        .work-item.active,.work-item:hover{background:var(--skin);color:var(--title);transform:translateY(-5px);box-shadow:0 10px 25px rgba(102,126,234,0.3)}
        .work-container{grid-template-columns:repeat(auto-fit,minmax(350px,1fr));gap:2.5rem}
        .work-card{padding:2rem;border-radius:25px;transition:all 0.4s cubic-bezier(0.23,1,0.320,1);position:relative;overflow:hidden}
        .work-card::before{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(135deg, rgba(102,126,234,0.05), rgba(118,75,162,0.05));border-radius:25px;opacity:0;transition:opacity 0.3s ease}
        .work-card:hover::before{opacity:1}
        .work-img{width:100%;border-radius:20px;margin-bottom:1.5rem;transition:transform 0.3s ease;box-shadow:0 10px 25px rgba(0,0,0,0.1)}
        .work-card:hover .work-img{transform:scale(1.05)}
        .work-btn{color:var(--skin-solid);background:none;border:none;cursor:pointer;display:flex;align-items:center;gap:.5rem;font-weight:600;transition:all 0.3s ease;padding:0.5rem 0}
        .work-btn:hover{color:var(--title);transform:translateX(10px)}
        .popup{position:fixed;inset:0;background:rgba(0,0,0,0.7);backdrop-filter:blur(10px);display:${popup.open ? 'flex' : 'none'};align-items:center;justify-content:center;z-index:1000;padding:1rem;animation:fadeIn 0.3s ease}
        @keyframes fadeIn{from{opacity:0}to{opacity:1}}
        .popup-content{border-radius:25px;padding:2.5rem;max-width:700px;position:relative;animation:slideUp 0.3s ease}
        @keyframes slideUp{from{transform:translateY(50px);opacity:0}to{transform:translateY(0);opacity:1}}
        .popup-close{position:absolute;top:1rem;right:1rem;background:rgba(255,255,255,0.1);border:none;color:var(--title);font-size:1.5rem;cursor:pointer;width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;transition:all 0.3s ease}
        .popup-close:hover{background:rgba(255,255,255,0.2);transform:rotate(90deg)}
        .services-container{grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:2.5rem}
        .service-card{padding:3rem 2rem;border-radius:25px;text-align:center;transition:all 0.4s ease;position:relative;overflow:hidden}
        .service-card::before{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(135deg, rgba(102,126,234,0.1), rgba(118,75,162,0.1));border-radius:25px;opacity:0;transition:opacity 0.3s ease}
        .service-card:hover::before{opacity:1}
        .service-icon{font-size:3rem;color:var(--skin-solid);margin-bottom:1.5rem;transition:all 0.3s ease}
        .service-card:hover .service-icon{transform:scale(1.2) rotate(10deg)}
        .modal{position:fixed;inset:0;background:rgba(0,0,0,0.7);backdrop-filter:blur(10px);display:${modal !== null ? 'flex' : 'none'};align-items:center;justify-content:center;z-index:1000;padding:1rem;animation:fadeIn 0.3s ease}
        .modal-content{border-radius:25px;padding:3rem;max-width:600px;position:relative;animation:slideUp 0.3s ease}
        .modal-close{position:absolute;top:1rem;right:1rem;background:rgba(255,255,255,0.1);border:none;color:var(--title);font-size:1.5rem;cursor:pointer;width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;transition:all 0.3s ease}
        .modal-close:hover{background:rgba(255,255,255,0.2);transform:rotate(90deg)}
        .testimonial{border-radius:25px;padding:2.5rem;margin-bottom:2rem;position:relative;overflow:hidden}
        .testimonial::before{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(135deg, rgba(102,126,234,0.05), rgba(118,75,162,0.05));border-radius:25px}
        .testimonial-profile{display:flex;align-items:center;gap:1.5rem;margin-top:1.5rem}
        .testimonial-img{width:70px;height:70px;border-radius:50%;border:3px solid rgba(255,255,255,0.2);transition:transform 0.3s ease}
        .testimonial:hover .testimonial-img{transform:scale(1.1)}
        .contact-container{grid-template-columns:1fr 1fr;gap:4rem}
        .contact-card{padding:2rem;border-radius:20px;text-align:center;margin-bottom:1.5rem;transition:all 0.3s ease;position:relative;overflow:hidden}
        .contact-card::before{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(135deg, rgba(102,126,234,0.05), rgba(118,75,162,0.05));border-radius:20px;opacity:0;transition:opacity 0.3s ease}
        .contact-card:hover::before{opacity:1}
        .input-container{position:relative;margin-bottom:2rem}
        .input{width:100%;padding:1rem 1.5rem;background:rgba(0,0,0,0.15);border:2px solid rgba(255,255,255,0.1);border-radius:15px;color:var(--title);font-size:1rem;transition:all 0.3s ease;backdrop-filter:blur(10px)}
        .input:focus{outline:none;border-color:var(--skin-solid);background:rgba(255,255,255,0.08);box-shadow:0 0 20px rgba(102,126,234,0.2)}
        .label{position:absolute;top:50%;left:1.5rem;transform:translateY(-50%);color:var(--text);pointer-events:none;transition:all 0.3s ease;background:rgba(255,255,255,0.05);padding:0 0.5rem;border-radius:5px}
        .input:focus + .label,.input:not(:placeholder-shown) + .label{top:0;font-size:.9rem;color:var(--skin-solid);transform:translateY(-50%)}
        .footer{border-radius:30px 30px 0 0;padding:5rem 4rem 1.4rem 4rem;text-align:center;margin-top:4rem;position:relative;overflow:hidden; background: var(--skin);}
        .footer::before{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(135deg, rgba(102,126,234,0.1), rgba(118,75,162,0.1))}
        .footer-links{display:flex;justify-content:center;gap:3rem;margin:2rem 0;flex-wrap:wrap}
        .footer-link{color:var(--text);text-decoration:none;transition:all 0.3s ease;padding:0.5rem 1rem;border-radius:10px}
        .footer-link:hover{color:var(--title);background:rgba(255,255,255,0.1);transform:translateY(-3px)}
        @media(max-width:1024px){
          .sidebar{transform:translateX(${sidebar ? '0' : '-100%'})}
          .nav-toggle{display:flex}
          .main{margin-left:0}
        }
        @media(max-width:768px){
          .main{margin-left:0}.sidebar{width:100%;transform:translateX(${sidebar ? '0' : '-100%'})}
          .nav-logo{display:${sidebar ? 'flex' : 'none'}}
          .nav-menu{transform:none;position:relative;width:100%;top:auto;left:auto;height:100%;display:flex;justify-content:center}
          .nav-list{flex-direction:column;align-items:center;padding:2rem 0;height:100%;justify-content:center}
          .nav-link{padding:1rem 0;line-height:1.5;height:auto}
          .nav-link::before{bottom:0;top:auto}
          .about-container,.skills-container,.contact-container{grid-template-columns:1fr;text-align:center;gap:3rem}
          .work-container{grid-template-columns:1fr}
          .home-title{font-size:2.5rem}
          .home-data{margin:1rem;padding:2rem}
          .work-filters{gap:0.5rem}
          .work-item{padding:0.8rem 1.5rem;font-size:0.9rem}
        }
      `}</style>

      <div className="nav-toggle" onClick={() => setSidebar(!sidebar)}>
        <i className="uil uil-bars"></i>
      </div>

      <aside className="sidebar">
        <nav className="nav-menu">
          <div className="menu">
            <ul className="nav-list">
              {['home', 'about', 'skills', 'projects', 'contact'].map(s => (
                <li key={s} className="nav-item">
                  <a href={`#${s}`} className={`!text-gray-200 nav-link ${section === s ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); scroll(s) }}>{s.charAt(0).toUpperCase() + s.slice(1)}</a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
        <div className="nav-close" onClick={() => setSidebar(false)} style={{ position: 'absolute', top: '1rem', right: '1.25rem', cursor: 'pointer', display: sidebar ? 'block' : 'none' }}>
          <i className="uil uil-times"></i>
        </div>
      </aside>

      <main className="main">
        <section className="home" id="home">
          <div className="home-data">
            <h1 className="home-title">Hi, I'm Esi Twi Tawiah</h1>
            <h3 className="home-subtitle">MERN Stack Developer</h3>
            <p className="home-desc">I enjoying solving problems through creating innovative and user-friendly applications.</p>
            <button className="btn" onClick={() => scroll('about')}>
              <i className="uil uil-user"></i>More About me!
            </button>
          </div>
        </section>

        <section className="about section" id="about">
          <h2 className="title">About me</h2>
          <div className="about-container container grid">
            <img src="../../assets/me.jpg" alt="me" className="about-img" />
            <div>
              <h3>Hi, I'm Esi Twi Tawiah</h3>
              <p>I'm a developer with experience in JavaScript, and expertise in frameworks like React, Node.js, Express.js   and MongoDB.I create solutions that are not only functional but also user-friendly and visually appealing.
                I love creating efficient, scalable, and user-friendly solutions that solve real-world problems.
              </p>
              <div className="about-info">
                {[{ icon: 'award', title: 'Skills', sub: 'MERN Stack' }, { icon: 'suitcase-alt', title: 'Experience', sub: '2 Internships' }, { icon: 'award', title: '4+', sub: 'Hackations' }].map((item, i) => (
                  <div key={i} className="about-box">
                    <i className={`uil uil-${item.icon} about-icon`}></i>
                    <h3>{item.title}</h3>
                    <span>{item.sub}</span>
                  </div>
                ))}
              </div>
              <button className="btn" onClick={() => scroll('contact')}>
                <i className="uil uil-navigator"></i>Contact me
              </button>
            </div>
          </div>
        </section>

        <section className="skills section" id="skills">
          <h2 className="title">My Skills</h2>
          {/* <div className="skills-container container grid">
            <div>
              {[{ id: 'frontend', icon: 'brackets-curly', title: 'Frontend' }, { id: 'backend', icon:'server-network', title: 'Backend' }, { id: 'database', icon:'swatchbook', title: 'Database' }].map(skill => (
                <div key={skill.id} className={`skills-header glass-card ${activeSkill === skill.id ? 'active' : ''}`} onClick={() => setActiveSkill(skill.id)}>
                  <i className={`uil uil-${skill.icon} skills-icon`}></i>
                  <div>
                    <h3>{skill.title}</h3>
                  </div>
                </div>
              ))}
            </div>
            <div className="skills-content">
              {skills[activeSkill as keyof typeof skills]?.map((skill, i) => (
                <div key={i} className="skills-data">
                  <div className="skills-titles">
                    <h3>{skill.n}</h3>
                    <span>{skill.p}%</span>
                  </div>
                  <div className="skills-bar">
                    <div className="skills-per" style={{ width: `${skill.p}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div> */}

          <div className="skills-container container grid">
            <div className="skills-content">
              <h1 className='text-3xl font-bold ml-3 text-violet-600'>FRONTEND</h1>
              {skills['frontend']?.map((skill, i) => (
                <div key={i} className="skills-data">
                  <div className="skills-titles">
                    <h3>{skill.n}</h3>
                    <span>{skill.p}%</span>
                  </div>
                  <div className="skills-bar">
                    <div className="skills-per" style={{ width: `${skill.p}%` }}></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="skills-content">
              <h1 className='text-3xl font-bold ml-3 text-violet-600'>BACKEND</h1>
              {skills['backend']?.map((skill, i) => (
                <div key={i} className="skills-data">
                  <div className="skills-titles">
                    <h3>{skill.n}</h3>
                    <span>{skill.p}%</span>
                  </div>
                  <div className="skills-bar">
                    <div className="skills-per" style={{ width: `${skill.p}%` }}></div>
                  </div>
                </div>
              ))}

              <h1 className='text-3xl font-bold ml-3 text-violet-600 mt-10'>DATABASE</h1>
              {skills['database']?.map((skill, i) => (
                <div key={i} className="skills-data">
                  <div className="skills-titles">
                    <h3>{skill.n}</h3>
                    <span>{skill.p}%</span>
                  </div>
                  <div className="skills-bar">
                    <div className="skills-per" style={{ width: `${skill.p}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </section>

        {/* work experience */}
        <div className="min-h-screen mt-10 py-12 px-4 sm:px-6 lg:px-8">
          <h2 className="title">My Experience</h2>

          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Central Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-red-600 via-orange-500 to-red-600"></div>

              {/* Timeline Items */}
              {timelineData.map((item, index) => (
                <div key={index} className="relative mb-16 last:mb-0">
                  <div className={`flex items-center ${item.position === 'left' ? 'flex-row-reverse' : 'flex-row'}`}>
                    {/* Content Card */}
                    <div className={`w-5/12 ${item.position === 'left' ? 'pr-12' : 'pl-12'}`}>
                      <div className="bg-gradient-to-br from-orange-800 to-orange-700 border border-red-900/30 rounded-lg p-6 shadow-xl hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300">
                        <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-orange-400 text-sm mb-3">{item.subtitle}</p>
                        <ul className="space-y-2">
                          {item.skills.map((skill, skillIndex) => (
                            <li key={skillIndex} className="text-gray-300 text-sm flex items-start">
                              <span className="text-red-500 mr-2 mt-1">•</span>
                              <span>{skill}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Center Icon */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-600 to-orange-500 flex items-center justify-center text-white shadow-lg shadow-orange-500/50 z-10">
                        {item.icon}
                      </div>
                    </div>

                    {/* Date Badge */}
                    <div className={`w-5/12 ${item.position === 'left' ? 'pl-12 text-left' : 'pr-12 text-right'}`}>
                      <div className="inline-block bg-gradient-to-r from-red-600 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                        {item.period}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* projects */}
        <section className="work section" id="projects">
          <h2 className="title">My Projects</h2>
          <div className="work-filters">
            {/* {['all', 'web', 'app', 'design'].map(f => (
              <button key={f} className={`work-item glass-card ${activeFilter === f ? 'active' : ''}`} onClick={() => setActiveFilter(f)}>{f.charAt(0).toUpperCase() + f.slice(1)}</button>
            ))} */}
          </div>
          <div className="work-container container grid">
            {/* {filtered.map(work => (
              <div key={work.id} className="work-card glass-card w-3/7">
                <img src={work.img} alt="" className="rounded-xl h-[40vh] w-100" />
                <h3 className='text-orange-600 font-bold mt-2 mb-2 text-2xl'>Dunon Pharmacy Mangement System</h3>
                <ul className='list-disc ml-10'>
                  <li>Has role-based dashboards for Admins and Pharmacist to manage a pharmacy.</li>
                  <li>Implemented backend for managing drugs, users and sales with RESTful APIs.</li>
                  <li>Implemented creating of sales for pharmacist and printing of tickets as well.</li>
                  <li>Designed schemas for drugs, sales and users using mongoose.</li>
                  <li>Built a data visualization board to help Admins make informed decisions.</li>
                  <li>Designed a responsive UI and used zustand for state management.</li>
                </ul>
                {/* <h3>{work.title}</h3> */}
            {/* <button className="work-btn" onClick={() => setPopup({ open: true, item: work })}>
                  Demo <i className="uil uil-arrow-right"></i>
                </button> *
              </div>
            ))} */}

            <div className="work-card glass-card">
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjhUGnZj4LWVTuS-m3i_aUyaTLlj1PDsOkYA&s' alt="" className="rounded-xl h-[40vh] w-100" />
              <h3 className='text-orange-600 font-bold mt-2 mb-2 text-2xl'>Dunon Pharmacy Mangement System</h3>
              <ul className='list-disc ml-10'>
                <li>Has role-based dashboards for Admins and Pharmacist to manage a pharmacy.</li>
                <li>Implemented backend for managing drugs, users and sales with RESTful APIs.</li>
                <li>Implemented creating of sales for pharmacist and printing of tickets as well.</li>
                <li>Designed schemas for drugs, sales and users using mongoose.</li>
                <li>Built a data visualization board to help Admins make informed decisions.</li>
                <li>Designed a responsive UI and used zustand for state management.</li>
              </ul>
              {/* <button className="work-btn" onClick={() => setPopup({ open: true, item: work })}>
                  Demo <i className="uil uil-arrow-right"></i>
                </button> */}
            </div>

            <div className="work-card glass-card ">
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjeHfJEYfMicfPAwzi1uV0WjsBMVV8uKI8EzjVG01rByY_Rz6ozhuONEE&s' alt="" className="rounded-xl h-[40vh] w-100" />
              <h3 className='text-orange-600 font-bold mt-2 mb-2 text-2xl'>Chips 'n' Munch</h3>
              <ul className='list-disc ml-10'>
                <li>A website to display for a chips business.</li>
                <li>Displays types of chips available, contact and seller detials.</li>
              </ul>
              <a
                href="https://chips-website-mauve.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="work-btn z-30 relative"
              >
                Demo <i className="uil uil-arrow-right"></i>
              </a>
            </div>
          </div>
        </section>

        <div className="popup">
          <div className="popup-content glass-card">
            <button className="popup-close" onClick={() => setPopup({ open: false })}>&times;</button>
            <img src={popup.item?.img} alt="" style={{ width: '100%', borderRadius: '.5rem' }} />
            <h3>{popup.item?.title}</h3>
            <p>Project details and description would go here.</p>
          </div>
        </div>

        {/* <section className="services section" id="services">
          <h2 className="title">What I Offer</h2>
          <div className="services-container container grid">
            {services.map((service, i) => (
              <div key={i} className="service-card glass-card">
                <i className={`uil uil-${service.icon} service-icon`}></i>
                <h3 dangerouslySetInnerHTML={{ __html: service.title }}></h3>
                <button className="btn" onClick={() => setModal(i)}>View More</button>
              </div>
            ))}
          </div>
        </section> */}

        <div className="modal">
          <div className="modal-content glass-card">
            <button className="modal-close" onClick={() => setModal(null)}>&times;</button>
            <h3>{services[modal || 0]?.title.replace('<br>', ' ')}</h3>
            <p>I offer services with quality work to clients and companies</p>
            <ul>
              {services[modal || 0]?.items.map((item, i) => (
                <li key={i} style={{ marginBottom: '.5rem' }}>✓ {item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* <section className="testimonials section">
          <h2 className="title">Testimonials</h2>
          <div className="container">
            <div className="testimonial glass-card">
              <p>{testimonials[testimonial].desc}</p>
              <div className="testimonial-profile">
                <img src={testimonials[testimonial].img} alt="" className="testimonial-img" />
                <div>
                  <h4>{testimonials[testimonial].name}</h4>
                  <span>{testimonials[testimonial].role}</span>
                </div>
              </div>
            </div>
            <div style={{textAlign: 'center'}}>
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setTestimonial(i)} style={{width: '12px', height: '12px', borderRadius: '50%', border: 'none', margin: '0 4px', background: i === testimonial ? 'var(--skin-solid)' : 'rgba(255,255,255,0.3)', cursor: 'pointer'}}></button>
              ))}
            </div>
          </div>
        </section> */}

        <section className="contact section" id="contact">
          <h2 className="title">Contact me</h2>
          <div className="contact-container container grid">
            <div>
              {[{ icon: 'envelope-edit', title: 'Email', data: 'esitwitawiah@gmail.com' }, { icon: 'whatsapp', title: 'Whatsapp', data: '054 312 9196' }, { icon: 'github', title: 'Github', data: 'Esi-Twi', link: 'https://www./github.com/esi-twi/' }].map((contact, i) => (
                <>
                  {contact.link ?
                    <a href={contact.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
                      <div key={i} className="contact-card glass-card" >
                        <i className={`uil uil-${contact.icon}`}></i>
                        <h3>{contact.title}</h3>
                        <span>{contact.data}</span>
                      </div>
                    </a> :
                    <>
                      <div key={i} className="contact-card glass-card" >
                        <i className={`uil uil-${contact.icon}`}></i>
                        <h3>{contact.title}</h3>
                        <span>{contact.data}</span>
                      </div>
                    </>
                  }
                </>

              ))}
            </div>
            <form className="glass-card" style={{ padding: '2rem', borderRadius: '25px' }}>
              {['username', 'email', 'phone', 'message'].map(field => (
                <div key={field} className="input-container">
                  {field === 'message' ?
                    <textarea className="input" placeholder=" " onFocus={() => setFocus({ ...focus, [field]: true })} onBlur={(e) => setFocus({ ...focus, [field]: e.target.value !== '' })}></textarea> :
                    <input type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'} className="input" placeholder=" " onFocus={() => setFocus({ ...focus, [field]: true })} onBlur={(e) => setFocus({ ...focus, [field]: e.target.value !== '' })} />
                  }
                  <label className="label">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                </div>
              ))}
              <button type="submit" className="btn">
                <i className="uil uil-navigator"></i>Send Message
              </button>
            </form>
          </div>
        </section>

        <footer className="footer">
          <div className="">
            <h2 className='text-white font-bold text-5xl'>Esi Twi Tawiah</h2>
            <p className='mb-10 text-gray-300'>MERN Stack Developer</p>
            {/* <div className="footer-links">
              {['services', 'work', 'contact'].map(link => (
                <a key={link} href={`#${link}`} className="footer-link" onClick={(e) => { e.preventDefault(); scroll(link) }}>{link.charAt(0).toUpperCase() + link.slice(1)}</a>
              ))}
            </div> */}
            <p>&copy; Esi Twi Tawiah. All rights reserved</p>
          </div>
        </footer>
      </main>

      <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css" />
      {/* <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' /> */}
    </>
  );
};

export default PortfolioWebsite;