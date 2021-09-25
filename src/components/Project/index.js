import React, { useState } from 'react';

function Project() {
  const [projects] = useState([
    {
      name: 'Redux Store',
      deployed: 'https://murmuring-brushlands-08289.herokuapp.com/',
      github: 'https://github.com/koberstine/redux-store/',
      image: '../../assets/images/image1.jpg',
      screenshot: '../../assets/images/screenshot1.jpg'
    },
    {
      name: 'Book Wishlist',
      deployed: 'https://pure-gorge-10833.herokuapp.com/',
      github: 'https://github.com/koberstine/book-wishlist/',
      image: '../../assets/images/image2.jpg',
      screenshot: '../../assets/images/screenshot2.jpg'
    },
    {
      name: 'Budget Tracker',
      deployed: 'https://limitless-inlet-80650.herokuapp.com/',
      github: 'https://github.com/koberstine/budget-tracker/',
      image: '../../assets/images/image3.jpg',
      screenshot: '../../assets/images/screenshot3.jpg'
    },
    {
      name: 'Share Thought',
      deployed: 'https://vast-shore-81150.herokuapp.com/',
      github: 'https://github.com/koberstine/share-thought/',
      image: '../../assets/images/image4.jpg',
      screenshot: '../../assets/images/screenshot4.jpg'
    },
    {
      name: 'Note Taker',
      deployed: 'https://secure-tor-32394.herokuapp.com/',
      github: 'https://github.com/koberstine/note-taker/',
      image: '../../assets/images/image5.jpg',
      screenshot: '../../assets/images/screenshot5.jpg'
    },
    {
      name: 'Weather Dashboard',
      deployed: 'https://koberstine.github.io/weather-dashboard/',
      github: 'https://github.com/koberstine/weather-dashboard/',
      image: '../../assets/images/image5.jpg',
      screenshot: '../../assets/images/screenshot6.jpg'
    }
  ]);

  return (
    <div className="flex-row">
      {projects.map((project, i) => (
          <img
          src= {project.image}
          alt= {project.name}
          className="img-thumbnail mx-1"
        />
      ))}   
    </div>
  )
};

export default Project;