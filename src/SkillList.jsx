import React from "react";

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="HTML" emoji="💪" color='#E34C26'/>
      <Skill skill="CSS" emoji="💪" color='#1572B6'/>
      <Skill skill="JS" emoji="💪" color='#bea90c'/>
      <Skill skill="React.js" emoji="🔥" color='#07abd9'/>
      <Skill skill="C" emoji="🤖" color='#6A5ACD'/>
    </div>
  );
}

function Skill(props) {
  return <div className="skill" style={{background:props.color}}>
    <span>{props.skill}</span>
    <span>{props.emoji}</span>
  </div>;
}

export default SkillList;
