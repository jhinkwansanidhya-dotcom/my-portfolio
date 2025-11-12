'use client'
export const Header = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return <div className="flex justify-center items-center fixed top-3 w-full z-10">
    <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/5 backdrop-blur">
      

      <button 
      onClick={() => scrollToSection('home')}
      className="nav-item">
        Home
      </button>
      <button 
      onClick={() => scrollToSection('projects')}
      className="nav-item">
        Projects
      </button>
      <button 
      onClick={() => scrollToSection('about')}
      className="nav-item">
        About
      </button>
      <button 
      onClick={() => scrollToSection('contact')}
      className="nav-item">
        Contact
      </button>
        <a href="https://drive.google.com/file/d/1tMPa88uEssfpN3rSuHhr3u9E0jy3OVuK/view?usp=sharing" 
        target="_blank"   
      className="nav-item bg-white text-gray-900 
      hover:text-gray-900 hover:bg-white/70"
        >Resume</a>
    </nav>
  </div>;
};
