import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const SplitText = ({
  text,
  className = '',
  delay = 100,
  duration = 0.6,
  ease = 'power3.out',
  splitType = 'chars',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  textAlign = 'center',
  tag = 'p',
  onLetterAnimationComplete
}) => {
  const ref = useRef(null);
  const [animationKey, setAnimationKey] = useState(0);

  // Simple text splitting function
  const splitText = (element, type) => {
    const text = element.textContent;
    element.innerHTML = '';

    if (type === 'chars') {
      return text.split('').map((char, i) => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.style.display = 'inline-block';
        span.style.transformOrigin = 'center bottom';
        element.appendChild(span);
        return span;
      });
    } else if (type === 'words') {
      return text.split(' ').map((word, i) => {
        const span = document.createElement('span');
        span.textContent = word;
        span.style.display = 'inline-block';
        span.style.transformOrigin = 'center bottom';
        span.style.marginRight = '0.25em';
        element.appendChild(span);
        return span;
      });
    }
    return [element];
  };

  useGSAP(
    () => {
      if (!ref.current || !text) return;
      const el = ref.current;

      // Clear previous content
      el.innerHTML = text;

      // Split the text
      const targets = splitText(el, splitType);

      // Set initial state
      gsap.set(targets, from);

      // Animate
      gsap.to(targets, {
        ...to,
        duration,
        ease,
        stagger: delay / 1000,
        onComplete: () => {
          onLetterAnimationComplete?.();
        }
      });
    },
    {
      dependencies: [text, animationKey],
      scope: ref
    }
  );

  // Force re-animation when text changes
  useEffect(() => {
    setAnimationKey(prev => prev + 1);
  }, [text]);

  const renderTag = () => {
    const style = {
      textAlign,
      overflow: 'hidden',
      display: 'inline-block',
      whiteSpace: 'normal',
      wordWrap: 'break-word',
      willChange: 'transform, opacity'
    };
    const classes = `split-parent ${className}`;
    switch (tag) {
      case 'h1':
        return (
          <h1 ref={ref} style={style} className={classes}>
            {text}
          </h1>
        );
      case 'h2':
        return (
          <h2 ref={ref} style={style} className={classes}>
            {text}
          </h2>
        );
      case 'h3':
        return (
          <h3 ref={ref} style={style} className={classes}>
            {text}
          </h3>
        );
      case 'h4':
        return (
          <h4 ref={ref} style={style} className={classes}>
            {text}
          </h4>
        );
      case 'h5':
        return (
          <h5 ref={ref} style={style} className={classes}>
            {text}
          </h5>
        );
      case 'h6':
        return (
          <h6 ref={ref} style={style} className={classes}>
            {text}
          </h6>
        );
      default:
        return (
          <p ref={ref} style={style} className={classes}>
            {text}
          </p>
        );
    }
  };
  return renderTag();
};

export default SplitText;