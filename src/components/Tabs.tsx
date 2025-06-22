import { FaHome, FaInfoCircle, FaPhone } from 'react-icons/fa';
import { GoProjectSymlink } from 'react-icons/go';
import { SiCoursera } from 'react-icons/si';
import Card from './Card';
import About from './About';
import Contact from './Contact';
import { useState } from 'react';

const tabs = [
  {
    id: 'home',
    icon: <FaHome />,
    label: 'Home',
    content: (
      <div className="flex flex-wrap">
        {Array.from({ length: 6 }).map((_, index) => (
          <Card
            key={index}
            title="Amazing Card"
            description="This is a cool-looking card component using React and Tailwind CSS."
            image="https://www.alucoildesign.com/assets/global/img/portfolio/400x300/1.jpg"
                        link="https://www.google.com"

          />
        ))}
      </div>
    ),
  },
  {
    id: 'about',
    icon: <FaInfoCircle />,
    label: 'About',
    content: <About />,
  },
  {
    id: 'projects',
    icon: <GoProjectSymlink />,
    label: 'Projects',
    content: (
      <div className="flex flex-wrap">
        {Array.from({ length: 6 }).map((_, index) => (
          <Card
            key={index}
            title="Amazing Card"
            description="This is a cool-looking card component using React and Tailwind CSS."
            image="https://assets.buzzmag.co.uk/uploads/2023/04/suzame-featured-image-400x300.png"
                        link="https://www.google.com"

          />
        ))}
      </div>
    ),
  },
  {
    id: 'courses',
    icon: <SiCoursera />,
    label: 'Courses',
    content: (
      <div className="flex flex-wrap">
        {Array.from({ length: 6 }).map((_, index) => (
          <Card
            key={index}
            title="Amazing Card"
            description="This is a cool-looking card component using React and Tailwind CSS."
            image="https://i.pinimg.com/400x300/c3/cf/e8/c3cfe8685b53d9796732dbbb5da9db67.jpg"
                        link="https://www.google.com"

          />
        ))}
      </div>
    ),
  },
  {
    id: 'contact',
    icon: <FaPhone />,
    label: 'Contact',
    content: <Contact />,
  },
];

const Tabs = () => {
  const [activeTabs, setActiveTabs] = useState(tabs[0].id);

  return (
    <div className="p-4 mt-[3rem]">
      <div className="flex border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`flex-1 text-center py-2 px-4 font-medium text-sm ${
              activeTabs == tab.id ? 'border-b-2' : 'text-gray-600'
            }`}
            onClick={() => setActiveTabs(tab.id)}
          >
            <div className="flex items-center justify-center space-x-2">
              {tab.icon}
              <span>{tab.label}</span>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-4 p-4 rounded-lg">
        {tabs.find((tab) => tab.id === activeTabs)?.content}
      </div>
    </div>
  );
};

export default Tabs;
