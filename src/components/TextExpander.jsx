import { useState } from 'react';

const TextExpander = ({
  collapsedNumWords = 10,
  expandButtonText = 'Show more',
  collapseButtonText = 'Show less',
  buttonColor = '#1f09cd',
  expanded = false,
  className,
  children,
}) => {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const displayText = isExpanded
    ? children
    : `${children.split(' ').slice(0, collapsedNumWords).join(' ')} ... `;

  const buttonStyle = {
    background: 'none',
    border: 'none',
    font: 'inherit',
    cursor: 'pointer',
    marginLeft: '6px',
    color: buttonColor,
  };

  const handleClick = () => setIsExpanded((exp) => !exp);

  return (
    <p className={className}>
      <span>{displayText}</span>
      <button onClick={handleClick} style={buttonStyle}>
        {isExpanded ? collapseButtonText : expandButtonText}
      </button>
    </p>
  );
};

export default TextExpander;
