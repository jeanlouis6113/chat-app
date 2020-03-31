import React from 'react';
import './App.css';
import Contact from "./components/Contact";

const Person1 = {
  Name: "Joan Harper",
  Avatar: 'https://randomuser.me/api/portraits/women/17.jpg',
  Online: true,
}

const Person2 = {
  Name: "Jimmy Daniels",
  Avatar: 'https://randomuser.me/api/portraits/men/87.jpg',
  Offline: true,
}

const Person3 = {
  Name: "Beth Rivera",
  Avatar: 'https://randomuser.me/api/portraits/women/57.jpg',
  Online: true,
}

function App() {
  return (
    <div>
      <Contact {...Person1} />
      <Contact {...Person2} />
      <Contact {...Person3} />
    </div>
  );
}

export default App;