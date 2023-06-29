import React from "react";

// const Header = (props) => {
//   return (
//     <header>
//       <h1>{props.title}</h1>
//     </header>
//   );
// };
 //<-------------OR-------------->
const Header = ({title}) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};

Header.defaultProps = {
  title : "Course List"
}

export default Header;
