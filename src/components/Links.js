import React from "react";

const Links = ({ links }) => {
  return (
    <div className="links">
      {links.map(link => {
        return (
          <p className='link'>
            {link}
          </p>
        );
      })}
    </div>
  );
};

export default Links;
